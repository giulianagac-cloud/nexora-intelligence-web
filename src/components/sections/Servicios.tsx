'use client'
import { useReveal } from '@/hooks/useReveal'

const SERVICES = [
  {
    num: '01',
    name: 'Automatización',
    desc: 'Tus procesos repetitivos en piloto automático. Reportes, notificaciones, carga de datos — corriendo solos mientras trabajás en lo que importa.',
    link: { label: 'Ver Factura Lista →', href: '/factura-lista' },
  },
  {
    num: '02',
    name: 'Bots con IA',
    desc: 'Atención al cliente y gestión interna sin intervención humana. Tu negocio responde, deriva y resuelve las 24 horas.',
    link: null,
  },
  {
    num: '03',
    name: 'Desarrollo digital',
    desc: 'Webs, apps y sistemas que escalan con tu negocio. Desde una landing que convierte hasta una plataforma de gestión completa.',
    link: null,
  },
]

export function Servicios() {
  useReveal()
  return (
    <section className="sec-pad" id="servicios">
      <div className="eyebrow reveal">// lo que hacemos</div>
      <h2 className="sec-title reveal d1">Tres cosas.<br />Bien hechas.</h2>
      <div className="svcs svcs-3 reveal d2">
        {SERVICES.map(s => (
          <div key={s.num} className="sc">
            <div className="sc-ghost">{s.num}</div>
            <div className="sc-name">{s.name}</div>
            <p className="sc-desc">{s.desc}</p>
            {s.link && (
              <a href={s.link.href} className="sc-link">{s.link.label}</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
