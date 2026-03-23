import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "NEXORA Intelligence | Consultoría IT & Automatización",
  description:
    "Tu operación funciona. Nosotros la hacemos escalar. Desarrollo web, apps, automatización, bots IA y consultoría funcional.",
  openGraph: {
    title: "NEXORA Intelligence",
    description:
      "Tu operación funciona. Nosotros la hacemos escalar.",
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
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-nexora-dark text-nexora-light font-body">
        {/* Deshabilitar scroll restoration ANTES de la hidratación */}
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0);" }} />
        {children}
      </body>
    </html>
  );
}
