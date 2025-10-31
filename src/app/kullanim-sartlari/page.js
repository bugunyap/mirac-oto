import React from "react";

export const metadata = {
  title: "Kullanım Şartları - Miraç Oto",
  description:
    "Miraç Oto Kullanım Şartları. Akhisar / Manisa, Türkiye Tel: 0535 989 8350, 0507 296 4042, 0505 399 4619.",
};

function page() {
  return (
    <div className="font-sans text-gray-800">
      <section className="relative min-h-screen flex items-center pt-20 bg-linear-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
          <h1 className="text-3xl font-bold mb-6">Kullanım Şartları</h1>

          <p>
            Bu web sitesi, <strong>Miraç Oto Özel Servis</strong> (“biz”,
            “şirket”) tarafından işletilmektedir. Sitemizi ziyaret eden veya
            hizmetlerimizi kullanan herkes, aşağıdaki şartları kabul etmiş
            sayılır.
          </p>

          <h2 className="text-2xl font-semibold mt-8">1. Genel Bilgiler</h2>
          <p>
            Bu site, Miraç Oto Özel Servis’in hizmetleri hakkında bilgi sunmak
            amacıyla hazırlanmıştır. Sitede yer alan bilgiler yalnızca
            bilgilendirme niteliğindedir ve herhangi bir hukuki bağlayıcılık
            oluşturmaz.
          </p>

          <h2 className="text-2xl font-semibold mt-8">2. Hizmet İçeriği</h2>
          <p>
            Web sitesinde yer alan tüm bilgiler (metinler, görseller,
            açıklamalar vb.) genel tanıtım amacı taşır. Miraç Oto, sitedeki
            bilgileri haber vermeksizin değiştirme, kaldırma veya güncelleme
            hakkını saklı tutar.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            3. Fikri Mülkiyet Hakları
          </h2>
          <p>
            Bu web sitesinde yer alan tüm içerik, tasarım, logo, marka ve
            görseller <strong>Miraç Oto Özel Servis’e</strong> aittir veya
            lisanslı olarak kullanılmaktadır. İçeriklerin izinsiz kopyalanması,
            çoğaltılması, paylaşılması veya ticari amaçla kullanılması yasaktır.
          </p>

          <h2 className="text-2xl font-semibold mt-8">4. Sorumluluk Reddi</h2>
          <p>
            Miraç Oto, web sitesinde yer alan bilgilerin doğruluğu için makul
            çaba gösterir ancak bu bilgilerin hatasız, eksiksiz veya her zaman
            güncel olduğunu garanti etmez. Site kullanımından doğabilecek
            doğrudan veya dolaylı zararlardan Miraç Oto sorumlu tutulamaz.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. Dış Bağlantılar</h2>
          <p>
            Sitemizde üçüncü taraf sitelere yönlendiren bağlantılar bulunabilir.
            Bu sitelerin içerik veya gizlilik uygulamalarından Miraç Oto sorumlu
            değildir. Bu tür siteleri ziyaret etmeden önce kendi gizlilik ve
            kullanım şartlarını incelemeniz önerilir.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            6. Kullanım Sorumluluğu
          </h2>
          <p>
            Ziyaretçiler, web sitesini yalnızca yasal ve etik amaçlarla
            kullanmayı kabul eder. Sitenin güvenliğini ihlal etmeye, kötü amaçlı
            yazılım göndermeye veya teknik zarara yol açmaya yönelik herhangi
            bir işlem yasaktır.
          </p>

          <h2 className="text-2xl font-semibold mt-8">7. Değişiklikler</h2>
          <p>
            Miraç Oto, bu kullanım şartlarını dilediği zaman güncelleme veya
            değiştirme hakkını saklı tutar. Güncel sürüm her zaman bu sayfada
            yayımlanır. Kullanıcılar, siteyi kullanmaya devam ederek yeni
            şartları kabul etmiş sayılır.
          </p>

          <h2 className="text-2xl font-semibold mt-8">8. İletişim</h2>
          <p>
            Her türlü soru veya talebiniz için bizimle iletişime geçebilirsiniz:
            <br />
            <strong>Miraç Oto Özel Servis – Akhisar / Manisa</strong>
            <br />
            Tel: 0 535 989 8350 • 0 507 296 4042 • 0 505 399 4619 <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default page;
