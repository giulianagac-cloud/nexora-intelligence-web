"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

function TerminalWidget() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const proyectos = useCountUp(4, 1800, started);
  const bots = useCountUp(2, 1600, started);
  const clientes = useCountUp(3, 1400, started);

  return (
    <div
      ref={ref}
      className="w-full max-w-[480px] rounded-xl border border-nexora-border overflow-hidden"
      style={{ backgroundColor: "#141829" }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-nexora-border">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span
          className="ml-3 text-[12px] text-nexora-neon/50"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          // Sistema activo
        </span>
      </div>

      {/* Terminal body */}
      <div className="px-6 py-8 flex flex-col gap-6">
        <Metric
          label="Proyectos en desarrollo:"
          value={proyectos}
          suffix=""
          started={started}
        />
        <Metric
          label="Bots en construcción:"
          value={bots}
          suffix=""
          started={started}
        />
        <Metric
          label="Clientes activos:"
          value={clientes}
          suffix=""
          started={started}
        />
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
  formatted,
  decimal,
  started,
}: {
  label: string;
  value: number;
  suffix: string;
  formatted?: boolean;
  decimal?: boolean;
  started: boolean;
}) {
  const display = decimal
    ? (value / 10).toFixed(1) + suffix
    : formatted
    ? value.toLocaleString("es-AR") + suffix
    : value + suffix;

  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-[12px] text-nexora-light/60"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        {label}
      </span>
      <span
        className="text-[2.2rem] font-medium leading-none"
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          color: "#00F5A0",
        }}
      >
        {started ? display : "0"}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-[68px]"
      style={{ backgroundColor: "#0A0E27" }}
    >
      {/* Mesh gradient animado */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(0,245,160,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(0,217,255,0.08) 0%, transparent 55%)",
          animation: "mesh-float 20s ease-in-out infinite",
        }}
      />

      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(42,46,69,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 lg:gap-10 items-center">

          {/* ── Columna izquierda ── */}
          <div className="flex flex-col gap-8">
            {/* Subtag mono */}
            <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}>
              <span
                className="text-nexora-neon text-[14px]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                &gt; consultora_digital
              </span>
            </div>

            {/* Título */}
            <div
              className="flex flex-col gap-1"
              style={{ animation: "slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "0.15s" }}
            >
              <h1
                className="text-nexora-light leading-[1.1]"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem,5vw,3.8rem)",
                }}
              >
                <span className="block">&gt; Tu operación funciona.</span>
                <span className="block mt-1">
                  &gt; Nosotros la hacemos{" "}
                  <span style={{ color: "#00F5A0" }}>
                    escalar
                    <span
                      style={{ animation: "cursor-blink 1s step-end infinite" }}
                      aria-hidden="true"
                    >_</span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtítulo */}
            <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "0.3s" }}>
              <p
                className="text-[17px] leading-[1.7] max-w-[520px]"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.70)" }}
              >
                Diseñamos webs, sistemas, automatizaciones y asistentes digitales
                para transformar necesidades reales en soluciones concretas.
              </p>
            </div>

            {/* CTA */}
            <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "0.45s" }}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-lg text-nexora-dark font-semibold text-[16px] transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: "#00F5A0",
                  padding: "16px 32px",
                  fontFamily: "var(--font-inter)",
                  boxShadow: "var(--shadow-neon)",
                }}
              >
                Hablemos de tu proyecto →
              </a>
            </div>
          </div>

          {/* ── Columna derecha: Terminal ── */}
          <div
            className="hidden lg:flex justify-center"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "0.6s" }}
          >
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
