'use client'
import { useReveal } from '@/hooks/useReveal'

const CASOS = [
  {
    label: 'Estudio jurídico',
    title: 'Ortiz Alejandre Abogados',
    desc: 'Sitio institucional con arquitectura de información clara, carga menor a 1 segundo y formulario de contacto seguro. El cliente pasó de no tener presencia digital a recibir consultas diarias.',
    url: 'https://claudio-ortiz-abogado.vercel.app/',
    imgUrl: 'https://api.microlink.io/?url=https://claudio-ortiz-abogado.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    feat: true,
  },
  {
    label: 'Gimnasio boutique',
    title: 'OverGym',
    desc: 'App de gestión con reservas, pagos y panel en tiempo real. La operación pasó de planillas manuales a un sistema digital en pocas semanas.',
    imgUrl: '/gym.jpg',
    feat: false,
  },
]

export function Casos() {
  useReveal()
  return (
    <section className="sec-pad" id="casos">
      <div className="eyebrow reveal">// resultados reales</div>
      <h2 className="sec-title reveal d1">Lo que construimos<br />existe y funciona.</h2>
      <div className="cases reveal d2">
        {CASOS.map((c) => (
          <div key={c.title} className={`cc ${c.feat ? 'feat' : ''}`}>
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="cc-site-btn">
                Ver sitio ↗
              </a>
            )}
            <div className="cc-lbl">{c.label}</div>
            <div className="cc-title">{c.title}</div>
            <p className="cc-desc">{c.desc}</p>
            <div className="cc-img">
              <img src={c.imgUrl} alt={c.title} loading="lazy" />
              <div className="cc-img-fade" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
