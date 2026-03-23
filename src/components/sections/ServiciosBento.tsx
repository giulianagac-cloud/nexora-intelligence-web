"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Zap, Smartphone, RefreshCw, Bot, Target, CheckCircle2, Settings } from "lucide-react";

const CARDS = [
  {
    id: "desarrollo-web",
    icon: Zap,
    titulo: "Desarrollo de Páginas Web",
    tagline: "Sitios que convierten visitas en clientes",
    bullets: ["Diseño moderno y responsive", "Identidad visual profesional", "Performance y SEO optimizado"],
    casoUso: "→ Web de abogado que aumentó consultas +180%",
  },
  {
    id: "apps-sistemas",
    icon: Smartphone,
    titulo: "Apps y Sistemas a Medida",
    tagline: "Del caos operativo al orden digital",
    bullets: ["Gestión de clientes y turnos", "Sistemas administrativos personalizados", "Escalabilidad y seguridad"],
    casoUso: "→ Sistema para gimnasio con gestión integral",
  },
  {
    id: "automatizacion",
    icon: RefreshCw,
    titulo: "Automatización de Procesos",
    tagline: "Menos fricción, más flujo operativo",
    bullets: ["Procesos digitalizados end-to-end", "Flujos optimizados sin errores", "Tiempo recuperado para tu negocio"],
    casoUso: "→ Automatización que ahorra 20hs/semana",
  },
  {
    id: "bots-ia",
    icon: Bot,
    titulo: "Asistentes Inteligentes (Bots IA)",
    tagline: "Bots que trabajan 24/7 sin contratar",
    bullets: ["3 planes: Starter, Smart, Enterprise", "RRHH, Finanzas, Atención al cliente", "Desde chatbot simple hasta APIs"],
    casoUso: "→ Bot HR: licencias, vacaciones, consultas internas",
    link: { label: "Ver planes de bots →", href: "#bots" },
  },
  {
    id: "consultoria",
    icon: Target,
    titulo: "Consultoría Funcional",
    tagline: "Relevamiento que encuentra lo que falta",
    bullets: ["Análisis profundo de procesos", "Estructura clara y documentación", "Visión estratégica de negocio"],
    casoUso: "→ Consultoría que detectó cuello de botella",
  },
  {
    id: "testing-docs",
    icon: CheckCircle2,
    titulo: "Testing y Documentación",
    tagline: "Calidad funcional garantizada",
    bullets: ["Validación exhaustiva de funcionalidades", "Documentación técnica clara", "Manuales de usuario comprensibles"],
  },
  {
    id: "proximo",
    icon: Settings,
    titulo: "// En construcción",
    tagline: "",
    bullets: ["Capacitación en IA aplicada", "Asesoría legal para PyMEs", "[Tu próximo proyecto]"],
    link: { label: "Quiero estar en early access →", href: "#contacto" },
    special: true,
  },
] as const;

export function ServiciosBento() {
  const sectionRef = useScrollReveal();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="servicios"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4rem,8vw,8rem)]"
      style={{ backgroundColor: "#0A0E27" }}
    >
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="reveal mb-8">
          <p
            className="text-nexora-neon text-[13px] mb-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            // LO QUE CONSTRUIMOS
          </p>
          <h2
            className="text-nexora-light text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
          >
            Lo que construimos
          </h2>
          <p
            className="flex items-center gap-2 mt-4 md:hidden text-[14px]"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.40)" }}
          >
            Deslizá para ver más
            <span className="text-nexora-neon" style={{ animation: "cursor-blink 1s step-end infinite" }}>→</span>
          </p>
        </div>
      </div>

      {/* Cards — scroll horizontal en mobile, grid en desktop */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory scrollbar-hide px-6 lg:px-8 pb-6 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredId === card.id;

            if ("special" in card && card.special) {
              return (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-[82vw] sm:w-[68vw] md:w-auto snap-center"
                >
                  <div
                    className="flex flex-col gap-4 p-7 rounded-xl border-2 border-dashed h-full"
                    style={{
                      backgroundColor: "rgba(20,24,41,0.5)",
                      borderColor: "rgba(42,46,69,0.6)",
                      minHeight: 280,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(42,46,69,0.5)", border: "1px solid rgba(42,46,69,0.8)" }}
                    >
                      <Icon size={18} strokeWidth={1.75} style={{ color: "rgba(245,245,247,0.3)" }} />
                    </div>
                    <p
                      className="text-[15px] font-medium"
                      style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.4)" }}
                    >
                      {card.titulo}
                    </p>
                    <ul className="flex flex-col gap-2 flex-1">
                      {card.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-[14px]"
                          style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.30)" }}
                        >
                          → {b}
                        </li>
                      ))}
                    </ul>
                    {"link" in card && card.link && (
                      <a
                        href={card.link.href}
                        className="text-[13px] w-fit transition-colors duration-200 hover:opacity-80"
                        style={{ fontFamily: "var(--font-inter)", color: "#00F5A0" }}
                      >
                        {card.link.label}
                      </a>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={card.id}
                className="flex-shrink-0 w-[82vw] sm:w-[68vw] md:w-auto snap-center"
              >
                <div
                  className="relative flex flex-col gap-4 p-7 rounded-xl border transition-all duration-300 h-full"
                  style={{
                    backgroundColor: "#141829",
                    borderColor: isHovered ? "rgba(0,245,160,0.35)" : "#2A2E45",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 8px 32px rgba(0,245,160,0.12)" : "none",
                    minHeight: 280,
                  }}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(0,245,160,0.08)", border: "1px solid rgba(0,245,160,0.2)" }}
                  >
                    <Icon size={18} strokeWidth={1.75} style={{ color: "#00F5A0" }} />
                  </div>

                  <h3
                    className="text-nexora-light text-[19px] font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {card.titulo}
                  </h3>

                  <p
                    className="text-nexora-neon text-[14px] font-medium leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {card.tagline}
                  </p>

                  <ul className="flex flex-col gap-2 flex-1">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[14px]"
                        style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.65)" }}
                      >
                        <span className="text-nexora-neon text-[10px] shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {"casoUso" in card && card.casoUso && (
                    <p
                      className="text-[13px] transition-opacity duration-300 opacity-100 md:opacity-0"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        color: "#FF3D71",
                        ...(isHovered ? { opacity: 1 } : {}),
                      }}
                    >
                      {card.casoUso}
                    </p>
                  )}

                  {"link" in card && card.link && (
                    <a
                      href={card.link.href}
                      className="text-[13px] w-fit transition-colors duration-200 hover:opacity-80"
                      style={{ fontFamily: "var(--font-inter)", color: "#00F5A0" }}
                    >
                      {card.link.label}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
