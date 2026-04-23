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
          </div>
        ))}
      </div>

      {/* Cards de productos */}
      <div className="prod-links reveal d3">
        <a href="/factura-lista" className="fl-card">
          <div className="fl-card-left">
            <span className="fl-card-tag">// automatización</span>
            <div className="fl-card-title">¿Procesás facturas manualmente?</div>
            <p className="fl-card-desc">Subís el PDF, el sistema lee y registra solo.</p>
          </div>
          <div className="fl-card-cta">Ver Factura Lista →</div>
        </a>
        <a href="/nexora-rrhh" className="fl-card fl-card-violet">
          <div className="fl-card-left">
            <span className="fl-card-tag fl-card-tag-violet">// recursos humanos</span>
            <div className="fl-card-title">¿Tu área de RRHH trabaja con planillas?</div>
            <p className="fl-card-desc">Reclutamiento, onboarding y consultas automatizadas.</p>
          </div>
          <div className="fl-card-cta fl-card-cta-violet">Ver Nexora RRHH →</div>
        </a>
        <a href="/nexora-inventario" className="fl-card fl-card-blue">
          <div className="fl-card-left">
            <span className="fl-card-tag fl-card-tag-blue">// inventario</span>
            <div className="fl-card-title">¿Sabés exactamente qué tiene tu empresa?</div>
            <p className="fl-card-desc">Equipos, licencias y activos — con historial y alertas automáticas.</p>
          </div>
          <div className="fl-card-cta fl-card-cta-blue">Ver Nexora Inventario ↗</div>
        </a>
        <a href="/nexora-finanzas" className="fl-card fl-card-blue">
          <div className="fl-card-left">
            <span className="fl-card-tag fl-card-tag-blue">// finanzas</span>
            <div className="fl-card-title">¿Todavía manejás las finanzas en Excel?</div>
            <p className="fl-card-desc">Dashboard con IA que explica tu negocio en tiempo real.</p>
          </div>
          <div className="fl-card-cta fl-card-cta-blue">Ver Nexora Finanzas →</div>
        </a>
      </div>
    </section>
  )
}
