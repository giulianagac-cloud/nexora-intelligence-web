"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

interface SolutionCard {
  title: string;
  description: string;
  checks: [string, string, string];
  badge: string;
}

const SOLUTIONS: SolutionCard[] = [
  {
    title: "Presencia Web Profesional",
    description:
      "Sitios institucionales y landing pages diseñados para generar confianza y convertir visitantes en clientes.",
    checks: ["Diseño limpio y moderno", "Optimizado para mobile", "Carga rápida y SEO"],
    badge: "Webs",
  },
  {
    title: "Sistemas a Medida",
    description:
      "Aplicaciones digitales para gestionar turnos, clientes, inventarios y operaciones propias de tu negocio.",
    checks: ["Flujos según tu lógica", "Acceso web sin instalación", "Escalable desde el día 1"],
    badge: "Apps",
  },
  {
    title: "Automatización de Procesos",
    description:
      "Eliminamos tareas repetitivas conectando herramientas y digitalizando circuitos que hoy se hacen a mano.",
    checks: ["Menos errores manuales", "Procesos más rápidos", "Integración con tus sistemas"],
    badge: "Automatización",
  },
  {
    title: "Asistentes Inteligentes",
    description:
      "Bots y asistentes conversacionales para responder consultas, derivar leads y automatizar la comunicación.",
    checks: ["Disponible 24/7", "Integración WhatsApp / web", "Respuestas personalizadas"],
    badge: "IA",
  },
  {
    title: "Consultoría Funcional",
    description:
      "Ordenamos requerimientos, definimos arquitectura y diseñamos la solución antes de escribir una sola línea de código.",
    checks: ["Relevamiento detallado", "Documentación clara", "Decisiones informadas"],
    badge: "Consultoría",
  },
  {
    title: "Testing y Documentación",
    description:
      "Validación funcional exhaustiva y documentación técnica para que tu sistema sea confiable y mantenible.",
    checks: ["Casos de prueba formales", "Reporte de defectos", "Manuales de usuario"],
    badge: "Calidad",
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
        <div
          className="reveal mb-12 lg:mb-16"
        >
          <SectionHeading
            subtag="Soluciones"
            title="Soluciones que desarrollamos"
            description="Cada servicio está pensado para resolver necesidades concretas de negocios, profesionales y proyectos nuevos."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <div
              key={solution.title}
              className="reveal flex flex-col gap-4 p-6 rounded-2xl border border-nexora-gray-200 bg-white hover:border-nexora-accent/30 hover:shadow-[0_4px_20px_rgba(27,77,92,0.08)] transition-all duration-300"
              style={{ transitionDelay: `${i * STAGGER}ms` }}
            >
              {/* Badge ámbar */}
              <span
                className="self-start font-body font-medium text-[11px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                style={{
                  color: "#8B6D2A",
                  backgroundColor: "#F5EDD8",
                }}
              >
                {solution.badge}
              </span>

              <h3 className="font-heading font-medium text-nexora-black text-[18px] leading-snug tracking-[-0.01em]">
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
                      strokeWidth={2.5}
                      className="shrink-0 text-nexora-accent"
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
