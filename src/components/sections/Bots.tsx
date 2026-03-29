export function Bots() {
  return (
    <section className="bots-sec sec-pad" id="bots">
      <div className="bots-header">
        <div>
          <div className="eyebrow reveal">// NEXORA_ASSISTANT_PLATFORM</div>
          <h2 className="sec-title reveal d1">
            Tres niveles de<br /><em>inteligencia conversacional</em>
          </h2>
        </div>
        <div className="reveal d2">
          <div className="live-badge">
            <div className="live-badge-dot" />
            // producto en producción — no es un concepto
          </div>
          <p className="bots-intro">
            Plataforma modular construida sobre{' '}
            <strong>Python + FastAPI + Flow Engine</strong>. Cada plan es un nivel
            distinto de inteligencia. Empezás donde tiene sentido y escalás cuando
            lo necesitás.
          </p>
        </div>
      </div>

      <div className="plans reveal">
        {/* STARTER */}
        <div className="plan starter">
          <div className="plan-body">
            <div className="plan-tier">// plan_01</div>
            <div className="plan-name">Starter Bot</div>
            <div className="plan-subtitle">
              Respuestas predecibles, configuradas para tu negocio. Sin IA externa, sin sorpresas.
            </div>
            <div className="plan-tech">
              <div className="plan-tech-dot" />
              flujo_guiado · sin_IA_externa
            </div>
            <div className="plan-arch">
              <div className="arch-title">arquitectura</div>
              <div>Frontend → API → <span>Flow Engine</span> → Respuestas</div>
            </div>
            <div className="plan-div" />
            <ul className="plan-feats">
              {['Árbol de decisión configurable','FAQs, links y botones de acción',
                'Derivación a WhatsApp o email','Widget web · iframe · link directo',
                'Branding visual de tu empresa','1 ronda de ajustes/mes incluida']
                .map(f => <li key={f}><span className="ck">✓</span>{f}</li>)}
            </ul>
          </div>
          <div className="plan-cta-wrap">
            <a href="https://nexora-bots-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="plan-cta">
              ver demo en vivo →
            </a>
          </div>
        </div>

        {/* SMART */}
        <div className="plan smart">
          <div className="popular-badge">más elegido</div>
          <div className="plan-body">
            <div className="plan-tier">// plan_02</div>
            <div className="plan-name">Smart Bot</div>
            <div className="plan-subtitle">
              NLP propio. Interpreta intención, mantiene contexto, sin depender de APIs externas.
            </div>
            <div className="plan-tech">
              <div className="plan-tech-dot" />
              NLP · Intent Detection
            </div>
            <div className="plan-arch">
              <div className="arch-title">arquitectura</div>
              <div>Frontend → API → Flow Engine → <span>Intent Router</span> → Adapters</div>
            </div>
            <div className="plan-div" />
            <ul className="plan-feats">
              {['NLP propio — detecta intención real','Memoria de flujo conversacional',
                'Entities y respuestas dinámicas','Contratos tipados por proceso',
                'Ideal para RRHH y administración','Adaptadores desacoplados por módulo']
                .map(f => <li key={f}><span className="ck">✓</span>{f}</li>)}
            </ul>
          </div>
          <div className="plan-cta-wrap">
            <a href="#contacto" className="plan-cta">consultar por este plan →</a>
          </div>
        </div>

        {/* ENTERPRISE */}
        <div className="plan enterprise">
          <div className="plan-body">
            <div className="plan-tier">// plan_03</div>
            <div className="plan-name">Enterprise Bot</div>
            <div className="plan-subtitle">
              ML con API propia. Conectado a tus sistemas reales — ERP, SAP, CRM.
            </div>
            <div className="plan-tech">
              <div className="plan-tech-dot" />
              ML · API_propia · ERP
            </div>
            <div className="plan-arch">
              <div className="arch-title">arquitectura</div>
              <div>Frontend → API Gateway → Intent Router → <span>Adapters → SAP / ERP</span></div>
            </div>
            <div className="plan-div" />
            <ul className="plan-feats">
              {['Machine Learning con API propia','Conexión a SAP, CRM, bases de datos',
                'Respuestas con datos reales','Logging avanzado y trazabilidad',
                'Autenticación y escalabilidad cloud','Arquitectura multicliente']
                .map(f => <li key={f}><span className="ck">✓</span>{f}</li>)}
            </ul>
          </div>
          <div className="plan-cta-wrap">
            <a href="#contacto" className="plan-cta">hablar con el equipo →</a>
          </div>
        </div>
      </div>

      <div className="rag-callout reveal d1">
        <div className="rag-icon">🧠</div>
        <div className="rag-text">
          <div className="rag-title">// evolución <span>RAG</span> — disponible en todos los planes</div>
          <div className="rag-desc">
            Incorporá consulta documental sobre los archivos reales de tu empresa.
            El bot responde basándose en tus reglamentos, manuales y convenios — no en respuestas genéricas.
          </div>
        </div>
        <div className="rag-tags">
          {['FAISS','Chroma','LangChain','Pinecone'].map(t => (
            <span key={t} className="rag-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
