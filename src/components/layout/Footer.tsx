export function Footer() {
  const STACK = ['Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'OpenAI', 'LangChain', 'n8n', 'Vercel', 'WhatsApp API', 'SAP']

  return (
    <footer className="nexora-footer">
      <div className="footer-top">
        <div className="f-logo">
          NEXORA<span>_</span>Intelligence
        </div>
        <ul className="f-links">
          <li><a href="#servicios">servicios</a></li>
          <li><a href="#bots">bots</a></li>
          <li><a href="#casos">casos</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </div>
      <div className="footer-productos">
        <span className="footer-prod-label">// productos</span>
        <a href="/factura-lista" className="footer-prod-link">Factura Lista ↗</a>
        <a href="/nexora-rrhh" className="footer-prod-link">Nexora RRHH ↗</a>
        <a href="/nexora-inventario" className="footer-prod-link">Nexora Inventario ↗</a>
        <a href="/nexora-finanzas" className="footer-prod-link">Nexora Finanzas ↗</a>
      </div>
      <div className="footer-stack">
        {STACK.map(t => <span key={t} className="stk">{t}</span>)}
      </div>
      <div className="footer-bottom">
        <span className="f-copy">© 2026 NEXORA Intelligence — CABA, Buenos Aires</span>
        <span className="f-copy">contacto@nexoraintelligence.co</span>
      </div>
    </footer>
  )
}
