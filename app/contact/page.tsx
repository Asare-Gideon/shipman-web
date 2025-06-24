"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Headphones,
  Users,
  ArrowRight,
  CheckCircle,
  Calendar,
  Zap,
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Building,
} from "lucide-react";
import type {
  ContactInfo,
  Office,
  ContactFormData,
  FAQ,
  SocialLink,
} from "@/types/contact";
import type { JSX } from "react/jsx-runtime";

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedOffice, setSelectedOffice] = useState<string>("new-york");

  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.1 });
  const isContactInfoInView = useInView(contactInfoRef, {
    once: true,
    threshold: 0.1,
  });
  const isFormInView = useInView(formRef, { once: true, threshold: 0.1 });
  const isMapInView = useInView(mapRef, { once: true, threshold: 0.1 });
  const isFaqInView = useInView(faqRef, { once: true, threshold: 0.1 });

  const contactMethods: ContactInfo[] = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak with our team directly",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "text-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "contact@shipmanglobal.com",
      link: "mailto:contact@shipmanglobal.com",
      color: "text-green-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with support instantly",
      value: "Available 24/7",
      color: "text-purple-600",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      value: "Book Now",
      color: "text-orange-600",
    },
  ];

  const offices: Office[] = [
    {
      id: "new-york",
      name: "New York Headquarters",
      address: "123 Business Avenue, Suite 500",
      city: "New York",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "ny@shipmanglobal.com",
      coordinates: { lat: 40.7128, lng: -74.006 },
      timezone: "EST (UTC-5)",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      isHeadquarters: true,
    },
    {
      id: "london",
      name: "London Office",
      address: "45 Logistics Street",
      city: "London",
      country: "United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@shipmanglobal.com",
      coordinates: { lat: 51.5074, lng: -0.1278 },
      timezone: "GMT (UTC+0)",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      isHeadquarters: false,
    },
    {
      id: "singapore",
      name: "Singapore Office",
      address: "88 Maritime Plaza",
      city: "Singapore",
      country: "Singapore",
      phone: "+65 6123 4567",
      email: "singapore@shipmanglobal.com",
      coordinates: { lat: 1.3521, lng: 103.8198 },
      timezone: "SGT (UTC+8)",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      isHeadquarters: false,
    },
    {
      id: "dubai",
      name: "Dubai Office",
      address: "Dubai International Financial Centre",
      city: "Dubai",
      country: "United Arab Emirates",
      phone: "+971 4 123 4567",
      email: "dubai@shipmanglobal.com",
      coordinates: { lat: 25.2048, lng: 55.2708 },
      timezone: "GST (UTC+4)",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM",
      isHeadquarters: false,
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "How quickly can I get started with Shipman Global?",
      answer:
        "Most clients can be onboarded within 24-48 hours. Our team will guide you through the setup process and provide comprehensive training to ensure a smooth transition.",
      category: "Getting Started",
    },
    {
      question: "What types of shipping do you support?",
      answer:
        "We support all major shipping methods including air freight, ocean freight, ground shipping, and express delivery. Our platform integrates with major carriers worldwide.",
      category: "Services",
    },
    {
      question: "Is there a minimum volume requirement?",
      answer:
        "No, we work with businesses of all sizes. Whether you ship 10 packages a month or 10,000, our platform scales to meet your needs.",
      category: "Pricing",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use enterprise-grade security with end-to-end encryption, regular security audits, and comply with international data protection standards including GDPR and SOC 2.",
      category: "Security",
    },
    {
      question: "Do you offer API integration?",
      answer:
        "Yes, we provide comprehensive REST APIs and webhooks for seamless integration with your existing systems. Our technical team offers full support during implementation.",
      category: "Technical",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 customer support via phone, email, and live chat. Premium clients also get dedicated account managers and priority support.",
      category: "Support",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/shipmanglobal",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:bg-blue-600",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/shipmanglobal",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:bg-sky-500",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/shipmanglobal",
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:bg-blue-700",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/shipmanglobal",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:bg-pink-600",
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/shipmanglobal",
      icon: <Youtube className="w-5 h-5" />,
      color: "hover:bg-red-600",
    },
  ];

  const handleInputChange = (
    field: keyof ContactFormData,
    value: string
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "",
        preferredContact: "",
      });
    }, 3000);
  };

  const selectedOfficeData =
    offices.find((office) => office.id === selectedOffice) || offices[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-12 sm:py-16 lg:py-24 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-teal-400/20 rounded-full blur-3xl" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              Get In Touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Let's Start Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 block sm:inline">
                {" "}
                Logistics Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Ready to transform your shipping operations? Our team of logistics
              experts is here to help you streamline your processes, reduce
              costs, and scale your business globally.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: <Zap className="w-5 h-5" />,
                  stat: "< 24hrs",
                  label: "Response Time",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  stat: "1000+",
                  label: "Happy Clients",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  stat: "150+",
                  label: "Countries",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  stat: "99.9%",
                  label: "Uptime",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 text-blue-600">
                    {item.icon}
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    {item.stat}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section
        ref={contactInfoRef}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isContactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-blue-50 text-blue-700 border border-blue-200">
              <Headphones className="w-4 h-4 mr-2" />
              Contact Methods
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you succeed. Reach out through any of these
              channels and we'll get back to you promptly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactMethods.map((method: ContactInfo, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isContactInfoInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-center h-full flex flex-col">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 ${method.color} group-hover:bg-gray-100 transition-all duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                    {method.description}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      className={`${method.color} font-semibold hover:underline transition-all duration-300`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className={`${method.color} font-semibold`}>
                      {method.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      value={`${formData.firstName} ${formData.lastName}`.trim()}
                      onChange={(e) => {
                        const names = e.target.value.split(" ");
                        handleInputChange("firstName", names[0] || "");
                        handleInputChange(
                          "lastName",
                          names.slice(1).join(" ") || ""
                        );
                      }}
                      className="w-full px-4 py-4 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-4 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 text-base"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-4 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 text-base"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Company and Inquiry Type */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="w-full px-4 py-4 rounded-xl h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 text-base"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-semibold text-gray-900 mb-3"
                      >
                        Inquiry Type *
                      </label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleInputChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-4 h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 text-base">
                          <SelectValue
                            className="h-12"
                            placeholder="Select inquiry type"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="demo">Request Demo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-3"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 resize-none text-base"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 h-auto"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Average response time: 2-4 hours</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, x: 50 }}
              animate={
                isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 "
            >
              {/* Office Selector */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border h-full border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Our Global Offices
                    </h3>
                    <p className="text-gray-600">
                      Choose an office to view details
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {offices.map((office: Office) => (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOffice(office.id)}
                      className={`p-4 rounded-xl text-sm font-medium transition-all duration-300 border-2 ${
                        selectedOffice === office.id
                          ? "bg-blue-50 border-blue-200 text-blue-700"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>{office.city}</span>
                        {office.isHeadquarters && (
                          <Badge className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">
                            HQ
                          </Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Office Details */}
                <div className="space-y-4 p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {selectedOfficeData.name}
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>
                        {selectedOfficeData.address}, {selectedOfficeData.city},{" "}
                        {selectedOfficeData.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a
                        href={`tel:${selectedOfficeData.phone}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {selectedOfficeData.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a
                        href={`mailto:${selectedOfficeData.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {selectedOfficeData.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{selectedOfficeData.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{selectedOfficeData.timezone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-purple-50 text-purple-700 border border-purple-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Got Questions? We Have Answers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services,
              pricing, and implementation process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq: FAQ, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white border border-gray-100 rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-blue-600 font-semibold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 sm:pb-6 pl-12 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
