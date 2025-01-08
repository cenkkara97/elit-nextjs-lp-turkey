import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Elit Klinik",
  description: "Elit Klinik Resmi Web Sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen">
        <NavHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
