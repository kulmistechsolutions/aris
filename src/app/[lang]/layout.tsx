import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getDict, isLocale, locales } from "@/lib/i18n";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(lang);
  return {
    title: { default: t.meta.title, template: "%s | AIRIS Ltd." },
    description: t.meta.description,
    icons: { icon: "/images/icon.png" },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <SmoothScroll />
        <Header lang={lang} nav={t.nav} />
        <main>{children}</main>
        <Footer lang={lang} t={t} />
        <WhatsAppButton label={t.whatsapp} />
      </body>
    </html>
  );
}
