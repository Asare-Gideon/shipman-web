"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function MobileAppSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });
  const phoneInView = useInView(phoneRef, { once: true, threshold: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y: backgroundY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl md:rounded-[3rem] max-h-[38rem] overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* App Store Buttons - Made Slimmer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-4 py-2 bg-black rounded-lg text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  <div className="w-5 h-5 bg-white rounded mr-2 flex items-center justify-center">
                    <Image
                      src={"/images/apple.png"}
                      height={30}
                      width={25}
                      alt="apple-logo"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] text-gray-300 leading-tight">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      App Store
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center cursor-pointer justify-center px-4 py-2 bg-black rounded-lg text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  <div className="w-5 h-5 bg-white rounded mr-2 flex items-center justify-center">
                    <Image
                      src={"/images/playstore.png"}
                      height={20}
                      width={25}
                      alt="playstore-logo"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-[8px] text-gray-300 leading-tight">
                      Get it on
                    </div>
                    <div className="text-sm font-semibold leading-tight">
                      Google Play
                    </div>
                  </div>
                </motion.a>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
              >
                Be even faster with our mobile app
              </motion.h2>

              {/* QR Code - Increased Size */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-block"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <Image
                    src="/images/qrcode.png"
                    alt="QR Code to download app"
                    width={160}
                    height={160}
                    className="w-32 h-32 md:w-40 md:h-40"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Content - Phone Mockup with Real App Images */}
            <motion.div
              ref={phoneRef}
              style={{ y: phoneY }}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={
                phoneInView
                  ? { opacity: 1, x: 0, rotateY: 0 }
                  : { opacity: 0, x: 100, rotateY: -15 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end h-full "
            >
              {/* Main Phone Mockup using the actual app image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  phoneInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10 h-full w-full flex items-center justify-center lg:justify-end"
              >
                <div className="absolute w-[800px] right-[-10rem] h-full min-h-[500px] lg:min-h-[900px] ">
                  <Image
                    src="/images/img-x2_1200.png"
                    alt="LogiTrack Mobile App Interface"
                    fill
                    className="object-contain object-center lg:object-right drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Elements for Visual Enhancement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  phoneInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  phoneInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute bottom-[10rem] -right-4 w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-white font-bold text-sm">24/7</div>
                  <div className="text-white/80 text-xs">Support</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-800/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
