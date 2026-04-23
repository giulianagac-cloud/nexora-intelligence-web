'use client'
import { useReveal } from '@/hooks/useReveal'

const COMO_TRABAJO = [
  'Antes de proponer cualquier solución, entiendo cómo funciona tu negocio y dónde perdés tiempo.',
  'Todo el desarrollo es transparente — tenés acceso al avance en tiempo real, sin cajas negras.',
  'No entrego demos que nunca funcionan en producción. Lo que construyo está pensado para el mundo real.',
  'Al inicio del proyecto te envío una guía con requerimientos, revisiones y formas de trabajo claras.',
  'El cliente siempre accede al proyecto en construcción y puede revisar a gusto en cada etapa.',
  'Una vez finalizado, entrego todo funcionando en el servidor final, completamente operativo.',
  'No desaparezco cuando cobro. Si algo falla o necesitás ajustar, estoy.',
]

export function Proceso() {
  useReveal()
  return (
    <section className="sec-pad proc-sec" id="proceso">
      <div className="eyebrow reveal">// cómo trabajo</div>
      <h2 className="sec-title reveal d1">Cómo trabajo.</h2>
      <div className="checklist reveal d2">
        {COMO_TRABAJO.map((item, i) => (
          <div key={i} className="checklist-item">
            <div className="checklist-icon">✓</div>
            <p className="checklist-text">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
