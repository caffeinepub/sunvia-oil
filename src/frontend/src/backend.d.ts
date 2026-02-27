import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    country: string;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
    phone: string;
    packagingInterest: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiryCount(): Promise<bigint>;
    submitInquiry(name: string, company: string, country: string, email: string, phone: string, message: string, packagingInterest: string): Promise<void>;
}
