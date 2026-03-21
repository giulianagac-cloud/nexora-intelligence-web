"use client";

import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, PROJECT_TYPES } from "@/lib/constants";
import { Mail, MapPin, MessageCircle } from "lucide-react";

/* ── Estilos de inputs reutilizables ── */
const inputClass = [
  "w-full font-body text-[15px] text-nexora-graphite placeholder:text-nexora-gray-400",
  "bg-white border border-nexora-gray-200 rounded-lg px-4 py-3",
  "transition-colors duration-200",
  "focus:outline-none focus:border-nexora-accent focus:ring-1 focus:ring-nexora-accent/30",
].join(" ");

const labelClass = "font-body font-medium text-nexora-gray-600 text-[13px]";

type FormState = "idle" | "submitting" | "success" | "error";

/* Reemplazar con el endpoint real de Formspree */
const FORMSPREE_URL = "https://formspree.io/f/XXXXXXXX";

export function Contact() {
  const sectionRef = useScrollReveal();
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section
      id="contacto"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-white py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 items-start">

          {/* ── Columna izquierda: info ── */}
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <SectionHeading
                subtag="Contacto"
                title="Contacto"
                description="Contanos qué necesitás y te responderemos con una propuesta inicial."
              />
            </div>

            <div
              className="reveal flex flex-col gap-5"
              style={{ transitionDelay: "100ms" }}
            >
              <ContactInfoRow
                icon={<Mail size={16} strokeWidth={1.75} aria-hidden="true" />}
                label="Email"
                value={SITE_CONFIG.email}
                href={`mailto:${SITE_CONFIG.email}`}
              />
              <ContactInfoRow
                icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />}
                label="WhatsApp"
                value="+54 11 XXXX-XXXX"
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              />
              <ContactInfoRow
                icon={<MapPin size={16} strokeWidth={1.75} aria-hidden="true" />}
                label="Ubicación"
                value={SITE_CONFIG.location}
              />
            </div>
          </div>

          {/* ── Columna derecha: formulario ── */}
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            {formState === "success" ? (
              <SuccessMessage />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Nombre" required>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Email" required>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <FormField label="Empresa / Rubro">
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de empresa o rubro"
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Tipo de proyecto">
                  <select name="tipo_proyecto" className={inputClass}>
                    <option value="">Seleccioná una opción</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Mensaje" required>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Contanos qué necesitás..."
                    required
                    className={`${inputClass} resize-none`}
                  />
                </FormField>

                {formState === "error" && (
                  <p className="font-body text-[14px] text-red-500" role="alert">
                    Ocurrió un error al enviar. Por favor intentá de nuevo.
                  </p>
                )}

                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formState === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {formState === "submitting" ? "Enviando…" : "Enviar consulta"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Helpers ── */

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClass}>
        {label}
        {required && (
          <span className="text-nexora-accent ml-0.5" aria-hidden="true">*</span>
        )}
      </span>
      {children}
    </label>
  );
}

function ContactInfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="shrink-0 w-8 h-8 rounded-lg bg-nexora-accent-subtle flex items-center justify-center text-nexora-accent">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="font-body text-[12px] text-nexora-gray-400 tracking-wide uppercase">
          {label}
        </span>
        <span className="font-body text-[15px] text-nexora-graphite">
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="hover:opacity-75 transition-opacity w-fit"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

function SuccessMessage() {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-2xl border border-nexora-accent/20 bg-nexora-accent-subtle">
      <span className="font-body font-medium text-nexora-accent text-[12px] tracking-[0.15em] uppercase">
        Enviado
      </span>
      <p className="font-heading font-medium text-nexora-graphite text-[20px] leading-snug">
        ¡Gracias por tu consulta!
      </p>
      <p className="font-body text-nexora-gray-500 text-[15px] leading-relaxed">
        Recibimos tu mensaje y te responderemos a la brevedad con una propuesta
        inicial.
      </p>
    </div>
  );
}
