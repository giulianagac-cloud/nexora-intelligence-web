"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
              onClick={closeMenu}
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
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú mobile — overlay + sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[9998] md:hidden"
              style={{ backgroundColor: "rgba(10,14,39,0.85)", backdropFilter: "blur(4px)" }}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[9999] md:hidden flex flex-col"
              style={{
                width: 280,
                backgroundColor: "#141829",
                borderLeft: "1px solid #2A2E45",
              }}
            >
              {/* Header del sidebar */}
              <div
                className="flex items-center justify-between px-6 h-[68px] shrink-0"
                style={{ borderBottom: "1px solid #2A2E45" }}
              >
                <a
                  href="#inicio"
                  onClick={closeMenu}
                  className="flex flex-col leading-none"
                  aria-label="NEXORA Intelligence — inicio"
                >
                  <span
                    className="text-nexora-light text-[16px] tracking-[2px] uppercase"
                    style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
                  >
                    NEXORA<span className="text-nexora-neon">_</span>
                  </span>
                  <span
                    className="text-nexora-neon text-[10px] tracking-[1px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Intelligence
                  </span>
                </a>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
                  style={{ color: "rgba(245,245,247,0.5)" }}
                  aria-label="Cerrar menú"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-6 py-6 gap-1 flex-1" aria-label="Navegación mobile">
                {NAV_LINKS.map((link, index) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.25 }}
                      className="flex items-center gap-3 py-4 text-[16px] font-medium group"
                      style={{
                        fontFamily: "var(--font-inter)",
                        color: isActive ? "#00F5A0" : "rgba(245,245,247,0.65)",
                        borderBottom: "1px solid rgba(42,46,69,0.5)",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        className="h-[2px] rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? 20 : 0,
                          backgroundColor: "#00F5A0",
                          minWidth: 0,
                        }}
                      />
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* CTA WhatsApp */}
              <div className="px-6 pb-8 pt-4 shrink-0" style={{ borderTop: "1px solid #2A2E45" }}>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20vi%20tu%20web%20y%20quiero%20consultar%20sobre%20tus%20servicios`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-3 px-4 rounded-lg font-semibold text-[14px] transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "var(--font-inter)",
                    backgroundColor: "#00F5A0",
                    color: "#0A0E27",
                  }}
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
