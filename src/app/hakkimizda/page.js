import React from "react";
import { Award, Target, Lightbulb, Users, Shield, Zap } from "lucide-react";
import CallToAction from "@/components/CallToAction/CallToAction";
import Banner from "@/components/Banner/Banner";
import { stats } from "@/helpers/helpers";

export const metadata = {
  title: "Akhisar Oto Tamircisi - Hakkımızda - Miraç Oto",
  description:
    "Miraç Oto hakkında bilgi edinin. 2008'den beri Akhisar'da VAG grubu araçlara özel servis. Uzman ekip, modern teşhis ekipmanları, 5000+ mutlu müşteri.",
  keywords:
    "miraç oto hakkında, akhisar oto servisi hakkında, akhisar vag uzmanı, akhisar güvenilir tamirci, volkswagen servisi akhisar, audi servisi akhisar, akhisar özel servis, manisa oto tamir",
  openGraph: {
    title: "Akhisar Oto Tamircisi - Hakkımızda - Miraç Oto",
    description:
      "2008'den beri Akhisar'da VAG grubu araçlara özel profesyonel servis hizmeti sunuyoruz.",
    url: "https://www.mirac-oto.com/hakkimizda",
    siteName: "Miraç Oto Özel Servis",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mirac-oto.com/hakkimizda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Hakkimizda = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Güvenilirlik",
      description:
        "Müşterilerimize karşı dürüst ve şeffaf olmak en önemli değerimizdir.",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Kalite",
      description: "Her işimizde en yüksek kalite standartlarını uyguluyoruz.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti her zaman önceliğimizdir.",
    },
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: "Hız ve Verimlilik",
      description:
        "Zamanınıza değer veriyor, hızlı ve etkili çözümler sunuyoruz.",
    },
  ];

  return (
    <div className="font-sans">
      <Banner
        imageUrl={"/akhisar-otomobil-servis-sanziman.avif"}
        title={"Hakkımızda"}
        description={
          "15 yılı aşkın deneyimimiz ile VAG grubu araçlarınıza özel hizmet sunuyoruz"
        }
      />
      f
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Miraç Oto Özel Servis
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-red-600 to-red-400 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Miraç Oto Özel Servis, 2008 yılında Akhisar'da kurulmuş olup,
                Volkswagen, Audi, Seat ve Skoda markalarını kapsayan VAG grubu
                araçlarına özel hizmet veren bir oto servisidir. Kuruluşumuzdan
                bu yana, müşterilerimize en kaliteli ve güvenilir hizmeti
                sunmayı ilke edindik.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sektörde 15 yılı aşkın deneyime sahip olan ekibimiz, VAG grubu
                araçların tüm mekanik, elektronik ve kaporta işlemlerinde
                uzmanlaşmıştır. Modern teşhis ekipmanlarımız ve sürekli kendini
                geliştiren teknisyen kadromuz sayesinde, aracınızın her türlü
                ihtiyacına en hızlı ve en etkili çözümleri sunuyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Özellikle DSG şanzıman tamiri, motor revizyonu, gelişmiş teşhis
                sistemleri (VCDS ve ODIS) ve orijinal yedek parça temini
                konularında bölgemizin öncü servisi konumundayız. Müşteri
                memnuniyetini her zaman ön planda tutarak, şeffaf, dürüst ve
                profesyonel bir hizmet anlayışıyla çalışıyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aracınızı bize emanet ettiğinizde, sadece bir tamir servisi
                değil, aynı zamanda güvenilir bir iş ortağı bulacaksınız. Her
                müşterimize özel ilgi gösteriyor, aracınızın durumu hakkında
                detaylı bilgilendirme yapıyor ve sizin için en uygun çözümleri
                sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
              <div className="bg-linear-to-br from-red-600 to-red-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Vizyonumuz
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Akhisar ve çevre illerde VAG grubu araçlar için en güvenilir, en
                gelişmiş ve en tercih edilen özel servis olmak.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Teknolojik gelişmeleri yakından takip ederek, sürekli yenilenen
                ekipman ve bilgi birikimimizle sektörde öncü konumumuzu korumak
                ve güçlendirmek.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Müşterilerimizin aracına gösterdiği özeni ve güveni her zaman
                hak etmek, onların ilk tercihi olmaya devam etmek.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
              <div className="bg-linear-to-br from-red-600 to-red-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Misyonumuz
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                VAG grubu araçların bakım, onarım ve teşhis hizmetlerinde en
                yüksek kalite standartlarını sunmak.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Orijinal ve kaliteli yedek parçalar kullanarak, her işimize
                garanti vermek ve müşteri memnuniyetini her zaman ön planda
                tutmak.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Şeffaf, dürüst ve profesyonel bir hizmet anlayışıyla, aracınızın
                ömrünü uzatmak ve güvenli sürüş deneyimi sağlamak.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section – Light */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş yapış şeklimizi şekillendiren temel ilkelerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bizi rakiplerimizden farklı kılan özellikler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 bg-linear-to-br from-blue-50 to-white p-6 rounded-2xl hover:shadow-lg transition">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    VAG Grubu Uzmanı
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Volkswagen, Audi, Seat, Skoda vb. markalarına odaklanarak,
                    bu araçların tüm özelliklerini en iyi şekilde biliyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-linear-to-br from-blue-50 to-white p-6 rounded-2xl hover:shadow-lg transition">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Modern Teşhis Sistemleri
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    VCDS ve ODIS gibi en gelişmiş teşhis ekipmanları ile
                    aracınızın tüm elektronik sistemlerini detaylı olarak
                    kontrol ediyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-linear-to-br from-blue-50 to-white p-6 rounded-2xl hover:shadow-lg transition">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Orijinal Yedek Parça
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aracınızın performansını ve değerini korumak için orijinal
                    OEM ve kaliteli yan sanayi parçalar kullanıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-linear-to-br from-blue-50 to-white p-6 rounded-2xl hover:shadow-lg transition">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Şeffaf Fiyatlandırma
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    İşlem öncesi detaylı fiyat bilgisi veriyor, gizli ek ücret
                    talep etmiyoruz. Güven bizim en büyük sermayemiz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-linear-to-br from-blue-50 to-white p-6 rounded-2xl hover:shadow-lg transition">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Garanti ve Güvence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yaptığımız tüm işlemlere garanti veriyoruz. İşimizin
                    arkasında duruyoruz ve sorumluluk alıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-linear-to-br from-blue-50 to-white p-6 rounded-2xl hover:shadow-lg transition">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    Deneyimli Ekip
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    15 yılı aşkın sektör deneyimi olan, sürekli eğitim alan
                    uzman teknisyen kadromuz ile hizmetinizdeyiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <CallToAction />
    </div>
  );
};

export default Hakkimizda;
