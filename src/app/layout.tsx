import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NEXORA Intelligence — Automatización que escala",
  description: "Diseñamos automatizaciones, asistentes IA y sistemas a medida para transformar necesidades reales en resultados concretos.",
  metadataBase: new URL("https://nexoraintelligence.co"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nexoraintelligence.co",
  },
  openGraph: {
    title: "NEXORA Intelligence — Automatización que escala",
    description: "Consultoría IT & Automatización IA — CABA, Argentina",
    url: "https://nexoraintelligence.co",
    siteName: "NEXORA Intelligence",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "https://nexoraintelligence.co/og-image3.png",
        width: 1200,
        height: 630,
        alt: "NEXORA Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA Intelligence",
    description: "Consultoría IT & Automatización IA",
    images: ["https://nexoraintelligence.co/og-image3.png"],
  },
  icons: {
    icon: "/favicon.svg",
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
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Deshabilitar scroll restoration ANTES de la hidratación */}
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
        <div style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}>
          {children}
        </div>
        {/* Widget Nexora Bot — descomentar para activar
        <Script
          src="https://nexora-bots-ten.vercel.app/widget.js"
          data-client="demo"
          strategy="lazyOnload"
        />
        */}
      </body>
    </html>
  );
}
