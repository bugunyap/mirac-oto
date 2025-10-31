import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Aracınız için Doğru Adresi Buldunuz!
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-100">
          Hemen iletişime geçin, aracınız için en iyi hizmeti alın
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+905359898350"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-xl hover:shadow-2xl transition transform hover:scale-105 font-bold text-lg"
          >
            <Phone className="w-5 h-5 mr-2" /> Hemen Arayın
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-blue-600 transition font-bold text-lg"
          >
            İletişim Bilgileri
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
