'use client'
import { useReveal } from '@/hooks/useReveal'

const COMPARE = [
  {
    label: 'Para empezar',
    desc: 'Respondé las preguntas frecuentes de tus clientes automáticamente.',
    price: 'USD 299',
    color: 'orange' as const,
  },
  {
    label: 'Para crecer',
    desc: 'Tu negocio atiende solo en WhatsApp, entiende lenguaje natural y recuerda el contexto.',
    price: 'USD 599 + USD 99/mes',
    color: 'violet' as const,
    featured: true,
  },
  {
    label: 'Para escalar',
    desc: 'Integrado a tus sistemas internos, entrenado con tus documentos, con SLA garantizado.',
    price: 'Desde USD 1.500',
    color: 'blue' as const,
  },
]

export function Bots() {
  useReveal()
  return (
    <section className="bots-sec sec-pad" id="bots">
      <div className="eyebrow reveal">// nexora bots</div>
      <h2 className="sec-title reveal d1">Tu negocio responde.<br />Aunque no estés.</h2>
      <p className="bots-intro reveal d2">
        No es un concepto. Está funcionando. Elegí el nivel que necesita tu operación.
      </p>

      {/* Mockup */}
      <div className="bot-mockup reveal d3">
        <div className="bot-mock-header">
          <div className="bot-mock-dot" style={{ background: '#ff5f57' }} />
          <div className="bot-mock-dot" style={{ background: '#febc2e' }} />
          <div className="bot-mock-dot" style={{ background: '#28c840' }} />
          <span className="bot-mock-title">NexBot — Atención al cliente</span>
          <span className="bot-mock-live">● en vivo</span>
        </div>
        <div className="bot-mock-body">
          <div className="bot-mock-msg bot">Hola, soy el asistente de Nexora. ¿En qué te puedo ayudar hoy?</div>
          <div className="bot-mock-msg user">¿Cuánto tarda la implementación?</div>
          <div className="bot-mock-msg bot">Depende del plan. El Starter se configura en 48hs. El Smart en 1 semana. ¿Querés que te cuente más sobre alguno?</div>
          <div className="bot-mock-msg user">Sí, el Smart.</div>
          <div className="bot-mock-msg bot typing">
            <span className="bot-mock-dot-anim" /><span className="bot-mock-dot-anim" /><span className="bot-mock-dot-anim" />
          </div>
        </div>
      </div>

      {/* Comparación */}
      <div className="bots-compare reveal d4">
        {COMPARE.map((c) => (
          <div key={c.label} className={`bots-row ${c.featured ? 'featured' : ''} ${c.color}`}>
            <div className="bots-row-left">
              <span className={`plan-badge ${c.color}`}>{c.label}</span>
              <p className="bots-row-desc">{c.desc}</p>
            </div>
            <div className="bots-row-right">
              <span className="bots-row-price">{c.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bots-cta reveal d4">
        <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Contame qué necesitás →
        </a>
        <a href="https://nexora-bots-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline">
          Ver demo en vivo →
        </a>
      </div>
    </section>
  )
}
