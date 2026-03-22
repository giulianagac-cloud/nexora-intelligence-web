"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["inicio", ...NAV_LINKS.map((l) => l.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-nexora-dark/90 backdrop-blur-md border-b border-nexora-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex flex-col leading-none hover:opacity-80 transition-opacity"
            onClick={handleNavClick}
            aria-label="NEXORA Intelligence — inicio"
          >
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
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
            >
              Intelligence
            </span>
          </a>

          {/* Nav desktop */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-[13px] tracking-[0.04em] transition-colors duration-200",
                    isActive
                      ? "text-nexora-neon"
                      : "text-nexora-light/60 hover:text-nexora-neon",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-medium rounded-lg border border-nexora-neon text-nexora-neon hover:bg-nexora-neon hover:text-nexora-dark transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Hablemos →
            </a>
          </div>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-nexora-light/70 hover:text-nexora-neon hover:bg-nexora-border/50 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          "border-t border-nexora-border bg-nexora-dark-card/95 backdrop-blur-md",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegación mobile" className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={[
                  "text-[15px] py-3 border-b border-nexora-border/50 transition-colors",
                  isActive
                    ? "text-nexora-neon font-medium"
                    : "text-nexora-light/60 hover:text-nexora-neon",
                ].join(" ")}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 pb-2">
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-1.5 w-full px-5 py-3 text-[14px] font-medium rounded-lg border border-nexora-neon text-nexora-neon hover:bg-nexora-neon hover:text-nexora-dark transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Hablemos →
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
