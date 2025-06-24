"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    number: "01",
    title: "Rail Freight",
    description:
      "Logistic service involves of implementation and control of the efficient",
    icon: "/images/airport.png",
  },
  {
    id: 2,
    number: "02",
    title: "Air Freight",
    description:
      "Logistic service involves of implementation and control of the efficient",
    icon: "/images/airplane.png",
  },
  {
    id: 3,
    number: "03",
    title: "Road Freight",
    description:
      "Logistic service involves of implementation and control of the efficient",
    icon: "/images/fast-delivery.png",
  },
  {
    id: 4,
    number: "04",
    title: "Ship Freight",
    description:
      "Logistic service involves of implementation and control of the efficient",
    icon: "/images/airport.png",
  },
  {
    id: 5,
    number: "05",
    title: "Warehouse",
    description:
      "Logistic service involves of implementation and control of the efficient",
    icon: "/images/warehouse.png",
  },
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto-slide functionality
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, services.length - cardsToShow);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardsToShow]);

  const maxIndex = Math.max(0, services.length - cardsToShow);

  const handlePrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    startAutoSlide();
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    startAutoSlide();
  };

  return (
    <section className="relative  py-12 md:py-16 lg:py-24">
      {/* Mobile Layout - Stacked */}
      <div className="block lg:hidden">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          {/* Mobile Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-2">
                  LATEST SERVICE
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Service We <span className="text-gray-500">Provide</span>
                </h2>
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous services"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next services"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Services Cards */}
          <div className="mb-8 ">
            <div className="overflow-hidden ">
              <motion.div
                className="flex gap-3"
                animate={{ x: -currentIndex * 100 + "%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className="flex-shrink-0 w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group relative"
                    whileHover={{ y: -3 }}
                  >
                    {/* Service Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Image
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          width={36}
                          height={36}
                        />
                      </div>
                    </div>

                    {/* Service Number */}
                    <div className="absolute top-4 right-4">
                      <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Service Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[#12151d] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      {/* Read More Button */}
                      <button className="inline-flex items-center px-6 py-2 border-2 border-[#12151d] hover:bg-[#1a1f2e] cursor-pointer hover:text-white text-[#12151d] font-semibold rounded-full transition-all duration-300 group-hover:shadow-md">
                        Read More
                        <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile Red Section */}
          <div className="bg-red-500 rounded-2xl  p-6 sm:p-8">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-wider text-white mb-6">
                <span className="block text-white/80 stroke-text">SINCE</span>
                <span className="block">1920</span>
              </h3>
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/logistics-professional.png"
                  alt="Logistics Professional"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  setCurrentIndex(index);
                  startAutoSlide();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-[#12151d]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block z-30 relative">
        {/* Centered Content Container */}
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-9 gap-8 ">
            {/* Left Content - Services (8 columns) */}
            <div className="col-span-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <p className="text-cyan-500 font-medium text-sm tracking-wider uppercase mb-2">
                    LATEST SERVICE
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Service We <span className="text-gray-500">Provide</span>
                  </h2>
                </div>

                {/* Navigation Arrows */}
                <div className="flex space-x-2 mr-[10rem]">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous services"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next services"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Services Cards */}
              <div className="overflow-hidden ">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: -currentIndex * (100 / cardsToShow) + "%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      className="flex-shrink-0 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group relative"
                      style={{
                        width: `calc(${100 / cardsToShow}% - ${
                          ((cardsToShow - 1) * 16) / cardsToShow
                        }px)`,
                      }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Service Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <Image
                            src={service.icon || "/placeholder.svg"}
                            alt={service.title}
                            width={48}
                            height={48}
                          />
                        </div>
                      </div>

                      {/* Service Number */}
                      <div className="absolute top-6 right-6">
                        <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                          {service.number}
                        </span>
                      </div>

                      {/* Service Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-[#12151d] mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Read More Button */}
                        <button className="inline-flex items-center px-6 py-2 border-2 border-[#12151d] hover:bg-[#1a1f2e] cursor-pointer hover:text-white text-[#12151d] font-semibold rounded-full transition-all duration-300 group-hover:shadow-md">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-8 space-x-2 ">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (intervalRef.current)
                        clearInterval(intervalRef.current);
                      setCurrentIndex(index);
                      startAutoSlide();
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#12151d]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Placeholder for red section space */}
            <div className="col-span-4"></div>
          </div>
        </div>

        {/* Red Section - Positioned absolutely to extend to right edge */}
        <div className="absolute -top-8 right-0 w-80 lg:w-96 xl:w-[38rem] h-[40rem] bg-gradient-to-r from-green-200 to-green-100 -z-1">
          <div className="pl-8 py-12 h-full relative">
            {/* Since 1920 Text */}
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-700">
                <span className="block text-gray-700 stroke-text">SINCE</span>
                <span className="block">1920</span>
              </h3>
            </div>

            {/* Professional Image */}
            <div className="relative h-[30rem] md:h-[32rem] w-[30rem] mt-[-5rem] ml-[4.5rem]">
              <Image
                src="/images/img-6.png"
                alt="Logistics Professional"
                fill
                className="object-fill object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
