import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Cursos — IA y automatización | NEXORA Intelligence',
  description: 'Próximamente: cursos de inteligencia artificial y automatización para principiantes y profesionales. Sin tecnicismos.',
}

export default function CursosPage() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>
      <Nav />

      {/* HERO */}
      <section className="pg-hero" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,166,126,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '1px solid rgba(0,166,126,.3)', background: 'rgba(0,166,126,.06)',
            padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
            fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--blue)', marginBottom: '36px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
            próximamente
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            Aprendé IA<br />
            <span style={{ color: 'var(--blue)' }}>desde cero.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.85, marginBottom: '48px',
          }}>
            Sin tecnicismos. Sin experiencia previa. Para personas y empresas que quieren entender qué es la IA y cómo aplicarla en su trabajo o negocio.
          </p>
        </div>
      </section>

      {/* PRIMER CURSO */}
      <section className="pg-sec" style={{ background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// primer curso</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          IA para principiantes.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          <div style={{ background: 'var(--surface)', padding: '48px 44px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,166,126,.08)', border: '1px solid rgba(0,166,126,.25)',
              padding: '6px 14px', borderRadius: '2px', marginBottom: '24px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', animation: 'pulse 2s infinite', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)' }}>
                Próximamente
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--hl)', fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '16px' }}>
              Inteligencia artificial para personas reales
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '32px' }}>
              Un curso práctico para entender qué es la IA, cómo funciona y cómo podés usarla hoy en tu trabajo o negocio — sin saber programar, sin experiencia técnica.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Qué es la IA y qué no es',
                'Herramientas que podés usar hoy',
                'Cómo automatizar tareas con IA',
                'Casos reales en PyMEs argentinas',
                'Sin código, sin tecnicismos',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '2px', background: 'rgba(0,166,126,.1)', border: '1px solid rgba(0,166,126,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'var(--blue)', fontSize: '11px', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--white)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--surface2)', padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>🚀</div>
            <h3 style={{ fontFamily: 'var(--hl)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '16px' }}>
              Temario en preparación
            </h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '32px', maxWidth: '280px' }}>
              Estamos armando el contenido. Dejá tu email y te avisamos cuando esté disponible.
            </p>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 28px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
              Avisame cuando esté →
            </a>
          </div>
        </div>
      </section>

      {/* MÁS CURSOS */}
      <section className="pg-sec" style={{ background: 'var(--black)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// próximos cursos</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          La hoja de ruta.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          {[
            { nivel: 'Nivel 1', titulo: 'IA para principiantes', desc: 'Qué es, cómo funciona y cómo usarla hoy sin saber programar.', estado: 'En preparación' },
            { nivel: 'Nivel 2', titulo: 'Automatización práctica', desc: 'Herramientas para automatizar procesos en tu negocio paso a paso.', estado: 'Próximamente' },
            { nivel: 'Nivel 3', titulo: 'Bots e integración avanzada', desc: 'Construí tu propio bot y conectalo a tus sistemas.', estado: 'Próximamente' },
          ].map((c, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '36px 32px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '12px' }}>{c.nivel}</div>
              <div style={{ fontFamily: 'var(--hl)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '10px' }}>{c.titulo}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '20px' }}>{c.desc}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '2px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--muted)', display: 'inline-block' }} />
                {c.estado}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pg-footer">
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--blue)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
          © 2026 NEXORA Intelligence
        </span>
      </footer>
    </main>
  )
}
