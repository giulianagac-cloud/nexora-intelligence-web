"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactPopup() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={[
        "fixed bottom-24 right-6 z-50",
        "flex flex-col items-end gap-3",
        "transition-all duration-300 ease-out",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      {/* Popup — aparece arriba del botón */}
      <div
        className={[
          "bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] overflow-hidden w-[240px]",
          "transition-all duration-200 ease-out origin-bottom-right",
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-label="Opciones de contacto"
        aria-hidden={!open}
      >
        {/* Header del popup */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-nexora-gray-100">
          <span className="font-body font-medium text-nexora-black text-[13px]">
            Contacto rápido
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-nexora-gray-400 hover:text-nexora-black transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        {/* Opciones */}
        <div className="flex flex-col">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-nexora-gray-50 transition-colors group"
          >
            <span className="shrink-0 w-8 h-8 rounded-lg bg-[#E8F8EE] flex items-center justify-center">
              {/* WhatsApp SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="#25D366"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-body font-medium text-nexora-black text-[13px] group-hover:text-[#25D366] transition-colors">
                Chateá por WhatsApp
              </span>
              <span className="font-body text-nexora-gray-400 text-[11px]">
                Respuesta rápida
              </span>
            </div>
          </a>

          {/* Llamar */}
          <a
            href="tel:+5411XXXXXXXX"
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-nexora-gray-50 transition-colors group border-t border-nexora-gray-100"
          >
            <span className="shrink-0 w-8 h-8 rounded-lg bg-nexora-gray-100 flex items-center justify-center">
              <Phone size={15} strokeWidth={1.75} className="text-nexora-black" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="font-body font-medium text-nexora-black text-[13px]">
                Llamanos
              </span>
              <span className="font-body text-nexora-gray-400 text-[11px]">
                +54 11 XXXX-XXXX
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Botón flotante disparador */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
        aria-expanded={open}
        className={[
          "w-12 h-12 rounded-full bg-white",
          "flex items-center justify-center",
          "shadow-[0_4px_20px_rgba(0,0,0,0.14)]",
          "hover:shadow-[0_6px_28px_rgba(0,0,0,0.2)] hover:scale-110",
          "transition-all duration-200 ease-out",
        ].join(" ")}
      >
        <MessageCircle size={20} strokeWidth={1.75} className="text-nexora-black" aria-hidden="true" />
      </button>
    </div>
  );
}
