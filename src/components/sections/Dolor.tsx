'use client'
import { useReveal } from '@/hooks/useReveal'

const PAINS = [
  'Respondés las mismas preguntas por WhatsApp todos los días.',
  'Cargás datos a mano que podrían actualizarse solos.',
  'No sabés qué pasa en tu negocio hasta que revisás las planillas.',
  'Contratás personas para tareas que una máquina puede hacer mejor.',
]

export function Dolor() {
  useReveal()
  return (
    <section className="sec-pad dolor-sec" id="dolor">
      <div className="eyebrow reveal">// ¿te suena esto?</div>
      <h2 className="sec-title reveal d1">Si dijiste sí a alguna<br />de estas, somos para vos.</h2>
      <div className="dolor-grid reveal d2">
        {PAINS.map((p, i) => (
          <div key={i} className="dolor-item">
            <span className="dolor-num">0{i + 1}</span>
            <p className="dolor-text">{p}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
