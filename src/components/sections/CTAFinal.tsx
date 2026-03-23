"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export function CTAFinal() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="cta"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4.5rem,9vw,9rem)] relative overflow-hidden"
      style={{ backgroundColor: "#0A0E27" }}
    >
      {/* Gradient neon sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,245,160,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(42,46,69,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-7 max-w-[640px] mx-auto">

          <div className="reveal">
            <span
              className="text-nexora-neon text-[12px] tracking-[2px] uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              // Hablemos
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h2
              className="text-nexora-light leading-[1.15] tracking-tight"
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem,4vw,2.8rem)",
              }}
            >
              ¿Listo para escalar tu operación?
            </h2>
          </div>

          <div className="reveal" style={{ transitionDelay: "160ms" }}>
            <p
              className="text-[17px] leading-[1.7]"
              style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.70)" }}
            >
              No te vamos a vender humo. Te vamos a mostrar cómo.
            </p>
          </div>

          <div
            className="reveal flex flex-col items-center gap-5"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="https://wa.me/5491133409351?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg font-semibold text-nexora-dark transition-all duration-200 hover:scale-[1.02] px-7 py-4 text-[16px] sm:px-10 sm:py-5 sm:text-[18px]"
              style={{
                backgroundColor: "#00F5A0",
                fontFamily: "var(--font-inter)",
                boxShadow: "var(--shadow-neon-lg)",
              }}
            >
              Hablemos de tu proyecto →
            </a>

            <div className="flex flex-col items-center gap-2">
              <a
                href="mailto:contacto@nexoraintelligence.co"
                className="text-[14px] transition-colors duration-200 hover:text-nexora-neon"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
              >
                contacto@nexoraintelligence.co
              </a>
              <a
                href="https://wa.me/5491133409351"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] transition-colors duration-200 hover:text-nexora-neon"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.40)" }}
              >
                +54 9 11 3340-9351
              </a>
              <span
                className="text-[13px]"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.30)" }}
              >
                CABA, Buenos Aires, Argentina
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
