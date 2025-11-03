import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akhisar Oto Tamir ve Bakım Servisi | Miraç Oto",
  description:
    "Miraç Oto Özel Servis, Akhisar'da VAG Grubu araçlara (Volkswagen, Audi, Seat, Skoda) profesyonel tamir, bakım ve onarım hizmeti sunar. Şanzıman, motor, kaporta ve göçük düzeltme servisleriyle hizmetinizde.",
  keywords: [
    "Akhisar oto tamir",
    "Akhisar tamirci",
    "Akhisar özel servis",
    "Akhisar oto bakım",
    "Miraç Oto",
    "Akhisar VAG servis",
    "Akhisar Volkswagen servis",
    "Akhisar Audi servis",
    "Akhisar Seat servis",
    "Akhisar Skoda servis",
    "Akhisar DSG tamiri",
  ],
  authors: [{ name: "Miraç Oto Özel Servis" }],
  creator: "Miraç Oto",
  publisher: "Miraç Oto Özel Servis",
  metadataBase: new URL("https://www.mirac-oto.com"),
  openGraph: {
    title: "Miraç Oto Özel Servis | Akhisar Oto Tamir ve Bakım",
    description:
      "Akhisar'da VAG Grubu araçlara özel profesyonel tamir ve bakım hizmetleri. DSG şanzıman, motor onarımı, kaporta ve göçük düzeltme servisi.",
    url: "https://www.mirac-oto.com",
    siteName: "Miraç Oto Özel Servis",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Miraç Oto Özel Servis Akhisar",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhisar Oto Tamir ve Bakım | Miraç Oto Özel Servis",
    description:
      "Akhisar'da Volkswagen, Audi, Seat ve Skoda araçlar için profesyonel özel servis hizmeti.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://www.mirac-oto.com/#organization",
    name: "Miraç Oto Özel Servis",
    image: "https://www.mirac-oto.com/logo.png",
    description:
      "Akhisar oto tamir ve bakım merkezi. Miraç Oto, tüm marka araçlarda motor, şanzıman, kaporta ve boyasız göçük düzeltme hizmetleri sunar.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Hacı İshak Mahallesi Nuri Giyik Sanayi Sitesi 31. Blok, Küme Evler No:12/7",
      addressLocality: "Akhisar",
      addressRegion: "Manisa",
      postalCode: "45200",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.90393",
      longitude: "27.83807",
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
            name: "Şanzıman Tamiri",
            description: "Volkswagen, Audi şanzıman onarımı",
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
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kaporta & Boya",
            description:
              "Profesyonel kaporta, boya ve lokal onarım hizmetleri.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "11",
    },
    sameAs: [
      "https://www.instagram.com/miracozelservis/",
      "https://maps.app.goo.gl/wwLDepWzLa4LaPLP8",
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17042330996"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17042330996');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-PFFTKV3Y6S" />
      </body>
    </html>
  );
}
