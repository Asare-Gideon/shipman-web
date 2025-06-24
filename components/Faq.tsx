"use client";

import { ChevronDown, CircleHelp } from "lucide-react";
import { useState } from "react";

function Faq({
  qArray,
}: {
  qArray: { id: string; question: string; answer: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 ">
      <div className="w-full flex justify-center mb-8 mt-5">
        <h2 className="text-[1.5rem] md:text-[2.5rem] text-gray-900 px-1 text-center font-bold">
          Frequently <span className="text-blue-600">Asked Questions</span>
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {qArray.map((faq) => (
              <div
                key={faq.id}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-sm ${
                  faq.id === active ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
              >
                <div
                  className="flex items-center justify-between p-4 sm:p-6 cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        faq.id === active ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <CircleHelp
                        className={`w-4 h-4 ${
                          faq.id === active ? "text-blue-600" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-semibold ${
                        faq.id === active ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                      faq.id === active
                        ? "rotate-180 text-blue-600"
                        : "text-gray-400"
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faq.id === active
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="pl-11">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
