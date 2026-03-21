import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const FOOTER_LINKS = NAV_LINKS.filter((l) => l.label !== "Proyectos");

export function Footer() {
  return (
    <footer className="bg-nexora-graphite text-nexora-white">
      {/* Línea decorativa superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-nexora-accent to-transparent opacity-40" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16">

          {/* Columna marca */}
          <div className="flex flex-col gap-4 max-w-sm">
            <a
              href="#inicio"
              className="font-heading font-medium text-[18px] tracking-tight hover:opacity-80 transition-opacity self-start"
            >
              Nexora{" "}
              <span className="text-nexora-accent-light">Intelligence</span>
            </a>
            <p className="font-body text-[14px] text-nexora-gray-400 leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="font-body text-[13px] text-nexora-gray-500 italic leading-relaxed mt-1">
              "Diseñamos soluciones con criterio, claridad y proyección."
            </p>
          </div>

          {/* Columna links */}
          <div className="flex flex-col gap-4">
            <span className="font-body font-medium text-[12px] text-nexora-gray-500 tracking-[0.12em] uppercase">
              Navegación
            </span>
            <nav aria-label="Footer" className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-[14px] text-nexora-gray-400 hover:text-nexora-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Separador + copyright */}
        <div className="mt-14 pt-8 border-t border-nexora-gray-600/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-[13px] text-nexora-gray-500">
            © 2026 Nexora Intelligence. Todos los derechos reservados.
          </p>
          <p className="font-body text-[13px] text-nexora-gray-500">
            Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
