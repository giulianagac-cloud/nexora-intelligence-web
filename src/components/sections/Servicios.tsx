'use client'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const SERVICES = [
  {
    name: 'Páginas web y apps',
    desc: 'Sitios, tiendas online y sistemas a medida.',
    img: '/desarrollo.png',
    imgAlt: 'Páginas web y apps',
    href: '/servicios/desarrollo-digital',
  },
  {
    name: 'Bots de WhatsApp',
    desc: 'Tu negocio responde solo, las 24 horas.',
    img: '/bots.png',
    imgAlt: 'Bots de WhatsApp con IA',
    href: '/servicios/bots-con-ia',
  },
  {
    name: 'Automatización',
    desc: 'Tareas repetitivas en piloto automático.',
    img: '/automatizacion.png',
    imgAlt: 'Automatización de procesos',
    href: '/servicios/automatizacion',
  },
  {
    name: 'Reportes automáticos',
    desc: 'Tus datos listos sin que nadie los arme.',
    img: '/reportes.png',
    imgAlt: 'Reportes automáticos',
    href: '/servicios/automatizacion',
  },
  {
    name: 'Soporte IT',
    desc: 'Redes, servidores, usuarios y equipos.',
    img: '/soporte-it.png',
    imgAlt: 'Soporte IT',
    href: '/servicios/soporte-it',
  },
  {
    name: 'Consultoría IT',
    desc: 'Analizamos tus procesos y te damos un plan.',
    img: '/consultoria-it.png',
    imgAlt: 'Consultoría IT',
    href: '/servicios/consultoria-it',
  },
]

export function Servicios() {
  useReveal()
  return (
    <section className="sec-pad" id="servicios">
      <div className="eyebrow reveal">// lo que hacemos</div>
      <h2 className="sec-title reveal d1">¿Qué necesitás<br />para tu negocio?</h2>
      <div className="svcs-grid reveal d2">
        {SERVICES.map((s) => (
          <a key={s.name} href={s.href} className="svc-block">
            <div className="svc-block-img">
              <Image
                src={s.img}
                alt={s.imgAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="svc-block-overlay" />
            </div>
            <div className="svc-block-content">
              <div className="svc-block-name">{s.name}</div>
              <div className="svc-block-desc">{s.desc}</div>
              <div className="svc-block-arrow">Ver más →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
