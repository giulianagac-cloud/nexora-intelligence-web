import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Desarrollo digital | NEXORA Intelligence',
  description: 'Webs, apps y sistemas que escalan con tu negocio. Desde una landing que convierte hasta una plataforma de gestión completa.',
}

export default function DesarrolloPage() {
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
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,85,255,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(0,85,255,.3)', background: 'rgba(0,85,255,.06)',
              padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
              fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
              color: '#6699ff', marginBottom: '36px',
            }}>
              // desarrollo digital
            </div>
            <h1 style={{
              fontFamily: 'var(--hl)', fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Tu presencia digital<br />
              <span style={{ color: '#6699ff' }}>que convierte.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
              maxWidth: '480px', lineHeight: 1.85, marginBottom: '48px',
            }}>
              Webs, apps y sistemas que escalan con tu negocio. Desde una landing que convierte hasta una plataforma de gestión completa hecha a medida.
            </p>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--blue)', color: '#fff', padding: '15px 30px',
              fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
              letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: '2px', display: 'inline-block',
            }}>
              Quiero un presupuesto →
            </a>
          </div>
          <div style={{ overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--border)' }}>
            <img src="/desarrollo.png" alt="Desarrollo digital Nexora" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* QUÉ DESARROLLAMOS */}
      <section style={{ padding: '96px 64px', background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// qué desarrollamos</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          De la idea al sistema<br />funcionando.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          {[
            { title: 'Landing pages', desc: 'Sitios de una página diseñados para convertir. Rápidos, optimizados para Google y con formularios de contacto.' },
            { title: 'Sitios institucionales', desc: 'Tu empresa en internet con toda la información que el cliente necesita para contactarte con confianza.' },
            { title: 'Plataformas de gestión', desc: 'Sistemas internos a medida para gestionar clientes, empleados, inventario o lo que necesite tu operación.' },
            { title: 'Apps mobile', desc: 'Aplicaciones para iOS y Android con React Native. Una sola base de código, dos plataformas.' },
            { title: 'E-commerce', desc: 'Tiendas online con Mercado Pago integrado, gestión de stock y panel de administración completo.' },
            { title: 'APIs e integraciones', desc: 'Conectamos tus sistemas entre sí. Si dos herramientas que usás no hablan entre ellas, nosotros las conectamos.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: '#6699ff', marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--hl)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '12px' }}>{item.title}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '112px 64px', background: 'var(--surface)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,85,255,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 4.5vw, 62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Qué querés<br />construir?
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', marginBottom: '48px', lineHeight: 1.8 }}>
            Contanos la idea y te damos un presupuesto en 24hs.<br />Sin vueltas.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--blue)', color: '#fff', padding: '18px 40px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
            Hablemos →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 64px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>© 2026 NEXORA Intelligence</span>
      </footer>
    </main>
  )
}
