"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

/* Delay de stagger entre cards (ms) */
const STAGGER = 80;

export function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="servicios"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-white py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="reveal mb-14">
          <SectionHeading
            subtag="Servicios"
            title="Qué hacemos"
            description="Soluciones pensadas para ordenar, digitalizar y potenciar proyectos con una mirada práctica, moderna y escalable."
          />
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="reveal"
              style={{ transitionDelay: `${i * STAGGER}ms` }}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* CTA debajo */}
        <div className="reveal mt-12 flex justify-center" style={{ transitionDelay: `${SERVICES.length * STAGGER}ms` }}>
          <Button as="a" href="#contacto" variant="primary" size="lg">
            Quiero una propuesta
          </Button>
        </div>
      </div>
    </section>
  );
}
