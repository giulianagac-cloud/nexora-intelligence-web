'use client'
import { useEffect, useRef, useState } from 'react'

interface Msg  { t: 'bot' | 'usr'; m: string }
interface Vert {
  name: string; av: string; bot: string
  desc: string; flows: string[]; msgs: Msg[]
}

const VERTS: Vert[] = [
  {
    name: 'HR Assistant', av: '👥', bot: 'NexBot — HR',
    desc: 'Gestión de consultas de Recursos Humanos. Licencias, vacaciones, onboarding y políticas internas — respondidas al instante.',
    flows: ['Consulta y solicitud de vacaciones','Justificación de licencias','Avisos de enfermedad','Servicio médico y citas','Onboarding de nuevos empleados'],
    msgs: [
      { t:'bot', m:'¡Hola! Soy tu asistente de RRHH. ¿Tenés alguna consulta?' },
      { t:'usr', m:'¿Cuántos días de vacaciones me corresponden?' },
      { t:'bot', m:'Con 3 años de antigüedad: 14 días hábiles. ¿Iniciamos la solicitud?' },
      { t:'usr', m:'Sí, para julio' },
      { t:'bot', m:'Solicitud enviada a tu jefe. Confirmación en 48hs ✅' },
    ],
  },
  {
    name: 'Finance Assistant', av: '💰', bot: 'NexBot — Finance',
    desc: 'Automatización del área financiera. Facturas, vencimientos, reportes y consultas de estado sin intervención manual.',
    flows: ['Estado de facturas y pagos','Alertas de vencimiento','Reportes automáticos','Consulta de presupuestos','Integración con ERP'],
    msgs: [
      { t:'bot', m:'Sistema financiero activo. ¿En qué puedo ayudarte?' },
      { t:'usr', m:'¿Hay facturas por vencer esta semana?' },
      { t:'bot', m:'Sí, 3 facturas. Total: $66.300. ¿Querés el detalle?' },
      { t:'usr', m:'Sí por favor' },
      { t:'bot', m:'• Prov A: $45.000 — 31/03\n• Prov B: $12.800 — 01/04\n• Prov C: $8.500 — 02/04 📊' },
    ],
  },
  {
    name: 'Legal Assistant', av: '⚖️', bot: 'NexBot — Legal',
    desc: 'Consultas legales frecuentes resueltas al instante. Contratos, compliance y políticas sobre tu documentación real.',
    flows: ['Consultas sobre contratos','Políticas de compliance','RAG sobre documentación legal','Derivación a estudio legal','Registro de consultas'],
    msgs: [
      { t:'bot', m:'Asistente Legal activo. ¿Tenés alguna consulta sobre contratos o compliance?' },
      { t:'usr', m:'¿Qué cláusulas incluye el contrato estándar de confidencialidad?' },
      { t:'bot', m:'Según el modelo NDA de tu empresa: plazo de 2 años, alcance sobre info comercial y técnica. ¿Querés el documento completo?' },
      { t:'usr', m:'Sí, mandámelo' },
      { t:'bot', m:'Documento enviado a tu email. Firmado digitalmente disponible en portal. ✅' },
    ],
  },
  {
    name: 'Operations Assistant', av: '⚙️', bot: 'NexBot — Ops',
    desc: 'Soporte operativo interno. Tickets, procedimientos, búsquedas en base de conocimiento y soporte técnico nivel 1.',
    flows: ['Sistema de tickets interno','Búsquedas en base de conocimiento','Guías de procedimientos','Soporte técnico nivel 1','Integración con herramientas internas'],
    msgs: [
      { t:'bot', m:'Soporte operativo activo. ¿Cómo puedo ayudarte?' },
      { t:'usr', m:'No puedo acceder al sistema de nómina' },
      { t:'bot', m:'Entendido. Abrí un ticket #4821 — prioridad media. El equipo de IT responde en 2hs hábiles.' },
      { t:'usr', m:'¿Hay algún procedimiento mientras tanto?' },
      { t:'bot', m:'Sí. Podés consultar datos de nómina desde el portal HR con tus credenciales. Te mando el link 🔗' },
    ],
  },
]

export function Verticales() {
  const [active, setActive] = useState(0)
  const [msgs, setMsgs]     = useState<Msg[]>([])
  const msgsRef = useRef<HTMLDivElement>(null)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  function loadMsgs(idx: number) {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    setMsgs([])
    VERTS[idx].msgs.forEach((m, i) => {
      const id = setTimeout(() => {
        setMsgs(prev => [...prev, m])
        if (msgsRef.current)
          msgsRef.current.scrollTop = msgsRef.current.scrollHeight
      }, i * 280)
      timersRef.current.push(id)
    })
  }

  useEffect(() => {
    loadMsgs(0)
    return () => timersRef.current.forEach(clearTimeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function switchVert(idx: number) {
    setActive(idx)
    loadMsgs(idx)
  }

  const v = VERTS[active]

  return (
    <section className="vert-sec sec-pad" id="verticales">
      <div className="eyebrow reveal">// NEXORA_ASSISTANT.verticales</div>
      <h2 className="sec-title reveal d1">
        Un producto.<br /><em>Cuatro verticales.</em>
      </h2>
      <p className="reveal d2" style={{ fontSize:'14px',color:'var(--muted)',marginTop:'14px',maxWidth:'540px',fontFamily:'var(--sans)',lineHeight:'1.8' }}>
        La plataforma Nexora se adapta a cualquier área de tu empresa. Mismo motor,
        configurado para cada contexto. Hacé clic en cada vertical para ver cómo trabaja.
      </p>

      <div className="vert-layout reveal d3">
        {/* Tabs */}
        <div className="vert-tabs-panel">
          <div className="vert-tabs">
            {VERTS.map((vert, i) => (
              <button
                key={vert.name}
                className={`vtab${active === i ? ' active' : ''}`}
                onClick={() => switchVert(i)}
              >
                <div className={`vtab-status ${i === 0 ? 'live' : 'soon'}`}>
                  {i === 0 ? 'en producción' : 'próximamente'}
                </div>
                <div className="vtab-name">{vert.av} {vert.name}</div>
                <div className="vtab-sub">
                  {['Recursos Humanos','Finanzas','Legal & Compliance','Operaciones'][i]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="vert-panel">
          <div className="vert-chat">
            <div className="vc-hdr">
              <div className="vc-av">{v.av}</div>
              <div><div className="vc-name">{v.bot}</div></div>
              <div className="vc-stat">activo</div>
            </div>
            <div className="vc-msgs" ref={msgsRef}>
              {msgs.map((m, i) => (
                <div key={i} className={`vc-msg ${m.t === 'bot' ? 'vc-bot' : 'vc-usr'}`}>
                  {m.m}
                </div>
              ))}
            </div>
            <div className="vc-inp">
              <div className="vc-fake">// escribí tu consulta...</div>
              <button className="vc-send">→</button>
            </div>
          </div>
          <div className="vert-info">
            <div className="vert-info-name">{v.name}</div>
            <div className="vert-info-desc">{v.desc}</div>
            <ul className="vert-flows">
              {v.flows.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
