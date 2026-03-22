import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { LivingBackground } from "@/components/living-background";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALL DENT — Современная стоматология в Астане",
  description:
    "Имплантация, брекеты, лечение во сне (Севоран), терапия, хирургия, ортопедия и детская стоматология. Понятные цены, опытные врачи, удобная запись через WhatsApp.",
  keywords:
    "стоматология Астана, имплантация, брекеты, Севоран, лечение зубов, ALL DENT",
  icons: {
    icon: [{ url: "/image.png", type: "image/png" }],
    apple: "/image.png",
  },
  openGraph: {
    title: "ALL DENT — Современная стоматология в Астане",
    description:
      "Имплантация, брекеты, Севоран, терапия, хирургия. Понятные цены, удобная запись.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <LivingBackground />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
