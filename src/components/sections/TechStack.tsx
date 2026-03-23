"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface Tech {
  name: string;
  tooltip: string;
}

interface Category {
  label: string;
  techs: Tech[];
}

const STACK: Category[] = [
  {
    label: "Frontend",
    techs: [
      { name: "React", tooltip: "UI components declarativos y reutilizables" },
      { name: "Next.js", tooltip: "Framework full-stack con SSR y App Router" },
      { name: "Tailwind CSS", tooltip: "Utility-first CSS, diseño rápido y consistente" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", tooltip: "Runtime JS para APIs y servicios en tiempo real" },
      { name: "Python", tooltip: "Automatización, scripts y pipelines de datos" },
      { name: "PostgreSQL", tooltip: "Base de datos relacional robusta y escalable" },
    ],
  },
  {
    label: "IA & Data",
    techs: [
      { name: "OpenAI API", tooltip: "GPT-4 para generación de texto y RAG" },
      { name: "LangChain", tooltip: "Orquestación de LLMs y cadenas de razonamiento" },
      { name: "Pinecone", tooltip: "Base vectorial para búsqueda semántica eficiente" },
    ],
  },
  {
    label: "Deploy",
    techs: [
      { name: "Vercel", tooltip: "Deploy de frontends Next.js con edge network" },
      { name: "Railway", tooltip: "Deploy de backends y bases de datos en la nube" },
      { name: "AWS", tooltip: "Infraestructura cloud escalable y confiable" },
    ],
  },
];

function TechBadge({ tech }: { tech: Tech }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover((h) => !h)}
    >
      <div
        className="px-4 py-3 rounded-lg border text-center cursor-default transition-all duration-200"
        style={{
          backgroundColor: "#141829",
          borderColor: hover ? "rgba(0,245,160,0.35)" : "#2A2E45",
          boxShadow: hover ? "0 4px 20px rgba(0,245,160,0.08)" : "none",
        }}
      >
        <span
          className="text-[14px] font-medium"
          style={{
            fontFamily: "var(--font-inter)",
            color: hover ? "#00F5A0" : "rgba(245,245,247,0.80)",
          }}
        >
          {tech.name}
        </span>
      </div>

      {/* Tooltip */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[180px] pointer-events-none transition-all duration-200 z-20"
        style={{
          opacity: hover ? 1 : 0,
          transform: `translateX(-50%) translateY(${hover ? "0px" : "6px"})`,
        }}
      >
        <div
          className="px-3 py-2 rounded-lg border text-center"
          style={{
            backgroundColor: "#0A0E27",
            borderColor: "rgba(0,245,160,0.2)",
          }}
        >
          <p
            className="text-[11px] leading-[1.45]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.70)" }}
          >
            {tech.tooltip}
          </p>
        </div>
        {/* Flecha */}
        <div
          className="w-2 h-2 mx-auto -mt-1 rotate-45 border-r border-b"
          style={{ backgroundColor: "#0A0E27", borderColor: "rgba(0,245,160,0.2)" }}
        />
      </div>
    </div>
  );
}

export function TechStack() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="stack"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4rem,8vw,8rem)]"
      style={{ backgroundColor: "#141829" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Título */}
        <div className="reveal mb-12">
          <p
            className="text-nexora-neon text-[13px] mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            // STACK.tecnologías
          </p>
          <h2
            className="text-nexora-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
          >
            Tecnologías que usamos
          </h2>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {STACK.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-4">
              <span
                className="text-[11px] uppercase tracking-[2px]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
              >
                {cat.label}
              </span>
              <div className="flex flex-col gap-2">
                {cat.techs.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
