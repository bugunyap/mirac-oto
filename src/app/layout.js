import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-white.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/logo-white.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Miraç Oto Özel Servis",
    image: "https://www.mirac-oto.com/logo.jpg",
    description:
      "Akhisar'da VAG grubu araçlar için özel servis. Volkswagen, Audi, Seat, Skoda tamir, bakım ve teşhis hizmetleri.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hacı İshak Mahallesi",
      addressLocality: "Akhisar",
      addressRegion: "Manisa",
      postalCode: "45200",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.9187",
      longitude: "27.8370",
    },
    telephone: ["+905359898350", "+905072964042", "+905053994619"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    url: "https://www.mirac-oto.com",
    areaServed: {
      "@type": "City",
      name: "Akhisar",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servis Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DSG Şanzıman Tamiri",
            description: "Volkswagen, Audi DSG şanzıman onarımı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Motor Tamiri ve Revizyonu",
            description: "VAG grubu motor bakım ve onarım hizmetleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "VAG Teşhis",
            description: "VCDS ve ODIS ile profesyonel teşhis",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
