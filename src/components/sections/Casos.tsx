export function Casos() {
  return (
    <section className="sec-pad" id="casos">
      <div className="eyebrow reveal">// desarrollos_nexora</div>
      <h2 className="sec-title reveal d1">
        Lo que<br /><em>construimos</em>
      </h2>

      <div className="cases reveal d2">
        {/* Abogado */}
        <div className="cc feat">
          <div
            className="relative w-full mb-6 overflow-hidden rounded"
            style={{ height: '160px' }}
          >
            <img
              src="https://api.microlink.io/?url=https://claudio-ortiz-abogado.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
              alt="Web Claudio Ortiz Abogado — desarrollada por Nexora"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                opacity: 0.8,
                borderRadius: '4px',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 30%, #0d1f16 100%)'
              }}
            />
            <a
              href="https://claudio-ortiz-abogado.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2"
              style={{
                background: '#00e5a0',
                color: '#080810',
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '5px 12px',
                borderRadius: '2px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                zIndex: 10,
                whiteSpace: 'nowrap',
              }}
            >
              ver sitio ↗
            </a>
          </div>
          <div className="cc-lbl">⚖️ Ortiz Alejandre Abogados</div>
          <h3 className="cc-title">
            Sitio web institucional — Ortiz Alejandre Abogados
          </h3>
          <p className="cc-desc">
            Diseño minimalista premium, arquitectura de información clara,
            SEO técnico optimizado, formulario de contacto seguro
            y performance de carga por debajo de 1s.
          </p>
        </div>

        {/* Gimnasio */}
        <div className="cc">
          <div
            className="relative w-full mb-6 overflow-hidden rounded"
            style={{ height: '160px' }}
          >
            <img
              src="/gym.jpg"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.65,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 40%, #11111c 100%)'
              }}
            />
          </div>
          <div className="cc-lbl">💪 Overgym — Gimnasio boutique</div>
          <h3 className="cc-title">
            App de gestión desarrollada para Overgym
          </h3>
          <p className="cc-desc">
            PWA con gestión de clientes, pagos, reservas y panel en tiempo real.
            Operación digitalizada en semanas.
          </p>
        </div>

        {/* CTA row */}
        <div className="cc" style={{ gridColumn: '1 / -1', background: '#0d0d18' }}>
          <div className="cc-lbl">⚡ próximo caso — tu empresa</div>
          <h3 className="cc-title" style={{ maxWidth: '580px' }}>
            ¿Querés que desarrollemos tu próximo proyecto?
          </h3>
          <p className="cc-desc" style={{ maxWidth: '500px' }}>
            Contanos tu idea y te decimos cómo la hacemos realidad.
          </p>
          <a href="#contacto" className="btn-primary" style={{ display: 'inline-block', marginTop: '8px' }}>
            calculemos juntos →
          </a>
        </div>
      </div>
    </section>
  )
}
