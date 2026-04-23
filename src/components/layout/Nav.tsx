'use client'
import { useEffect, useState } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)
  const [productosOpen, setProductosOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nexora-nav${scrolled ? ' scrolled' : ''}`}>
      <a href="/" className="nav-logo">
        NEXORA<span>_</span>Intelligence
      </a>
      <ul className="nav-links">

        <li
          className="nav-dropdown-wrap"
          onMouseEnter={() => setServiciosOpen(true)}
          onMouseLeave={() => setServiciosOpen(false)}
        >
          <a href="#servicios" className="nav-dropdown-trigger">
            Servicios <span className="nav-chevron">▾</span>
          </a>
          {serviciosOpen && (
            <div className="nav-dropdown">
              <a href="#servicios" className="nav-drop-item">Automatización</a>
              <a href="#servicios" className="nav-drop-item">Bots con IA</a>
              <a href="#servicios" className="nav-drop-item">Desarrollo digital</a>
            </div>
          )}
        </li>

        <li
          className="nav-dropdown-wrap"
          onMouseEnter={() => setProductosOpen(true)}
          onMouseLeave={() => setProductosOpen(false)}
        >
          <a href="#servicios" className="nav-dropdown-trigger">
            Productos <span className="nav-chevron">▾</span>
          </a>
          {productosOpen && (
            <div className="nav-dropdown">
              <a href="/factura-lista" className="nav-drop-item">Factura Lista</a>
              <a href="/nexora-rrhh" className="nav-drop-item">Nexora RRHH</a>
              <a href="/nexora-inventario" className="nav-drop-item">Nexora Inventario</a>
              <a href="/nexora-finanzas" className="nav-drop-item">Nexora Finanzas</a>
            </div>
          )}
        </li>

        <li><a href="/programadora">Programadora</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#casos">Casos</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contacto" className="nav-cta">HABLEMOS →</a></li>
      </ul>
    </nav>
  )
}
