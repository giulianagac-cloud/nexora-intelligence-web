'use client'
import { useReveal } from '@/hooks/useReveal'

export function Bots() {
  useReveal()

  return (
    <section className="bots-sec sec-pad" id="bots">
      <div className="eyebrow reveal">// NEXORA_BOTS — PRODUCTO EN PRODUCCIÓN</div>
      <h2 className="sec-title reveal d1">PLATAFORMA DE ASISTENTES IA</h2>
      <p className="bots-intro reveal d2">No es un concepto. Está funcionando.</p>

      <div className="plans reveal d3">
        {/* STARTER */}
        <div className="plan starter">
          <div className="plan-body">
            <div className="plan-badge orange">DEMO GRATIS</div>
            <div className="plan-price">USD 299</div>
            <div className="plan-price-sub">implementación única · sin costo mensual</div>
            <div className="plan-name">STARTER BOT</div>
            <div className="plan-subtitle">Flujo guiado, sin IA externa</div>
            <div className="plan-tech-pill">Flow Engine</div>
            <div className="plan-div" />
            <ul className="plan-feats">
              {[
                'Respuestas por flujo predefinido',
                'Botones y opciones guiadas',
                'Derivación a humano',
                'FAQ configurable',
                'Sin costo mensual',
              ].map(f => (
                <li key={f}>
                  <span className="ck">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="plan-cta-wrap">
            <a
              href="https://nexora-bots-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="plan-cta plan-cta-main"
            >
              VER DEMO EN VIVO →
            </a>
            <a href="#contacto" className="plan-cta plan-cta-sec">
              CONTRATAR
            </a>
          </div>
        </div>

        {/* SMART */}
        <div className="plan smart">
          <div className="plan-body">
            <div className="plan-badge violet">MÁS ELEGIDO</div>
            <div className="plan-price">USD 599</div>
            <div className="plan-price-sub">implementación + USD 99/mes</div>
            <div className="plan-name">SMART BOT</div>
            <div className="plan-subtitle">NLP propio, comprende lenguaje natural</div>
            <div className="plan-tech-pill">Intent Router + NLP</div>
            <div className="plan-div" />
            <ul className="plan-feats">
              {[
                'Intent Detection & NLP',
                'Memoria de conversación',
                'Respuestas dinámicas',
                'Integración WhatsApp y Web',
                'Dashboard de métricas',
              ].map(f => (
                <li key={f}>
                  <span className="ck">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="plan-cta-wrap">
            <a href="#contacto" className="plan-cta plan-cta-main">
              CONSULTAR
            </a>
          </div>
        </div>

        {/* ENTERPRISE */}
        <div className="plan enterprise">
          <div className="plan-body">
            <div className="plan-badge blue">CORPORATIVO</div>
            <div className="plan-price" style={{ fontSize: 'clamp(22px,2.5vw,32px)' }}>DESDE USD 1.500</div>
            <div className="plan-price-sub">cotización a medida según alcance</div>
            <div className="plan-name">ENTERPRISE BOT</div>
            <div className="plan-subtitle">ML propio, integración SAP/ERP</div>
            <div className="plan-tech-pill">ML + API Propia + RAG</div>
            <div className="plan-div" />
            <ul className="plan-feats">
              {[
                'Machine Learning personalizado',
                'API propia de procesamiento',
                'Integración SAP / ERP',
                'RAG sobre documentos internos',
                'SLA garantizado',
              ].map(f => (
                <li key={f}>
                  <span className="ck">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="plan-cta-wrap">
            <a href="#contacto" className="plan-cta plan-cta-main">
              SOLICITAR COTIZACIÓN
            </a>
          </div>
        </div>
      </div>

      {/* RAG callout */}
      <div className="rag-callout reveal d4">
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: 'linear-gradient(135deg,rgba(139,92,246,.15),rgba(0,85,255,.15))',
          border: '1px solid rgba(139,92,246,.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, flexShrink: 0,
        }}>
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--violet)' }}>
            <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2.5 6.5-6 7.4V18h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-1.6C7.5 15.5 5 12.5 5 9a7 7 0 0 1 7-7Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="rag-title">RAG EN ROADMAP — Recuperación aumentada con vectores sobre documentos del cliente</div>
          <div className="rag-desc">El bot responde basándose en tus reglamentos, manuales y convenios — no en respuestas genéricas.</div>
        </div>
        <div className="rag-tags">
          {['FAISS', 'Chroma', 'LangChain', 'Pinecone'].map(t => (
            <span key={t} className="rag-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
