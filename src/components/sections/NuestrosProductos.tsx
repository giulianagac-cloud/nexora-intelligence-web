'use client'
import { useReveal } from '@/hooks/useReveal'

type Accent = 'orange' | 'violet'

interface Module { name: string; desc: string }
interface Product {
  id: string
  tag: string
  accent: Accent
  name: string
  pitch: string
  desc: string
  modules: Module[]
  note?: string
  techs: string[]
}

const PRODUCTS: Product[] = [
  {
    id: 'flow',
    tag: 'finanzas · operaciones',
    accent: 'orange',
    name: 'Nexora Flow Finance',
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
    accent: 'violet',
    name: 'Nexora HR Module',
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
    techs: ['LangChain', 'FastAPI', 'Next.js', 'WhatsApp'],
  },
  {
    id: 'factura',
    tag: 'administración · finanzas',
    accent: 'orange',
    name: 'Factura Lista',
    pitch: '¿Todavía cargás facturas a mano? Eso se terminó.',
    desc: 'Automatización completa de lectura y registro de comprobantes. Subís el PDF a Google Drive y el sistema hace el resto.',
    modules: [
      {
        name: 'Lectura automática',
        desc: 'Lee PDFs digitales, escaneados y fotos de facturas. Extrae CUIT, tipo de comprobante, monto neto, IVA, total y fecha de emisión sin intervención manual.',
      },
      {
        name: 'Validación AFIP',
        desc: 'Valida automáticamente el CUIT del proveedor contra el padrón de AFIP. Si algo no está claro, te avisa para que lo revisés vos. Nunca carga algo sin estar seguro.',
      },
      {
        name: 'Integración Google Drive',
        desc: 'Sin software nuevo, sin capacitación larga. Usás una carpeta de Drive que ya tenés. Nosotros configuramos todo.',
      },
    ],
    note: 'Implementación a medida según el volumen y sistema de cada empresa.',
    techs: ['n8n', 'Claude API', 'Google Drive', 'AFIP'],
  },
]

export function NuestrosProductos() {
  useReveal()

  return (
    <section className="prod-sec sec-pad" id="productos">
      <div className="eyebrow reveal">// nuestras_soluciones</div>
      <h2 className="sec-title reveal d1">SOLUCIONES A<br />MEDIDA DE TU NEGOCIO</h2>

      <div className="prod-grid reveal d2">
        {PRODUCTS.map(p => (
          <div key={p.id} className="prod-card">
            <div className={`prod-tag ${p.accent}`}>{p.tag}</div>
            <div className="prod-name">{p.name}</div>
            <div className="prod-pitch">{p.pitch}</div>
            <div className="prod-desc">{p.desc}</div>

            <div className="prod-divider" />

            <div className="prod-modules">
              {p.modules.map(m => (
                <div key={m.name}>
                  <div className="prod-mod-name">
                    <span className={`prod-mod-arrow ${p.accent}`}>→</span>
                    {m.name}
                  </div>
                  <div className="prod-mod-desc">{m.desc}</div>
                </div>
              ))}
            </div>

            {p.note && <div className="prod-note">{p.note}</div>}

            <div className="prod-techs">
              {p.techs.map(t => (
                <span key={t} className={`prod-tech ${p.accent}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
