import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Programadora — Giuliana | NEXORA Intelligence',
  description: 'Soy Giuliana, analista funcional SAP con más de 14 años de experiencia y fundadora de Nexora Intelligence. Automatización e IA aplicada a PyMEs.',
}

export default function ProgramadoraPage() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>

      <Nav />

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '120px 64px 80px',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,107,43,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center', maxWidth: '1100px',
        }}>
          {/* Foto */}
          <div style={{
            aspectRatio: '4/5', overflow: 'hidden',
            borderRadius: '4px', border: '1px solid var(--border)',
            position: 'relative',
          }}>
            <Image
              src="/giuli.jpeg"
              alt="Giuliana, fundadora de Nexora Intelligence"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Contenido */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,107,43,.3)', background: 'rgba(255,107,43,.06)',
              padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
              fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--orange)', marginBottom: '36px',
            }}>
              // quién está detrás
            </div>
            <h1 style={{
              fontFamily: 'var(--hl)', fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Hecho por una<br />
              <span style={{ color: 'var(--orange)' }}>programadora.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)',
              lineHeight: 1.85, marginBottom: '16px',
            }}>
              Nexora no es una agencia de 50 personas. Soy Giuliana, analista funcional SAP con más de 14 años de experiencia en procesos y sistemas, y fundadora de Nexora Intelligence.
            </p>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)',
              lineHeight: 1.85, marginBottom: '32px',
            }}>
              Construyo cada solución entendiendo primero cómo funciona tu negocio — no al revés. Porque automatizar mal es peor que no automatizar.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['SAP HCM', 'Automatización', 'IA aplicada', '14+ años de experiencia', 'FastAPI', 'n8n', 'LangChain'].map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--mono)', fontSize: '12px', padding: '6px 12px',
                  border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted2)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--orange)', color: '#fff', padding: '15px 30px',
              fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
              letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: '2px', display: 'inline-block',
            }}>
              Hablemos →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section style={{
        padding: '96px 64px', background: 'var(--deep)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px',
        }}>// experiencia</div>
        <h2 style={{
          fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
          textTransform: 'uppercase', marginBottom: '52px',
        }}>
          14 años resolviendo<br />problemas reales.
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
        }}>
          {[
            { num: '14+', label: 'Años de experiencia', desc: 'Trabajando con sistemas SAP HCM en empresas con operaciones complejas y procesos críticos.' },
            { num: '100%', label: 'Orientada a resultados', desc: 'Cada proyecto arranca con una pregunta: ¿qué problema real estamos resolviendo? No al revés.' },
            { num: '24/7', label: 'Sistemas que no duermen', desc: 'Las soluciones que construyo funcionan solas. Automatizaciones, bots y sistemas que corren sin intervención.' },
          ].map((item) => (
            <div key={item.num} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{
                fontFamily: 'var(--hl)', fontSize: '52px', fontWeight: 700,
                color: 'var(--orange)', letterSpacing: '-.04em', lineHeight: 1,
                marginBottom: '12px',
              }}>{item.num}</div>
              <div style={{
                fontFamily: 'var(--hl)', fontSize: '16px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '10px',
              }}>{item.label}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMA DE TRABAJO */}
      <section style={{
        padding: '96px 64px', background: 'var(--black)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px',
        }}>// cómo trabajo</div>
        <h2 style={{
          fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
          textTransform: 'uppercase', marginBottom: '52px',
        }}>
          Sin humo.<br />Sin promesas vacías.
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
        }}>
          {[
            { title: 'Primero entiendo tu negocio', desc: 'Antes de proponer cualquier solución, necesito entender cómo operás, dónde perdés tiempo y qué procesos son críticos. No vendo tecnología — resuelvo problemas.' },
            { title: 'Transparencia total', desc: 'Tenés acceso al desarrollo en todo momento. Sin cajas negras, sin sorpresas al final. Sabés qué se está construyendo y por qué.' },
            { title: 'Implementaciones reales', desc: 'No entrego demos que nunca funcionan en producción. Lo que construyo está pensado para el mundo real — con todas las fricciones que eso implica.' },
            { title: 'Soporte después de la entrega', desc: 'No desaparezco cuando cobro. Si algo falla o necesitás ajustar, estoy. El objetivo es que la solución funcione, no que el proyecto se cierre.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--orange)', marginBottom: '20px' }} />
              <div style={{
                fontFamily: 'var(--hl)', fontSize: '18px', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '12px',
              }}>{item.title}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '112px 64px', background: 'var(--surface)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,43,.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 62px)',
            fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1,
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Hablemos de<br />tu proyecto.
          </h2>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)',
            marginBottom: '48px', lineHeight: 1.8,
          }}>
            Sin formularios largos. Sin reuniones de hora y media.<br />
            15 minutos por WhatsApp y te digo si puedo ayudarte.
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
      <footer style={{
        padding: '32px 64px', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <a href="/" style={{
          fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px',
          color: 'var(--white)', textDecoration: 'none',
        }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
          © 2026 NEXORA Intelligence
        </span>
      </footer>
    </main>
  )
}
