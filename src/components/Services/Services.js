"use client";
import React from "react";
import { Wrench, Cog, Car, Gauge, Package, Stethoscope } from "lucide-react";
import { services } from "@/helpers/helpers";
import Link from "next/link";

function Services({ canShowIntro = true }) {
  return (
    <section
      id="hizmetler"
      className="py-24 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4">
        {canShowIntro && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Hizmetlerimiz
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Aracınızın tüm ihtiyaçları için profesyonel çözümler
              </p>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services(
            <Cog className="w-16 h-16 text-red-500 mb-4" />,
            <Wrench className="w-16 h-16 text-red-500 mb-4" />,
            <Car className="w-16 h-16 text-red-500 mb-4" />,
            <Package className="w-16 h-16 text-red-500 mb-4" />,
            <Gauge className="w-16 h-16 text-red-500 mb-4" />,
            <Stethoscope className="w-16 h-16 text-red-500 mb-4" />
          ).map((service, index) => (
            <Link href={service.link} key={service.title}>
              <div className="bg-white rounded-2xl hover:shadow-gray-400 shadow-md overflow-hidden transition transform hover:-translate-y-2 group">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
