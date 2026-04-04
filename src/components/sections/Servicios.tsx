'use client'
import { useReveal } from '@/hooks/useReveal'

const SERVICES = [
  {
    num: '01',
    name: 'DESARROLLO WEB & APPS',
    desc: 'Sitios que convierten y sistemas que escalan. Landing pages hasta plataformas de gestión completas.',
    tags: ['Next.js', 'React', 'FastAPI', 'PostgreSQL'],
  },
  {
    num: '02',
    name: 'BOTS & ASISTENTES IA',
    desc: 'Chatbots inteligentes para atención al cliente, RRHH, onboarding y administración. 24/7, sin contratar.',
    tags: ['GPT-4', 'LangChain', 'RAG', 'WhatsApp'],
  },
  {
    num: '03',
    name: 'AUTOMATIZACIÓN DE PROCESOS',
    desc: 'Eliminamos tareas manuales repetitivas. Reportes, data entry, notificaciones — todo en piloto automático.',
    tags: ['n8n', 'Python', 'Make', 'APIs'],
  },
  {
    num: '04',
    name: 'AUTOMATIZACIÓN DE REPORTES',
    desc: 'Datos de múltiples fuentes convertidos en reportes automáticos cuando los necesitás.',
    tags: ['Sheets', 'Python', 'Dashboard'],
  },
  {
    num: '05',
    name: 'AUTOMATIZACIÓN ADMINISTRATIVA',
    desc: 'Facturación, vencimientos, carga de datos y alertas automáticas. Administración sin fricción.',
    tags: ['OCR', 'Integración', 'Alertas'],
  },
  {
    num: '06',
    name: 'CONSULTORÍA IT & ANÁLISIS DE NEGOCIO',
    desc: 'Relevamiento profundo de procesos, identificación de cuellos de botella y hoja de ruta tecnológica. Soporte técnico en redes, servidores, usuarios y configuraciones.',
    tags: ['Análisis', 'Roadmap', 'Soporte IT'],
  },
]

export function Servicios() {
  useReveal()

  return (
    <section className="sec-pad" id="servicios">
      <div className="eyebrow reveal">// LO_QUE_CONSTRUIMOS</div>
      <h2 className="sec-title reveal d1">
        SOLUCIONES QUE<br />GENERAN IMPACTO REAL
      </h2>

      <div className="svcs reveal d2">
        {SERVICES.map(s => (
          <div key={s.num} className="sc">
            <div className="sc-ghost">{s.num}</div>
            <div className="sc-name">{s.name}</div>
            <p className="sc-desc">{s.desc}</p>
            <div className="sc-tags">
              {s.tags.map(t => (
                <span key={t} className="sc-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
