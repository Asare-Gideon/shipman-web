"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Smartphone,
  Bell,
  Star,
  Users,
  Shield,
  Zap,
  Download,
  CheckCircle,
  Play,
  Apple,
  Calendar,
  Gift,
  Sparkles,
  Heart,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

export default function PreoPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const screenshotsRef = useRef<HTMLDivElement>(null);
  const preorderRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.1 });
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    threshold: 0.1,
  });
  const isScreenshotsInView = useInView(screenshotsRef, {
    once: true,
    threshold: 0.1,
  });
  const isPreorderInView = useInView(preorderRef, {
    once: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handlePreOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const appPreviews = [
    {
      id: 1,
      title: "Dashboard",
      description: "Your personalized command center",
      image: "/images/preo2.jpg",
      bgColor: "from-sky-400 to-blue-500",
    },
    {
      id: 2,
      title: "Analytics",
      description: "Detailed insights at your fingertips",
      image: "/images/preo4.jpg",
      bgColor: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      title: "Product Links",
      description: "Discover and share products easily",
      image: "/images/preo3.jpg",
      bgColor: "from-cyan-400 to-teal-500",
    },
    {
      id: 4,
      title: "Sales",
      description: "Track your performance",
      image: "/images/preo1.jpg",
      bgColor: "from-teal-400 to-green-500",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appPreviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [appPreviews.length]);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized mobile architecture",
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-50",
      image: "/images/preo1.jpg",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description:
        "Your data is protected with enterprise-grade security and end-to-end encryption",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      image: "/placeholder.svg?height=200&width=300&text=Security",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Centric Design",
      description:
        "Intuitive interface designed with user experience and accessibility in mind",
      color: "from-cyan-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50",
      image: "/placeholder.svg?height=200&width=300&text=UX+Design",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Smart Notifications",
      description:
        "AI-powered notifications that learn your preferences and deliver relevant updates",
      color: "from-teal-400 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      image: "/placeholder.svg?height=200&width=300&text=Notifications",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description:
        "Comprehensive insights and analytics to help you make informed decisions",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      image: "/placeholder.svg?height=200&width=300&text=Analytics",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description:
        "Connect with like-minded users and build meaningful relationships",
      color: "from-indigo-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      image: "/placeholder.svg?height=200&width=300&text=Community",
    },
  ];

  const stats = [
    {
      number: "50K+",
      label: "Pre-registrations",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "4.9",
      label: "Expected Rating",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support Ready",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "Q2 2024",
      label: "Launch Date",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Background Elements */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
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
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-sky-400/10 to-blue-400/10 rounded-full blur-2xl"
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Coming Soon - Pre-Order app
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600">
                  Preo
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                The revolutionary mobile app that transforms how you connect,
                create, and collaborate. Be among the first to experience the
                future of mobile productivity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <Gift className="mr-2 w-5 h-5" />
                    Pre-Order Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-sky-300 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Early Bird Offer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-4 inline-block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Early Bird Special
                    </p>
                    <p className="text-sm text-gray-600">
                      50% off for first 1000 users
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - App Preview Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex mt-[1.5rem] justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Phone Display */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 mx-auto"
                >
                  <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm" />
                          <div className="w-4 h-2 bg-white rounded-sm" />
                          <div className="w-6 h-3 bg-white rounded-sm" />
                        </div>
                      </div>

                      {/* App Content - Sliding */}
                      <div className="h-full relative overflow-hidden">
                        {appPreviews.map((preview, index) => (
                          <motion.div
                            key={preview.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                              opacity: index === currentSlide ? 1 : 0,
                              x:
                                index === currentSlide
                                  ? 0
                                  : index < currentSlide
                                  ? -100
                                  : 100,
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`absolute inset-0 bg-gradient-to-br ${preview.bgColor} p-6 flex flex-col`}
                          >
                            <div className="text-center mb-6">
                              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <Smartphone className="w-8 h-8 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">
                                {preview.title}
                              </h3>
                              <p className="text-white/80 text-sm">
                                {preview.description}
                              </p>
                            </div>

                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-2 overflow-hidden flex items-center justify-center">
                              <Image
                                src={preview.image || "/placeholder.svg"}
                                alt={preview.title}
                                fill
                                className="rounded-lg shadow-lg"
                              />
                            </div>

                            {/* Slide Indicators */}
                            <div className="flex justify-center gap-2 mt-4">
                              {appPreviews.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setCurrentSlide(i)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === currentSlide
                                      ? "bg-white w-6"
                                      : "bg-white/50"
                                  }`}
                                />
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Side Preview Phones (Desktop Only) */}
                <div className="hidden xl:block">
                  {/* Left Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    animate={
                      isHeroInView
                        ? { opacity: 0.7, x: -40, scale: 0.7 }
                        : { opacity: 0, x: -30, scale: 0.8 }
                    }
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute top-20 -left-20 z-0"
                  >
                    <div className="w-48 h-80 bg-gray-800 rounded-3xl p-1.5 shadow-xl">
                      <div className="w-full h-full bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center">
                        <Image
                          src={
                            appPreviews[
                              (currentSlide - 1 + appPreviews.length) %
                                appPreviews.length
                            ]?.image || "/placeholder.svg"
                          }
                          alt="Previous"
                          width={120}
                          height={180}
                          className="rounded-lg opacity-60"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.8 }}
                    animate={
                      isHeroInView
                        ? { opacity: 0.7, x: 40, scale: 0.7 }
                        : { opacity: 0, x: 30, scale: 0.8 }
                    }
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute top-20 -right-20 z-0"
                  >
                    <div className="w-48 h-80 bg-gray-800 rounded-3xl p-1.5 shadow-xl">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center">
                        <Image
                          src={
                            appPreviews[(currentSlide + 1) % appPreviews.length]
                              ?.image || "/placeholder.svg"
                          }
                          alt="Next"
                          width={120}
                          height={180}
                          className="rounded-lg opacity-60"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-20 blur-sm"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 bg-white/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="text-sky-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-800 hover:bg-sky-200">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why You'll{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Love Preo
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative features that make Preo the ultimate
              mobile productivity companion
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative`}
              >
                {/* Background Image */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>

                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pre-Order Section */}
      <motion.section
        ref={preorderRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 sm:py-24 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Background+Pattern"
            alt="Background"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Bell className="w-10 h-10" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Be the First to Experience Preo
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join thousands of early adopters and get exclusive access to Preo
              before the official launch!
            </p>

            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <motion.form
                  onSubmit={handlePreOrder}
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-xl px-10 py-4 h-11 text-lg backdrop-blur-sm"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-white cursor-pointer text-sky-600 hover:bg-gray-100 px-12 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Gift className="mr-2 w-5 h-5" />
                    Subscribe now
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                  <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                  <p className="opacity-90">
                    Thanks for pre-ordering! We'll notify you as soon as Preo is
                    available.
                  </p>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm opacity-80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Exclusive early access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Special launch pricing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Coming Soon Badges */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-8">Available on all platforms</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-8 cursor-pointer py-4 rounded-xl flex items-center gap-3 opacity-50 hover:opacity-70 transition-opacity duration-300"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs">Coming Soon on</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-8 cursor-pointer py-4 rounded-xl flex items-center gap-3 opacity-50 hover:opacity-70 transition-opacity duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs">Coming Soon on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
