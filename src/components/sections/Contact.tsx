"use client";

import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { SITE_CONFIG, PROJECT_TYPES } from "@/lib/constants";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const inputClass = [
  "w-full text-[15px] rounded-lg px-4 py-3",
  "transition-colors duration-200",
  "focus:outline-none",
  "placeholder:text-nexora-light/30",
].join(" ");

const inputStyle = {
  fontFamily: "var(--font-inter)",
  backgroundColor: "#141829",
  border: "1px solid #2A2E45",
  color: "#F5F5F7",
};

const inputFocusStyle = {
  borderColor: "#00F5A0",
  boxShadow: "0 0 0 2px rgba(0,245,160,0.1)",
};

type FormState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_URL = "https://formspree.io/f/xjgankvp";

function FocusInput({
  className = "",
  style: extraStyle = {},
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { style?: React.CSSProperties }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      className={`${inputClass} ${className}`}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}), ...extraStyle }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function FocusTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      className={`${inputClass} resize-none`}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}) }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function FocusSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      className={inputClass}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}), backgroundColor: "#141829" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

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
      if (res.ok) { setFormState("success"); form.reset(); }
      else setFormState("error");
    } catch {
      setFormState("error");
    }
  }

  return (
    <section
      id="contacto"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-[clamp(4rem,8vw,8rem)]"
      style={{ backgroundColor: "#0A0E27" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20 items-start">

          {/* Info lateral */}
          <div className="flex flex-col gap-8">
            <div className="reveal flex flex-col gap-3">
              <p
                className="text-nexora-neon text-[13px]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                // CONTACTO
              </p>
              <h2
                className="text-nexora-light text-[clamp(1.8rem,4vw,2.4rem)] leading-[1.15] tracking-tight"
                style={{ fontFamily: "var(--font-outfit)", fontWeight: 800 }}
              >
                Contacto
              </h2>
              <p
                className="text-[16px] leading-[1.65]"
                style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}
              >
                Contanos qué necesitás y te responderemos con una propuesta inicial.
              </p>
            </div>

            <div className="reveal flex flex-col gap-5" style={{ transitionDelay: "100ms" }}>
              <InfoRow icon={<Mail size={15} strokeWidth={1.75} />} label="EMAIL" value={SITE_CONFIG.email} href={`mailto:${SITE_CONFIG.email}`} />
              <InfoRow icon={<MessageCircle size={15} strokeWidth={1.75} />} label="WHATSAPP" value="+54 9 11 3340-9351" href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20vi%20la%20web%20de%20NEXORA%20y%20quiero%20consultar%20sobre%20sus%20servicios`} />
              <InfoRow icon={<MapPin size={15} strokeWidth={1.75} />} label="UBICACIÓN" value="CABA, Buenos Aires, Argentina" />
            </div>
          </div>

          {/* Formulario */}
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            {formState === "success" ? (
              <div
                className="flex flex-col gap-4 p-8 rounded-xl border"
                style={{ backgroundColor: "rgba(0,245,160,0.05)", borderColor: "rgba(0,245,160,0.2)" }}
              >
                <span className="text-nexora-neon text-[12px] tracking-[2px] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  // Enviado
                </span>
                <p className="text-nexora-light text-[20px] font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
                  ¡Gracias por tu consulta!
                </p>
                <p className="text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.60)" }}>
                  Recibimos tu mensaje y te responderemos a la brevedad con una propuesta inicial.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nombre" required>
                    <FocusInput type="text" name="nombre" placeholder="Tu nombre" required />
                  </Field>
                  <Field label="Email" required>
                    <FocusInput type="email" name="email" placeholder="tu@email.com" required />
                  </Field>
                </div>
                <Field label="Empresa / Rubro">
                  <FocusInput type="text" name="empresa" placeholder="Nombre de empresa o rubro" />
                </Field>
                <Field label="Tipo de proyecto">
                  <FocusSelect name="tipo_proyecto">
                    <option value="">Seleccioná una opción</option>
                    {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </FocusSelect>
                </Field>
                <Field label="Mensaje" required>
                  <FocusTextarea name="mensaje" rows={4} placeholder="Contanos qué necesitás..." required />
                </Field>

                {formState === "error" && (
                  <p className="text-[14px]" style={{ color: "#FF3D71", fontFamily: "var(--font-inter)" }} role="alert">
                    Ocurrió un error al enviar. Por favor intentá de nuevo.
                  </p>
                )}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex items-center justify-center rounded-lg font-semibold text-nexora-dark transition-all duration-200 hover:scale-[1.02] disabled:opacity-50"
                    style={{
                      backgroundColor: "#00F5A0",
                      padding: "14px 32px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "15px",
                    }}
                  >
                    {formState === "submitting" ? "Enviando…" : "Enviar consulta"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[11px] uppercase tracking-[1.5px]"
        style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.50)" }}
      >
        {label}{required && <span style={{ color: "#00F5A0" }} aria-hidden="true"> *</span>}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-3">
      <span
        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,245,160,0.08)", color: "#00F5A0", border: "1px solid rgba(0,245,160,0.15)" }}
      >
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[1.5px]" style={{ fontFamily: "var(--font-jetbrains-mono)", color: "rgba(245,245,247,0.35)" }}>
          {label}
        </span>
        <span className="text-[14px]" style={{ fontFamily: "var(--font-inter)", color: "rgba(245,245,247,0.70)" }}>
          {value}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:opacity-75 transition-opacity w-fit"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}
