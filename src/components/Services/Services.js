"use client";
import React from "react";
import { Wrench, Cog, Car, Gauge, Package, Stethoscope } from "lucide-react";
import { services } from "@/helpers/helpers";

function Services({ canShowIntro = true }) {
  return (
    <section
      id="hizmetler"
      className="py-24 bg-linear-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        {canShowIntro && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Hizmetlerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aracınızın tüm ihtiyaçları için profesyonel çözümler
              </p>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services(
            <Cog className="w-16 h-16 text-blue-600 mb-4" />,
            <Wrench className="w-16 h-16 text-blue-600 mb-4" />,
            <Car className="w-16 h-16 text-blue-600 mb-4" />,
            <Package className="w-16 h-16 text-blue-600 mb-4" />,
            <Gauge className="w-16 h-16 text-blue-600 mb-4" />,
            <Stethoscope className="w-16 h-16 text-blue-600 mb-4" />
          ).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">{service.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
