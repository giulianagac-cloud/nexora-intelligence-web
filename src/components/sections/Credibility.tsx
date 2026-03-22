"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { Target, Settings, Cpu, TrendingUp } from "lucide-react";

const BLOCKS = [
  {
    icon: <Target size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Enfoque consultivo",
  },
  {
    icon: <Settings size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Soluciones a medida",
  },
  {
    icon: <Cpu size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Tecnología con criterio",
  },
  {
    icon: <TrendingUp size={20} strokeWidth={1.75} aria-hidden="true" />,
    text: "Visión escalable",
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
          <div className="reveal shrink-0 text-center lg:text-left max-w-[320px] lg:max-w-[280px]">
            <p className="font-heading font-medium text-nexora-graphite text-[clamp(1.05rem,2.2vw,1.3rem)] leading-[1.4] tracking-[-0.01em]">
              Soluciones pensadas para profesionales, pymes y equipos internos
            </p>
          </div>

          {/* Separador vertical — solo desktop */}
          <div
            className="hidden lg:block shrink-0 w-px self-stretch"
            style={{ backgroundColor: "#D1D1D1", opacity: 0.6 }}
            aria-hidden="true"
          />

          {/* Bloques */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
            {BLOCKS.map((block, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="shrink-0 mt-0.5 text-nexora-black">
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
