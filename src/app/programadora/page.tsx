import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Programadora — Giuliana | NEXORA Intelligence',
  description: 'Soy Giuliana, analista funcional SAP con más de 14 años de experiencia y fundadora de Nexora Intelligence. Automatización e IA aplicada a PyMEs.',
}

export default function ProgramadoraPage() {
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
        <div className="pg-grid-2c" style={{ position: 'relative', zIndex: 2, maxWidth: '1100px' }}>
          {/* Foto */}
          <div style={{
            aspectRatio: '4/5', overflow: 'hidden',
            borderRadius: '4px', border: '1px solid var(--border)',
            position: 'relative',
          }}>
            <Image
              src="/giuli.jpeg"
              alt="Giuliana, fundadora de Nexora Intelligence"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Contenido */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(255,107,43,.3)', background: 'rgba(255,107,43,.06)',
              padding: '7px 16px', borderRadius: '2px', fontFamily: 'var(--mono)',
              fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase',
              color: 'var(--orange)', marginBottom: '36px',
            }}>
              // quién está detrás
            </div>
            <h1 style={{
              fontFamily: 'var(--hl)', fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700, lineHeight: .95, letterSpacing: '-.04em',
              textTransform: 'uppercase', marginBottom: '28px',
            }}>
              Hecho por una<br />
              <span style={{ color: 'var(--orange)' }}>programadora.</span>
            </h1>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
              Soy consultora SAP y profesional orientada al análisis funcional, la tecnología y la mejora de procesos, con una mirada que combina negocio, sistemas y visión estratégica.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
              Estudié programación en la Universidad de Belgrano, formación que fortaleció mi forma de pensar soluciones desde una lógica técnica y estructurada, incorporando herramientas para comprender el desarrollo, la automatización y el funcionamiento profundo de los sistemas.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
              A lo largo de mi recorrido profesional fui consolidando experiencia en análisis funcional, documentación, testing, procesos de negocio y entornos corporativos, especialmente en contextos donde la tecnología necesita dialogar de forma clara con las necesidades reales de una organización.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
              Mi trabajo se apoya en una combinación de análisis, criterio funcional y curiosidad constante por nuevas herramientas: automatización, inteligencia artificial, integración de sistemas y soluciones digitales pensadas para generar impacto concreto.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '40px' }}>
              Me interesa especialmente crear soluciones claras, útiles y bien diseñadas, donde la tecnología no sea un fin en sí mismo, sino una herramienta real para mejorar la forma de trabajar.
            </p>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '20px' }}>
                // por qué nació Nexora
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                Nexora nació de una necesidad muy concreta: acercar tecnología inteligente a negocios reales, especialmente a pymes y emprendimientos que muchas veces tienen potencial de crecimiento pero siguen funcionando con procesos manuales, fragmentados o poco optimizados.
              </p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                Después de trabajar de cerca con procesos, detectar ineficiencias y ver cuánto tiempo se pierde en tareas repetitivas o desordenadas, entendí que había una oportunidad clara: ayudar a transformar esa complejidad en soluciones simples, funcionales y sostenibles.
              </p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                Nexora surge como una propuesta enfocada en automatización, mejora de procesos e integración tecnológica, con una mirada práctica: entender cómo funciona cada negocio y diseñar herramientas que realmente acompañen su crecimiento.
              </p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--orange)', lineHeight: 1.85, fontWeight: 600 }}>
                Porque incorporar tecnología no es solamente digitalizar: es pensar mejor, ordenar mejor y hacer que cada recurso trabaje con más inteligencia.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['SAP HCM', 'Automatización', 'IA aplicada', '14+ años de experiencia', 'FastAPI', 'n8n', 'LangChain'].map(t => (
                <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '12px', padding: '6px 12px', border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted2)' }}>
                  {t}
                </span>
              ))}
            </div>
            <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--orange)', color: '#fff', padding: '15px 30px',
              fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px',
              letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none',
              borderRadius: '2px', display: 'inline-block',
            }}>
              Hablemos →
            </a>
          </div>
        </div>
      </section>

      {/* FORMA DE TRABAJO */}
      <section className="pg-sec" style={{ background: 'var(--black)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '18px' }}>// cómo trabajo</div>
        <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.04em', textTransform: 'uppercase', marginBottom: '52px' }}>
          Cómo trabajo.
        </h2>
        <div className="pg-grid-2c-md">
          {[
            { title: 'Primero entiendo tu negocio', desc: 'Antes de proponer cualquier solución, necesito entender cómo operás, dónde perdés tiempo y qué procesos son críticos. No vendo tecnología — resuelvo problemas.' },
            { title: 'Transparencia total', desc: 'Tenés acceso al desarrollo en todo momento. Sin cajas negras, sin sorpresas al final. Sabés qué se está construyendo y por qué.' },
            { title: 'Implementaciones reales', desc: 'No entrego demos que nunca funcionan en producción. Lo que construyo está pensado para el mundo real — con todas las fricciones que eso implica.' },
            { title: 'Soporte después de la entrega', desc: 'No desaparezco cuando cobro. Si algo falla o necesitás ajustar, estoy. El objetivo es que la solución funcione, no que el proyecto se cierre.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', padding: '40px 34px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--orange)', marginBottom: '20px' }} />
              <div style={{ fontFamily: 'var(--hl)', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.02em', marginBottom: '12px' }}>{item.title}</div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pg-cta" style={{ background: 'var(--surface)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,43,.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--hl)', fontSize: 'clamp(28px, 4.5vw, 62px)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, textTransform: 'uppercase', marginBottom: '16px' }}>
            Hablemos de<br />tu proyecto.
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '15px', color: 'var(--muted)', marginBottom: '48px', lineHeight: 1.8 }}>
            Sin formularios largos. Sin reuniones de hora y media.<br />
            15 minutos por WhatsApp y te digo si puedo ayudarte.
          </p>
          <a href="https://wa.me/5491133409351" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--orange)', color: '#fff', padding: '18px 40px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '14px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block' }}>
            Hablemos →
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
