'use client'
import { useEffect, useState, useRef } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)
  const [productosOpen, setProductosOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviciosMobileOpen, setServiciosMobileOpen] = useState(false)
  const [productosMobileOpen, setProductosMobileOpen] = useState(false)
  const serviciosTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const productosTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const openServicios = () => {
    if (serviciosTimer.current) clearTimeout(serviciosTimer.current)
    setServiciosOpen(true)
  }
  const closeServicios = () => {
    serviciosTimer.current = setTimeout(() => setServiciosOpen(false), 150)
  }
  const openProductos = () => {
    if (productosTimer.current) clearTimeout(productosTimer.current)
    setProductosOpen(true)
  }
  const closeProductos = () => {
    productosTimer.current = setTimeout(() => setProductosOpen(false), 150)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nexora-nav${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="nav-logo">
          NEXORA<span>_</span>Intelligence
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          <li
            className="nav-dropdown-wrap"
            onMouseEnter={openServicios}
            onMouseLeave={closeServicios}
          >
            <a href="/#servicios" className="nav-dropdown-trigger">
              Servicios <span className="nav-chevron">▾</span>
            </a>
            {serviciosOpen && (
              <div className="nav-dropdown" onMouseEnter={openServicios} onMouseLeave={closeServicios}>
                <a href="/servicios/automatizacion" className="nav-drop-item">Automatización</a>
                <a href="/servicios/bots-con-ia" className="nav-drop-item">Bots con IA</a>
                <a href="/servicios/desarrollo-digital" className="nav-drop-item">Desarrollo digital</a>
              </div>
            )}
          </li>
          <li
            className="nav-dropdown-wrap"
            onMouseEnter={openProductos}
            onMouseLeave={closeProductos}
          >
            <a href="/#servicios" className="nav-dropdown-trigger">
              Productos <span className="nav-chevron">▾</span>
            </a>
            {productosOpen && (
              <div className="nav-dropdown" onMouseEnter={openProductos} onMouseLeave={closeProductos}>
                <a href="/factura-lista" className="nav-drop-item">Factura Lista</a>
                <a href="/nexora-rrhh" className="nav-drop-item">Nexora RRHH</a>
                <a href="/nexora-inventario" className="nav-drop-item">Nexora Inventario</a>
                <a href="/nexora-finanzas" className="nav-drop-item">Nexora Finanzas</a>
              </div>
            )}
          </li>
          <li><a href="/cursos">Cursos</a></li>
          <li><a href="/programadora">Programadora</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/casos">Casos</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/#contacto" className="nav-cta">HABLEMOS →</a></li>
        </ul>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">

            {/* Servicios */}
            <div className="mobile-section">
              <button
                className="mobile-section-btn"
                onClick={() => setServiciosMobileOpen(!serviciosMobileOpen)}
              >
                Servicios <span className="nav-chevron">{serviciosMobileOpen ? '▴' : '▾'}</span>
              </button>
              {serviciosMobileOpen && (
                <div className="mobile-submenu">
                  <a href="/servicios/automatizacion" className="mobile-sub-item" onClick={closeMenu}>Automatización</a>
                  <a href="/servicios/bots-con-ia" className="mobile-sub-item" onClick={closeMenu}>Bots con IA</a>
                  <a href="/servicios/desarrollo-digital" className="mobile-sub-item" onClick={closeMenu}>Desarrollo digital</a>
                </div>
              )}
            </div>

            {/* Productos */}
            <div className="mobile-section">
              <button
                className="mobile-section-btn"
                onClick={() => setProductosMobileOpen(!productosMobileOpen)}
              >
                Productos <span className="nav-chevron">{productosMobileOpen ? '▴' : '▾'}</span>
              </button>
              {productosMobileOpen && (
                <div className="mobile-submenu">
                  <a href="/factura-lista" className="mobile-sub-item" onClick={closeMenu}>Factura Lista</a>
                  <a href="/nexora-rrhh" className="mobile-sub-item" onClick={closeMenu}>Nexora RRHH</a>
                  <a href="/nexora-inventario" className="mobile-sub-item" onClick={closeMenu}>Nexora Inventario</a>
                  <a href="/nexora-finanzas" className="mobile-sub-item" onClick={closeMenu}>Nexora Finanzas</a>
                </div>
              )}
            </div>

            <a href="/cursos" className="mobile-link" onClick={closeMenu}>Cursos</a>
            <a href="/programadora" className="mobile-link" onClick={closeMenu}>Programadora</a>
            <a href="/blog" className="mobile-link" onClick={closeMenu}>Blog</a>
            <a href="/casos" className="mobile-link" onClick={closeMenu}>Casos</a>
            <a href="/faq" className="mobile-link" onClick={closeMenu}>FAQ</a>

            <a href="/#contacto" className="mobile-cta" onClick={closeMenu}>
              HABLEMOS →
            </a>
          </div>
        </div>
      )}
    </>
  )
}
