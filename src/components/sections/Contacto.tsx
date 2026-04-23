'use client'
import { useReveal } from '@/hooks/useReveal'

export function Contacto() {
  useReveal()
  return (
    <section className="contact-sec" id="contacto">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="eyebrow reveal" style={{ justifyContent: 'center', display: 'flex' }}>
          // hablemos
        </div>
        <h2 className="contact-title reveal d1">
          Sin costo.<br />Sin compromiso.
        </h2>
        <p className="contact-sub reveal d2">
          Contanos qué te está comiendo el tiempo<br />
          y vemos si te podemos ayudar.
        </p>
        <div className="contact-btns reveal d3">
          <a
            href="https://wa.me/5491133409351"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn wa"
          >
            <span>WhatsApp →</span>
          </a>
          <a
            href="mailto:contacto@nexoraintelligence.co"
            className="contact-btn em"
          >
            <span>Email →</span>
          </a>
        </div>
        <div className="contact-info reveal d4">
          <span>CABA, Buenos Aires</span>
          <span>Respuesta en menos de 24hs</span>
        </div>
      </div>
    </section>
  )
}
