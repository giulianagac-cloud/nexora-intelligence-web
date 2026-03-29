'use client'
import { useEffect, useState } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nexora-nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        NEXORA<span>_</span>Intelligence
      </a>
      <ul className="nav-links">
        <li><a href="#servicios">// servicios</a></li>
        <li><a href="#bots">// bots_IA</a></li>
        <li><a href="#verticales">// verticales</a></li>
        <li><a href="#founder">// equipo</a></li>
        <li><a href="#casos">// casos</a></li>
        <li><a href="#contacto" className="nav-cta">hablemos →</a></li>
      </ul>
    </nav>
  )
}
