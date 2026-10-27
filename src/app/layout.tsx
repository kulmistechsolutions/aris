import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/lib/data";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${company.legalName} | Building Infrastructure for a Stronger Tomorrow`,
    template: `%s | AIRIS Ltd.`,
  },
  description:
    "AIRIS General Contracting & Integrated Services Ltd. — general contracting, subcontracting, construction & maintenance, procurement, IT and integrated business services worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
