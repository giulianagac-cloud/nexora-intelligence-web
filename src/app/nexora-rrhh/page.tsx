import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nexora RRHH — Reclutamiento y gestión de personas | NEXORA Intelligence',
  description: 'Reclutamiento, onboarding y gestión de personas automatizados. Todo lo que tu área de RRHH necesita en un solo lugar.',
}

export default function NexoraRRHHPage() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '22px 64px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', background: 'rgba(5,5,8,.85)',
        backdropFilter: 'blur(24px)', borderBottom: '1px solid var(--border)',
      }}>
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '16px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <a href="/#contacto" style={{
          background: 'var(--violet)', color: '#fff', padding: '10px 20px',
          fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
          letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none',
          borderRadius: '2px',
        }}>
          Hablemos →
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '120px 64px 80px',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(139,92,246,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '1px solid rgba(139,92,246,.3)', background: 'rgba(139,92,246,.06)',
            padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
            fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--violet)', marginBottom: '36px',
          }}>
            // disponible ahora
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            Tu área de RRHH<br />
            <span style={{ color: 'var(--violet)' }}>sin trabajo manual.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.85, marginBottom: '48px',
          }}>
            Reclutamiento, onboarding y gestión de personas — todo automatizado.<br />
            Desde publicar una vacante hasta incorporar un empleado nuevo.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--violet)', color: '#fff', padding: '15px 30px',
            fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
            letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', display: 'inline-block',
          }}>
            Quiero saber más →
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section style={{
        padding: '96px 64px', background: 'var(--deep)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px',
        }}>// tres pilares</div>
        <h2 style={{
          fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
          textTransform: 'uppercase', marginBottom: '52px',
        }}>
          Todo lo que necesita<br />tu área de personas.
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
        }}>
          {[
            {
              num: '01', title: 'Reclutamiento',
              desc: 'Publicá vacantes, manejá candidatos en un pipeline Kanban y dejá que la IA haga el scoring automático. Menos tiempo revisando CVs, más tiempo hablando con las personas correctas.',
            },
            {
              num: '02', title: 'Onboarding',
              desc: 'Cuando contratás a alguien, el sistema arranca solo. Emails automáticos, accesos configurados, documentación enviada. El nuevo empleado llega el primer día con todo listo.',
            },
            {
              num: '03', title: 'Gestión diaria',
              desc: 'Consultas de vacaciones, licencias, avisos de enfermedad — respondidas por el chatbot sin intervención humana. Tu equipo de RRHH se enfoca en lo que importa.',
            },
          ].map(s => (
            <div key={s.num} style={{
              background: 'var(--surface)', padding: '42px 34px 52px', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: '-10px', right: '16px',
                fontFamily: 'var(--hl)', fontSize: '120px', fontWeight: 700,
                color: 'rgba(139,92,246,.05)', pointerEvents: 'none', lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontFamily: 'var(--hl)', fontSize: '20px', fontWeight: 700,
                textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '-.02em',
              }}>{s.title}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PLACEHOLDER SCREENSHOT */}
      <section style={{
        padding: '96px 64px', background: 'var(--black)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px',
        }}>// en acción</div>
        <h2 style={{
          fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
          textTransform: 'uppercase', marginBottom: '52px',
        }}>
          Lo ves funcionar<br />antes de comprarlo.
        </h2>
        <div style={{
          width: '100%', aspectRatio: '16/9', background: 'var(--surface)',
          border: '2px dashed rgba(139,92,246,.3)', borderRadius: '8px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '12px',
        }}>
          <div style={{ fontSize: '32px' }}>📸</div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)',
            letterSpacing: '.1em', textTransform: 'uppercase',
          }}>
            Screenshot del sistema — reemplazar este fin de semana
          </div>
        </div>
      </section>

      {/* QUÉ RESUELVE */}
      <section style={{
        padding: '96px 64px', background: 'var(--deep)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px',
        }}>// qué resuelve</div>
        <h2 style={{
          fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 56px)',
          fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
          textTransform: 'uppercase', marginBottom: '52px',
        }}>
          El tiempo que perdés<br />en tareas de RRHH.
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
        }}>
          {[
            { title: 'Cero CVs revisados a mano', desc: 'La IA hace el scoring inicial. Vos solo hablás con los candidatos que ya pasaron el filtro.' },
            { title: 'Onboarding sin fricción', desc: 'Cada contratación dispara un flujo automático. El nuevo empleado tiene todo el día uno, sin que nadie lo configure manualmente.' },
            { title: 'Consultas respondidas 24/7', desc: 'El chatbot de RRHH responde vacaciones, licencias y políticas internas en cualquier momento. Sin interrumpir a nadie.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--violet)', marginBottom: '20px' }} />
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

      {/* TECH */}
      <section style={{
        padding: '64px', background: 'var(--black)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap',
        }}>// construido con</div>
        {['LangChain', 'FastAPI', 'Next.js', 'WhatsApp API', 'Python'].map(t => (
          <span key={t} style={{
            fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)',
            border: '1px solid var(--border)', padding: '8px 14px', borderRadius: '2px',
          }}>{t}</span>
        ))}
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: '112px 64px', background: 'var(--surface)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 62px)',
            fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1,
            textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Tu área de RRHH<br />funcionando sola.
          </h2>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)',
            marginBottom: '48px', lineHeight: 1.8,
          }}>
            Sin contratos largos. Sin implementaciones eternas.<br />
            Contanos cómo está funcionando tu RRHH hoy y arrancamos.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--violet)', color: '#fff', padding: '18px 40px',
            fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px',
            letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', display: 'inline-block',
          }}>
            Quiero saber más →
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
