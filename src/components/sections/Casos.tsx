import Image from 'next/image'

export function Casos() {
  return (
    <section className="sec-pad" id="casos">
      <div className="eyebrow reveal">// CASOS_REALES.slice(0,2)</div>
      <h2 className="sec-title reveal d1">
        Resultados que se<br /><em>miden en números</em>
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
          <div className="cc-lbl">⚖️ abogado independiente</div>
          <h3 className="cc-title">
            La web que convirtió presencia digital en captación de clientes
          </h3>
          <p className="cc-desc">
            Sin presencia digital, sin clientes corporativos. Sitio premium con
            SEO optimizado para derecho societario en CABA.
          </p>
          <div className="cc-mets">
            <div><div className="cc-mn">+180%</div><div className="cc-ml">más_consultas</div></div>
            <div><div className="cc-mn">Top 3</div><div className="cc-ml">google_CABA</div></div>
            <div><div className="cc-mn">0.9s</div><div className="cc-ml">carga</div></div>
          </div>
        </div>

        {/* Gimnasio */}
        <div className="cc">
          <div
            className="relative w-full mb-6 overflow-hidden rounded"
            style={{ height: '160px' }}
          >
            <Image
              src="/gym.jpg"
              alt="Caso gimnasio boutique — Nexora Intelligence"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              style={{ opacity: 0.65 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 40%, #11111c 100%)'
              }}
            />
          </div>
          <div className="cc-lbl">💪 gimnasio boutique</div>
          <h3 className="cc-title">
            De planillas Excel a plataforma digital integral
          </h3>
          <p className="cc-desc">
            PWA con gestión de clientes, pagos, reservas y panel en tiempo real.
            Operación digitalizada en semanas.
          </p>
          <div className="cc-mets">
            <div><div className="cc-mn">+200</div><div className="cc-ml">clientes</div></div>
            <div><div className="cc-mn">90%</div><div className="cc-ml">reservas_digitales</div></div>
            <div><div className="cc-mn">-70%</div><div className="cc-ml">tiempo_admin</div></div>
          </div>
        </div>

        {/* CTA row */}
        <div className="cc" style={{ gridColumn: '1 / -1', background: '#0d0d18' }}>
          <div className="cc-lbl">⚡ próximo caso — tu empresa</div>
          <h3 className="cc-title" style={{ maxWidth: '580px' }}>
            ¿Cuál va a ser el número que defina tu caso de éxito?
          </h3>
          <p className="cc-desc" style={{ maxWidth: '500px' }}>
            Cada automatización tiene un ROI medible. Contanos tu proceso y te
            decimos cuánto podés recuperar.
          </p>
          <a href="#contacto" className="btn-primary" style={{ display: 'inline-block', marginTop: '8px' }}>
            calculemos juntos →
          </a>
        </div>
      </div>
    </section>
  )
}
