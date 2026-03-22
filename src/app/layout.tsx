import type { Metadata } from "next";
import { Syne, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Nexora Intelligence — Soluciones digitales inteligentes",
  description:
    "Consultora de tecnología. Desarrollo web, apps, automatización, asistentes inteligentes y consultoría funcional para negocios y profesionales.",
  openGraph: {
    title: "Nexora Intelligence",
    description:
      "Soluciones digitales inteligentes para negocios, profesionales y nuevos proyectos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
