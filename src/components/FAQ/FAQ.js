"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faq.helpers";

export default function FAQ({
  className = "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Müşterilerimizin en sık sorduğu sorular
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-gray-600 group-hover:text-red-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "max-h-40 opacity-100 pb-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
