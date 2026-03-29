export function CTAFinal() {
  return (
    <section className="cta-sec" id="contacto">
      <h2 className="cta-title reveal">
        &gt; ¿Listo para escalar<br />tu operación?
        <span style={{ color: 'var(--accent)' }}>_</span>
      </h2>
      <p className="cta-sub reveal d1">
        // No te vamos a vender humo. Te vamos a mostrar cómo.
      </p>
      <div className="cta-acts reveal d2">
        <a
          href="https://wa.me/5491133409351"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          hablemos por WhatsApp →
        </a>
        <a
          href="mailto:contacto@nexoraintelligence.co"
          className="btn-ghost"
        >
          contacto@nexoraintelligence.co <span className="arr">↗</span>
        </a>
      </div>
    </section>
  )
}
