"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Freight Calculation and Online Bookings",
    description:
      "Obtain fair tariffs and spot rates via online Freight Calculator for your sea/air/land shipments and parcels over 190+ countries. Get cargo space guarantees with an instant online booking.",
    additionalText:
      "Integrate API to promote your rates and services with booking processing management.",
    image: "/images/img-6.png",
    bgColor: "from-blue-200 to-blue-100",
    accentColor: "text-blue-600",
    buttonColor: "bg-blue-600",
    highlightWords: ["online Freight Calculator", "online booking"],
  },
  {
    id: 2,
    title: "Real-Time Tracking and Notifications",
    description:
      "Monitor your shipments with precision using our advanced tracking system. Get real-time updates on location, status, and estimated arrival times.",
    additionalText:
      "Set up custom alerts to stay informed about delays, customs clearance, and delivery confirmations.",
    image: "/images/img-5.png",
    bgColor: "from-green-200 to-green-100",
    accentColor: "text-green-600",
    buttonColor: "bg-green-600",
    highlightWords: ["real-time updates", "custom alerts"],
  },
  {
    id: 3,
    title: "Customs Documentation Management",
    description:
      "Simplify your customs process with our digital documentation platform. Generate, store, and submit all required customs forms electronically.",
    additionalText:
      "Our compliance experts ensure your documentation meets all international regulations and standards.",
    image: "/images/img-1.png",
    bgColor: "from-purple-200 to-purple-100",
    accentColor: "text-purple-600",
    buttonColor: "bg-purple-600",
    highlightWords: ["digital documentation", "compliance experts"],
  },
];

export function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSlide(index);
    startAutoSlide();
  };

  const highlightText = (text: string, wordsToHighlight: string[]) => {
    let highlightedText = text;
    wordsToHighlight.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        (match) =>
          `<span class="${slides[currentSlide].accentColor} font-semibold">${match}</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const slide = slides[currentSlide];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto relative">
        {/* Rounded container for the slider */}
        <div
          className={`relative rounded-3xl md:rounded-[3rem] overflow-hidden bg-gradient-to-br ${slide.bgColor} transition-all duration-700 ease-in-out`}
        >
          <div className="px-8 md:px-16 py-12 md:py-20">
            <AnimatePresence mode="wait">
              <div
                key={slide.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[650px] md:min-h-[550px]"
              >
                {/* Content - Animates from right to left */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="order-2 md:order-1 space-y-6"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  >
                    {highlightText(slide.description, slide.highlightWords)}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {slide.additionalText}
                  </motion.p>
                </motion.div>

                {/* Image - Animates from right to left */}
                <motion.div
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="order-1 md:order-2 relative  ml-[-4rem] mr-[-4rem] mt-[-5rem] mb-[-5rem] "
                >
                  <div className="relative h-[250px] md:h-[550px]   w-full">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className=" object-fill drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </div>
        {/* Dots Navigation */}
        <div className="absolute -bottom-7 left-1/2 transform  -translate-x-1/2">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `w-2 ${slide.buttonColor}`
                    : "w-2 bg-gray-200 hover:bg-white cursor-pointer"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
