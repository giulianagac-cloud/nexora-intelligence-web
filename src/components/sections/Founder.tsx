import Image from 'next/image'
import fs from 'fs'
import path from 'path'

// Check at build-time if the photo exists
function photoExists() {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', 'giuli.jpeg'))
  } catch { return false }
}

export function Founder() {
  const hasPhoto = photoExists()

  return (
    <section className="founder-sec sec-pad" id="founder">
      <div className="eyebrow reveal">// EQUIPO.founder</div>
      <h2 className="sec-title reveal d1">
        La persona detrás<br /><em>de Nexora</em>
      </h2>

      <div className="founder-layout reveal d2">
        <div className="founder-photo-wrap">
          <div className="founder-photo">
            {hasPhoto ? (
              <Image
                src="/giuli.jpeg"
                alt="Giuliana Castaño — Founder & CEO de Nexora"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
            ) : (
              <div className="founder-photo-placeholder">
                <div className="founder-initials">GC</div>
                <div className="founder-photo-label">// Giuliana Castaño</div>
              </div>
            )}
          </div>
          <div className="founder-tag">
            <div className="founder-tag-name">Giuliana Castaño</div>
            <div className="founder-tag-role">Founder &amp; CEO</div>
          </div>
        </div>

        <div className="founder-text">
          <p className="founder-bio">
            Soy Giuliana, programadora, con una mirada muy curiosa sobre
            cómo las ideas pueden transformarse en soluciones reales. Me
            interesa especialmente el cruce entre procesos, negocio e
            inteligencia artificial, pero también todo aquello que amplía
            la forma de pensar: soy música bajista, disfruto de la
            electrónica, la arquitectura, la literatura, la filosofía y
            el dibujo.
            <br /><br />
            Creo en una tecnología al servicio de las personas, pensada
            con criterio, sensibilidad y propósito, donde lo técnico y
            lo creativo no se separan, sino que se potencian.
          </p>
          <div className="founder-links">
            <a href="#contacto" className="founder-link primary">hablemos →</a>
            <a
              href="https://wa.me/5491133409351"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link ghost"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
