'use client'
import { useReveal } from '@/hooks/useReveal'

export function Hero() {
  useReveal()

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
          Automatización, procesos e inteligencia aplicada para empresas reales.
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
