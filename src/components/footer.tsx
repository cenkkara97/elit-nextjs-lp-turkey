// components/Footer.jsx

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primaryBlue text-white">
      <div className="mx-auto max-w-[1120px] flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 gap-6 md:gap-8">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-primaryOrange text-2xl md:text-3xl font-bold">
            İletişim Bilgileri
          </h2>
          <div>
            <b className="text-lg">Adres</b>
            <p className="text-txtLight font-light mt-2 leading-6">
              <Link
                href="https://maps.app.goo.gl/mnT5Str8HRgX7RNp7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Hamidiye, Cendere Cad. <br />
                No: 103 – 1 T4 Blok, 34396 <br />
                Kâğıthane/İstanbul
              </Link>
            </p>
          </div>
          <div>
            <b className="text-lg">E-posta</b>
            <p className="text-txtLight font-light mt-2 leading-6">
              <Link
                href="mailto:info@elitklinik.com.tr"
                className="hover:underline"
                aria-label="Elit Klinik'e e-posta gönderin"
              >
                info@elitklinik.com.tr
              </Link>
            </p>
          </div>
          <div>
            <b className="text-lg">Telefon</b>
            <p className="text-txtLight font-light mt-2 leading-6">
              <a href="tel:+905520000034" className="hover:underline">
                +90 552 000 00 34
              </a>
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/navbar-logo.png"
              alt="Elit Klinik Logo"
              width={150}
              height={63}
              className="h-auto w-full max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
