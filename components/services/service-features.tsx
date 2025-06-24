"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Clock, Globe, Headphones, BarChart, Zap } from "lucide-react"

export function ServiceFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const features = [
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Full insurance coverage and secure handling for all your shipments",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% on-time delivery rate with real-time tracking and updates",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide coverage with partners in 190+ countries",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service and logistics expertise",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Detailed insights and reports to optimize your supply chain",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick quote generation and streamlined booking processes",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with industry expertise to deliver exceptional logistics solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
