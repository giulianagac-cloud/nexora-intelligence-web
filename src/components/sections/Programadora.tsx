'use client'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export function Programadora() {
  useReveal()
  return (
    <section className="sec-pad prog-sec" id="nosotros">
      <div className="prog-inner reveal">
        <div className="prog-foto-wrap">
          <Image
            src="/giuli.jpeg"
            alt="Giuliana, fundadora de Nexora Intelligence"
            width={600}
            height={750}
            className="svc-img"
          />
        </div>
        <div className="prog-content">
          <div className="eyebrow">// quién está detrás</div>
          <h2 className="sec-title">Hecho por una<br />programadora.</h2>
          <p className="prog-desc">
            Nexora no es una agencia de 50 personas. Soy Giuliana, analista funcional SAP con más de 14 años de experiencia en procesos y sistemas, y fundadora de Nexora Intelligence.
          </p>
          <p className="prog-desc">
            Construyo cada solución entendiendo primero cómo funciona tu negocio — no al revés. Porque automatizar mal es peor que no automatizar.
          </p>
          <div className="prog-tags">
            <span className="prog-tag">SAP HCM</span>
            <span className="prog-tag">Automatización</span>
            <span className="prog-tag">IA aplicada</span>
            <span className="prog-tag">14+ años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
