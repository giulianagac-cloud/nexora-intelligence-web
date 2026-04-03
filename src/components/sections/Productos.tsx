'use client'

const PRODUCTOS = [
  {
    icon: '📊',
    tag: 'finanzas · operaciones',
    name: 'Nexora Flow Finance',
    tagline: 'El sistema financiero para PyMEs que no tienen sistema.',
    desc: 'Un solo producto que resuelve dos problemas: carga de operaciones y análisis inteligente.',
    modulos: [
      {
        nombre: 'Nexora Flow Control',
        desc: 'Panel web para cargar facturas emitidas, pagos recibidos y gastos. Sin contabilidad, sin tecnicismos. Lo carga cualquier persona de la empresa en minutos.',
      },
      {
        nombre: 'Nexora Flow Analytics',
        desc: 'Dashboard con IA que analiza tus datos y muestra qué se cobró, qué falta cobrar, cómo viene el mes y qué clientes deben. Todo en un lugar, sin Excel, sin reportes manuales.',
      },
    ],
    nota: 'Los módulos se pueden contratar por separado.',
    tags: ['Next.js','FastAPI','PostgreSQL','IA'],
  },
  {
    icon: '🧑‍💼',
    tag: 'recursos humanos',
    name: 'Nexora HR Module',
    tagline: 'Reclutamiento, onboarding y gestión de personas — todo automatizado.',
    desc: 'Tres pilares que se complementan para digitalizar y automatizar tu área de RRHH.',
    modulos: [
      {
        nombre: 'ATS / Reclutamiento',
        desc: 'Publicación de vacantes, pipeline Kanban de candidatos, scoring automático con IA y generación de descripciones y emails con Co-pilot propio.',
      },
      {
        nombre: 'Chatbot RRHH',
        desc: 'Asistente conversacional para candidatos y empleados: responde dudas del proceso, acompaña el onboarding y gestiona consultas de políticas internas.',
      },
      {
        nombre: 'Automatización de procesos HR',
        desc: 'Triggers automáticos: mover candidato de etapa, enviar emails, iniciar onboarding al contratar. Sin código, configurable por el cliente.',
      },
    ],
    tags: ['LangChain','FastAPI','Next.js','WhatsApp'],
  },
]

export function Productos() {
  return (
    <section id="productos" className="sec-pad">
      <div className="eyebrow reveal">// nuestros_productos</div>
      <h2 className="sec-title reveal d1">
        Productos listos<br /><em>para adoptar</em>
      </h2>
      <div className="reveal d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {PRODUCTOS.map((p) => (
          <div key={p.name} className="sc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>{p.icon}</span>
              <span className="sc-num">{p.tag}</span>
            </div>
            <div className="sc-name">{p.name}</div>
            <div className="sc-desc" style={{ fontStyle: 'italic', color: '#00F5A0' }}>{p.tagline}</div>
            <div className="sc-desc">{p.desc}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              {p.modulos.map((m) => (
                <div key={m.nombre} style={{ borderLeft: '2px solid rgba(0,245,160,0.3)', paddingLeft: '1rem' }}>
                  <div className="sc-name" style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>{m.nombre}</div>
                  <div className="sc-desc" style={{ fontSize: '0.85rem' }}>{m.desc}</div>
                </div>
              ))}
            </div>
            {'nota' in p && p.nota && (
              <div className="sc-num" style={{ marginTop: '0.5rem', opacity: 0.5 }}>{p.nota}</div>
            )}
            <div className="sc-tags" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              {p.tags.map(t => <span key={t} className="sc-tag">{t}</span>)}
            </div>
            <a href="#contacto" className="sc-arr" style={{ textDecoration: 'none', cursor: 'pointer' }}>→</a>
          </div>
        ))}
      </div>
    </section>
  )
}
