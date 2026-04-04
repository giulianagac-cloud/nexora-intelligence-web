'use client'
import { useEffect, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal'

export function Hero() {
  useReveal()
  const twRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const words = ['escalar_', 'crecer_', 'automatizar_', 'transformarse_']
    let wi = 0, ci = 0, deleting = false
    let timerId: ReturnType<typeof setTimeout>

    function type() {
      const el = twRef.current
      if (!el) return
      const w = words[wi]
      if (!deleting) {
        el.textContent = w.substring(0, ++ci)
        if (ci === w.length) {
          deleting = true
          timerId = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = w.substring(0, --ci)
        if (ci === 0) {
          deleting = false
          wi = (wi + 1) % words.length
          timerId = setTimeout(type, 400)
          return
        }
      }
      timerId = setTimeout(type, deleting ? 45 : 80)
    }
    const startId = setTimeout(type, 2800)
    return () => { clearTimeout(startId); clearTimeout(timerId) }
  }, [])

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 64px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="hero-bg" />
      <div className="hero-dots" />

      {/* Blue glow top-right */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,85,255,.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
        <div className="hero-badge">
          // CONSULTORÍA_IT &amp; AUTOMATIZACIÓN_IA — CABA, ARGENTINA
        </div>

        <h1 className="hero-title">
          TU OPERACIÓN<br />
          <span className="outline">YA FUNCIONA.</span>
          NOSOTROS LA HACEMOS<br />
          <span className="tw-line">
            <span ref={twRef} />
            <span className="tw-cursor" />
          </span>
        </h1>

        <p className="hero-sub">
          Diseñamos automatizaciones, asistentes IA y sistemas a medida.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            HABLEMOS DE TU PROYECTO →
          </a>
          <a href="#bots" className="btn-outline">
            VER PLATAFORMA DE BOTS →
          </a>
        </div>
      </div>
    </section>
  )
}
