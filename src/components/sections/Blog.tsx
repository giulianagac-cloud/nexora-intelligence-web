'use client'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { POSTS } from '@/data/posts'

export { POSTS }

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
            <div className="blog-card-img">
              <Image
                src={p.img}
                alt={p.titulo}
                width={600}
                height={340}
                className="blog-card-img-inner"
              />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-cat">{p.categoria}</div>
              <div className="blog-card-title">{p.titulo}</div>
              <p className="blog-card-extracto">{p.extracto}</p>
              <div className="blog-card-footer">
                <span className="blog-card-tiempo">{p.tiempo} de lectura</span>
                <span className="blog-card-link">Leer →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
