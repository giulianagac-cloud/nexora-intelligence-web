import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Cómo un bot le ahorró 3 horas diarias a una PyME | NEXORA Blog',
  description: 'Una empresa de logística recibía 80 consultas por día por WhatsApp. Así implementamos un bot que las responde solo.',
}

export default function ArticuloBot() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>
      <Nav />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 32px 96px' }}>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
            Bots con IA · 5 min de lectura
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            Cómo un bot le ahorró 3 horas diarias a una PyME
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '17px', color: 'var(--muted)', lineHeight: 1.85 }}>
            Una empresa de logística recibía 80 consultas por día por WhatsApp. Las mismas cinco preguntas, todo el tiempo. Así implementamos un bot que las responde solo — y qué pasó después.
          </p>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '48px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)' }}>

          <p>El problema no era la cantidad de mensajes. Era que siempre eran los mismos. "¿Dónde está mi pedido?", "¿Cuánto tarda el envío?", "¿Tienen stock de X?". El equipo respondía lo mismo veinte veces por día.</p>

          <p>Tres horas diarias. Quince horas semanales. Sesenta horas al mes. Todo en responder preguntas que ya tenían respuesta.</p>

          <h2 style={{ fontFamily: 'var(--hl)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', color: 'var(--white)', marginTop: '12px' }}>
            La solución
          </h2>

          <p>Implementamos un bot de WhatsApp que entiende lenguaje natural. No un menú de opciones numeradas — un asistente que lee lo que el cliente escribe y responde con la información correcta.</p>

          <p>El bot se conectó al sistema de la empresa para consultar stock y estado de pedidos en tiempo real. Las respuestas son automáticas, instantáneas y precisas.</p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px',
            background: 'var(--border)', border: '1px solid var(--border)', margin: '12px 0',
          }}>
            {[
              { label: 'Antes', value: '3 horas/día en respuestas manuales' },
              { label: 'Después', value: '15 minutos revisando excepciones' },
              { label: 'Tiempo de implementación', value: '5 días' },
              { label: 'Satisfacción del cliente', value: 'Respuestas en segundos, no en horas' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '20px 24px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--blue)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--white)', fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--hl)', fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', color: 'var(--white)', marginTop: '12px' }}>
            Lo que nadie te cuenta sobre los bots
          </h2>

          <p>Un bot mal implementado es peor que no tener bot. Si las respuestas son genéricas, si no entiende lo que le escriben, si no puede resolver nada y siempre deriva al humano — genera más frustración que soluciones.</p>

          <p>La clave está en definir bien qué preguntas tiene que responder y qué información necesita para hacerlo. Eso requiere entender el negocio, no solo instalar una herramienta.</p>

          <div style={{
            background: 'rgba(0,166,126,.06)', border: '1px solid rgba(0,166,126,.2)',
            borderLeft: '3px solid var(--blue)', padding: '24px 28px', borderRadius: '4px',
          }}>
            <p style={{ color: 'var(--white)', fontWeight: 500 }}>
              ¿Tu equipo responde las mismas preguntas todos los días? Contanos cuáles son y te mostramos cómo quedaría el bot.
            </p>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', marginTop: '16px', background: 'var(--blue)',
              color: '#fff', padding: '10px 20px', fontFamily: 'var(--mono)',
              fontWeight: 700, fontSize: '12px', letterSpacing: '.1em',
              textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
            }}>
              Ver demo →
            </a>
          </div>
        </div>

        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <a href="/blog" style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--blue)', textDecoration: 'none' }}>← Volver al blog</a>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>¿Preguntas? Escribinos →</a>
        </div>
      </article>
    </main>
  )
}
