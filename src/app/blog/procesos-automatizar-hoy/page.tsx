import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: '5 procesos que podés automatizar hoy sin saber programar | NEXORA Blog',
  description: 'No necesitás un equipo de IT ni un presupuesto enorme. Estos cinco procesos son los más comunes en PyMEs argentinas.',
}

export default function ArticuloProcesos() {
  return (
    <main style={{ background: 'var(--black)', color: 'var(--white)', fontFamily: 'var(--mono)' }}>
      <Nav />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '140px 32px 96px' }}>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '16px' }}>
            Herramientas · 6 min de lectura
          </div>
          <h1 style={{
            fontFamily: 'var(--hl)', fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            5 procesos que podés automatizar hoy sin saber programar
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '17px', color: 'var(--muted)', lineHeight: 1.85 }}>
            No necesitás un equipo de IT ni un presupuesto enorme. Estos cinco procesos son los más comunes en PyMEs argentinas y los más fáciles de automatizar con las herramientas correctas.
          </p>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '48px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)' }}>

          {[
            {
              num: '01',
              titulo: 'Respuestas automáticas por WhatsApp',
              desc: 'Las preguntas frecuentes de tus clientes — horarios, precios, disponibilidad, estado de pedidos — pueden responderse solas. Un bot configurado con tus respuestas las maneja las 24 horas sin que nadie las opere.',
              herramienta: 'WhatsApp Business API + n8n',
            },
            {
              num: '02',
              titulo: 'Notificaciones de pago y vencimientos',
              desc: 'Cada vez que una factura está por vencer o un pago no llegó, el sistema puede enviar un recordatorio automático por WhatsApp o email. Sin que nadie revise manualmente la lista de deudores.',
              herramienta: 'n8n + Gmail o WhatsApp',
            },
            {
              num: '03',
              titulo: 'Carga de datos desde formularios',
              desc: 'Cuando alguien completa un formulario de contacto, presupuesto o registro — los datos pueden ir solos a tu CRM, planilla o sistema interno. Sin copiar, sin pegar, sin errores de tipeo.',
              herramienta: 'Google Forms + Google Sheets + n8n',
            },
            {
              num: '04',
              titulo: 'Reportes automáticos de ventas o stock',
              desc: 'Un reporte semanal o mensual que se arma solo y llega por mail o WhatsApp. Con los datos de tus sistemas, sin que nadie lo prepare manualmente cada vez.',
              herramienta: 'n8n + Google Sheets + Gmail',
            },
            {
              num: '05',
              titulo: 'Confirmaciones y recordatorios de turnos',
              desc: 'Si tenés un negocio con turnos — médico, peluquería, taller, gimnasio — el sistema puede confirmar automáticamente cuando alguien reserva y recordarle 24 horas antes. Los cancelados se liberan solos.',
              herramienta: 'Calendly o Google Calendar + n8n + WhatsApp',
            },
          ].map((proceso) => (
            <div key={proceso.num} style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '24px',
              paddingBottom: '36px', borderBottom: '1px solid var(--border)',
            }}>
              <div style={{
                fontFamily: 'var(--hl)', fontSize: '48px', fontWeight: 700,
                color: 'rgba(0,166,126,.2)', lineHeight: 1, letterSpacing: '-.04em',
                flexShrink: 0,
              }}>{proceso.num}</div>
              <div>
                <h2 style={{
                  fontFamily: 'var(--hl)', fontSize: '22px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '-.02em',
                  color: 'var(--white)', marginBottom: '12px',
                }}>{proceso.titulo}</h2>
                <p style={{ marginBottom: '16px' }}>{proceso.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--blue)',
                  border: '1px solid rgba(0,166,126,.25)', padding: '4px 10px', borderRadius: '2px',
                }}>
                  {proceso.herramienta}
                </div>
              </div>
            </div>
          ))}

          <div style={{
            background: 'rgba(0,166,126,.06)', border: '1px solid rgba(0,166,126,.2)',
            borderLeft: '3px solid var(--blue)', padding: '24px 28px', borderRadius: '4px',
          }}>
            <p style={{ color: 'var(--white)', fontWeight: 500 }}>
              ¿Alguno de estos procesos te suena familiar? Contanos cuál es el que más tiempo te roba y arrancamos por ahí.
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

        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <a href="/blog" style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--blue)', textDecoration: 'none' }}>← Volver al blog</a>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>¿Preguntas? Escribinos →</a>
        </div>
      </article>
    </main>
  )
}
