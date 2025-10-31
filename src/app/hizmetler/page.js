import React from "react";
import Banner from "@/components/Banner/Banner";
import CallToAction from "@/components/CallToAction/CallToAction";
import Services from "@/components/Services/Services";

export const metadata = {
  title: "Akhisar Oto Tamircisi - Hizmetlerimiz - Miraç Oto",
  description:
    "Akhisar DSG şanzıman tamiri, motor revizyonu, kaporta-boya, VAG teşhis, yedek parça. Akhisar'da tüm VAG grubu araçlar için profesyonel servis hizmetleri.",
  keywords:
    "akhisar dsg tamiri, akhisar motor tamiri, akhisar kaporta, akhisar şanzıman tamiri, akhisar vag teşhis, vcds akhisar, odis teşhis akhisar, volkswagen bakımı akhisar, audi bakımı akhisar, seat servisi akhisar, skoda servisi akhisar, akhisar oto elektrik",
  openGraph: {
    title: "Akhisar Oto Tamircisi - Hizmetlerimiz - Miraç Oto",
    description:
      "DSG tamiri, motor revizyonu, kaporta-boya ve daha fazlası. Akhisar'ın VAG uzmanı servisi.",
    url: "https://www.mirac-oto.com/hizmetler",
    siteName: "Miraç Oto Özel Servis",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mirac-oto.com/hizmetler",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div className="font-sans">
      <Banner
        imageUrl={"/akhisar-otomobil-servis-sanziman.avif"}
        title={"Hizmetlerimiz"}
        description={"Aracınızın tüm ihtiyaçları için profesyonel çözümler"}
      />

      <Services canShowIntro={false} />
      <CallToAction />
    </div>
  );
}

export default page;
