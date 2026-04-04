'use client'
import { useReveal } from '@/hooks/useReveal'

const PRODUCTS = [
  {
    id: 'flow',
    tag: 'finanzas · operaciones',
    name: 'Nexora Flow Finance',
    tagColor: 'orange' as const,
    pitch: 'El sistema financiero para PyMEs que no tienen sistema.',
    desc: 'Un solo producto que resuelve dos problemas: carga de operaciones y análisis inteligente.',
    modules: [
      {
        name: 'Nexora Flow Control',
        desc: 'Panel web para cargar facturas emitidas, pagos recibidos y gastos. Sin contabilidad, sin tecnicismos. Lo carga cualquier persona de la empresa en minutos.',
      },
      {
        name: 'Nexora Flow Analytics',
        desc: 'Dashboard con IA que analiza tus datos y muestra qué se cobró, qué falta cobrar, cómo viene el mes y qué clientes deben. Todo en un lugar, sin Excel, sin reportes manuales.',
      },
    ],
    note: 'Los módulos se pueden contratar por separado.',
    techs: ['Next.js', 'FastAPI', 'PostgreSQL', 'IA'],
  },
  {
    id: 'hr',
    tag: 'recursos humanos',
    name: 'Nexora HR Module',
    tagColor: 'violet' as const,
    pitch: 'Reclutamiento, onboarding y gestión de personas — todo automatizado.',
    desc: 'Tres pilares que se complementan para digitalizar y automatizar tu área de RRHH.',
    modules: [
      {
        name: 'ATS / Reclutamiento',
        desc: 'Publicación de vacantes, pipeline Kanban de candidatos, scoring automático con IA y generación de descripciones y emails con Co-pilot propio.',
      },
      {
        name: 'Chatbot RRHH',
        desc: 'Asistente conversacional para candidatos y empleados: responde dudas del proceso, acompaña el onboarding y gestiona consultas de políticas internas.',
      },
      {
        name: 'Automatización de procesos HR',
        desc: 'Triggers automáticos: mover candidato de etapa, enviar emails, iniciar onboarding al contratar. Sin código, configurable por el cliente.',
      },
    ],
    note: null,
    techs: ['LangChain', 'FastAPI', 'Next.js', 'WhatsApp'],
  },
]

const tagStyles = {
  orange: { border: 'rgba(255,107,43,.3)', bg: 'rgba(255,107,43,.08)', color: 'var(--orange)' },
  violet: { border: 'rgba(139,92,246,.3)', bg: 'rgba(139,92,246,.08)', color: 'var(--violet)' },
}

const techStyles = {
  orange: { border: 'rgba(255,107,43,.25)', color: 'rgba(255,107,43,.8)' },
  violet: { border: 'rgba(139,92,246,.25)', color: 'rgba(139,92,246,.8)' },
}

export function NuestrosProductos() {
  useReveal()

  return (
    <section
      className="sec-pad"
      id="productos"
      style={{ background: 'var(--deep)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="eyebrow reveal">// nuestros_productos</div>
      <h2 className="sec-title reveal d1">
        PRODUCTOS LISTOS<br />PARA ADOPTAR
      </h2>

      <div
        className="reveal d2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          marginTop: 52,
        }}
      >
        {PRODUCTS.map(p => {
          const ts = tagStyles[p.tagColor]
          const tt = techStyles[p.tagColor]
          return (
            <div
              key={p.id}
              style={{
                background: 'var(--surface)',
                padding: '40px 40px 44px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                transition: 'background .3s',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 2,
                  border: `1px solid ${ts.border}`,
                  background: ts.bg,
                  color: ts.color,
                  marginBottom: 20,
                  alignSelf: 'flex-start',
                }}
              >
                {p.tag}
              </div>

              <div
                style={{
                  fontFamily: 'var(--hl)',
                  fontSize: 'clamp(22px, 2.2vw, 30px)',
                  fontWeight: 700,
                  letterSpacing: '-.03em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                  lineHeight: 1,
                  color: 'var(--white)',
                }}
              >
                {p.name}
              </div>

              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: 6,
                  lineHeight: 1.5,
                }}
              >
                {p.pitch}
              </div>

              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'var(--muted)',
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                {p.desc}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 28 }} />

              {/* Modules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
                {p.modules.map(m => (
                  <div key={m.name}>
                    <div
                      style={{
                        fontFamily: 'var(--hl)',
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '-.01em',
                        color: 'var(--white)',
                        marginBottom: 6,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <span style={{ color: ts.color, fontSize: 10, fontFamily: 'var(--mono)', fontWeight: 700 }}>→</span>
                      {m.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 12,
                        color: 'var(--muted)',
                        lineHeight: 1.75,
                        paddingLeft: 18,
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              {p.note && (
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: 'var(--muted)',
                    fontStyle: 'italic',
                    marginTop: 24,
                    paddingTop: 20,
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  {p.note}
                </div>
              )}

              {/* Tech tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
                {p.techs.map(t => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      padding: '4px 10px',
                      border: `1px solid ${tt.border}`,
                      borderRadius: 2,
                      color: tt.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
