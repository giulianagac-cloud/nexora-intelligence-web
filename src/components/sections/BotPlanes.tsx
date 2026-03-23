"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

interface Plan {
  numero: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  incluye: string[];
  idealPara: string;
  ejemplos: string[];
  integraciones?: string;
}

const PLANES: Plan[] = [
  {
    numero: "01",
    titulo: "Starter Bot",
    subtitulo: "Automatización simple para consultas frecuentes",
    descripcion:
      "Ideal para negocios que necesitan responder consultas, ordenar información y mejorar atención inicial.",
    incluye: [
      "Respuestas guiadas",
      "Preguntas frecuentes",
      "Links y derivación simple",
      "Branding visual del cliente",
    ],
    idealPara: "PyMEs, profesionales, servicios, gimnasios",
    ejemplos: ["Bot de contacto web", "Bot de turnos", "Bot FAQ comercial"],
  },
  {
    numero: "02",
    titulo: "Smart Bot",
    subtitulo: "Conversación inteligente para procesos dinámicos",
    descripcion:
      "Interpreta intención, sostiene flujo y acompaña tareas internas o administrativas.",
    incluye: [
      "NLP básico",
      "Memoria de flujo",
      "Respuestas contextuales",
      "Decisiones según conversación",
    ],
    idealPara: "RRHH, administración, atención interna",
    ejemplos: ["Bot de licencias", "Bot administrativo", "Bot legal inicial"],
  },
  {
    numero: "03",
    titulo: "Enterprise Bot",
    subtitulo: "Integración real con sistemas y datos",
    descripcion:
      "Preparado para conectarse a plataformas, bases de datos y procesos corporativos.",
    incluye: [
      "Conexión por APIs",
      "Conexión a bases de datos",
      "Conexión a sistemas internos",
      "Respuestas dinámicas reales",
      "Arquitectura escalable",
    ],
    idealPara: "Empresas medianas, procesos complejos",
    ejemplos: ["SAP", "CRM", "Sistemas internos"],
    integraciones: "SAP, CRM, sistemas internos",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className="flex flex-col gap-5 p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,245,160,0.14)]"
      style={{
        backgroundColor: "#141829",
        borderColor: "#2A2E45",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,245,160,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#2A2E45";
      }}
    >
      {/* Número */}
      <span
        className="text-[3rem] font-bold leading-none"
        style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.18)" }}
      >
        {plan.numero}
      </span>

      {/* Título + subtítulo */}
      <div className="flex flex-col gap-1">
        <h3
          className="text-nexora-light text-[22px] font-bold leading-snug"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {plan.titulo}
        </h3>
        <p
          className="text-[13px] leading-snug"
          style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
        >
          {plan.subtitulo}
        </p>
      </div>

      {/* Descripción */}
      <p
        className="text-[14px] leading-[1.6]"
        style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.65)" }}
      >
        {plan.descripcion}
      </p>

      {/* Incluye */}
      <div className="flex flex-col gap-2">
        <span
          className="text-[11px] uppercase tracking-[1.5px]"
          style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
        >
          Incluye
        </span>
        <ul className="flex flex-col gap-1.5">
          {plan.incluye.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[13px]"
              style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.65)" }}
            >
              <span style={{ color: "#00F5A0", fontSize: "12px" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Ideal para */}
      <div
        className="text-[12px] px-3 py-2 rounded-lg"
        style={{
          fontFamily: "var(--font-inter)",
          color: "rgba(0,245,160,0.8)",
          backgroundColor: "rgba(0,245,160,0.06)",
          border: "1px solid rgba(0,245,160,0.15)",
        }}
      >
        <span style={{ color: "rgba(245,245,247,0.40)" }}>Ideal para: </span>
        {plan.idealPara}
      </div>

      {/* Ejemplos */}
      <div className="flex flex-wrap gap-2">
        {(plan.integraciones ? plan.ejemplos : plan.ejemplos).map((ej) => (
          <span
            key={ej}
            className="text-[11px] px-2.5 py-1 rounded-full border"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              color: "rgba(245,245,247,0.45)",
              borderColor: "#2A2E45",
              backgroundColor: "rgba(42,46,69,0.4)",
            }}
          >
            {ej}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contacto"
        className="mt-auto inline-flex items-center gap-2 rounded-lg font-semibold text-[14px] transition-all duration-200 hover:scale-[1.02] text-nexora-dark"
        style={{
          backgroundColor: "#00F5A0",
          padding: "12px 24px",
          fontFamily: "var(--font-inter)",
          boxShadow: "0 0 16px rgba(0,245,160,0.25)",
        }}
      >
        Consultar por este plan →
      </a>
    </div>
  );
}

export function BotPlanes() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="bots"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4rem,8vw,8rem)]"
      style={{ backgroundColor: "#0A0E27" }}
    >
      {/* Título */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="reveal mb-12">
          <p
            className="text-nexora-neon text-[13px] mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            // BOTS_IA.planes
          </p>
          <h2
            className="text-nexora-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
          >
            Planes de Asistentes IA
          </h2>
          <p
            className="mt-3 text-[16px] leading-[1.6] max-w-[560px]"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}
          >
            Tres niveles de automatización conversacional. Desde respuestas simples hasta integración con tus sistemas reales.
          </p>
        </div>
      </div>

      {/* Planes — scroll horizontal en mobile, grid en desktop */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-5 overflow-x-auto overflow-y-visible snap-x snap-mandatory scrollbar-hide px-6 lg:px-8 pb-6 md:grid md:grid-cols-3 md:overflow-visible reveal">
          {PLANES.map((plan) => (
            <div key={plan.numero} className="flex-shrink-0 w-[82vw] sm:w-[68vw] md:w-auto snap-center">
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      {/* Nota RAG */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div
          className="reveal mt-8 flex items-start gap-3 p-5 rounded-xl border"
          style={{
            borderColor: "rgba(0,217,255,0.2)",
            backgroundColor: "rgba(0,217,255,0.04)",
          }}
        >
          <span className="text-[18px] shrink-0">💡</span>
          <p
            className="text-[13px] leading-[1.6]"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.55)" }}
          >
            Todos los planes pueden evolucionar con{" "}
            <span style={{ color: "#00D9FF" }}>capa RAG</span>{" "}
            (consulta documental sobre reglamentos, manuales e instructivos internos)
          </p>
        </div>
      </div>
    </section>
  );
}
