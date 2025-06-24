"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function SupportedCompaniesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Company logos data - you can replace these with actual company logos
  const companies = [
    { name: "DHL", logo: "/images/sl1.png" },
    { name: "FedEx", logo: "/images/sl4.png" },
    { name: "UPS", logo: "/images/sl3.png" },
    { name: "Amazon", logo: "/images/sl2.png" },
    { name: "Maersk", logo: "/images/sl3.png" },
    { name: "TNT", logo: "/images/sl2.png" },
    { name: "Aramex", logo: "/images/sl3.png" },
    { name: "COSCO", logo: "/images/sl4.png" },
    { name: "MSC", logo: "/images/sl3.png" },
    { name: "CMA CGM", logo: "/images/sl2.png" },
    { name: "Hapag-Lloyd", logo: "/images/sl2.png" },
    { name: "OOCL", logo: "/images/sl2.png" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-50 rounded-full mb-4">
            <span className="text-gray-600 font-medium text-sm tracking-wider uppercase">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supported by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the world's leading logistics and shipping companies to
            provide you with the best service
          </p>
        </motion.div>

        {/* Scrolling Companies Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex space-x-8 md:space-x-12">
            <motion.div
              className="flex space-x-8 md:space-x-12 shrink-0"
              animate={{
                x: [0, -100 * companies.length],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center w-32 md:w-40 h-20 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 border border-gray-200 group-hover:border-gray-300">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    {/* Company name overlay for placeholder */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm group-hover:text-gray-800 transition-colors duration-300">
                        {company.name}
                      </span>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
