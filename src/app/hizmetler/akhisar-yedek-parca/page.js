import Banner from "@/components/Banner/Banner";
import React from "react";

export const metadata = {
  title: "Akhisar Oto Tamircisi -  Akhisar Yedek Parça Tedarik - Miraç Oto",
  description:
    "Akhisar DSG şanzıman tamiri, motor revizyonu, kaporta-boya, VAG teşhis, yedek parça. Akhisar'da tüm VAG grubu araçlar için profesyonel servis hizmetleri.",
  keywords:
    "akhisar dsg tamiri, akhisar motor tamiri, akhisar kaporta, akhisar şanzıman tamiri, akhisar vag teşhis, vcds akhisar, odis teşhis akhisar, volkswagen bakımı akhisar, audi bakımı akhisar, seat servisi akhisar, skoda servisi akhisar, akhisar oto elektrik",
};

function page() {
  return (
    <div className="bg-white">
      <Banner
        imageUrl={"/akhisar-otomobil-servis-yedek-parca.avif"}
        title={"Akhisar Yedek Parça Tedarik"}
        description={
          "Aracınız için ihtiyaç duyduğunuz tüm orijinal ve yan sanayi yedek parçaları en uygun fiyatlarla temin ediyoruz"
        }
      />
      <article className="max-w-4xl mx-auto p-8 bg-white">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Akhisar Yedek Parça Tedarik - Orijinal ve Kaliteli Parçalar
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Aracınız için ihtiyaç duyduğunuz tüm orijinal ve yan sanayi yedek
            parçaları en uygun fiyatlarla temin ediyoruz. Akhisar'da güvenilir
            yedek parça tedarik hizmeti.
          </p>
        </header>

        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg">
            Araç tamiri ve bakımında kullanılan yedek parçaların kalitesi,
            tamirin başarısını ve uzun ömürlülüğünü doğrudan etkiler. Kalitesiz
            parçalar kısa sürede arızalanır ve daha büyük sorunlara yol
            açabilir. <strong>Akhisar oto tamir</strong> merkezi olarak, geniş
            tedarik ağımız ve güvenilir tedarikçilerimiz sayesinde ihtiyacınız
            olan tüm yedek parçalara hızlı ve ekonomik şekilde ulaşıyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Orijinal Parça mı, Yan Sanayi mi?
          </h2>
          <p>
            Yedek parça alırken en çok sorulan soru budur. Orijinal parçalar,
            aracınızı üreten firmanın kendi ürettiği veya onayladığı
            parçalardır. Tam uyum, garantili kalite ve uzun ömür avantajları
            vardır. Ancak fiyatları daha yüksektir. Yan sanayi parçaları ise
            bağımsız üreticiler tarafından üretilir. Kaliteli yan sanayi
            markaları, orijinal parçalara çok yakın performans gösterirken daha
            ekonomiktir.
          </p>

          <p>
            <strong>Akhisar tamirci</strong> ekibimiz, hangi parçanın orijinal
            olması gerektiği, hangi parçada kaliteli yan sanayi tercih
            edilebileceği konusunda size doğru bilgiyi verir. Örneğin motor içi
            parçalarda orijinal tercih edilirken, bazı kaporta parçalarında yan
            sanayi makul olabilir. Müşterimizin bütçesine ve aracın durumuna
            göre en doğru önerilerde bulunuruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Tedarik Ettiğimiz Parça Grupları
          </h2>
          <p>
            Motor parçaları kategorisinde piston, segman, krank, supap, subap
            lastiği, triger seti, su pompası, yağ pompası, termostat gibi kritik
            parçaları tedarik ediyoruz. Fren sistemi için fren balata, disk,
            kampana, ABS sensörü, fren hidroliği gibi güvenlik açısından önemli
            parçalar stoklarımızda bulunur.
          </p>

          <p>
            Süspansiyon ve direksiyon sistemleri için amortisör, helezon yay,
            rotbaşı, rot kolu, salıncak, burç, Z rot gibi parçalar mevcuttur.
            Elektrik ve elektronik parçalar kategorisinde alternatör, marş
            motoru, akü, sensörler, sigortalar, röle ve kablolar tedarik
            edilmektedir. Kaporta parçaları olarak kaput, çamurluk, kapı, far,
            stop lambası, ayna, tampon gibi her türlü dış aksam parçası
            bulunabilir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Hızlı Tedarik Ağımız
          </h2>
          <p>
            <strong>Akhisar araba tamir</strong> servisi olarak, yerli ve
            yabancı birçok tedarikçi ile çalışıyoruz. Stokta olmayan parçalar
            için aynı gün veya ertesi gün tedarik imkanımız vardır. Özellikle
            VAG grubu araçlar (Volkswagen, Audi, Skoda, SEAT) için çok geniş
            parça ağımız mevcuttur. Diğer markalarda da hızlı tedarik
            sağlıyoruz.
          </p>

          <p>
            Acil durumlarda, parça bulmak için tüm kaynaklarımızı seferber
            ediyoruz. Bazen nadir bulunan veya eski model araçlara ait parçalar
            zorlu olabilir, ancak geniş network'ümüz sayesinde çoğu parçayı
            bulabiliyoruz. Müşteri memnuniyeti için ekstra çaba gösteriyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Fiyat Avantajı
          </h2>
          <p>
            Toplu alım gücümüz ve uzun süredir devam eden tedarikçi
            ilişkilerimiz sayesinde, yedek parçaları uygun fiyatlarla temin
            ediyoruz. Bu avantajı müşterilerimize yansıtıyoruz. Aynı kaliteli
            parçayı başka yerlerden daha ekonomik fiyata sunuyoruz. Fiyatlarımız
            şeffaftır ve ek gizli masraf yoktur.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Parça Garantisi
          </h2>
          <p>
            Tedarik ettiğimiz tüm parçalar garantilidir. Orijinal parçalar
            üretici garantisi ile gelirken, yan sanayi parçaları da tedarikçi
            garantisi kapsamındadır. Herhangi bir üretim hatası veya erken
            arızalanma durumunda parça değişimi yapılır.{" "}
            <strong>Akhisar oto tamir</strong> merkezi olarak, satış sonrası
            desteğimiz ile her zaman yanınızdayız.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Sadece Parça Satışı
          </h2>
          <p>
            İsterseniz sadece yedek parça satın alabilirsiniz, işçilik hizmeti
            zorunlu değildir. Kendi başınıza tamir yapmak isteyenler veya başka
            bir serviste tamir ettirecekler için de parça tedarik ediyoruz.
            Ancak tavsiyemiz, özellikle kritik parçalarda profesyonel montaj
            yaptırmaktır. Yanlış montaj, parçanın erken bozulmasına ve hatta
            kazalara yol açabilir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Toptan Satış
          </h2>
          <p>
            Oto tamir atölyeleri, oto elektrikçiler ve diğer profesyoneller için
            toptan yedek parça satışı da yapıyoruz. Düzenli alımlarda özel
            indirimler ve ödeme kolaylıkları sunuyoruz. Sektörde güvenilir bir
            iş ortağı olarak, kaliteli parça tedarikinde yanınızdayız.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Parça Danışmanlığı
          </h2>
          <p>
            <strong>Akhisar tamirci</strong> ekibimiz, hangi parçanın aracınız
            için uygun olduğu, alternatif parça seçenekleri, fiyat-performans
            karşılaştırması gibi konularda size yardımcı olur. Bazen müşteriler
            yanlış parça sipariş verebilir veya aracına uymayan parça alabilir.
            Bizimle çalıştığınızda, doğru parçayı doğru fiyata almanız garanti
            edilir.
          </p>

          <p>
            Aracınız için yedek parçaya ihtiyacınız varsa,{" "}
            <strong>Akhisar araba tamir</strong> merkezimizi arayın. Marka,
            model, yıl ve şase numarası bilgilerinizle ihtiyacınız olan parçayı
            tespit ediyor, fiyat teklifi veriyoruz. Hızlı tedarik, uygun fiyat
            ve garantili hizmet için bizi tercih edin.
          </p>
        </div>
      </article>
    </div>
  );
}

export default page;
