'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const FAQS = [
  {
    q: '¿Necesito saber de tecnología para contratar sus servicios?',
    a: 'No. Nos encargamos de todo el proceso técnico. Vos nos contás cómo funciona tu negocio y nosotros diseñamos la solución. Solo necesitás saber qué procesos te están comiendo el tiempo.',
  },
  {
    q: '¿Cuánto tarda una implementación?',
    a: 'Depende del proyecto. Una automatización simple o un bot básico puede estar funcionando en 48 horas. Un sistema más complejo como Nexora RRHH o Nexora Finanzas tarda entre 1 y 3 semanas.',
  },
  {
    q: '¿Qué pasa si algo falla después de la entrega?',
    a: 'Todos nuestros proyectos incluyen soporte post-entrega. Si algo no funciona como esperabas, lo resolvemos. No desaparecemos después de cobrar.',
  },
  {
    q: '¿Puedo empezar con algo pequeño y crecer después?',
    a: 'Sí, y de hecho lo recomendamos. La mayoría de nuestros clientes empiezan con una automatización puntual o un bot básico, ven los resultados y después escalan. No hay contratos que te obliguen a más de lo que necesitás.',
  },
  {
    q: '¿Trabajan solo con empresas grandes o también con emprendedores?',
    a: 'Trabajamos con PyMEs y emprendedores principalmente. De hecho nuestros productos están diseñados para negocios que no tienen equipo de IT pero quieren operar mejor.',
  },
  {
    q: '¿Los precios son en dólares o en pesos?',
    a: 'Los precios de referencia están en dólares porque los costos de infraestructura son en moneda extranjera. Pero coordinamos la forma de pago según cada cliente y proyecto.',
  },
]

export function FAQ() {
  useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="sec-pad faq-sec" id="faq">
      <div className="eyebrow reveal">// preguntas frecuentes</div>
      <h2 className="sec-title reveal d1">Lo que nos preguntan<br />antes de arrancar.</h2>
      <div className="faq-list reveal d2">
        {FAQS.map((f, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? 'open' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-q">
              <span>{f.q}</span>
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </div>
            <div className="faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
