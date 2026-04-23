'use client'
import { useReveal } from '@/hooks/useReveal'

const POSTS = [
  {
    categoria: 'Automatización',
    titulo: '¿Qué es automatizar y por qué tu negocio lo necesita?',
    extracto: 'Si alguna vez copiaste datos de un mail a una planilla, mandaste el mismo mensaje 50 veces o esperaste un reporte que alguien tenía que armar a mano — tu negocio necesita automatización.',
    slug: 'que-es-automatizar',
    tiempo: '4 min',
  },
  {
    categoria: 'Bots con IA',
    titulo: 'Cómo un bot le ahorró 3 horas diarias a una PyME',
    extracto: 'Una empresa de logística recibía 80 consultas por día por WhatsApp. Las mismas cinco preguntas, todo el tiempo. Así implementamos un bot que las responde solo — y qué pasó después.',
    slug: 'bot-whatsapp-pyme',
    tiempo: '5 min',
  },
  {
    categoria: 'Herramientas',
    titulo: '5 procesos que podés automatizar hoy sin saber programar',
    extracto: 'No necesitás un equipo de IT ni un presupuesto enorme. Estos cinco procesos son los más comunes en PyMEs argentinas y los más fáciles de automatizar con las herramientas correctas.',
    slug: 'procesos-automatizar-hoy',
    tiempo: '6 min',
  },
]

export function Blog() {
  useReveal()
  return (
    <section className="sec-pad blog-sec" id="blog">
      <div className="eyebrow reveal">// blog</div>
      <h2 className="sec-title reveal d1">Aprendé sobre<br />automatización e IA.</h2>
      <p className="blog-sub reveal d2">Sin tecnicismos. Para que puedas tomar mejores decisiones para tu negocio.</p>
      <div className="blog-grid reveal d3">
        {POSTS.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
            <div className="blog-card-cat">{p.categoria}</div>
            <div className="blog-card-title">{p.titulo}</div>
            <p className="blog-card-extracto">{p.extracto}</p>
            <div className="blog-card-footer">
              <span className="blog-card-tiempo">{p.tiempo} de lectura</span>
              <span className="blog-card-link">Leer →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
