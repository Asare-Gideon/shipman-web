"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, FileText, Truck, CheckCircle } from "lucide-react"

export function ServiceProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  const steps = [
    {
      icon: Search,
      title: "Get Quote",
      description: "Submit your shipping requirements and get an instant quote",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Book & Document",
      description: "Complete booking and prepare all necessary documentation",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Truck,
      title: "Ship & Track",
      description: "Your cargo is picked up and tracked throughout the journey",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: CheckCircle,
      title: "Delivered",
      description: "Safe delivery to destination with confirmation and proof",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes shipping simple and transparent from start to finish
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-orange-200 to-purple-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg mx-auto`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                      <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && <div className="lg:hidden w-0.5 h-12 bg-gray-200 mx-auto mt-8" />}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
