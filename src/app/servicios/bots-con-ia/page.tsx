'use client'
import { useState, useEffect, useRef } from 'react'
import { Nav } from '@/components/layout/Nav'

const COMPARE = [
  {
    label: 'Para empezar',
    desc: 'Respondé las preguntas frecuentes de tus clientes automáticamente.',
    price: 'USD 299',
    color: 'var(--orange)',
    border: 'rgba(255,107,43,.3)',
    bg: 'rgba(255,107,43,.06)',
    featured: false,
  },
  {
    label: 'Para crecer',
    desc: 'Tu negocio atiende solo en WhatsApp, entiende lenguaje natural y recuerda el contexto.',
    price: 'USD 599 + USD 99/mes',
    color: 'var(--violet)',
    border: 'rgba(139,92,246,.3)',
    bg: 'rgba(139,92,246,.06)',
    featured: true,
  },
  {
    label: 'Para escalar',
    desc: 'Integrado a tus sistemas internos, entrenado con tus documentos, con SLA garantizado.',
    price: 'Desde USD 1.500',
    color: '#6699ff',
    border: 'rgba(0,85,255,.3)',
    bg: 'rgba(0,85,255,.06)',
    featured: false,
  },
]

export default function BotsConIAPage() {
  const twRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const msgs = [
      { from: 'user', text: '¿Cuánto tarda la implementación?' },
      { from: 'bot', text: 'Depende del plan. El Starter se configura en 48hs. El Smart en 1 semana. ¿Querés que te cuente más sobre alguno?' },
      { from: 'user', text: 'Sí, el Smart.' },
    ]

    let msgIndex = 0
    const container = document.getElementById('chat-container') as HTMLElement | null
    if (!container) return
    const el = container

    function addMessage(from: string, text: string, cb: () => void) {
      const div = document.createElement('div')
      div.style.cssText = `
        max-width: 82%; padding: 9px 13px; border-radius: 10px;
        font-size: 14px; line-height: 1.6; font-family: var(--mono);
        animation: msgIn .3s ease;
        ${from === 'bot'
          ? 'background: rgba(240,237,232,0.85); border: none; border-radius: 18px; border-bottom-left-radius: 4px; align-self: flex-start; color: #1a1a1a;'
          : 'background: transparent; border: 1.5px solid rgba(255,255,255,0.6); border-radius: 18px; border-bottom-right-radius: 4px; align-self: flex-end; color: #ffffff;'
        }
      `
      div.textContent = text
      el.appendChild(div)
      el.scrollTop = el.scrollHeight
      setTimeout(cb, 800)
    }

    function nextMessage() {
      if (msgIndex >= msgs.length) {
        const typing = document.createElement('div')
        typing.style.cssText = 'display:flex;align-items:center;gap:4px;padding:12px 16px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.07);border-radius:10px;border-bottom-left-radius:3px;align-self:flex-start;'
        typing.innerHTML = `<span style="width:6px;height:6px;border-radius:50%;background:var(--muted);animation:pulse 1.2s infinite"></span><span style="width:6px;height:6px;border-radius:50%;background:var(--muted);animation:pulse 1.2s .2s infinite"></span><span style="width:6px;height:6px;border-radius:50%;background:var(--muted);animation:pulse 1.2s .4s infinite"></span>`
        el.appendChild(typing)
        return
      }
      const m = msgs[msgIndex]
      msgIndex++
      addMessage(m.from, m.text, nextMessage)
    }

    const timer = setTimeout(nextMessage, 800)
    return () => clearTimeout(timer)
  }, [])

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
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(139,92,246,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="pg-grid-2c" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(139,92,246,.3)', background: 'rgba(139,92,246,.06)',
              padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
              fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--violet)', marginBottom: '36px',
            }}>
              // bots con ia
            </div>
            <h1 style={{
              fontFamily: 'var(--hl)', fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Tu negocio responde.<br />
              <span style={{ color: 'var(--violet)' }}>Aunque no estés.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
              maxWidth: '480px', lineHeight: 1.85, marginBottom: '48px',
            }}>
              Bots con inteligencia artificial para atención al cliente, RRHH y gestión interna. Responden, derivan y resuelven las 24 horas sin que nadie los opere.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
                background: 'var(--violet)', color: '#fff', padding: '15px 30px',
                fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
                letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
                borderRadius: '2px', display: 'inline-block',
              }}>
                Contame qué necesitás →
              </a>
              <a href="https://nexora-bots-ten.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--white)', fontSize: '13px', fontFamily: 'var(--mono)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '8px', border: '1px solid rgba(255,255,255,.07)', padding: '14px 28px',
                borderRadius: '2px', letterSpacing: '.1em', textTransform: 'uppercase',
                fontWeight: 600,
              }}>
                Ver demo en vivo →
              </a>
            </div>
          </div>

          {/* MOCKUP CELULAR */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '300px', height: '600px', flexShrink: 0 }}>
              {/* Marco del iPhone */}
              <div style={{
                position: 'absolute', inset: 0,
                border: '10px solid #1a1a1a',
                borderRadius: '44px',
                boxShadow: '0 0 0 2px #3a3a3a, 0 24px 60px rgba(0,0,0,0.4), inset 0 0 0 1px #2a2a2a',
                zIndex: 3, pointerEvents: 'none',
              }} />
              {/* Notch */}
              <div style={{
                position: 'absolute', top: '10px', left: '50%',
                transform: 'translateX(-50%)',
                width: '80px', height: '24px',
                background: '#1a1a1a', borderRadius: '0 0 16px 16px', zIndex: 4,
              }} />
              {/* Botones laterales */}
              <div style={{ position: 'absolute', left: '-13px', top: '100px', width: '4px', height: '32px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: '-13px', top: '145px', width: '4px', height: '52px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: '-13px', top: '210px', width: '4px', height: '52px', background: '#2a2a2a', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', right: '-13px', top: '160px', width: '4px', height: '72px', background: '#2a2a2a', borderRadius: '0 2px 2px 0' }} />

              {/* Pantalla */}
              <div style={{
                position: 'absolute', inset: '10px', borderRadius: '34px', overflow: 'hidden',
                background: `url('/chat-bg.svg') center/cover no-repeat`,
                display: 'flex', flexDirection: 'column',
              }}>
                {/* Status bar */}
                <div style={{ padding: '14px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, color: '#fff' }}>9:41</span>
                  <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: '#fff' }}>●●●</span>
                    <span style={{ fontSize: '10px', color: '#fff' }}>WiFi</span>
                    <span style={{ fontSize: '10px', color: '#fff' }}>🔋</span>
                  </div>
                </div>
                {/* Header del chat */}
                <div style={{ padding: '8px 16px 10px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255,255,255,.1)', flexShrink: 0, background: 'rgba(0,0,0,.2)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #00a67e, #007a5e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>N</div>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, color: '#fff' }}>NexBot</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4aff91', display: 'inline-block' }} />
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#4aff91' }}>en vivo</span>
                    </div>
                  </div>
                </div>
                {/* Mensajes */}
                <div id="chat-container" style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }} />
                {/* Input */}
                <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,.25)', borderTop: '1px solid rgba(255,255,255,.08)', flexShrink: 0 }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,.12)', borderRadius: '20px', padding: '8px 14px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'rgba(255,255,255,.4)' }}>
                    Escribí tu consulta...
                  </div>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#00a67e', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="pg-sec" style={{ background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// planes</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          Elegí el nivel que<br />necesita tu operación.
        </h2>
        <div style={{ border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
          {COMPARE.map((c) => (
            <div key={c.label} style={{
              background: c.featured ? `linear-gradient(90deg, ${c.bg}, var(--surface))` : 'var(--surface)',
              padding: '28px 40px', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '24px',
              borderLeft: c.featured ? `2px solid ${c.color}` : 'none',
              transition: 'background .3s', flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px', border: `1px solid ${c.border}`, background: c.bg, color: c.color, alignSelf: 'flex-start' }}>
                  {c.label}
                </span>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '480px' }}>
                  {c.desc}
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--hl)', fontSize: '22px', fontWeight: 700, letterSpacing: '-.03em', color: c.color, whiteSpace: 'nowrap' }}>
                  {c.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--violet)', color: '#fff', padding: '15px 30px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
            Contame qué necesitás →
          </a>
          <a href="https://nexora-bots-ten.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', fontSize: '13px', fontFamily: 'var(--mono)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,.07)', padding: '14px 28px', borderRadius: '2px', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            Ver demo en vivo →
          </a>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="pg-sec" style={{ background: 'var(--black)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// casos de uso</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          Para qué los usan<br />nuestros clientes.
        </h2>
        <div className="pg-grid-3c">
          {[
            { title: 'Atención al cliente', desc: 'Respondé preguntas frecuentes, consultá estado de pedidos y derivá casos complejos sin que nadie lo opere.' },
            { title: 'RRHH interno', desc: 'Consultas de vacaciones, licencias, políticas internas. El bot responde al instante sin interrumpir al área.' },
            { title: 'Ventas y cotizaciones', desc: 'Calificá leads, respondé consultas de precios y agendá reuniones automáticamente desde WhatsApp.' },
            { title: 'Onboarding', desc: 'Guiá a clientes o empleados nuevos paso a paso con un flujo conversacional automatizado.' },
            { title: 'Soporte técnico', desc: 'Primer nivel de soporte resuelto por el bot. Solo escala lo que realmente necesita intervención humana.' },
            { title: 'A medida', desc: 'Si tenés un flujo conversacional específico, lo construimos. No hay un solo molde para todos los negocios.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--violet)', marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--hl)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '12px' }}>{item.title}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pg-cta" style={{ background: 'var(--surface)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '16px' }}>
            ¿Qué necesitás<br />que responda el bot?
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', marginBottom: '48px', lineHeight: 1.8 }}>
            Contanos el flujo y te mostramos cómo quedaría.<br />Sin costo, sin compromiso.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--violet)', color: '#fff', padding: '18px 40px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
            Hablemos →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pg-footer">
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>© 2026 NEXORA Intelligence</span>
      </footer>
    </main>
  )
}
