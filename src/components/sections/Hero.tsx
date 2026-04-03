'use client'
import { useEffect, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal'

interface Particle {
  x: number; y: number; r: number
  vx: number; vy: number; a: number; p: number
}

export function Hero() {
  useReveal()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const twRef     = useRef<HTMLSpanElement>(null)

  // ── Canvas particles ──
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')!
    let W = 0, H = 0
    let pts: Particle[] = []
    let rafId: number

    function resize() {
      W = cv!.width  = cv!.offsetWidth
      H = cv!.height = cv!.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 100; i++) {
      pts.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.45 + 0.1,
        p: Math.random() * Math.PI * 2,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.p  += 0.012
        p.x  += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,229,160,${p.a * (0.6 + 0.4 * Math.sin(p.p))})`
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 95) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,229,160,${0.11 * (1 - d / 95)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // ── Typewriter ──
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
    return () => {
      clearTimeout(startId)
      clearTimeout(timerId)
    }
  }, [])

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 64px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="hero-bg" />
      <div className="hero-grid" />
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%' }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-pill">
          <div className="pdot" />
          // consultoría_IT &amp; automatización_IA — CABA, Argentina
        </div>

        <h1 className="hero-title">
          Tu operación<br />
          <span className="outline">ya funciona.</span>
          Nosotros la hacemos<br />
          <span className="tw-accent" ref={twRef} />
          <span className="cur-blink" />
        </h1>

        <p className="hero-sub">
          Diseñamos automatizaciones, asistentes IA y sistemas a medida para
          transformar necesidades reales en resultados concretos.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            hablemos de tu proyecto →
          </a>
          <a href="#bots" className="btn-ghost">
            ver plataforma de bots <span className="arr">→</span>
          </a>
        </div>
      </div>

    </section>
  )
}
