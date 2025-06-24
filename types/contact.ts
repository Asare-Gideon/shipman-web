import type React from "react";

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  link?: string;
  color: string;
}

export interface Office {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
  hours: string;
  isHeadquarters: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  inquiryType: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}
