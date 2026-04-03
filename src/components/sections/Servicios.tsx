'use client'
import { useEffect } from 'react'

const SERVICES = [
  { num: '01 — desarrollo', icon: '💻', name: 'Desarrollo Web & Apps',
    desc: 'Sitios que convierten y sistemas que escalan. Landing pages hasta plataformas de gestión completas.',
    tags: ['Next.js','React','FastAPI','PostgreSQL'],
    link: '#casos' },
  { num: '02 — asistentes_IA', icon: '🤖', name: 'Bots & Asistentes IA',
    desc: 'Chatbots inteligentes para atención al cliente, RRHH, onboarding y administración. 24/7, sin contratar.',
    tags: ['GPT-4','LangChain','RAG','WhatsApp'],
    link: '#bots' },
  { num: '03 — automatización', icon: '⚡', name: 'Automatización de Procesos',
    desc: 'Eliminamos tareas manuales repetitivas. Reportes, data entry, notificaciones — todo en piloto automático.',
    tags: ['n8n','Python','Make','APIs'],
    link: '#productos' },
  { num: '04 — reportes_IA', icon: '📊', name: 'Automatización de Reportes',
    desc: 'Datos de múltiples fuentes convertidos en reportes automáticos cuando los necesitás.',
    tags: ['Sheets','Python','Dashboard'],
    link: '#productos' },
  { num: '05 — admin_IA', icon: '🧾', name: 'Automatización Administrativa',
    desc: 'Facturación, vencimientos, carga de datos y alertas automáticas. Administración sin fricción.',
    tags: ['OCR','integración','alertas'],
    link: '#productos' },
  { num: '06 — consultoría', icon: '🔍', name: 'Consultoría IT & Análisis de Negocio',
    desc: 'Relevamiento profundo de procesos, identificación de cuellos de botella y hoja de ruta tecnológica. Soporte técnico en redes, servidores, usuarios y configuraciones.',
    tags: ['análisis','documentación','roadmap','soporte'] },
]

export function Servicios() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]')
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []

    cards.forEach(c => {
      const move = (e: MouseEvent) => {
        const r = c.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width  - 0.5) * 12
        const y = ((e.clientY - r.top)  / r.height - 0.5) * -12
        c.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`
      }
      const leave = () => {
        c.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
      }
      c.addEventListener('mousemove', move)
      c.addEventListener('mouseleave', leave)
      handlers.push({ el: c, move, leave })
    })

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <section id="servicios" className="sec-pad">
      <div className="eyebrow reveal">// LO_QUE_CONSTRUIMOS</div>
      <h2 className="sec-title reveal d1">
        Soluciones que generan<br /><em>impacto real</em> en tu negocio
      </h2>
      <div className="svcs reveal d2">
        {SERVICES.map((s) => (
          <div key={s.num} className="sc" data-tilt onClick={(e) => { if ((e.target as HTMLElement).closest('a')) return; }}>
            <div className="sc-num">{s.num}</div>
            <div className="sc-icon">{s.icon}</div>
            <div className="sc-name">{s.name}</div>
            <div className="sc-desc">{s.desc}</div>
            <div className="sc-tags">
              {s.tags.map(t => <span key={t} className="sc-tag">{t}</span>)}
            </div>
            {s.link ? (
              <a href={s.link} className="sc-arr" style={{ cursor: 'pointer', textDecoration: 'none' }}>→</a>
            ) : (
              <div className="sc-arr">→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
