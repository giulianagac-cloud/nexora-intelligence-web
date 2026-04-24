import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: '¿Qué es automatizar y por qué tu negocio lo necesita? | NEXORA Blog',
  description: 'Si alguna vez copiaste datos de un mail a una planilla o mandaste el mismo mensaje 50 veces — tu negocio necesita automatización.',
}

export default function ArticuloAutomatizar() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>
      <Nav />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 32px 96px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
            Automatización · 4 min de lectura
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            ¿Qué es automatizar y por qué tu negocio lo necesita?
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '17px', color: 'var(--muted)', lineHeight: 1.85 }}>
            Si alguna vez copiaste datos de un mail a una planilla, mandaste el mismo mensaje 50 veces o esperaste un reporte que alguien tenía que armar a mano — tu negocio necesita automatización.
          </p>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '48px' }} />

        {/* Contenido */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)' }}>

          <p>Automatizar significa hacer que una tarea que antes requería intervención humana ahora se ejecute sola. Sin que nadie la inicie, sin que nadie la controle, sin que nadie la termine.</p>

          <p>No es magia. No es ciencia ficción. Es tecnología que ya existe, que ya está disponible, y que la mayoría de las PyMEs argentinas todavía no usa.</p>

          <h2 style={{ fontFamily: 'var(--hl)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', color: 'var(--white)', marginTop: '12px' }}>
            ¿Qué se puede automatizar?
          </h2>

          <p>Casi cualquier tarea repetitiva. Las más comunes en PyMEs son:</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '16px', borderLeft: '2px solid var(--blue)' }}>
            {[
              'Responder las mismas preguntas por WhatsApp todos los días',
              'Cargar facturas o pedidos en un sistema manualmente',
              'Generar reportes de ventas o stock desde múltiples fuentes',
              'Enviar recordatorios de pago o turnos a clientes',
              'Actualizar planillas con datos que llegan por mail',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--hl)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', color: 'var(--white)', marginTop: '12px' }}>
            ¿Por qué muchas empresas todavía no lo hacen?
          </h2>

          <p>Hay tres razones principales. La primera es que creen que es caro o complicado. La segunda es que no saben por dónde empezar. La tercera — y la más común — es que están tan metidos en el día a día que nunca tienen tiempo para parar y pensar en cómo mejorar.</p>

          <p>La realidad es que una automatización simple puede estar funcionando en 48 horas. Y el tiempo que recuperás en la primera semana ya justifica la inversión.</p>

          <h2 style={{ fontFamily: 'var(--hl)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', color: 'var(--white)', marginTop: '12px' }}>
            ¿Por dónde empezar?
          </h2>

          <p>La pregunta correcta no es "¿qué puedo automatizar?" sino "¿qué tarea me está robando más tiempo esta semana?".</p>

          <p>Esa tarea es tu punto de partida. Una sola. No intentés resolver todo de una vez. Automatizá una cosa, medí el resultado, y después seguís con la siguiente.</p>

          <div style={{
            background: 'rgba(0,166,126,.06)', border: '1px solid rgba(0,166,126,.2)',
            borderLeft: '3px solid var(--blue)', padding: '24px 28px', borderRadius: '4px',
          }}>
            <p style={{ color: 'var(--white)', fontWeight: 500 }}>
              Si querés saber qué procesos de tu negocio se pueden automatizar, escribinos. En 15 minutos te decimos si tiene solución y cuánto puede tardar.
            </p>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', marginTop: '16px', background: 'var(--blue)',
              color: '#fff', padding: '10px 20px', fontFamily: 'var(--mono)',
              fontWeight: 700, fontSize: '12px', letterSpacing: '.1em',
              textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
            }}>
              Hablemos →
            </a>
          </div>
        </div>

        {/* Footer del artículo */}
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <a href="/blog" style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--blue)', textDecoration: 'none' }}>
            ← Volver al blog
          </a>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>
            ¿Preguntas? Escribinos →
          </a>
        </div>
      </article>
    </main>
  )
}
