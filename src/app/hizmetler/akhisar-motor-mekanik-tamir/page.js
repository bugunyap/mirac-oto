import Banner from "@/components/Banner/Banner";
import React from "react";

export const metadata = {
  title: "Akhisar Oto Tamircisi -  Akhisar Motor ve Mekanik Tamir - Miraç Oto",
  description:
    "Akhisar DSG şanzıman tamiri, motor revizyonu, kaporta-boya, VAG teşhis, yedek parça. Akhisar'da tüm VAG grubu araçlar için profesyonel servis hizmetleri.",
  keywords:
    "akhisar dsg tamiri, akhisar motor tamiri, akhisar kaporta, akhisar şanzıman tamiri, akhisar vag teşhis, vcds akhisar, odis teşhis akhisar, volkswagen bakımı akhisar, audi bakımı akhisar, seat servisi akhisar, skoda servisi akhisar, akhisar oto elektrik",
};

function page() {
  return (
    <div className="bg-white">
      <Banner
        imageUrl={"/akhisar-otomobil-servis-tamir.avif"}
        title={"Akhisar Motor ve Mekanik Tamir"}
        description={
          "Motor revizyonundan rutin bakıma Akhisar'ın deneyimli ve güvenilir motor tamir servisi."
        }
      />
      <article className="max-w-4xl mx-auto p-8 bg-white">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Akhisar Motor ve Mekanik Tamir
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Motor revizyonundan rutin bakıma, periyodik servislerden karmaşık
            mekanik arızalara kadar tüm işlemler için Akhisar'ın deneyimli ve
            güvenilir motor tamir servisi.
          </p>
        </header>

        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg">
            Aracınızın motoru, tüm sistemin en kritik parçasıdır. Düzenli bakım
            ve profesyonel tamir hizmetleri ile motorunuzun ömrünü uzatabilir,
            yakıt verimliliğini artırabilir ve güvenli bir sürüş deneyimi
            yaşayabilirsiniz. <strong>Akhisar oto tamir</strong> atölyemizde,
            benzinli ve dizel motorların tüm bakım ve tamir işlemlerini en
            yüksek kalite standartlarında gerçekleştiriyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Motor Arızalarının Belirtileri
          </h2>
          <p>
            Motorunuzun sağlığını etkileyen sorunlar genellikle belirgin
            belirtiler gösterir. Anormal motor sesleri, titreşim, güç kaybı, sık
            sık aşırı ısınma, aşırı egzoz dumanı, kontrol panelinde motor ikaz
            lambasının yanması, yüksek yakıt tüketimi ve zorlanmış çalıştırma
            gibi durumlar motor problemi göstergeleridir. Bu belirtilerden
            herhangi birini fark ettiğinizde, <strong>Akhisar tamirci</strong>{" "}
            ekibimize başvurmanız önemlidir. Erken müdahale, motorun tamamen
            hasar görmesini engelleyebilir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Sunduğumuz Motor Tamir Hizmetleri
          </h2>
          <p>
            Motor revizyonu, motorun tüm parçalarının sökülüp detaylı bir
            şekilde kontrol edilmesi, aşınmış ve hasarlı parçaların
            değiştirilmesi işlemidir. Silindir gömlekleme, piston ve segman
            değişimi, krank mili ve kam mili revizyonu gibi işlemleri
            gerçekleştiriyoruz. Motor kapak contası değişimi, özellikle yüksek
            kilometreli araçlarda sıkça karşılaşılan bir durumdur. Kapak contası
            sızıntısı yağ kaybına ve motor ısınmasına neden olabilir.
          </p>

          <p>
            Triger kayışı değişimi, motorun zamanlamasını sağlayan kritik bir
            bakım işlemidir. Triger kayışının kopması motor pistonlarının
            supaplara çarpmasına ve çok ciddi hasarlara yol açabilir. Her aracın
            üretici tarafından belirlenen triger değişim kilometre aralıkları
            vardır ve bu sürelere kesinlikle uyulmalıdır.{" "}
            <strong>Akhisar araba tamir</strong> servisi olarak triger seti
            değişimlerinde su pompası, gergi ve rulmanlara da bakar,
            gerektiğinde bunları da değiştiririz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Turbo Bakım ve Tamir
          </h2>
          <p>
            Turbolu araçlar, ekstra güç ve tork sağlarken, turbo sisteminin
            düzenli bakımı büyük önem taşır. Turbo arızaları genellikle güç
            kaybı, anormal ıslık sesi, mavi egzoz dumanı ve yağ sızıntısı ile
            kendini gösterir. Turbo tamirinde rulman değişimi, actuator ayarı ve
            gerektiğinde komple turbo değişimi yapıyoruz. Turbo sistemlerinin
            hassas yapısı nedeniyle, sadece deneyimli teknisyenler tarafından
            işlem görmesi gerekir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Enjektör Sistemi Bakım ve Tamir
          </h2>
          <p>
            Enjektörler, yakıtı yanma odasına püskürten hassas parçalardır.
            Kirli yakıt kullanımı veya zamanla enjektörlerin tıkanması, motor
            performansını olumsuz etkiler. Enjektör temizleme, test ve ayar
            hizmetlerimizle motorunuzun verimli çalışmasını sağlıyoruz. Dizel
            araçlarda common rail enjektör sistemleri daha karmaşık olup, özel
            teşhis ekipmanları gerektirir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Periyodik Bakım Hizmetleri
          </h2>
          <p>
            Motorun uzun ömürlü olması için periyodik bakımlar şarttır. Motor
            yağı ve filtre değişimi, hava filtresi, yakıt filtresi, polen
            filtresi değişimleri, buji kontrolü ve değişimi, kablo kontrolü gibi
            rutin bakım işlemlerini üretici önerilerine uygun şekilde
            gerçekleştiriyoruz. Periyodik bakımlarınızı aksatmadan yaptırarak
            hem yakıt tasarrufu sağlar hem de motorunuzun ömrünü uzatırsınız.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Modern Teşhis Sistemleri
          </h2>
          <p>
            <strong>Akhisar oto tamir</strong> merkezi olarak, en son model
            teşhis cihazlarına sahibiz. OBD teşhis sistemleri ile motorun tüm
            sensörlerini, aktüatörlerini ve elektronik kontrol ünitelerini
            okuyabiliyor, gerçek zamanlı verileri analiz edebiliyoruz. Bu sayede
            arızanın tam olarak nereden kaynaklandığını tespit ediyor ve
            gereksiz parça değişimlerinin önüne geçiyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Kalite ve Garanti
          </h2>
          <p>
            Tüm motor tamir ve bakım işlemlerimizde orijinal veya orijinal
            kalitede yedek parçalar kullanıyoruz. İşçiliğimiz ve kullandığımız
            parçalar garanti kapsamındadır. Müşteri memnuniyeti bizim için en
            önemli değerdir ve her işimizin arkasında duruyoruz. Şeffaf
            fiyatlandırma politikamız ile işlem öncesi tüm maliyetleri net bir
            şekilde paylaşıyoruz.
          </p>

          <p>
            Motorunuzla ilgili herhangi bir sorun yaşıyorsanız veya periyodik
            bakım zamanınız geldiyse, hemen <strong>Akhisar tamirci</strong>{" "}
            ekibimizle iletişime geçin. Uzman teknisyenlerimiz aracınızı en kısa
            sürede kontrol ederek size en uygun çözümü sunar. Randevu için bizi
            arayabilir veya servisimize uğrayabilirsiniz.
          </p>
        </div>
      </article>
    </div>
  );
}

export default page;
