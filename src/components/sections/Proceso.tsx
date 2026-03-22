"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const PASOS = [
  {
    num: "01",
    title: "Relevamiento",
    desc: "Te hacemos las preguntas incómodas",
  },
  {
    num: "02",
    title: "Propuesta",
    desc: "Sin letra chica ni sorpresas",
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Ves avances cada semana",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Sin bugs de último momento",
  },
  {
    num: "05",
    title: "Soporte",
    desc: "No te dejamos solo",
  },
];

function PasoCard({ paso, index }: { paso: typeof PASOS[0]; index: number }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setActive(true), index * 150);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 p-6 rounded-xl border transition-all duration-500"
      style={{
        backgroundColor: "#141829",
        borderColor: active ? "rgba(0,245,160,0.5)" : "#2A2E45",
        transform: active ? "scale(1.03)" : "scale(1)",
      }}
    >
      {/* Número grande decorativo */}
      <span
        className="text-[3rem] leading-none font-bold select-none"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          color: "#00F5A0",
          opacity: 0.25,
        }}
      >
        {paso.num}
      </span>

      <div className="flex flex-col gap-1">
        <h3
          className="text-nexora-light text-[16px] font-semibold"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {paso.title}
        </h3>
        <p
          className="text-[14px] leading-[1.55]"
          style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}
        >
          {paso.desc}
        </p>
      </div>
    </div>
  );
}

export function Proceso() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="proceso"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4rem,8vw,8rem)]"
      style={{ backgroundColor: "#0A0E27" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Título */}
        <div className="reveal mb-12">
          <p
            className="text-nexora-neon text-[13px] mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            // PROCESO.filter(paso =&gt; agrega_valor)
          </p>
          <h2
            className="text-nexora-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
          >
            Cómo trabajamos
          </h2>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 reveal">
          {PASOS.map((paso, i) => (
            <PasoCard key={paso.num} paso={paso} index={i} />
          ))}
        </div>

        {/* Línea conectora visual (solo desktop) */}
        <div className="hidden lg:flex items-center justify-between mt-6 px-8 reveal">
          {PASOS.map((_, i) => (
            <div key={i} className="flex items-center flex-1">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: "#00F5A0" }}
              />
              {i < PASOS.length - 1 && (
                <div
                  className="flex-1 h-px mx-1"
                  style={{ backgroundColor: "rgba(0,245,160,0.25)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
