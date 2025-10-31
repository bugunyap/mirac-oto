import React from "react";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";

export const metadata = {
  title: "Akhisar Oto Tamircisi - İletişim - Miraç Oto",
  description:
    "Miraç Oto ile iletişime geçin. Adres: Akhisar / Manisa, Türkiye. Tel: 0535 989 8350, 0507 296 4042, 0505 399 4619.",
  keywords:
    "miraç oto iletişim, akhisar oto servisi adres, akhisar tamirci telefon, yeni mahalle oto servisi, akhisar vag servisi adres, akhisar oto tamir iletişim, manisa oto servisi telefon",
  openGraph: {
    title: "Akhisar Oto Tamircisi - İletişim - Miraç Oto",
    description: "Manisa Akhisar'da bulunan Miraç Oto ile iletişime geçin.",
    url: "https://www.mirac-oto.com/iletisim",
    siteName: "Miraç Oto Özel Servis",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mirac-oto.com/iletisim",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <>
      <Banner
        imageUrl={"/akhisar-otomobil-servis-sanziman.avif"}
        title={"İletişime Geçin"}
        description={
          "Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız"
        }
      />

      <Contact canShowIntro={false} />
    </>
  );
}

export default page;
