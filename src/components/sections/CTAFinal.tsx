"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CTAFinal() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="cta"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-graphite py-[clamp(4.5rem,9vw,9rem)] relative overflow-hidden"
    >
      {/* Dot pattern de fondo — misma técnica que Hero, invertido */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2A6F82 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.12,
        }}
      />

      {/* Gradiente radial central para dar profundidad */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(27,77,92,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-7 max-w-[640px] mx-auto">

          <div className="reveal">
            <span className="font-body font-medium text-nexora-accent-light text-[12px] tracking-[0.18em] uppercase">
              Hablemos
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <h2 className="font-heading font-medium text-nexora-white text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.2] tracking-[-0.015em]">
              ¿Tenés una idea, un proceso para mejorar o una necesidad digital
              concreta?
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            <p className="font-body text-nexora-gray-400 text-[17px] leading-[1.7]">
              Podemos ayudarte a ordenarla y convertirla en una solución
              digital clara, funcional y profesional.
            </p>
          </div>

          <div
            className="reveal flex flex-wrap justify-center gap-3 pt-2"
            style={{ transitionDelay: "300ms" }}
          >
            <Button as="a" href="#contacto" variant="primary" size="lg">
              Solicitar propuesta
            </Button>
            <Button
              as="a"
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
