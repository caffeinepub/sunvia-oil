import Time "mo:core/Time";
import List "mo:core/List";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Inquiry = {
    name : Text;
    company : Text;
    country : Text;
    email : Text;
    phone : Text;
    message : Text;
    packagingInterest : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry2.timestamp, inquiry1.timestamp);
    };
  };

  let inquiries = List.empty<Inquiry>();

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
      name;
      company;
      country;
      email;
      phone;
      message;
      packagingInterest;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    let inquiryArray = inquiries.toArray();
    inquiryArray.sort();
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    inquiries.size();
  };
};
