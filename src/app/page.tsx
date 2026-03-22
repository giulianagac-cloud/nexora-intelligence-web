import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { ContrastBand } from "@/components/sections/ContrastBand";
import { Services } from "@/components/sections/Services";
import { Differentiator } from "@/components/sections/Differentiator";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Credibility } from "@/components/sections/Credibility";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <ContrastBand />
        <Services />
        <Differentiator />
        <Projects />
        <About />
        <Credibility />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
