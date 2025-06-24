"use client";

import { Truck, Shield, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Flexible Delivery Options",
      description:
        "Choose from a range of delivery speeds and times, allowing you to tailor shipping to your business needs and customer preferences",
    },
    {
      icon: Shield,
      title: "Insurance Protection",
      description:
        "Protect your shipments with comprehensive insurance options that cover damage, loss, or unforeseen events.",
    },
    {
      icon: Zap,
      title: "Fast Shipments",
      description:
        "Expedite your deliveries with our priority shipping service, ensuring your goods reach their destination faster than ever.",
    },
  ];

  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#17affa] " strokeWidth={2} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
