import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type Inquiry = {
    id : Nat;
    name : Text;
    company : Text;
    country : Text;
    email : Text;
    phone : Text;
    message : Text;
    packagingInterest : Text;
    timestamp : Time.Time;
    isRead : Bool;
  };

  public type UserProfile = {
    name : Text;
  };

  var inquiries : [Inquiry] = [];
  var nextInquiryId : Nat = 0;

  let userProfiles = Map.empty<Principal, UserProfile>();

  func compareInquiries(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
    Int.compare(inquiry2.timestamp, inquiry1.timestamp);
  };

  public shared ({ caller }) func submitInquiry(
    name : Text,
    company : Text,
    country : Text,
    email : Text,
    phone : Text,
    message : Text,
    packagingInterest : Text,
  ) : async () {
    let inquiry : Inquiry = {
      id = nextInquiryId;
      name;
      company;
      country;
      email;
      phone;
      message;
      packagingInterest;
      timestamp = Time.now();
      isRead = false;
    };
    inquiries := inquiries.concat([inquiry]);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can access all inquiries");
    };
    inquiries.sort(compareInquiries);
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can access inquiry count");
    };
    inquiries.size();
  };

  public shared ({ caller }) func markInquiryRead(id : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can mark inquiries as read");
    };

    inquiries := inquiries.map<Inquiry, Inquiry>(
      func(inquiry) {
        if (inquiry.id == id) {
          { inquiry with isRead = true };
        } else {
          inquiry;
        };
      }
    );
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete inquiries");
    };

    inquiries := inquiries.filter<Inquiry>(
      func(inquiry) { inquiry.id != id }
    );
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};

