import { Button } from "@/components/ui/Button";

/* Cada elemento entra con fadeInUp, el delay se pasa como inline style */
function Animated({
  delay,
  children,
  className = "",
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        animation: `fadeInUp 0.65s ease-out both`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-nexora-white"
    >
      {/* Fondo: dot pattern sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #A0A0A0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.18,
        }}
      />

      {/* Gradiente de borde inferior para fade out del dot pattern */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #FAFAFA)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full py-28 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div className="flex flex-col gap-7 max-w-[600px]">
            <Animated delay={80}>
              <span className="font-body font-medium text-nexora-accent text-[12px] tracking-[0.18em] uppercase">
                Consultora digital
              </span>
            </Animated>

            <Animated delay={220}>
              <h1 className="font-heading font-medium text-nexora-black text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.1] tracking-[-0.02em]">
                Soluciones digitales inteligentes para negocios, profesionales
                y nuevos proyectos.
              </h1>
            </Animated>

            <Animated delay={380}>
              <p className="font-body text-nexora-gray-500 text-[17px] leading-[1.7] max-w-[520px]">
                Diseñamos webs, sistemas, automatizaciones y asistentes
                digitales para transformar necesidades reales en soluciones
                concretas.
              </p>
            </Animated>

            <Animated delay={500}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button as="a" href="#contacto" variant="primary" size="lg">
                  Solicitar propuesta
                </Button>
                <Button as="a" href="#servicios" variant="secondary" size="lg">
                  Ver servicios
                </Button>
              </div>
            </Animated>
          </div>

          {/* ── Columna derecha: visual abstracto ── */}
          <div
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
            style={{
              animation: "fadeIn 1s ease-out both",
              animationDelay: "350ms",
            }}
          >
            <HeroAbstract />
          </div>
        </div>
      </div>
    </section>
  );
}

/* SVG geométrico abstracto — identidad tech/premium */
function HeroAbstract() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[400px] h-auto"
    >
      {/* Anillo exterior grande */}
      <circle
        cx="210"
        cy="210"
        r="190"
        stroke="#1B4D5C"
        strokeWidth="1"
        opacity="0.12"
      />
      {/* Anillo medio */}
      <circle
        cx="210"
        cy="210"
        r="145"
        stroke="#1B4D5C"
        strokeWidth="1"
        opacity="0.2"
      />
      {/* Anillo interior */}
      <circle
        cx="210"
        cy="210"
        r="92"
        stroke="#1B4D5C"
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Cruz de ejes finos */}
      <line
        x1="210" y1="20" x2="210" y2="400"
        stroke="#1B4D5C" strokeWidth="0.75" opacity="0.1"
      />
      <line
        x1="20" y1="210" x2="400" y2="210"
        stroke="#1B4D5C" strokeWidth="0.75" opacity="0.1"
      />

      {/* Líneas diagonales */}
      <line
        x1="75" y1="75" x2="345" y2="345"
        stroke="#1B4D5C" strokeWidth="0.75" opacity="0.08"
      />
      <line
        x1="345" y1="75" x2="75" y2="345"
        stroke="#1B4D5C" strokeWidth="0.75" opacity="0.08"
      />

      {/* Puntos en intersecciones cardinales del anillo medio */}
      <circle cx="210" cy="65"  r="3" fill="#1B4D5C" opacity="0.5" />
      <circle cx="355" cy="210" r="3" fill="#1B4D5C" opacity="0.5" />
      <circle cx="210" cy="355" r="3" fill="#1B4D5C" opacity="0.5" />
      <circle cx="65"  cy="210" r="3" fill="#1B4D5C" opacity="0.5" />

      {/* Puntos diagonales del anillo medio */}
      <circle cx="312" cy="108" r="2" fill="#1B4D5C" opacity="0.35" />
      <circle cx="312" cy="312" r="2" fill="#1B4D5C" opacity="0.35" />
      <circle cx="108" cy="312" r="2" fill="#1B4D5C" opacity="0.35" />
      <circle cx="108" cy="108" r="2" fill="#1B4D5C" opacity="0.35" />

      {/* Arco decorativo destacado — cuadrante superior derecho */}
      <path
        d="M 210 118 A 92 92 0 0 1 302 210"
        stroke="#1B4D5C"
        strokeWidth="2.5"
        opacity="0.55"
        strokeLinecap="round"
      />

      {/* Arco opuesto tenue */}
      <path
        d="M 210 302 A 92 92 0 0 1 118 210"
        stroke="#1B4D5C"
        strokeWidth="1"
        opacity="0.18"
        strokeLinecap="round"
      />

      {/* Triángulo fino interno */}
      <polygon
        points="210,148 268,272 152,272"
        stroke="#1B4D5C"
        strokeWidth="1"
        fill="none"
        opacity="0.14"
      />

      {/* Centro — dot + anillo chico */}
      <circle cx="210" cy="210" r="18" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.4" />
      <circle cx="210" cy="210" r="5"  fill="#1B4D5C" opacity="0.6" />

      {/* Pequeño cuadrado rotado (45°) en esquina superior izquierda */}
      <rect
        x="50" y="50" width="28" height="28"
        stroke="#1B4D5C" strokeWidth="1" fill="none" opacity="0.2"
        transform="rotate(45 64 64)"
      />

      {/* Línea corta con punto — esquina inferior derecha */}
      <line x1="320" y1="340" x2="360" y2="340" stroke="#1B4D5C" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <circle cx="318" cy="340" r="2.5" fill="#1B4D5C" opacity="0.45" />

      {/* Línea corta — esquina superior derecha */}
      <line x1="340" y1="70" x2="370" y2="70" stroke="#1B4D5C" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      <line x1="355" y1="62" x2="355" y2="78" stroke="#1B4D5C" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
    </svg>
  );
}
