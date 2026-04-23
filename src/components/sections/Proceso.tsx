'use client'
import { useReveal } from '@/hooks/useReveal'

const STEPS = [
  { num: '01', name: 'Relevamiento', desc: 'Entendemos tu operación' },
  { num: '02', name: 'Propuesta', desc: 'Diseñamos la solución' },
  { num: '03', name: 'Desarrollo', desc: 'Lo construimos' },
  { num: '04', name: 'Entrega', desc: 'Implementamos y capacitamos' },
  { num: '05', name: 'Soporte', desc: 'Seguimos con vos' },
]

export function Proceso() {
  useReveal()
  return (
    <section className="sec-pad proc-sec" id="proceso">
      <div className="eyebrow reveal">// cómo trabajamos</div>
      <h2 className="sec-title reveal d1">Simple.<br />Sin vueltas.</h2>
      <div className="proc-steps reveal d2">
        {STEPS.map((s) => (
          <div key={s.num} className="ps">
            <div className="ps-circ">{s.num}</div>
            <div className="ps-name">{s.name}</div>
            <p className="ps-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
