"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { ChevronDown } from "lucide-react";

interface Caso {
  empresa: string;
  titulo: string;
  problema: string;
  solucion: string;
  resultados: { label: string; valor: string }[];
  tech: string[];
  cta?: string;
}

const CASOS: Caso[] = [
  {
    empresa: "Estudio contable · 12 empleados",
    titulo: "El bot de RH que nos devolvió 15hs/semana",
    problema:
      "RRHH colapsado con consultas sobre recibos, vacaciones y licencias que llegaban por WhatsApp, email y en persona.",
    solucion:
      "Bot con RAG sobre documentación interna + integración con el sistema de RRHH para respuestas precisas y contextualizadas.",
    resultados: [
      { label: "Consultas resueltas", valor: "847" },
      { label: "Escalaciones incorrectas", valor: "0" },
      { label: "Menos tiempo en RRHH", valor: "60%" },
    ],
    tech: ["OpenAI GPT-4", "Pinecone", "Slack"],
    cta: "Quiero algo así →",
  },
  {
    empresa: "Pyme industrial · 45 empleados",
    titulo: "Reportes que pasaron de 8 horas a 15 minutos",
    problema:
      "2 días por semana consolidando datos de 5 sistemas distintos en planillas Excel. Errores constantes y decisiones tardías.",
    solucion:
      "Pipeline automatizado con extracción, transformación y visualización en tiempo real. Sin intervención manual.",
    resultados: [
      { label: "Reducción en tiempo", valor: "90%" },
      { label: "Errores en reportes", valor: "0" },
      { label: "Frecuencia", valor: "Real-time" },
    ],
    tech: ["Python", "PostgreSQL", "Metabase"],
  },
  {
    empresa: "Clínica odontológica · 3 sucursales",
    titulo: "De 2% a 7% de conversión en 8 semanas",
    problema:
      "Sitio genérico con baja tasa de contacto. El tráfico existía, la conversión no.",
    solucion:
      "Rediseño total con copy de conversión + formularios optimizados + carga ultra-rápida.",
    resultados: [
      { label: "Conversión", valor: "3.5x" },
      { label: "Más consultas mensuales", valor: "+200%" },
      { label: "Tiempo de carga", valor: "1.2s" },
    ],
    tech: ["Next.js", "Tailwind", "Resend"],
  },
];

function CasoCard({ caso, index }: { caso: Caso; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl border transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: "#141829",
        borderColor: open ? "rgba(0,245,160,0.3)" : "#2A2E45",
      }}
    >
      {/* Header colapsado */}
      <button
        className="w-full flex items-start justify-between gap-4 p-6 text-left"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <div className="flex flex-col gap-1">
          <span
            className="text-[11px] uppercase tracking-[1.5px]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.40)" }}
          >
            {caso.empresa}
          </span>
          <h3
            className="text-nexora-light text-[18px] font-semibold leading-snug"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {caso.titulo}
          </h3>
          {!open && (
            <span
              className="text-[13px] mt-1"
              style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.40)" }}
            >
              Leer caso completo ↓
            </span>
          )}
        </div>
        <ChevronDown
          size={20}
          strokeWidth={1.75}
          className="shrink-0 mt-1 transition-transform duration-300"
          style={{
            color: "#00F5A0",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Contenido expandido */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "700px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-6 flex flex-col gap-6">
          {/* Separador */}
          <div className="h-px" style={{ backgroundColor: "#2A2E45" }} />

          {/* Problema + Solución */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span
                className="text-[11px] uppercase tracking-[1.5px]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
              >
                // Problema
              </span>
              <p
                className="text-[14px] leading-[1.6]"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.70)" }}
              >
                {caso.problema}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span
                className="text-[11px] uppercase tracking-[1.5px]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
              >
                // Solución
              </span>
              <p
                className="text-[14px] leading-[1.6]"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.70)" }}
              >
                {caso.solucion}
              </p>
            </div>
          </div>

          {/* Resultados */}
          <div className="grid grid-cols-3 gap-4">
            {caso.resultados.map((r) => (
              <div key={r.label} className="flex flex-col gap-1">
                <span
                  className="text-[1.6rem] font-bold leading-none"
                  style={{ fontFamily: "var(--font-outfit)", color: "#00F5A0" }}
                >
                  {r.valor}
                </span>
                <span
                  className="text-[12px]"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
                >
                  {r.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="text-[11px] uppercase tracking-[1.5px]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.30)" }}
            >
              Stack:
            </span>
            {caso.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-full border"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  color: "rgba(245,245,247,0.50)",
                  borderColor: "#2A2E45",
                  backgroundColor: "rgba(42,46,69,0.4)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          {caso.cta && (
            <a
              href="#contacto"
              className="self-start text-[14px] font-medium transition-colors duration-200 hover:opacity-80"
              style={{ fontFamily: "var(--font-inter)", color: "#FF3D71" }}
            >
              {caso.cta}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function CasoDeUso() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="casos"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4rem,8vw,8rem)]"
      style={{ backgroundColor: "#0A0E27" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Título */}
        <div className="reveal mb-10">
          <p
            className="text-nexora-neon text-[13px] mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            // CASOS_REALES.slice(0, 3)
          </p>
          <h2
            className="text-nexora-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
          >
            Resultados reales
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4 reveal">
          {CASOS.map((caso, i) => (
            <CasoCard key={i} caso={caso} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
