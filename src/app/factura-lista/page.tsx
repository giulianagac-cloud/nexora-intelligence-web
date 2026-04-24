import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Factura Lista — Automatización de facturas | NEXORA Intelligence',
  description: 'Subís el PDF a Google Drive y el sistema lee, valida en AFIP y registra solo. Sin carga manual, sin errores.',
}

export default function FacturaListaPage() {
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
          background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(255,107,43,.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '1px solid var(--border)', background: 'rgba(255,107,43,.06)',
            padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
            fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--orange)', marginBottom: '36px',
          }}>
            // disponible ahora
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '28px',
          }}>
            ¿Todavía cargás<br />
            <span style={{ color: 'var(--orange)' }}>facturas a mano?</span>
          </h1>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '16px', color: 'var(--muted)',
            maxWidth: '520px', lineHeight: 1.85, marginBottom: '48px',
          }}>
            Subís el PDF a una carpeta de Google Drive.<br />
            El sistema lee, valida en AFIP y registra solo.<br />
            Sin intervención manual. Sin errores.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
            background: 'var(--orange)', color: '#fff', padding: '15px 30px',
            fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
            letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', display: 'inline-block',
          }}>
            Quiero implementarlo →
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="pg-sec" style={{ background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>
          // cómo funciona
        </div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          Tres pasos.<br />Nada más.
        </h2>
        <div className="pg-grid-3c">
          {[
            { num: '01', title: 'Subís el PDF', desc: 'Arrastrás la factura a una carpeta de Google Drive que ya tenés. Sin software nuevo, sin capacitación.' },
            { num: '02', title: 'El sistema lo lee', desc: 'Extrae CUIT, tipo de comprobante, monto neto, IVA y fecha. Funciona con PDFs digitales, escaneados y fotos.' },
            { num: '03', title: 'Queda registrado', desc: 'Valida el CUIT en AFIP y registra todo automáticamente. Si algo no está claro, te avisa para revisarlo vos.' },
          ].map(s => (
            <div key={s.num} style={{ background: 'var(--surface)', padding: '42px 34px 52px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '16px', fontFamily: 'var(--hl)', fontSize: '120px', fontWeight: 700, color: 'rgba(255,107,43,.05)', pointerEvents: 'none', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: 'var(--hl)', fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '-.02em' }}>
                {s.title}
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EN ACCIÓN */}
      <section className="pg-sec" style={{ background: 'var(--black)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>
          // en acción
        </div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          Lo ves funcionar<br />antes de comprarlo.
        </h2>
        <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '4px' }}>
          <img src="/producto-factura-lista.png" alt="Factura Lista — sistema en acción" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* QUÉ RESUELVE */}
      <section className="pg-sec" style={{ background: 'var(--deep)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>
          // qué resuelve
        </div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          El tiempo que perdés<br />hoy con facturas.
        </h2>
        <div className="pg-grid-3c">
          {[
            { title: 'Carga manual eliminada', desc: 'Cada factura que llega se procesa sola. Sin tipeo, sin copy-paste, sin errores de dedo.' },
            { title: 'Validación AFIP automática', desc: 'El sistema consulta el padrón de AFIP por cada proveedor. Nunca registra algo sin verificar.' },
            { title: 'Cero software nuevo', desc: 'Usás la carpeta de Drive que ya tenés. Nosotros configuramos todo. Implementación en menos de 48hs.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--orange)', marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--hl)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '12px' }}>
                {item.title}
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="pg-sec-sq" style={{ background: 'var(--black)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
          // construido con
        </div>
        {['n8n', 'Claude API', 'Google Drive', 'AFIP API', 'Python'].map(t => (
          <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)', border: '1px solid var(--border)', padding: '8px 14px', borderRadius: '2px' }}>
            {t}
          </span>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="pg-cta" style={{ background: 'var(--surface)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,43,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '16px' }}>
            Implementación<br />en menos de 48hs.
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', marginBottom: '48px', lineHeight: 1.8 }}>
            Sin contrato largo. Sin configuración compleja.<br />
            Contanos cuántas facturas procesás por mes y arrancamos.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--orange)', color: '#fff', padding: '18px 40px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
            Quiero implementarlo →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pg-footer">
        <a href="/" style={{ fontFamily: 'var(--mono)', fontWeight: 800, fontSize: '14px', color: 'var(--white)', textDecoration: 'none' }}>
          NEXORA<span style={{ color: 'var(--orange)' }}>_</span>Intelligence
        </a>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted)' }}>
          © 2026 NEXORA Intelligence
        </span>
      </footer>

    </main>
  )
}
