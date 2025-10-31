import React from "react";
import { Phone, MapPin, Wrench, Award, Users, CheckCircle } from "lucide-react";
import { stats } from "@/helpers/helpers";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";
import FAQ from "@/components/FAQ/FAQ";

export const metadata = {
  title: "Akhisar Oto Tamircisi - Ana Sayfa - Miraç Oto",
  description:
    "Akhisar'ın en güvenilir VAG grubu özel servisi. Volkswagen, Audi, Seat, Skoda tamir, bakım ve teşhis hizmetleri. 15+ yıl deneyim. Hemen arayın: 0535 989 8350",
  keywords:
    "akhisar oto tamir, akhisar tamirci, akhisar volkswagen servisi, akhisar audi servisi, akhisar vag servisi, akhisar oto servisi, akhisar dsg tamiri, akhisar motor tamiri, akhisar özel servis, manisa oto tamir, volkswagen tamiri akhisar, audi tamiri akhisar",
  authors: [{ name: "Miraç Oto Özel Servis" }],
  openGraph: {
    title: "Akhisar Oto Tamircisi - Miraç Oto - Akhisar VAG Grubu Özel Servis",
    description:
      "Akhisar'da Volkswagen, Audi, Seat, Skoda araçlar için profesyonel servis. DSG tamiri, motor bakımı, teşhis hizmetleri.",
    url: "https://www.mirac-oto.com",
    siteName: "Miraç Oto Özel Servis",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "Miraç Oto Özel Servis - Akhisar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miraç Oto - Akhisar VAG Grubu Özel Servis",
    description:
      "Akhisar'da Volkswagen, Audi, Seat, Skoda araçlar için profesyonel servis.",
    images: ["/logo-white.png"],
  },
  alternates: {
    canonical: "https://www.mirac-oto.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "google-site-verification-code-here",
  // },
};

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <section className="relative min-h-screen flex items-center pt-20 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Akhisar'da Aracınız{" "}
                <span className="text-red-600">Güvenli Ellerde</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Volkswagen, Audi, Seat ve Skoda araçlar için profesyonel servis,
                bakım ve onarım hizmetleri. 10 yılı aşkın deneyimimizle
                Akhisar'da yanınızdayız.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905359898350"
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition transform hover:scale-105 font-semibold text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hemen Arayın
                </a>
                <a
                  href="#hizmetler"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-red-600 hover:border-red-600 px-8 py-4 rounded-xl transition font-semibold text-lg"
                >
                  Hizmetlerimiz
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-delay">
              <div className="absolute inset-0 bg-linear-to-br from-gray-700 via-gray-600 to-gray-700 rounded-3xl transform rotate-3"></div>
              <Image
                src="/akhisar-otomobil-servis-kaporta.avif"
                alt="Profesyonel Oto Servisi"
                width={1920}
                height={1080}
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <Award className="w-12 h-12 text-red-600" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Sertifikalı Servis
                    </div>
                    <div className="text-sm text-gray-600">
                      VAG Grubu Uzmanı
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Neden Miraç Oto?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aracınıza gösterdiğimiz özen ve profesyonellik ile fark
              yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Uzman Ekip
              </h3>
              <p className="text-gray-600 leading-relaxed">
                VAG grubu araçlarında uzmanlaşmış, sertifikalı teknisyenlerimiz
                en son teşhis ekipmanları ile aracınıza özel çözümler sunuyor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Kalite Garantisi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Orijinal ve kaliteli yedek parçalar kullanıyor, tüm
                işlemlerimize garanti veriyoruz. Müşteri memnuniyeti
                önceliğimiz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Şeffaf Hizmet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aracınızın durumu ve yapılacak işlemler hakkında detaylı
                bilgilendirme yapıyor, gizli ek ücret almıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section
        className="relative py-32 text-center text-white md:bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/akhisar-oto-servis-bakim.avif')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 to-gray-800/80 "></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Aracınız için En İyi Bakımı mı Arıyorsunuz?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Uzman ekibimiz ve modern ekipmanlarımız ile aracınıza özel çözümler
            sunuyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905359898350"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition transform hover:scale-105 font-bold text-lg"
            >
              <Phone className="w-6 h-6 mr-2" />
              0535 989 8350
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-xl transition font-bold text-lg"
            >
              <MapPin className="w-6 h-6 mr-2" />
              Adres Bilgileri
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      <Contact />
    </div>
  );
};

export default Home;
