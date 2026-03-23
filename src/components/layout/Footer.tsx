const SERVICIOS_LINKS = [
  "Desarrollo Web",
  "Apps y Sistemas",
  "Automatización",
  "Bots IA",
  "Consultoría Funcional",
  "Testing + Docs",
];

const SOLUCIONES_LINKS = [
  { label: "Starter Bot", href: "#bots" },
  { label: "Smart Bot", href: "#bots" },
  { label: "Enterprise Bot", href: "#bots" },
];

const CONTACTO_LINKS = [
  { label: "contacto@nexoraintelligence.co", href: "mailto:contacto@nexoraintelligence.co" },
  { label: "+54 9 11 3340-9351", href: "https://wa.me/5491133409351" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-nexora-border"
      style={{ backgroundColor: "#141829" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">

        {/* Grid 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Branding */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex flex-col leading-none hover:opacity-80 transition-opacity w-fit">
              <span
                className="text-nexora-light text-[18px] tracking-[2px] uppercase"
                style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
              >
                NEXORA
                <span
                  className="text-nexora-neon"
                  style={{ animation: "cursor-blink 1s step-end infinite" }}
                  aria-hidden="true"
                >_</span>
              </span>
              <span
                className="text-nexora-neon text-[11px] tracking-[1px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Intelligence
              </span>
            </a>
            <p
              className="text-[13px] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
            >
              Consultoría IT que escala operaciones.
            </p>
            <p
              className="text-[12px]"
              style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.30)" }}
            >
              CABA, Buenos Aires, Argentina
            </p>
          </div>

          {/* Col 2 — Servicios */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[11px] uppercase tracking-[1.5px]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
            >
              Servicios
            </span>
            <nav className="flex flex-col gap-2.5">
              {SERVICIOS_LINKS.map((s) => (
                <a
                  key={s}
                  href="#servicios"
                  className="text-[13px] w-fit transition-colors duration-200 hover:text-nexora-neon"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
                >
                  {s}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Soluciones */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[11px] uppercase tracking-[1.5px]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
            >
              Soluciones
            </span>
            <nav className="flex flex-col gap-2.5">
              {SOLUCIONES_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] w-fit transition-colors duration-200 hover:text-nexora-neon"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4 — Contacto */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[11px] uppercase tracking-[1.5px]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.6)" }}
            >
              Contacto
            </span>
            <nav className="flex flex-col gap-2.5">
              {CONTACTO_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[13px] w-fit transition-colors duration-200 hover:text-nexora-neon"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.50)" }}
                >
                  {l.label}
                </a>
              ))}
              <span
                className="text-[13px]"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.35)" }}
              >
                CABA, Buenos Aires, Argentina
              </span>
            </nav>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: "#2A2E45" }}
        >
          <p
            className="text-[12px]"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.35)" }}
          >
            © 2026 NEXORA Intelligence • CABA, Buenos Aires, Argentina
          </p>
          <p
            className="text-[12px]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(0,245,160,0.35)" }}
          >
            v3.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
