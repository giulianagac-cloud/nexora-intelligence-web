"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Detectar scroll para backdrop-blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer para sección activa
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Cerrar menu al hacer click en un link
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-nexora-white/90 backdrop-blur-md border-b border-nexora-gray-200/80 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a
            href="#inicio"
            className="font-heading font-medium text-[17px] tracking-tight text-nexora-graphite hover:opacity-80 transition-opacity"
            onClick={handleNavClick}
          >
            Nexora{" "}
            <span className="text-nexora-accent">Intelligence</span>
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
                    "font-body text-[14px] tracking-[0.02em] transition-colors duration-200 relative py-1",
                    isActive
                      ? "text-nexora-accent"
                      : "text-nexora-gray-600 hover:text-nexora-graphite",
                  ].join(" ")}
                >
                  {link.label}
                  {/* Subrayado activo */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px bg-nexora-accent rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button as="a" href="#contacto" variant="primary" size="sm">
              Solicitar propuesta
            </Button>
          </div>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-nexora-graphite hover:bg-nexora-gray-100 transition-colors"
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
          "border-t border-nexora-gray-200/60 bg-nexora-white/95 backdrop-blur-md",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Navegación mobile"
          className="flex flex-col px-6 py-4 gap-1"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={[
                  "font-body text-[15px] py-3 border-b border-nexora-gray-100 transition-colors",
                  isActive
                    ? "text-nexora-accent font-medium"
                    : "text-nexora-gray-600 hover:text-nexora-graphite",
                ].join(" ")}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 pb-2">
            <Button
              as="a"
              href="#contacto"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={handleNavClick}
            >
              Solicitar propuesta
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
