"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIATOR_PILLARS } from "@/lib/constants";

/* SVG abstracto: idea de "proceso → resultado" — nodos conectados */
function ProcessAbstract() {
  return (
    <svg
      viewBox="0 0 380 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[360px] h-auto"
      aria-hidden="true"
    >
      {/* Línea de flujo principal horizontal */}
      <line x1="40" y1="170" x2="340" y2="170" stroke="#1B4D5C" strokeWidth="1" opacity="0.15" />

      {/* Nodo 1 — Análisis */}
      <circle cx="80"  cy="170" r="28" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.35" />
      <circle cx="80"  cy="170" r="6"  fill="#1B4D5C" opacity="0.55" />

      {/* Nodo 2 — Proceso */}
      <circle cx="190" cy="170" r="36" stroke="#1B4D5C" strokeWidth="2"   opacity="0.45" />
      <circle cx="190" cy="170" r="8"  fill="#1B4D5C" opacity="0.7"  />

      {/* Nodo 3 — Resultado */}
      <circle cx="300" cy="170" r="28" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.35" />
      <circle cx="300" cy="170" r="6"  fill="#1B4D5C" opacity="0.55" />

      {/* Conectores con flecha */}
      <line x1="108" y1="170" x2="154" y2="170" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <polyline points="148,164 154,170 148,176" stroke="#1B4D5C" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />

      <line x1="226" y1="170" x2="272" y2="170" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <polyline points="266,164 272,170 266,176" stroke="#1B4D5C" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Labels de nodos */}
      <text x="80"  y="218" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#1B4D5C" opacity="0.5" letterSpacing="1.5">ANÁLISIS</text>
      <text x="190" y="226" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#1B4D5C" opacity="0.5" letterSpacing="1.5">PROCESO</text>
      <text x="300" y="218" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#1B4D5C" opacity="0.5" letterSpacing="1.5">SOLUCIÓN</text>

      {/* Arco superior decorativo sobre nodo central */}
      <path d="M 154 134 A 36 36 0 0 1 226 134" stroke="#1B4D5C" strokeWidth="1" opacity="0.2" strokeLinecap="round" />

      {/* Líneas verticales decorativas — fondo */}
      <line x1="190" y1="50"  x2="190" y2="100" stroke="#1B4D5C" strokeWidth="1" opacity="0.12" />
      <line x1="190" y1="240" x2="190" y2="290" stroke="#1B4D5C" strokeWidth="1" opacity="0.12" />

      {/* Pequeños ticks en los extremos del eje */}
      <line x1="40" y1="162" x2="40" y2="178" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      <line x1="340" y1="162" x2="340" y2="178" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />

      {/* Puntos decorativos off-axis */}
      <circle cx="190" cy="72"  r="3" fill="#1B4D5C" opacity="0.25" />
      <circle cx="190" cy="268" r="3" fill="#1B4D5C" opacity="0.25" />
      <circle cx="40"  cy="170" r="3.5" fill="#1B4D5C" opacity="0.3" />
      <circle cx="340" cy="170" r="3.5" fill="#1B4D5C" opacity="0.3" />

      {/* Anillo exterior tenue centrado en nodo central */}
      <circle cx="190" cy="170" r="70" stroke="#1B4D5C" strokeWidth="0.75" opacity="0.1" strokeDasharray="4 6" />
    </svg>
  );
}

export function Differentiator() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="diferencial"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-gray-50 py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Columna izquierda — texto */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <SectionHeading
                subtag="Diferencial"
                title="Tecnología con visión de negocio"
              />
            </div>

            <div className="reveal" style={{ transitionDelay: "100ms" }}>
              <p className="font-body text-nexora-gray-500 text-[17px] leading-[1.75] max-w-[480px]">
                En Nexora Intelligence no se trata solo de desarrollar una
                herramienta. Se trata de entender el problema, ordenar el
                proceso y construir una solución útil, clara y alineada con
                cada necesidad.
              </p>
            </div>

            {/* Pills de pilares */}
            <div
              className="reveal flex flex-wrap gap-3 pt-2"
              style={{ transitionDelay: "200ms" }}
            >
              {DIFFERENTIATOR_PILLARS.map((pillar) => (
                <span
                  key={pillar}
                  className={[
                    "font-body font-medium text-[13px] tracking-[0.06em]",
                    "px-4 py-2 rounded-full",
                    "border border-nexora-accent/40 text-nexora-accent",
                    "bg-nexora-accent-subtle/60",
                  ].join(" ")}
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha — visual abstracto */}
          <div
            className="reveal flex items-center justify-center"
            style={{ transitionDelay: "150ms" }}
          >
            <ProcessAbstract />
          </div>
        </div>
      </div>
    </section>
  );
}
