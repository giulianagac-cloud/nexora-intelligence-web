import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Differentiator } from "@/components/sections/Differentiator";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentiator />
        <Projects />
        <About />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
