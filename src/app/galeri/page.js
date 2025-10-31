import Banner from "@/components/Banner/Banner";
import LightboxImage from "@/components/LightboxImage/LightboxImage";
import { photoGalleryItems } from "@/helpers/helpers";

export const metadata = {
  title: "Akhisar Oto Tamircisi -  Galeri - Miraç Oto",
  description:
    "Akhisar DSG şanzıman tamiri, motor revizyonu, kaporta-boya, VAG teşhis, yedek parça. Akhisar'da tüm VAG grubu araçlar için profesyonel servis hizmetleri.",
  keywords:
    "akhisar dsg tamiri, akhisar motor tamiri, akhisar kaporta, akhisar şanzıman tamiri, akhisar vag teşhis, vcds akhisar, odis teşhis akhisar, volkswagen bakımı akhisar, audi bakımı akhisar, seat servisi akhisar, skoda servisi akhisar, akhisar oto elektrik",
};

export default function page() {
  return (
    <section className="py-16 bg-gray-50">
      <Banner
        imageUrl={"/akhisar-otomobil-servis-sanziman.avif"}
        title={"Atölyemizden Kareler"}
        description={"Aracınızın tüm ihtiyaçları için profesyonel çözümler"}
      />

      <LightboxImage photos={photoGalleryItems} />
    </section>
  );
}
