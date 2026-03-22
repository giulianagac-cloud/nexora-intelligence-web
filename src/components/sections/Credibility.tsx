"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { Layers, Clock, ShieldCheck, Users } from "lucide-react";

const BLOCKS = [
  {
    icon: <Layers size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Soluciones completas, de punta a punta",
  },
  {
    icon: <Clock size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Entrega ágil y comunicación directa",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Código limpio, documentado y mantenible",
  },
  {
    icon: <Users size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Foco en el negocio, no solo en la tecnología",
  },
];

export function Credibility() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-white py-[clamp(3rem,6vw,5rem)] border-t border-nexora-gray-100"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Frase principal */}
          <div className="reveal shrink-0 text-center lg:text-left max-w-[320px] lg:max-w-[260px]">
            <p className="font-heading font-medium text-nexora-graphite text-[clamp(1.1rem,2.5vw,1.4rem)] leading-[1.35] tracking-[-0.01em]">
              Por qué elegir<br />
              <span className="text-nexora-accent">Nexora Intelligence</span>
            </p>
          </div>

          {/* Separador vertical — solo desktop */}
          <div
            className="hidden lg:block shrink-0 w-px self-stretch"
            style={{ backgroundColor: "#C49A3C", opacity: 0.35 }}
            aria-hidden="true"
          />

          {/* Bloques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
            {BLOCKS.map((block, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="shrink-0 mt-0.5 text-nexora-accent">
                  {block.icon}
                </span>
                <p className="font-body text-nexora-gray-600 text-[14px] leading-[1.55]">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
