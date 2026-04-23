'use client'
import { useState } from 'react'
import { Nav } from '@/components/layout/Nav'

const FAQS = [
  {
    q: '¿Necesito saber de tecnología para contratar sus servicios?',
    a: 'No. Nos encargamos de todo el proceso técnico. Vos nos contás cómo funciona tu negocio y nosotros diseñamos la solución. Solo necesitás saber qué procesos te están comiendo el tiempo.',
  },
  {
    q: '¿Cuánto tarda una implementación?',
    a: 'Depende del proyecto. Una automatización simple o un bot básico puede estar funcionando en 48 horas. Un sistema más complejo como Nexora RRHH o Nexora Finanzas tarda entre 1 y 3 semanas.',
  },
  {
    q: '¿Qué pasa si algo falla después de la entrega?',
    a: 'Todos nuestros proyectos incluyen soporte post-entrega. Si algo no funciona como esperabas, lo resolvemos. No desaparecemos después de cobrar.',
  },
  {
    q: '¿Puedo empezar con algo pequeño y crecer después?',
    a: 'Sí, y de hecho lo recomendamos. La mayoría de nuestros clientes empiezan con una automatización puntual o un bot básico, ven los resultados y después escalan. No hay contratos que te obliguen a más de lo que necesitás.',
  },
  {
    q: '¿Trabajan solo con empresas grandes o también con emprendedores?',
    a: 'Trabajamos con PyMEs y emprendedores principalmente. De hecho nuestros productos están diseñados para negocios que no tienen equipo de IT pero quieren operar mejor.',
  },
  {
    q: '¿Los precios son en dólares o en pesos?',
    a: 'Los precios de referencia están en dólares porque los costos de infraestructura son en moneda extranjera. Pero coordinamos la forma de pago según cada cliente y proyecto.',
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>

      <Nav />

      {/* HERO */}
      <section style={{
        padding: '160px 64px 80px',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(255,107,43,.07) 0%, transparent 60%)',
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
            // preguntas frecuentes
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Lo que nos preguntan<br />
            <span style={{ color: 'var(--orange)' }}>antes de arrancar.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.85,
          }}>
            Si tenés alguna duda que no está acá, escribinos por WhatsApp.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: '96px 64px' }}>
        <div style={{
          border: '1px solid var(--border)', display: 'flex', flexDirection: 'column',
          maxWidth: '860px',
        }}>
          {FAQS.map((f, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                borderBottom: i < FAQS.length - 1 ? '1px solid var(--border)' : 'none',
                cursor: 'pointer',
                background: open === i ? 'rgba(255,107,43,.03)' : 'var(--surface)',
                transition: 'background .2s',
              }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: '24px', padding: '24px 32px',
                fontFamily: 'var(--mono)', fontSize: '15px', fontWeight: 600,
                color: 'var(--white)', lineHeight: 1.5,
              }}>
                <span>{f.q}</span>
                <span style={{
                  fontSize: '20px', color: 'var(--orange)', flexShrink: 0,
                  fontWeight: 300,
                }}>
                  {open === i ? '−' : '+'}
                </span>
              </div>
              {open === i && (
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)',
                  lineHeight: 1.85, padding: '0 32px 24px',
                }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '96px 64px', background: 'var(--surface)',
        borderTop: '1px solid var(--border)', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 3.5vw, 48px)',
          fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1,
          textTransform: 'uppercase', marginBottom: '16px',
        }}>
          ¿Tenés otra pregunta?
        </h2>
        <p style={{
          fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)',
          marginBottom: '36px', lineHeight: 1.8,
        }}>
          Escribinos por WhatsApp y te respondemos en menos de 24hs.
        </p>
        <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
          background: 'var(--orange)', color: '#fff', padding: '15px 36px',
          fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
          letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
          borderRadius: '2px', display: 'inline-block',
        }}>
          Escribinos →
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '32px 64px', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px',
      }}>
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
