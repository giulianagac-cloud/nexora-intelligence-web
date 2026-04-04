'use client'
import { useReveal } from '@/hooks/useReveal'

export function Casos() {
  useReveal()

  return (
    <section className="sec-pad" id="casos">
      <div className="eyebrow reveal">// CASOS_REALES</div>
      <h2 className="sec-title reveal d1">RESULTADOS QUE HABLAN</h2>

      <div className="cases reveal d2">
        {/* Abogado — featured */}
        <div className="cc feat">
          <a
            href="https://claudio-ortiz-abogado.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cc-site-btn"
          >
            VER SITIO ↗
          </a>

          <div className="cc-lbl">⚖ ABOGADO INDEPENDIENTE</div>
          <h3 className="cc-title">
            Sitio web institucional —<br />Ortiz Alejandre Abogados
          </h3>
          <p className="cc-desc">
            Diseño minimalista premium, arquitectura de información clara, SEO técnico optimizado,
            formulario de contacto seguro y performance de carga por debajo de 1s.
          </p>

          <div className="cc-mets">
            <span className="cc-met">+180% consultas</span>
            <span className="cc-met">Top 3 Google CABA</span>
            <span className="cc-met">0.9s carga</span>
          </div>

          <div className="cc-img">
            <img
              src="https://api.microlink.io/?url=https://claudio-ortiz-abogado.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
              alt="Web Claudio Ortiz Abogado — desarrollada por Nexora"
              style={{ objectPosition: 'top center', opacity: 0.85 }}
            />
            <div className="cc-img-fade" />
          </div>
        </div>

        {/* Gimnasio */}
        <div className="cc">
          <div className="cc-lbl">💪 GIMNASIO BOUTIQUE</div>
          <h3 className="cc-title">
            App de gestión desarrollada<br />para Overgym
          </h3>
          <p className="cc-desc">
            PWA con gestión de clientes, pagos, reservas y panel en tiempo real.
            Operación digitalizada en semanas.
          </p>

          <div className="cc-mets">
            <span className="cc-met">+200 clientes</span>
            <span className="cc-met">90% reservas digitalizadas</span>
            <span className="cc-met">-70% tiempo admin</span>
          </div>

          <div className="cc-img">
            <img
              src="/gym.jpg"
              alt="Overgym — plataforma de gestión desarrollada por Nexora"
              style={{ objectPosition: 'center', opacity: 0.75 }}
            />
            <div className="cc-img-fade" />
          </div>
        </div>
      </div>
    </section>
  )
}
