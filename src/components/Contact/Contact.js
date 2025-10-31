import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";

function Contact({ canShowIntro = true }) {
  return (
    <section
      id="iletisim"
      className="py-24 bg-linear-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        {canShowIntro && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                İletişime Geçin
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk
                duyarız
              </p>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    Adresimiz
                  </h3>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    Hacı İshak Mahallesi,
                    <br />
                    Nuri Giyik Sanayi Sitesi, 31. Blok, Küme Evler No: 12/7,
                    <br />
                    45200 Akhisar / Manisa, Türkiye
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    Telefon Numaralarımız
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+905359898350"
                      className="block text-blue-600 hover:text-blue-700 transition text-lg font-medium"
                    >
                      0535 989 8350
                    </a>
                    <a
                      href="tel:+905072964042"
                      className="block text-blue-600 hover:text-blue-700 transition text-lg font-medium"
                    >
                      0507 296 4042
                    </a>
                    <a
                      href="tel:+905053994619"
                      className="block text-blue-600 hover:text-blue-700 transition text-lg font-medium"
                    >
                      0505 399 4619
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    Çalışma Saatlerimiz
                  </h3>
                  <p className="text-gray-700 text-lg mb-2">
                    Pazartesi–Cumartesi:{" "}
                    <span className="font-semibold">08:00–20:00</span>
                  </p>
                  <p className="text-gray-700 text-lg">
                    Pazar:{" "}
                    <span className="font-semibold text-red-600">Kapalı</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.637011590694!2d27.8380828!3d38.903500300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b99b77c46b9727%3A0x2b4e37e5c6624dfa!2zTcSwUkHDhyBPVE8gw5ZaRUwgU0VSVsSwUyAoIFZBRyBHUk9VUCApIEFLSMSwU0FS!5e1!3m2!1str!2str!4v1761837550978!5m2!1str!2str"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
