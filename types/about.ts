import type React from "react";
export interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  image: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
  achievements: string[];
}

export interface Achievement {
  icon: React.ReactNode;
  title: string;
  stats: string;
  description: string;
  color: string;
}

export interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  isHeadquarters: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

export interface QuickStat {
  number: string;
  label: string;
}
