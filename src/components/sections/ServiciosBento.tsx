"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Zap, Smartphone, RefreshCw, Bot, Target, CheckCircle2, Settings } from "lucide-react";

const CARD_BASE = [
  "relative flex flex-col gap-4 p-7 rounded-xl border border-nexora-border",
  "transition-all duration-300 ease-out",
  "hover:-translate-y-1 hover:border-nexora-neon/40 hover:shadow-[0_8px_32px_rgba(0,245,160,0.12)]",
].join(" ");

function BentoCard({
  icon,
  tagline,
  bullets,
  hoverReveal,
  className = "",
}: {
  icon: React.ReactNode;
  tagline: string;
  bullets: string[];
  hoverReveal?: string;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${CARD_BASE} ${className}`}
      style={{ backgroundColor: "#141829" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ícono */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: "rgba(0,245,160,0.08)", border: "1px solid rgba(0,245,160,0.2)" }}
      >
        <span style={{ color: "#00F5A0" }}>{icon}</span>
      </div>

      {/* Tagline */}
      <p
        className="text-nexora-neon text-[16px] font-semibold leading-snug"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {tagline}
      </p>

      {/* Bullets */}
      <ul className="flex flex-col gap-1.5">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-[13px]"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}
          >
            <span className="text-nexora-neon text-[10px]">→</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Hover reveal */}
      {hoverReveal && (
        <p
          className="text-[12px] mt-auto pt-2 transition-all duration-300"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            color: "#FF3D71",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
          }}
        >
          {hoverReveal}
        </p>
      )}
    </div>
  );
}

function BotIACard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={CARD_BASE}
      style={{ backgroundColor: "#141829" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: "rgba(0,245,160,0.08)", border: "1px solid rgba(0,245,160,0.2)" }}
      >
        <span style={{ color: "#00F5A0" }}><Bot size={18} strokeWidth={1.75} /></span>
      </div>
      <p className="text-nexora-neon text-[16px] font-semibold leading-snug" style={{ fontFamily: "var(--font-outfit)" }}>
        Asistentes Inteligentes (Bots IA)
      </p>
      <p className="text-[13px]" style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}>
        Bots que trabajan 24/7 sin contratar
      </p>
      <ul className="flex flex-col gap-1.5">
        {["3 planes: Starter, Smart, Enterprise", "RRHH, Finanzas, Atención al cliente", "Desde chatbot simple hasta APIs"].map((b) => (
          <li key={b} className="flex items-center gap-2 text-[13px]" style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}>
            <span className="text-nexora-neon text-[10px]">→</span>{b}
          </li>
        ))}
      </ul>
      <p
        className="text-[12px] transition-all duration-300"
        style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#FF3D71", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(6px)" }}
      >
        → Bot HR piloto: licencias, vacaciones, consultas
      </p>
      <a
        href="#bots"
        className="text-[13px] mt-auto w-fit transition-colors duration-200 hover:opacity-80"
        style={{ fontFamily: "var(--font-inter)", color: "#00F5A0" }}
      >
        Ver planes de bots →
      </a>
    </div>
  );
}

export function ServiciosBento() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="servicios"
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
            // SERVICIOS.map(solución =&gt; impacto)
          </p>
          <h2
            className="text-nexora-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
          >
            Lo que construimos
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">

          {/* a) Desarrollo Web — large en desktop */}
          <BentoCard
            icon={<Zap size={18} strokeWidth={1.75} />}
            tagline="Sitios que convierten visitas en clientes"
            bullets={["Diseño moderno y responsive", "Identidad visual profesional", "Performance y SEO optimizado"]}
            hoverReveal="→ Web de abogado que aumentó consultas +180%"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          />

          {/* b) Apps y Sistemas */}
          <BentoCard
            icon={<Smartphone size={18} strokeWidth={1.75} />}
            tagline="Del caos operativo al orden digital"
            bullets={["Gestión de clientes y turnos", "Sistemas administrativos a medida", "Escalabilidad y seguridad"]}
            hoverReveal="→ Sistema para gimnasio con gestión integral"
          />

          {/* c) Automatización */}
          <BentoCard
            icon={<RefreshCw size={18} strokeWidth={1.75} />}
            tagline="Menos fricción, más flujo operativo"
            bullets={["Procesos digitalizados end-to-end", "Flujos optimizados y sin errores", "Tiempo recuperado para tu negocio"]}
            hoverReveal="→ Automatización que ahorra 20hs/semana"
          />

          {/* d) Bots IA */}
          <BotIACard />

          {/* e) Consultoría Funcional — wide */}
          <BentoCard
            icon={<Target size={18} strokeWidth={1.75} />}
            tagline="Relevamiento que encuentra lo que falta"
            bullets={["Análisis profundo de procesos", "Estructura clara y documentación", "Visión estratégica de negocio"]}
            hoverReveal="→ Consultoría que detectó cuello de botella"
            className="sm:col-span-2"
          />

          {/* f) Testing + Docs — wide */}
          <BentoCard
            icon={<CheckCircle2 size={18} strokeWidth={1.75} />}
            tagline="Calidad funcional garantizada"
            bullets={["Validación exhaustiva de funcionalidades", "Documentación técnica clara", "Manuales de usuario comprensibles"]}
            className="sm:col-span-2"
          />

          {/* g) En construcción */}
          <div
            className="flex flex-col gap-4 p-7 rounded-xl border-2 border-dashed border-nexora-border/60 sm:col-span-2 lg:col-span-3"
            style={{ backgroundColor: "rgba(20,24,41,0.5)" }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(42,46,69,0.5)", border: "1px solid rgba(42,46,69,0.8)" }}>
              <Settings size={18} strokeWidth={1.75} style={{ color: "rgba(245,245,247,0.3)" }} />
            </div>
            <p
              className="text-[15px] font-medium"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.4)" }}
            >
              // En construcción
            </p>
            <ul className="flex flex-col gap-1.5">
              {["Capacitación en IA aplicada", "Asesoría legal para PyMEs", "[Tu próximo proyecto]"].map((item) => (
                <li
                  key={item}
                  className="text-[13px]"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.30)" }}
                >
                  → {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="text-[13px] mt-auto w-fit transition-colors duration-200 hover:opacity-80"
              style={{ fontFamily: "var(--font-inter)", color: "#00F5A0" }}
            >
              Quiero estar en early access →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
