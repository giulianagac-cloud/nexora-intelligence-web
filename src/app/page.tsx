import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { ServiciosBento } from "@/components/sections/ServiciosBento";
import { BotPlanes } from "@/components/sections/BotPlanes";
import { Proceso } from "@/components/sections/Proceso";
import { CasoDeUso } from "@/components/sections/CasoDeUso";
import { TechStack } from "@/components/sections/TechStack";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiciosBento />
        <BotPlanes />
        <Proceso />
        <CasoDeUso />
        <TechStack />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
