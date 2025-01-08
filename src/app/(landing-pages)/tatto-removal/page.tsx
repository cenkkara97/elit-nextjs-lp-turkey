"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { MainSlider } from "@/components/main-slider";
import { MainGallery } from "@/components/gallery";
import VideoPlayer from "@/components/video-player";
import { DeviceSlider } from "@/components/device-slider";
import FAQ from "@/components/faq";
interface FeatureProps {
  iconSrc: string;
  label: string;
  labelSub?: string;
}

const slides = [
  {
    image: "/assets/images/tattoo-removal/carousel-1.jpg",
    caption: "Dövmenin rengi zamanla solmuş ve güzelliğini kaybetmiş olabilir.",
  },
  {
    image: "/assets/images/tattoo-removal/carousel-2.jpg",
    caption: "Dövmenizin iş hayatınız için problem teşkil ediyor olabilir.",
  },
  {
    image: "/assets/images/tattoo-removal/carousel-3.jpg",
    caption: "Dövmenizin iş hayatınız için problem teşkil ediyor olabilir.",
  },
  {
    image: "/assets/images/tattoo-removal/carousel-4.jpg",
    caption: "Dövmenizin iş hayatınız için problem teşkil ediyor olabilir.",
  },
  {
    image: "/assets/images/tattoo-removal/carousel-5.jpg",
    caption: "Dövmenizin iş hayatınız için problem teşkil ediyor olabilir.",
  },
];

const galleryData = [
  {
    src: "/assets/images/clinic-gallery/1.jpg",
    alt: "Elit Klinik Vadistanbul",
    className: "row-span-2 h-full",
  },
  {
    src: "/assets/images/clinic-gallery/2.jpg",
    alt: "Elit Klinik Vadistanbul",
    className: "",
  },
  {
    src: "/assets/images/clinic-gallery/3.jpg",
    alt: "Elit Klinik Vadistanbul",
    className: "",
  },
  {
    src: "/assets/images/clinic-gallery/4.jpg",
    alt: "Elit Klinik Vadistanbul",
    className: "col-span-2",
  },
];

const serverVideoUrl =
  "https://elithair-video.s3.eu-central-1.amazonaws.com/Turkish/lp-video.mp4";
const thumbnailUrl = "/assets/images/tattoo-removal/video-tumbnail.jpg";

const deviceImages = [
  { image: "/assets/images/tattoo-removal/device-1.jpg" },
  { image: "/assets/images/tattoo-removal/device-2.jpg" },
  { image: "/assets/images/tattoo-removal/device-3.jpg" },
];

const steps = [
  {
    number: 1,
    text: "Dövmenin üzerine lokal anestezi kremi sürülür ve 10-15 dk beklenir.",
    image: "/assets/images/tattoo-removal/step-1.jpg",
  },
  {
    number: 2,
    text: "Ardından bölge temizlenerek lazer ile dövme silme işlemine geçilir.",
    image: "/assets/images/tattoo-removal/step-2.jpg",
  },
  {
    number: 3,
    text: "Hastamızın iyileşme sürecinde kullanması gereken yara iyileşmesini hızlandıran kremler ve güneş koruyucu önerilir.",
    image: "/assets/images/tattoo-removal/step-3.jpg",
  },
  {
    number: 4,
    text: "6 hafta içinde lazer tedavisi ile dövmenin içindeki renk bileşikleri vücuttan atılır. Dövmenin renginde açılma ve silikleşme farkedeler.",
    image: "/assets/images/tattoo-removal/step-4.jpg",
  },
];

const faqItems = [
  {
    question: "Lazerle Dövme Silme Uygulaması Nedir?",
    answer:
      "Lazerle dövme silme, Q-Switch lazer teknolojisinin kullanıldığı, uzman dermatologlar tarafından gerçekleştirilen bir uygulamadır. Q-switch lazer, çok kısa süreli ve yoğun enerji darbeleri göndererek dövme pigmentlerini hedef alır. Bu darbeler, dövme pigmentlerini küçük parçalara ayırır, böylece vücut doğal süreçleriyle bu parçaları emer ve atar.",
  },
  {
    question: "Q-Switch Lazer Nedir?",
    answer:
      "Q-Switch lazer, özellikle dövme silme ve pigmentasyon tedavilerinde kullanılan bir lazer türüdür. Kısa süreli yüksek enerji darbeleriyle ciltteki istenmeyen pigmentleri parçalar.",
  },
];

function Feature({ iconSrc, label, labelSub }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image 
        src={iconSrc} 
        alt="" 
        width={48} 
        height={48} 
        className="mb-2 h-[48px] w-[48px]" 
      />
      <div className="text-sm">
        <p>{label}</p>
        {labelSub && <p>{labelSub}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <main className="mt-10">
      <section>
          <Card className="mx-auto max-w-[1120px] px-4 sm:px-5 relative hidden md:block rounded-3xl overflow-hidden p-8 bg-[url('/assets/images/tattoo-removal/hero-1.jpg')] bg-cover bg-center h-96">
            <div className="flex flex-col md:flex-row md:space-x-8 p-8 rounded-lg">
              <div className="text-white md:w-1/2 space-y-4">
                <h2 className="font-sans text-3xl font-bold leading-snug">
                  Dövmenize Veda Etmeye{" "}
                  <span className="block text-primaryOrange whitespace-nowrap">
                    İlk Adımdasınız
                  </span>
                </h2>
                <p className="text-md font-normal">
                  Dünyada ilk ve tek patentli fraksiyonel <br />
                  Q-Switch lazer cihazı ile eski dövmelerinizle <br />
                  Elit Klinikte vedalaşın.
                </p>
                <Link
                href="/contact-form"
                className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl mt-5 inline-block px-4 py-2 text-center"
              >
                Hemen Randevu Alın
              </Link>
              </div>
            </div>
          </Card>

          <Card className="relative md:hidden rounded-3xl overflow-hidden p-8 bg-[url('/assets/images/tattoo-removal/hero-1-mobile.jpg')] bg-cover bg-center h-56">
            <div className="text-left text-white p-4">
              <h2 className="font-sans text-xl font-bold leading-snug text-left">
                <span className="block">Dövmenize</span>
                <span className="block">Veda Etmeye</span>
                <span className="block text-primaryOrange">
                  İlk Adımdasınız
                </span>
              </h2>
            </div>
          </Card>

          <div className="md:hidden bg-white text-center p-4 rounded-lg mt-4">
            <p className="text-gray-700 text-sm font-normal">
              Dünyada ilk ve tek patentli fraksiyonel Q-Switch lazer cihazı ile
              eski dövmelerinizle Elit Klinikte vedalaşın.
            </p>
          </div>

          <div className="md:hidden text-center mt-4 pb-10">
            <Link
                href="/contact-form"
                className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-full px-6 py-3"
              >
                Hemen Randevu Alın
              </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-4 sm:px-0 md:-mt-10">
          <Card className="relative rounded-3xl overflow-hidden p-4 bg-white px-8">
            <CardContent className="p-4 pt-2 grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-around items-center">
              <Feature
                iconSrc="/assets/images/tattoo-removal/icons/features-icon-1.svg"
                label="Uzman Dermatolog Kontrolü"
              />
              <hr className="hidden md:block h-28 border-l border-secondaryBlue" />
              <Feature
                iconSrc="/assets/images/tattoo-removal/icons/features-icon-2.svg"
                label="Başarılı Sonuç Garantisi"
              />
              <hr className="hidden md:block h-28 border-l border-secondaryBlue" />
              <Feature
                iconSrc="/assets/images/tattoo-removal/icons/features-icon-3.svg"
                label="Acısız ve Kısa Seanslar"
              />
              <hr className="hidden md:block h-28 border-l border-secondaryBlue" />
              <Feature
                iconSrc="/assets/images/tattoo-removal/icons/features-icon-4.svg"
                label="Hızlı İyileşme Süresi"
              />
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-[800px] px-4 sm:px-0 py-10 text-center">
          <div className="container mx-auto px-4 text-center mb-10">
            <h2 className="text-3xl font-bold text-primaryBlue mb-4">
              Elit Klinik: Lazerle Dövme Silme İşlemi
            </h2>
            <p>
              Uzman dermatologlar tarafından kullanılan yenilikçi fraksiyonel
              Q-Switch lazer teknolojisi sayesinde istenmeyen dövmeleriniz
              güvenli ve etkili bir şekilde silinebilir.
            </p>
          </div>
          <MainSlider images={slides} />
          <Link
                href="/contact-form"
                className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl mt-5 inline-block px-4 py-2 text-center"
              >
                Hemen Randevu Alın
              </Link>
        </section>

        <section className="bg-sectionSecondary py-10">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-0">
            <div className="container mx-auto px-4 text-center mb-10">
              <h2 className="text-3xl font-bold text-primaryBlue mb-4">
                Elit Klinik’te Sizi Neler Bekliyor?
              </h2>
            </div>
            <MainGallery gallery={galleryData} />
            <div className="mx-auto max-w-[680px] text-center mt-7">
              <p className="font-light text-sm text-secondaryBlue">
                Sağlığınız, uzman dermatologlar tarafından gerçekleştirilen
                dövme silme işlemleriyle kontrol altında. İmajınızı olumsuz
                etkileyen istenmeyen dövmeleriniz, son teknoloji ekipmanlar ve
                yenilikçi cihazlarımızla iz bırakmadan ve etkili bir şekilde
                giderilebilir.
              </p>
              <Link
                href="/contact-form"
                className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl mt-5 inline-block px-4 py-2 text-center"
              >
                Hemen Randevu Alın
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full bg-primaryBlue py-10">
          <div className="mx-auto max-w-[1120px] text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Uzman Dermatoloji Doktoru
              <br />
              <span className="text-primaryOrange">Eşliğinde Tedavi</span>
            </h2>
          </div>
          <VideoPlayer
            videoUrl={serverVideoUrl}
            thumbnailUrl={thumbnailUrl}
            className="max-w-xl mx-auto"
          />
          <div className="mx-auto max-w-[650px] text-center mt-7">
            <p className="font-light text-sm text-txtLight">
              Elit Klinik olarak, deneyimli ekibimizle size profesyonel bir
              klinik deneyimi sunuyoruz. Dövme silme işlemlerinizde size ve
              cildinize özel çözümler üretiyor, estetiği sağlıkla buluşturan bir
              yaklaşım benimsiyoruz.
            </p>
            <Link
              href="/contact-form"
              className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl mt-5 inline-block px-4 py-2 text-center"
            >
              Hemen Randevu Alın
            </Link>
          </div>
        </section>

        <section className="py-10 bg-sectionSecondary">
          <div className="mx-auto max-w-[800px] px-4 sm:px-0">
            <h2 className="text-3xl font-bold text-center text-primaryOrange mb-4">
              Elit Klinik’te Sağlığınız İçin
              <br /> Son Teknoloji!
            </h2>
            <div className="mt-10">
              <DeviceSlider images={deviceImages} />
            </div>
            <div className="mx-auto max-w-[650px] text-center mt-7">
              <p className="font-light text-sm text-gray">
                Estetiğe sağlık, sağlığa estetik anlayışıyla sunulan
                hizmetlerimizde, önceliğimiz sizin sağlığınız ve
                güvenliğinizdir. Elit-Lab tarafından özel olarak geliştirilen
                teknikler ve anti-bakteriyel cihazlarla desteklenen son
                teknoloji patentli cihazlarımız, dövme silme sürecini daha
                etkili ve güvenli hale getirme misyonunu taşıyor.
              </p>
              <Link
                href="/contact-form"
                className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl mt-5 inline-block px-4 py-2 text-center"
              >
                Hemen Randevu Alın
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full bg-primaryBlue py-10">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white">
                Lazerle Dövme Silme Aşamaları
              </h2>
            </div>
            <div className="px-4">
              <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible">
                {steps.map((step) => (
                  <Card
                    key={step.number}
                    className="flex-shrink-0 w-80 md:w-auto flex flex-col items-center bg-[#003366] text-white rounded-lg overflow-hidden border-none pb-5 mx-auto md:mx-0"
                  >
                    <img
                      src={step.image}
                      alt={`Step ${step.number}`}
                      className="w-full h-92 md:h-72 object-cover"
                    />
                    <CardContent className="text-center p-6 border border-t-0 rounded-b-3xl flex flex-col justify-start h-full">
                      <h3 className="text-4xl font-bold text-primaryOrange">
                        {step.number}
                      </h3>
                      <p className="text-sm text-txtLight mt-2">{step.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div
              className="relative rounded-3xl overflow-hidden mx-auto max-w-[1120px] bg-cover bg-center border mt-10"
              style={{
                backgroundImage:
                  "url('/assets/images/tattoo-removal/support-bg.jpg')",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center pt-10 px-24">
                <div className="text-white md:w-2/3 space-y-3 mb-10 mx-auto text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Dermatoloji Doktorlarımızla
                  </h3>
                  <p className="text-2xl md:text-3xl font-light">
                    Randevu Planlayın
                  </p>
                  <Link
                    href="/contact-form"
                    className="bg-primaryOrange hover:bg-primaryOrange/90 text-white font-bold rounded-3xl mt-5 inline-block px-4 py-2 text-center"
                  >
                    Hemen Randevu Alın
                  </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <img
                    src="/assets/images/tattoo-removal/support-agent.png"
                    alt="Support Agent"
                    className="w-30 md:w-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10 bg-sectionSecondary">
        <div className="mx-auto max-w-[800px] py-4 px-4 sm:px-0">
              <h2 className="text-3xl font-bold text-primaryBlue my-10 text-center">
                Sıkça Sorulan Sorular
              </h2>
              <FAQ items={faqItems} />
            </div>
        </section>
      </main>
    </div>
  );
}
