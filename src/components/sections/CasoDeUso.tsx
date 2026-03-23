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
  link?: string;
  estado?: string;
}

const CASOS: Caso[] = [
  {
    empresa: "⚖️ Claudio Ortiz — Abogado independiente",
    titulo: "La web que convirtió presencia digital en captación de clientes",
    problema:
      "No tenía presencia digital profesional. Necesitaba posicionarse como referente en derecho societario, contratos comerciales, acuerdos de accionistas y marcas para captar clientes corporativos.",
    solucion:
      "Sitio web institucional con diseño minimalista premium (estética firma legal boutique), arquitectura de información clara por servicios, formulario de contacto integrado, identidad visual elegante (midnight blue + champagne) y SEO optimizado para búsquedas legales corporativas.",
    resultados: [
      { label: "Más consultas por web", valor: "+180%" },
      { label: "Posición en Google CABA", valor: "Top 3" },
      { label: "Tiempo de carga", valor: "0.9s" },
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Formspree", "Vercel"],
    cta: "Quiero algo así →",
    link: "https://claudio-ortiz-abogado.vercel.app",
  },
  {
    empresa: "💪 OVERGYM — Gimnasio boutique",
    titulo: "De planillas Excel a plataforma digital integral",
    problema:
      "Gestión manual caótica: planillas Excel para clientes y pagos, reservas de clases por WhatsApp, sin control de asistencias, pérdida de información y doble carga de trabajo administrativo.",
    solucion:
      "Plataforma de gestión integral: app móvil PWA para clientes (reserva de clases, estado de membresía), sistema administrativo web (gestión de clientes, pagos, asistencias), panel de control con métricas en tiempo real y sistema de cobros automatizado.",
    resultados: [
      { label: "Clientes gestionados", valor: "+200" },
      { label: "Reservas digitalizadas", valor: "90%" },
      { label: "Reducción tiempo admin", valor: "70%" },
    ],
    tech: ["Next.js PWA", "FastAPI", "PostgreSQL"],
    estado: "En desarrollo activo",
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
        style={{ maxHeight: open ? "2000px" : "0px", opacity: open ? 1 : 0 }}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          {/* Estado */}
          {caso.estado && (
            <span
              className="self-start text-[11px] px-3 py-1 rounded-full border"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                color: "rgba(0,217,255,0.8)",
                borderColor: "rgba(0,217,255,0.2)",
                backgroundColor: "rgba(0,217,255,0.06)",
              }}
            >
              {caso.estado}
            </span>
          )}

          {/* CTA + Link */}
          <div className="flex items-center gap-4 flex-wrap">
            {caso.link && (
              <a
                href={caso.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-[14px] font-medium transition-colors duration-200 hover:opacity-80"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(0,245,160,0.8)" }}
              >
                Ver sitio en vivo ↗
              </a>
            )}
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
