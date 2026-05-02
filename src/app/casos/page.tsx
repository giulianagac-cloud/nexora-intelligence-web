import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Casos reales | NEXORA Intelligence',
  description: 'Proyectos reales construidos por Nexora Intelligence. Resultados concretos para PyMEs y emprendedores.',
}

export default function CasosPage() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>
      <Nav />

      {/* HERO */}
      <section className="pg-hero-tall" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,107,43,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            border: '1px solid rgba(255,107,43,.3)', background: 'rgba(255,107,43,.06)',
            padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
            fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--orange)', marginBottom: '36px',
          }}>
            // casos reales
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(36px, 7vw, 88px)',
            fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Lo que construimos<br />
            <span style={{ color: 'var(--orange)' }}>existe y funciona.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.85,
          }}>
            Proyectos reales, clientes reales, resultados concretos.
          </p>
        </div>
      </section>

      {/* CASOS */}
      <section className="pg-sec">

        {/* Caso 1 */}
        <div className="pg-grid-2c-md" style={{ marginBottom: '1px' }}>
          <div style={{ overflow: 'hidden', position: 'relative', minHeight: '360px' }}>
            <img
              src="https://api.microlink.io/?url=https://claudio-ortiz-abogado.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
              alt="Ortiz Alejandre Abogados"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ background: 'var(--surface)', padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '16px' }}>
              Estudio jurídico
            </div>
            <div style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.03em', marginBottom: '16px', lineHeight: 1.1 }}>
              Ortiz Alejandre Abogados
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)', borderLeft: '2px solid var(--border)', paddingLeft: '12px', marginBottom: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
              Antes — Sin presencia digital. Los clientes llegaban solo por recomendación y no había forma de contacto directo.
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '32px' }}>
              Sitio institucional con arquitectura clara, carga menor a 1 segundo y formulario de contacto seguro. Hoy recibe consultas diarias desde Google.
            </p>
            <a href="https://www.ortizalejandre.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'var(--orange)', color: '#fff', fontFamily: 'var(--mono)',
              fontSize: '12px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
              textDecoration: 'none', padding: '10px 20px', borderRadius: '2px', alignSelf: 'flex-start',
            }}>
              Ver sitio ↗
            </a>
          </div>
        </div>

        {/* Caso 2 */}
        <div className="pg-grid-2c-md">
          <div style={{ background: 'var(--surface)', padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '16px' }}>
              Gimnasio boutique
            </div>
            <div style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.03em', marginBottom: '16px', lineHeight: 1.1 }}>
              OverGym
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)', borderLeft: '2px solid var(--border)', paddingLeft: '12px', marginBottom: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
              Antes — Gestión manual en planillas. Reservas por WhatsApp, pagos en efectivo y cero visibilidad del negocio en tiempo real.
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>
              App de gestión con reservas, pagos y panel en tiempo real. La operación pasó de planillas manuales a un sistema digital completo en pocas semanas.
            </p>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', minHeight: '360px' }}>
            <img
              src="/gym.jpg"
              alt="OverGym"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="pg-cta" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,43,.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 62px)',
            fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1,
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            ¿Tu proyecto<br />es el próximo?
          </h2>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)',
            marginBottom: '48px', lineHeight: 1.8,
          }}>
            Contanos qué necesitás y arrancamos.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--orange)', color: '#fff', padding: '18px 40px',
            fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px',
            letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', display: 'inline-block',
          }}>
            Hablemos →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pg-footer">
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
          © 2026 NEXORA Intelligence
        </span>
      </footer>
    </main>
  )
}
