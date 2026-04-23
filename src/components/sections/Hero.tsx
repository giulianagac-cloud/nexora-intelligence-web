'use client'
import { useEffect, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal'

export function Hero() {
  useReveal()
  const twRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const words = ['solo_', 'sin vos_', 'en piloto_', '24/7_']
    let wi = 0, ci = 0, deleting = false
    let timerId: ReturnType<typeof setTimeout>

    function type() {
      const el = twRef.current
      if (!el) return
      const w = words[wi]
      if (!deleting) {
        el.textContent = w.substring(0, ++ci)
        if (ci === w.length) { deleting = true; timerId = setTimeout(type, 1800); return }
      } else {
        el.textContent = w.substring(0, --ci)
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; timerId = setTimeout(type, 400); return }
      }
      timerId = setTimeout(type, deleting ? 45 : 80)
    }
    const startId = setTimeout(type, 2800)
    return () => { clearTimeout(startId); clearTimeout(timerId) }
  }, [])

  return (
    <section id="inicio" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '120px 64px 80px',
      position: 'relative', overflow: 'hidden'
    }}>
      <div className="hero-bg" />
      <div className="hero-dots" />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
        <h1 className="hero-title">
          Tu negocio trabajando
          <span className="tw-line">
            <span ref={twRef} />
            <span className="tw-cursor" />
          </span>
        </h1>
        <p className="hero-sub">
          Automatizamos los procesos que te roban tiempo para que puedas enfocarte en crecer.<br />
          Para PyMEs y emprendedores que quieren operar mejor sin contratar más gente.
        </p>
        <div className="hero-actions">
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Hablemos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
