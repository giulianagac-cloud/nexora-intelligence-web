'use client'
import { useReveal } from '@/hooks/useReveal'

type Accent = 'orange' | 'violet' | 'blue'

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
  illustration?: React.ReactNode
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
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:'320px',borderRadius:'8px',border:'1px solid rgba(255,107,43,0.2)'}}>
        <rect width="320" height="180" fill="#0d0d14"/>
        <rect x="12" y="20" width="72" height="90" rx="4" fill="#12121e" stroke="#ffffff12" strokeWidth="1"/>
        <rect x="12" y="20" width="72" height="14" rx="4" fill="#1a1a2e"/>
        <text x="20" y="30" fill="#ff6b2b" fontSize="7" fontFamily="monospace" fontWeight="700">PDF</text>
        <rect x="20" y="40" width="56" height="4" rx="2" fill="#ffffff12"/>
        <rect x="20" y="50" width="40" height="4" rx="2" fill="#ffffff12"/>
        <rect x="20" y="60" width="50" height="4" rx="2" fill="#ffffff12"/>
        <rect x="20" y="70" width="35" height="4" rx="2" fill="#ffffff12"/>
        <rect x="20" y="82" width="56" height="16" rx="2" fill="#1a1a2e" stroke="#ff6b2b22" strokeWidth="1"/>
        <text x="26" y="92" fill="#ff6b2b" fontSize="7" fontFamily="monospace">CUIT: 20-123456-7</text>
        <rect x="20" y="102" width="56" height="8" rx="2" fill="#ffffff08"/>
        <text x="26" y="108" fill="#6b6b8a" fontSize="6" fontFamily="monospace">Total: $125.400</text>
        <path d="M90 65 L130 65" stroke="#ff6b2b" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr)"/>
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#ff6b2b"/>
          </marker>
        </defs>
        <rect x="130" y="35" width="60" height="60" rx="8" fill="#12121e" stroke="#ffffff12" strokeWidth="1"/>
        <text x="148" y="58" fill="#4285f4" fontSize="18" fontFamily="monospace">▲</text>
        <text x="137" y="75" fill="#6b6b8a" fontSize="7" fontFamily="monospace">Google Drive</text>
        <text x="140" y="86" fill="#ff6b2b" fontSize="7" fontFamily="monospace">✓ Recibido</text>
        <path d="M196 65 L224 65" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arr2)"/>
        <defs>
          <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8b5cf6"/>
          </marker>
        </defs>
        <rect x="224" y="18" width="84" height="130" rx="4" fill="#12121e" stroke="#ffffff12" strokeWidth="1"/>
        <rect x="224" y="18" width="84" height="14" rx="4" fill="#1a1a2e"/>
        <text x="232" y="28" fill="#f2f2f8" fontSize="7" fontFamily="monospace" fontWeight="600">Datos extraídos</text>
        <rect x="232" y="38" width="68" height="18" rx="3" fill="#1a1a2e"/>
        <text x="238" y="47" fill="#6b6b8a" fontSize="6" fontFamily="monospace">CUIT proveedor</text>
        <text x="238" y="54" fill="#ff6b2b" fontSize="7" fontFamily="monospace">20-123456-7 ✓</text>
        <rect x="232" y="60" width="68" height="18" rx="3" fill="#1a1a2e"/>
        <text x="238" y="69" fill="#6b6b8a" fontSize="6" fontFamily="monospace">Comprobante</text>
        <text x="238" y="76" fill="#f2f2f8" fontSize="7" fontFamily="monospace">Factura A - 0001</text>
        <rect x="232" y="82" width="68" height="18" rx="3" fill="#1a1a2e"/>
        <text x="238" y="91" fill="#6b6b8a" fontSize="6" fontFamily="monospace">Monto neto</text>
        <text x="238" y="98" fill="#f2f2f8" fontSize="7" fontFamily="monospace">$103.636</text>
        <rect x="232" y="104" width="68" height="18" rx="3" fill="#1a1a2e"/>
        <text x="238" y="113" fill="#6b6b8a" fontSize="6" fontFamily="monospace">IVA 21%</text>
        <text x="238" y="120" fill="#f2f2f8" fontSize="7" fontFamily="monospace">$21.764</text>
        <rect x="232" y="126" width="68" height="16" rx="3" fill="#0d1f0d"/>
        <text x="238" y="135" fill="#4ade80" fontSize="7" fontFamily="monospace">✓ Validado en AFIP</text>
        <text x="14" y="128" fill="#6b6b8a" fontSize="7" fontFamily="monospace">n8n · Claude API · AFIP</text>
        <text x="14" y="140" fill="#ff6b2b" fontSize="7" fontFamily="monospace">Procesado en &lt; 2 min</text>
      </svg>
    ),
    note: 'Implementación a medida según el volumen y sistema de cada empresa.',
    techs: ['n8n', 'Claude API', 'Google Drive', 'AFIP'],
  },
  {
    id: 'assets',
    tag: 'gestión de activos · cualquier rubro',
    accent: 'blue',
    name: 'Nexora Assets',
    pitch: 'Todo lo que tu empresa tiene, en un solo lugar.',
    desc: 'Plataforma web para registrar, asignar y controlar activos físicos y digitales. Equipos, licencias, herramientas, vehículos — con historial, alertas y reportes listos para auditoría.',
    modules: [
      {
        name: 'Inventario centralizado',
        desc: 'Registro completo de activos con ficha técnica, historial, fotos y documentación adjunta. Cada activo vinculado a una persona, área o sede.',
      },
      {
        name: 'Alertas automáticas',
        desc: 'Notificaciones de vencimiento de licencias, mantenimientos programados y garantías por expirar. Nunca más te agarra desprevenido.',
      },
      {
        name: 'Dashboard y reportes',
        desc: 'Vista en tiempo real del estado de todos los activos: en uso, en reparación, disponible, dado de baja. Exportación a Excel o PDF con un clic.',
      },
    ],
    note: 'Funciona para cualquier rubro: IT, salud, construcción, educación, hotelería, logística y más.',
    techs: ['Next.js', 'Supabase', 'PostgreSQL', 'Stripe'],
    illustration: (
      <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:'320px',borderRadius:'8px',border:'1px solid rgba(139,92,246,0.2)'}}>
        <rect width="320" height="200" fill="#0d0d14"/>
        <rect x="0" y="0" width="320" height="28" fill="#12121e"/>
        <circle cx="12" cy="14" r="4" fill="#8b5cf6"/>
        <text x="22" y="18" fill="#f2f2f8" fontSize="9" fontFamily="monospace" fontWeight="600">Nexora Assets</text>
        <text x="240" y="18" fill="#6b6b8a" fontSize="9" fontFamily="monospace">Empresa SA</text>
        <rect x="0" y="28" width="80" height="172" fill="#0d0d14"/>
        <rect x="0" y="44" width="3" height="18" fill="#8b5cf6"/>
        <text x="10" y="57" fill="#8b5cf6" fontSize="9" fontFamily="monospace">Inventario</text>
        <text x="10" y="75" fill="#6b6b8a" fontSize="9" fontFamily="monospace">Asignaciones</text>
        <text x="10" y="92" fill="#6b6b8a" fontSize="9" fontFamily="monospace">Alertas</text>
        <text x="10" y="109" fill="#6b6b8a" fontSize="9" fontFamily="monospace">Reportes</text>
        <rect x="80" y="28" width="1" height="172" fill="#ffffff12"/>
        <rect x="88" y="36" width="70" height="32" rx="4" fill="#12121e"/>
        <text x="96" y="50" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Total activos</text>
        <text x="96" y="62" fill="#8b5cf6" fontSize="14" fontFamily="monospace" fontWeight="700">148</text>
        <rect x="166" y="36" width="60" height="32" rx="4" fill="#12121e"/>
        <text x="174" y="50" fill="#6b6b8a" fontSize="8" fontFamily="monospace">En uso</text>
        <text x="174" y="62" fill="#f2f2f8" fontSize="14" fontFamily="monospace" fontWeight="700">112</text>
        <rect x="234" y="36" width="60" height="32" rx="4" fill="#12121e"/>
        <text x="242" y="50" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Disponibles</text>
        <text x="242" y="62" fill="#f2f2f8" fontSize="14" fontFamily="monospace" fontWeight="700">36</text>
        <rect x="88" y="76" width="206" height="14" fill="#1a1a2e"/>
        <text x="96" y="86" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Activo</text>
        <text x="186" y="86" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Área</text>
        <text x="226" y="86" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Estado</text>
        <rect x="88" y="90" width="206" height="1" fill="#ffffff12"/>
        <text x="96" y="102" fill="#f2f2f8" fontSize="8" fontFamily="monospace">MacBook Pro 14"</text>
        <text x="186" y="102" fill="#6b6b8a" fontSize="8" fontFamily="monospace">IT</text>
        <rect x="222" y="95" width="44" height="11" rx="3" fill="#0d1f0d"/>
        <text x="228" y="103" fill="#4ade80" fontSize="7" fontFamily="monospace">En uso</text>
        <rect x="88" y="106" width="206" height="1" fill="#ffffff12"/>
        <text x="96" y="118" fill="#f2f2f8" fontSize="8" fontFamily="monospace">Monitor Dell 27"</text>
        <text x="186" y="118" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Diseño</text>
        <rect x="222" y="111" width="44" height="11" rx="3" fill="#0d1f0d"/>
        <text x="228" y="119" fill="#4ade80" fontSize="7" fontFamily="monospace">En uso</text>
        <rect x="88" y="122" width="206" height="1" fill="#ffffff12"/>
        <text x="96" y="134" fill="#f2f2f8" fontSize="8" fontFamily="monospace">Adobe CC License</text>
        <text x="186" y="134" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Mktg</text>
        <rect x="222" y="127" width="52" height="11" rx="3" fill="#0d1520"/>
        <text x="226" y="135" fill="#60a5fa" fontSize="7" fontFamily="monospace">Disponible</text>
        <rect x="88" y="138" width="206" height="1" fill="#ffffff12"/>
        <text x="96" y="150" fill="#f2f2f8" fontSize="8" fontFamily="monospace">Impresora HP</text>
        <text x="186" y="150" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Admin</text>
        <rect x="222" y="143" width="52" height="11" rx="3" fill="#1f1000"/>
        <text x="226" y="151" fill="#fb923c" fontSize="7" fontFamily="monospace">Reparación</text>
        <rect x="88" y="168" width="206" height="24" rx="4" fill="#1a1a2e"/>
        <text x="96" y="178" fill="#6b6b8a" fontSize="8" fontFamily="monospace">Licencia Adobe vence en 7 días</text>
        <text x="96" y="188" fill="#8b5cf6" fontSize="7" fontFamily="monospace">Ver detalles →</text>
      </svg>
    ),
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

            {p.illustration && (
              <div style={{marginBottom: '16px', marginTop: '16px'}}>
                {p.illustration}
              </div>
            )}

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
