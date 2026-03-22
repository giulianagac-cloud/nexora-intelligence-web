"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

interface SolutionCard {
  title: string;
  description: string;
  checks: [string, string, string];
  badge?: string;
}

const SOLUTIONS: SolutionCard[] = [
  {
    badge: "Presencia digital",
    title: "Desarrollo Web",
    description:
      "Sitios institucionales y landing pages con diseño profesional.",
    checks: ["Diseño moderno", "Responsive", "Identidad profesional"],
  },
  {
    badge: "Solución a medida",
    title: "Apps y Sistemas",
    description:
      "Soluciones digitales para gestión de clientes, turnos y circuitos internos.",
    checks: ["Lógica personalizada", "Organización operativa", "Escalabilidad"],
  },
  {
    badge: "Eficiencia real",
    title: "Automatización",
    description:
      "Digitalizamos tareas y optimizamos flujos operativos.",
    checks: ["Menos fricción", "Más orden", "Mejor operación"],
  },
  {
    title: "Asistentes Inteligentes",
    description:
      "Bots y asistentes digitales para soporte y automatización.",
    checks: ["Consultas ágiles", "Respuestas inmediatas", "Escalabilidad futura"],
  },
  {
    title: "Consultoría Funcional",
    description:
      "Relevamos necesidades y diseñamos soluciones alineadas.",
    checks: ["Análisis", "Estructura", "Visión de negocio"],
  },
  {
    title: "Testing y Documentación",
    description:
      "Validación funcional y documentación clara.",
    checks: ["Calidad funcional", "Orden documental", "Claridad técnica"],
  },
];

const STAGGER = 70;

export function Solutions() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="soluciones"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-white py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="reveal mb-12 lg:mb-16">
          <SectionHeading
            subtag="Soluciones"
            title="Soluciones que desarrollamos"
            description="Herramientas digitales pensadas para resolver necesidades reales, ordenar procesos y potenciar proyectos."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <div
              key={solution.title}
              className="reveal flex flex-col gap-4 p-6 rounded-xl border border-[#F0F0F0] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300"
              style={{ transitionDelay: `${i * STAGGER}ms` }}
            >
              {/* Badge coral — solo primeras 3 */}
              {solution.badge && (
                <span
                  className="self-start font-body font-medium text-[11px] tracking-[0.12em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color: "#993C1D",
                    backgroundColor: "#FAECE7",
                  }}
                >
                  {solution.badge}
                </span>
              )}

              <h3 className="font-body font-semibold text-nexora-black text-[16px] leading-snug">
                {solution.title}
              </h3>

              <p className="font-body text-nexora-gray-500 text-[14px] leading-[1.65] flex-1">
                {solution.description}
              </p>

              <ul className="flex flex-col gap-2 pt-1">
                {solution.checks.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check
                      size={14}
                      strokeWidth={1.5}
                      className="shrink-0 text-nexora-black"
                      aria-hidden="true"
                    />
                    <span className="font-body text-[13px] text-nexora-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
