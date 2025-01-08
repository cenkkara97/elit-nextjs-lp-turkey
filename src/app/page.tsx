import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const treatments = [
  {
    title: "Dövme Silme",
    description: "Q-Switch lazer teknolojisi ile güvenli ve etkili dövme silme tedavisi.",
    image: "/assets/images/tattoo-removal/hero-1.jpg",
    link: "/tatto-removal"
  },
  {
    title: "Lazer Epilasyon",
    description: "Son teknoloji lazer epilasyon cihazları ile kalıcı tüy alma tedavisi.",
    image: "/assets/images/tattoo-removal/hero-1.jpg",
    link: "/laser-hair-removal"
  },
  {
    title: "Cilt Bakımı",
    description: "Kişiye özel cilt bakım tedavileri ile sağlıklı ve parlak bir cilt.",
    image: "/assets/images/tattoo-removal/hero-1.jpg",
    link: "/skin-care"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primaryBlue text-center mb-3">
        Türkiye’nin En Büyük Estetik Kliniği
        </h1>
        <div className="w-20 h-1 bg-primaryOrange mx-auto mb-6"></div>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
        Elit Klinik, 18.000 m² kapalı alanda, 15 yılı aşkın süredir estetik ve sağlık hizmetlerini aynı çatı altında birleştiren bir tıp merkezidir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Link href={treatment.link} key={index} className="group">
              <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-0">
                <div className="relative h-72">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                      {treatment.title}
                    </h2>
                    <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {treatment.description}
                    </p>
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center bg-white">
                  <div className="w-2 h-2 rounded-full bg-primaryOrange"></div>
                  <span className="text-sm font-semibold text-primaryBlue flex items-center gap-2 group-hover:text-primaryOrange transition-colors duration-300">
                    Detaylı Bilgi
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
