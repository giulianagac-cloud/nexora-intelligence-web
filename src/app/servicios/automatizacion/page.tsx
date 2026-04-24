import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Automatización de procesos | NEXORA Intelligence',
  description: 'Eliminamos las tareas manuales repetitivas de tu negocio. Reportes, notificaciones, carga de datos — todo en piloto automático.',
}

export default function AutomatizacionPage() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>
      <Nav />

      {/* HERO */}
      <section className="auto-hero">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,107,43,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="auto-hero-grid">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,107,43,.3)', background: 'rgba(255,107,43,.06)',
              padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
              fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--orange)', marginBottom: '36px',
            }}>
              // automatización
            </div>
            <h1 style={{
              fontFamily: 'var(--hl)', fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Tus procesos<br />
              <span style={{ color: 'var(--orange)' }}>en piloto automático.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
              maxWidth: '480px', lineHeight: 1.85, marginBottom: '48px',
            }}>
              Eliminamos las tareas manuales que te roban tiempo todos los días. Reportes, notificaciones, carga de datos — corriendo solos mientras vos te enfocás en lo que importa.
            </p>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--orange)', color: '#fff', padding: '15px 30px',
              fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
              letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: '2px', display: 'inline-block',
            }}>
              Quiero automatizar →
            </a>
          </div>
          <div className="auto-hero-img">
            <img src="/automatizacion.png" alt="Automatización Nexora" />
          </div>
        </div>
      </section>

      {/* QUÉ AUTOMATIZAMOS */}
      <section className="auto-sec">
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// qué automatizamos</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          Los procesos que más<br />tiempo te roban, los podes automatizar.
        </h2>
        <div className="auto-cards">
          {[
            { title: 'Reportes automáticos', desc: 'Datos de múltiples fuentes convertidos en reportes listos cuando los necesitás. Sin que nadie los arme a mano.' },
            { title: 'Notificaciones y alertas', desc: 'Avisos automáticos por email o WhatsApp cuando pasa algo importante. Vencimientos, pagos, stock bajo.' },
            { title: 'Carga de datos', desc: 'Eliminamos el copy-paste entre sistemas. Los datos viajan solos de un lugar a otro sin intervención humana.' },
            { title: 'Facturación', desc: 'Generación y envío automático de facturas. Integrado con AFIP, Google Drive o el sistema que ya usás.' },
            { title: 'Onboarding de clientes', desc: 'Desde que un cliente completa un formulario hasta que tiene todo lo que necesita — automatizado paso a paso.' },
            { title: 'Procesos a medida', desc: 'Si tenés un proceso repetitivo que no está en esta lista, lo analizamos y lo automatizamos igual.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--orange)', marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--hl)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '12px' }}>{item.title}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="auto-cta">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,43,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Qué proceso<br />querés automatizar?
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', marginBottom: '48px', lineHeight: 1.8 }}>
            Contanos cómo funciona hoy y te decimos si lo podemos automatizar.<br />15 minutos por WhatsApp.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--orange)', color: '#fff', padding: '18px 40px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
            Hablemos →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="auto-footer">
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>© 2026 NEXORA Intelligence</span>
      </footer>
    </main>
  )
}
