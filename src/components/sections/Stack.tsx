'use client'
import { useReveal } from '@/hooks/useReveal'

const TECHS = [
  'Python', 'FastAPI', 'Flow Engine', 'React', 'Next.js',
  'PostgreSQL', 'OpenAI GPT-4', 'LangChain', 'Pinecone', 'FAISS',
  'n8n', 'Make', 'Vercel', 'Railway', 'AWS', 'WhatsApp API', 'SAP',
]

export function Stack() {
  useReveal()

  return (
    <section className="sec-pad" id="stack" style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}>
      <div className="eyebrow reveal">// TECH_STACK</div>
      <h2 className="sec-title reveal d1">LAS HERRAMIENTAS</h2>
      <div className="stk-row reveal d2">
        {TECHS.map(t => (
          <span key={t} className="stk">{t}</span>
        ))}
      </div>
    </section>
  )
}
