'use client'
import { useReveal } from '@/hooks/useReveal'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.25l5.565-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.377l-.36-.214-3.3.862.882-3.218-.234-.372A9.818 9.818 0 1112 21.818z"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export function Contacto() {
  useReveal()

  return (
    <section className="contact-sec" id="contacto">
      <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>// HABLEMOS</div>
      <h2 className="contact-title reveal d1">
        ¿LISTO PARA ESCALAR<br />TU OPERACIÓN?
      </h2>
      <p className="contact-sub reveal d2">
        No vendemos humo. Te mostramos cómo.
      </p>

      <div className="contact-btns reveal d3">
        <a
          href="https://wa.me/5491133409351"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn wa"
        >
          <WhatsAppIcon />
          WHATSAPP →
        </a>
        <a
          href="mailto:contacto@nexoraintelligence.co"
          className="contact-btn em"
        >
          <EmailIcon />
          EMAIL →
        </a>
      </div>

      <div className="contact-info reveal d4">
        <span>
          <LocationIcon />
          CABA, Buenos Aires, Argentina
        </span>
        <span>
          <ClockIcon />
          Respuesta en menos de 24hs
        </span>
      </div>
    </section>
  )
}
