"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Clock, Headphones } from "lucide-react";

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const advantages = [
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Extensive worldwide coverage with partners in over 190+ countries for seamless international shipping and logistics solutions.",
      color: "from-blue-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description:
        "Advanced tracking technology providing live updates and precise delivery estimates with 24/7 monitoring capabilities.",
      color: "from-purple-500 to-purple-600",
      delay: 0.2,
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service with dedicated logistics experts ready to assist you anytime, anywhere.",
      color: "from-orange-500 to-orange-600",
      delay: 0.3,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Trusted <span className="">Logistics Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive logistics solutions
            designed to streamline your supply chain and exceed your
            expectations.
          </p>
        </motion.div>

        {/* Advantages Grid - New Card Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: advantage.delay }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-2xl hover:border-gray-300 transition-all duration-500"
              >
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-8"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  {/* Decorative circle */}
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${advantage.color} rounded-full opacity-20`}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 p-10 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-blue-100"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust us with their
            logistics needs. Get started today and see why we're the preferred
            choice for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Get Started Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-xl border-2 border-blue-600 transition-colors duration-300 text-lg"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
