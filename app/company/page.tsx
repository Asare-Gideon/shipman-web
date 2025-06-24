"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Building,
  Package,
  Clock,
  Star,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type {
  Value,
  TeamMember,
  Achievement,
  Office,
  Testimonial,
  QuickStat,
} from "@/types/about";
import type { JSX } from "react/jsx-runtime";

export default function AboutPage(): JSX.Element {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] =
    useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.1 });
  const isStoryInView = useInView(storyRef, { once: true, threshold: 0.1 });
  const isValuesInView = useInView(valuesRef, { once: true, threshold: 0.1 });
  const isTeamInView = useInView(teamRef, { once: true, threshold: 0.1 });
  const isAchievementsInView = useInView(achievementsRef, {
    once: true,
    threshold: 0.1,
  });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    threshold: 0.1,
  });
  const isOfficesInView = useInView(officesRef, { once: true, threshold: 0.1 });

  const quickStats: QuickStat[] = [
    { number: "9+", label: "Years Experience" },
    { number: "150+", label: "Countries Served" },
    { number: "1000+", label: "Happy Clients" },
  ];

  const values: Value[] = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Customer First",
      description:
        "Every decision we make is guided by what's best for our customers and their success.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      image: "/placeholder.svg?height=200&width=300&text=Customer+First",
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Innovation",
      description:
        "We continuously push boundaries to deliver cutting-edge logistics solutions.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      image: "/placeholder.svg?height=200&width=300&text=Innovation",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Reliability",
      description:
        "Trust and dependability are the foundation of every service we provide.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      image: "/placeholder.svg?height=200&width=300&text=Reliability",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Global Reach",
      description:
        "Connecting businesses worldwide with seamless logistics solutions.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      image: "/placeholder.svg?height=200&width=300&text=Global+Reach",
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Excellence",
      description:
        "We strive for perfection in every shipment and customer interaction.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      image: "/placeholder.svg?height=200&width=300&text=Excellence",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Teamwork",
      description:
        "Collaboration and unity drive our success and innovation forward.",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      image: "/placeholder.svg?height=200&width=300&text=Teamwork",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      bio: "With over 15 years in logistics, Sarah leads Shipman Global's vision for revolutionizing shipping technology.",
      image: "/placeholder.svg?height=400&width=400&text=Sarah+Johnson",
      linkedin: "#",
      twitter: "#",
      email: "sarah@shipmanglobal.com",
      achievements: ["Forbes 40 Under 40", "Logistics Leader of the Year"],
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael drives our technical innovation with expertise in cloud architecture and logistics automation.",
      image: "/placeholder.svg?height=400&width=400&text=Michael+Chen",
      linkedin: "#",
      twitter: "#",
      email: "michael@shipmanglobal.com",
      achievements: ["Tech Innovation Award", "Cloud Architecture Expert"],
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Operations",
      bio: "Emily ensures seamless operations across all our global logistics networks and partnerships.",
      image: "/placeholder.svg?height=400&width=400&text=Emily+Rodriguez",
      linkedin: "#",
      twitter: "#",
      email: "emily@shipmanglobal.com",
      achievements: ["Operations Excellence Award", "Supply Chain Expert"],
    },
    {
      name: "David Thompson",
      position: "Head of Customer Success",
      bio: "David leads our customer success initiatives, ensuring every client achieves their logistics goals.",
      image: "/placeholder.svg?height=400&width=400&text=David+Thompson",
      linkedin: "#",
      twitter: "#",
      email: "david@shipmanglobal.com",
      achievements: ["Customer Success Leader", "Service Excellence Award"],
    },
    {
      name: "Lisa Wang",
      position: "VP of Product",
      bio: "Lisa shapes our product strategy, focusing on user experience and innovative logistics solutions.",
      image: "/placeholder.svg?height=400&width=400&text=Lisa+Wang",
      linkedin: "#",
      twitter: "#",
      email: "lisa@shipmanglobal.com",
      achievements: ["Product Innovation Award", "UX Design Excellence"],
    },
    {
      name: "James Miller",
      position: "Head of Sales",
      bio: "James drives our global sales strategy, building partnerships with shipping agents worldwide.",
      image: "/placeholder.svg?height=400&width=400&text=James+Miller",
      linkedin: "#",
      twitter: "#",
      email: "james@shipmanglobal.com",
      achievements: ["Sales Leader of the Year", "Partnership Excellence"],
    },
  ];

  const achievements: Achievement[] = [
    {
      icon: <Award className="w-8 h-8 sm:w-12 sm:h-12" />,
      title: "Industry Recognition",
      stats: "25+ Awards",
      description: "Recognized as a leader in logistics technology innovation",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8 sm:w-12 sm:h-12" />,
      title: "Global Clients",
      stats: "1000+ Agents",
      description: "Trusted by shipping agents across 150+ countries",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Package className="w-8 h-8 sm:w-12 sm:h-12" />,
      title: "Shipments Processed",
      stats: "10M+ Shipments",
      description: "Successfully managed millions of shipments worldwide",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-12 sm:h-12" />,
      title: "System Uptime",
      stats: "99.9% Uptime",
      description: "Reliable cloud infrastructure with minimal downtime",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const offices: Office[] = [
    {
      city: "New York",
      country: "United States",
      address: "123 Business Ave, Suite 500, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@shipmanglobal.com",
      image: "/placeholder.svg?height=300&width=400&text=New+York+Office",
      isHeadquarters: true,
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Logistics Street, London EC1A 1BB, UK",
      phone: "+44 20 7123 4567",
      email: "london@shipmanglobal.com",
      image: "/placeholder.svg?height=300&width=400&text=London+Office",
      isHeadquarters: false,
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Maritime Plaza, Singapore 018956",
      phone: "+65 6123 4567",
      email: "singapore@shipmanglobal.com",
      image: "/placeholder.svg?height=300&width=400&text=Singapore+Office",
      isHeadquarters: false,
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Dubai International Financial Centre, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@shipmanglobal.com",
      image: "/placeholder.svg?height=300&width=400&text=Dubai+Office",
      isHeadquarters: false,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "Shipman Global has transformed our logistics operations. Their platform is intuitive and powerful, helping us manage thousands of shipments with ease.",
      author: "Maria Santos",
      position: "Logistics Manager",
      company: "Global Trade Solutions",
      image: "/placeholder.svg?height=80&width=80&text=MS",
      rating: 5,
    },
    {
      quote:
        "The real-time tracking and analytics have given us unprecedented visibility into our shipments. Customer satisfaction has increased by 40% since we started using their platform.",
      author: "Ahmed Hassan",
      position: "Operations Director",
      company: "Middle East Shipping",
      image: "/placeholder.svg?height=80&width=80&text=AH",
      rating: 5,
    },
    {
      quote:
        "Outstanding customer support and innovative features. The automation capabilities have saved us countless hours and reduced errors significantly.",
      author: "John Smith",
      position: "CEO",
      company: "Atlantic Logistics",
      image: "/placeholder.svg?height=80&width=80&text=JS",
      rating: 5,
    },
    {
      quote:
        "Shipman Global's API integration was seamless. We were up and running in days, not weeks. Their technical team is exceptional.",
      author: "Priya Patel",
      position: "IT Director",
      company: "Asia Pacific Freight",
      image: "/placeholder.svg?height=80&width=80&text=PP",
      rating: 5,
    },
    {
      quote:
        "The cost savings and efficiency gains have been remarkable. ROI was achieved within the first quarter of implementation.",
      author: "Carlos Rodriguez",
      position: "COO",
      company: "Latin America Logistics",
      image: "/placeholder.svg?height=80&width=80&text=CR",
      rating: 5,
    },
    {
      quote:
        "Their cloud solution has revolutionized how we handle international shipping. The dashboard provides everything we need in one place.",
      author: "Sophie Chen",
      position: "Shipping Manager",
      company: "European Express",
      image: "/placeholder.svg?height=80&width=80&text=SC",
      rating: 5,
    },
    {
      quote:
        "Excellent platform with robust features. The notification system keeps our clients informed every step of the way.",
      author: "Robert Kim",
      position: "Operations Manager",
      company: "Pacific Logistics",
      image: "/placeholder.svg?height=80&width=80&text=RK",
      rating: 5,
    },
    {
      quote:
        "The reporting capabilities are outstanding. We can now make data-driven decisions that have improved our bottom line significantly.",
      author: "Anna Volkov",
      position: "Business Analyst",
      company: "Nordic Freight",
      image: "/placeholder.svg?height=80&width=80&text=AV",
      rating: 5,
    },
    {
      quote:
        "Implementation was smooth and the training provided was comprehensive. Our team was productive from day one.",
      author: "Marcus Johnson",
      position: "Logistics Coordinator",
      company: "African Trade Hub",
      image: "/placeholder.svg?height=80&width=80&text=MJ",
      rating: 5,
    },
  ];

  // Calculate how many testimonials to show based on screen size
  const getTestimonialsPerView = (): number => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg screens and up
      if (window.innerWidth >= 768) return 2; // md screens
      return 1; // sm screens and below
    }
    return 1;
  };

  const [testimonialsPerView, setTestimonialsPerView] = useState<number>(1);

  useEffect(() => {
    const updateTestimonialsPerView = (): void => {
      setTestimonialsPerView(getTestimonialsPerView());
    };

    updateTestimonialsPerView();
    window.addEventListener("resize", updateTestimonialsPerView);
    return () =>
      window.removeEventListener("resize", updateTestimonialsPerView);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [testimonials.length, testimonialsPerView]);

  const nextTestimonial = (): void => {
    const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
    setCurrentTestimonialIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = (): void => {
    const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
    setCurrentTestimonialIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToTestimonial = (index: number): void => {
    const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
    setCurrentTestimonialIndex(Math.min(index, maxIndex));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-blue-50">
      {/* Hero Section - Enhanced Mobile Responsiveness */}
      <section
        ref={heroRef}
        className="relative py-12 sm:py-16 bg-white lg:py-24 xl:py-32 overflow-hidden"
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                About Shipman Global
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Revolutionizing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 block sm:inline">
                  {" "}
                  Global Logistics
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Since 2015, we've been empowering shipping agents worldwide with
                cutting-edge cloud solutions that streamline operations, enhance
                visibility, and drive growth in the logistics industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Our Story
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <Users className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Meet Our Team
                  </Button>
                </motion.div>
              </div>

              {/* Quick Stats - Mobile Optimized */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                {quickStats.map((stat: QuickStat, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isHeroInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Hero Image - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="/images/about_logi.jpg"
                  alt="about image"
                  width={800}
                  height={600}
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
                />
                <Image
                  src={"/images/about_logi_2.jpg"}
                  alt="sumb image"
                  width={400}
                  height={200}
                  className="absolute top-[40%] -left-12 rounded-lg"
                />

                {/* Floating Cards - Mobile Optimized */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">
                        99.9% Uptime
                      </div>
                      <div className="text-xs text-gray-600 hidden sm:block">
                        Reliable Service
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Globe className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">
                        Global Reach
                      </div>
                      <div className="text-xs text-gray-600 hidden sm:block">
                        150+ Countries
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Mobile Optimized */}
      <section ref={storyRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
              <Target className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Shipman Global Story
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global logistics technology leader, our
              journey has been driven by innovation and customer success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1 relative h-[500px] w-full"
            >
              <Image
                src="/images/about-story.jpg"
                alt="Company History"
                fill
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Founded on Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In 2015, our founders recognized the need for modern,
                  cloud-based solutions in the logistics industry. What started
                  as a simple tracking system has evolved into a comprehensive
                  platform serving thousands of shipping agents globally.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Mission-Driven Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to democratize access to advanced logistics
                  technology, enabling shipping agents of all sizes to compete
                  effectively in the global marketplace. We believe that
                  powerful tools should be accessible to everyone.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Future-Ready Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to innovate with AI-powered analytics, IoT
                  integration, and blockchain technology, ensuring our clients
                  stay ahead in an ever-evolving industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Mobile Optimized */}
      <section
        ref={valuesRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Heart className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and guide us in
              delivering exceptional service to our clients worldwide.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value: Value, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${value.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden`}
              >
                {/* Background Image */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 opacity-10">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    width={96}
                    height={96}
                    className="object-cover rounded-lg"
                  />
                </div>

                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Mobile Optimized */}
      <section ref={teamRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet the Visionaries
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience
              in logistics, technology, and customer success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member: TeamMember, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-white" />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm sm:text-base">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {member.achievements.map(
                      (achievement: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                          <span className="hidden sm:inline">
                            {achievement}
                          </span>
                          <span className="sm:hidden">
                            {achievement.split(" ")[0]}
                          </span>
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 sm:gap-4">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-sky-100 hover:bg-sky-500 text-sky-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Mobile Optimized */}
      <section
        ref={achievementsRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isAchievementsInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              <Award className="w-4 h-4 mr-2" />
              Our Achievements
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Proven Track Record
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition and trust
              from clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement: Achievement, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isAchievementsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${achievement.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                    {achievement.stats}
                  </h3>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Testimonial Slider Section */}
      <section
        ref={testimonialsRef}
        className="py-12 sm:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isTestimonialsInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              <Quote className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what shipping
              professionals say about working with us.
            </p>
          </motion.div>

          {/* Multi-Testimonial Slider */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentTestimonialIndex * (100 / testimonialsPerView)
                  }%)`,
                  width: `${
                    (testimonials.length / testimonialsPerView) * 100
                  }%`,
                }}
              >
                {testimonials.map((testimonial: Testimonial, index: number) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2 sm:px-4"
                    style={{ width: `${100 / testimonialsPerView}%` }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg h-full flex flex-col"
                    >
                      {/* Rating Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i: number) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>

                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-4" />

                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed italic text-center flex-grow">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center justify-center gap-3 mt-auto">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={80}
                          height={80}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="text-center sm:text-left min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                            {testimonial.author}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">
                            {testimonial.position}
                          </p>
                          <p className="text-xs sm:text-sm text-blue-600 font-medium truncate">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({
                length: Math.ceil(testimonials.length / testimonialsPerView),
              }).map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? "bg-blue-600 w-6 sm:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section - Mobile Optimized */}
      <section
        ref={officesRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isOfficesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">
              <MapPin className="w-4 h-4 mr-2" />
              Global Presence
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Offices Worldwide
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across major logistics hubs, we're always close to
              our clients and partners.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {offices.map((office: Office, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isOfficesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={`${office.city} Office`}
                    width={400}
                    height={300}
                    className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {office.isHeadquarters && (
                    <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-blue-600 text-white text-xs">
                      <Building className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      HQ
                    </Badge>
                  )}
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {office.city}, {office.country}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
                    {office.address}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                      </div>
                      <span className="truncate">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{office.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Discover how Shipman Global can transform your logistics
              operations and help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
