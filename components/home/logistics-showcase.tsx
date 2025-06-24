"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { Check, Truck, Award, Users } from "lucide-react";

export function LogisticsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const topSectionInView = useInView(topSectionRef, {
    once: true,
    threshold: 0.3,
  });
  const bottomSectionInView = useInView(bottomSectionRef, {
    once: true,
    threshold: 0.3,
  });

  // Parallax effects
  const topImageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bottomImageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const stats = [
    { icon: Truck, number: "500+", label: "Project Complete" },
    { icon: Users, number: "400+", label: "Customer Review" },
    { icon: Award, number: "100+", label: "Winning Award" },
  ];

  const features = [
    "Moving The World Forward",
    "One Delivery At A Time",
    "Connecting Supply Globally",
  ];

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Section - Teal Background */}
        <motion.div
          ref={topSectionRef}
          initial={{ opacity: 0, y: 60 }}
          animate={
            topSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 md:p-10 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Icon */}

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={
                  topSectionInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-4xl lg:text-4xl font-bold text-white leading-tight"
              >
                Delivering Success The Through Logistics Journey With Us Your
                Trusted
              </motion.h2>

              {/* Statistics */}
              <motion.div
                style={{ y: statsY }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        topSectionInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-white mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-white/90 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              style={{ y: topImageY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                topSectionInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-64 md:h-80 lg:h-[25rem] rounded-2xl overflow-hidden mt-[3rem]"
            >
              <Image
                src="/images/showcase.jpg"
                alt="Container Port with Cranes"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Dark Section with Background Image */}
          <motion.div
            ref={bottomSectionRef}
            initial={{ opacity: 0, x: -60 }}
            animate={
              bottomSectionInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -60 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col justify-center"
          >
            {/* Background Image with Overlay */}
            <motion.div
              style={{ y: bottomImageY }}
              className="absolute inset-0"
            >
              <Image
                src="/images/transportation-bridge.png"
                alt="Transportation Infrastructure"
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={
                  bottomSectionInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: 180 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center"
              >
                <Truck className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={
                  bottomSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                Transportation Is Crucial
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={
                  bottomSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-300 leading-relaxed"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat, asperiores quaerat dolor consequuntur perferendis quo
                officia optio ipsum error sint id itaque nesciunt, odio eius
                quos.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Light Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={
              bottomSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg min-h-[400px] flex flex-col justify-center"
          >
            <div className="space-y-6">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={
                  bottomSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-[#12151d] leading-tight"
              >
                Transporting With Care And Efficiency Where Every Ride Feels
                Like Home
              </motion.h3>

              {/* Description  */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={
                  bottomSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-600 leading-relaxed"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat, asperiores quaerat dolor consequuntur perferendis quo
                officia optio ipsum error sint id itaque nesciunt, odio eius
                quos.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  bottomSectionInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      bottomSectionInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
