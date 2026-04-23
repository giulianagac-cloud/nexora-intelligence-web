import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import Image from 'next/image'
import { POSTS } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Blog — Automatización e IA para PyMEs | NEXORA Intelligence',
  description: 'Aprendé sobre automatización, bots con IA y herramientas para hacer crecer tu negocio. Sin tecnicismos.',
}

export default function BlogPage() {
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
            // blog
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Aprendé sobre<br />
            <span style={{ color: 'var(--orange)' }}>automatización e IA.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.85,
          }}>
            Sin tecnicismos. Para que puedas tomar mejores decisiones para tu negocio.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section style={{ padding: '96px 64px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
        }}>
          {POSTS.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} style={{
              background: 'var(--surface)', textDecoration: 'none',
              display: 'flex', flexDirection: 'column', transition: 'background .3s',
            }}>
              <div style={{ overflow: 'hidden', aspectRatio: '16/9', position: 'relative' }}>
                <Image
                  src={p.img}
                  alt={p.titulo}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform .6s ease' }}
                />
              </div>
              <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em',
                  textTransform: 'uppercase', color: 'var(--orange)', fontWeight: 600,
                }}>{p.categoria}</div>
                <div style={{
                  fontFamily: 'var(--hl)', fontSize: '20px', fontWeight: 700,
                  letterSpacing: '-.02em', color: 'var(--white)', lineHeight: 1.2,
                  textTransform: 'uppercase',
                }}>{p.titulo}</div>
                <p style={{
                  fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)',
                  lineHeight: 1.75, flex: 1,
                }}>{p.extracto}</p>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingTop: '16px', borderTop: '1px solid var(--border)', marginTop: '8px',
                }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
                    {p.tiempo} de lectura
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--orange)' }}>
                    Leer →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
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
