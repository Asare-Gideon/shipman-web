"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ServiceStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const stats = [
    { number: "10M+", label: "Packages Delivered", color: "text-blue-600" },
    { number: "190+", label: "Countries Served", color: "text-green-600" },
    { number: "99.5%", label: "On-Time Delivery", color: "text-orange-600" },
    { number: "24/7", label: "Customer Support", color: "text-purple-600" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Businesses <span className="text-blue-200">Worldwide</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our track record speaks for itself - delivering excellence across the globe
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
