"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_PILLARS } from "@/lib/constants";

export function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="nosotros"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-white py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Columna izquierda — texto */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <SectionHeading
                subtag="Nosotros"
                title="Sobre Nexora Intelligence"
              />
            </div>

            <div
              className="reveal flex flex-col gap-5"
              style={{ transitionDelay: "100ms" }}
            >
              <p className="font-body text-nexora-gray-500 text-[17px] leading-[1.75]">
                Nexora Intelligence nace con una visión clara: combinar
                análisis, tecnología y comprensión real de negocio para crear
                soluciones digitales modernas, útiles y escalables.
              </p>
              <p className="font-body text-nexora-gray-500 text-[17px] leading-[1.75]">
                Trabajamos con una mirada consultiva, enfocada en entender
                cada necesidad y transformarla en una solución concreta y
                profesional.
              </p>
            </div>
          </div>

          {/* Columna derecha — pilares verticales */}
          <div
            className="reveal flex flex-col gap-0 pt-2 lg:pt-12"
            style={{ transitionDelay: "150ms" }}
          >
            {ABOUT_PILLARS.map((pillar, i) => (
              <div
                key={pillar}
                className={[
                  "flex items-center gap-4 py-4",
                  i < ABOUT_PILLARS.length - 1
                    ? "border-b border-nexora-gray-200"
                    : "",
                ].join(" ")}
              >
                {/* Dot acento */}
                <span
                  className="shrink-0 w-2 h-2 rounded-full bg-nexora-black opacity-70"
                  aria-hidden="true"
                />
                {/* Número de orden tenue */}
                <span className="font-body text-[12px] text-nexora-gray-300 w-5 shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Nombre del pilar */}
                <span className="font-heading font-medium text-nexora-graphite text-[17px] tracking-tight">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
