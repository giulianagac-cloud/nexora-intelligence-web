'use client'
import { useReveal } from '@/hooks/useReveal'

const STEPS = [
  { n: '01', name: 'RELEVAMIENTO',  desc: 'Entendemos tu operación' },
  { n: '02', name: 'PROPUESTA',     desc: 'Diseñamos la solución' },
  { n: '03', name: 'DESARROLLO',    desc: 'Lo construimos' },
  { n: '04', name: 'ENTREGA',       desc: 'Implementamos y capacitamos' },
  { n: '05', name: 'SOPORTE',       desc: 'Seguimos con vos' },
]

export function Proceso() {
  useReveal()

  return (
    <section className="proc-sec sec-pad" id="proceso">
      <div className="eyebrow reveal">// CÓMO_TRABAJAMOS</div>
      <h2 className="sec-title reveal d1">EL PROCESO</h2>
      <div className="proc-steps reveal d2">
        {STEPS.map(s => (
          <div key={s.n} className="ps">
            <div className="ps-circ">{s.n}</div>
            <div className="ps-name">{s.name}</div>
            <div className="ps-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
