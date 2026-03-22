import Image from "next/image";
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
      className="relative lg:min-h-[85vh] flex items-center overflow-hidden bg-nexora-white pt-[68px]"
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
            "linear-gradient(to bottom, transparent, #FFFFFF)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div className="flex flex-col gap-7 max-w-[600px]">
            <Animated delay={80}>
              <span className="font-body font-medium text-nexora-black text-[12px] tracking-[0.18em] uppercase">
                Consultora digital
              </span>
            </Animated>

            <Animated delay={220}>
              <h1
                className="text-nexora-black text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontWeight: 700 }}
              >
                Soluciones digitales{" "}
                <span style={{ color: "#D85A30" }}>inteligentes</span>{" "}
                para negocios, profesionales y nuevos proyectos.
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

          {/* ── Columna derecha: imagen hero ── */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{
              animation: "fadeIn 1s ease-out both",
              animationDelay: "350ms",
            }}
          >
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/hero-image.png"
                alt="Soluciones digitales Nexora Intelligence"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 1024px) 0px, 440px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
