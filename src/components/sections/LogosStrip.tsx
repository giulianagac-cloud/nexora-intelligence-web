const TECHS = [
  'Python', 'FastAPI', 'Next.js', 'React', 'LangChain', 'OpenAI',
  'PostgreSQL', 'n8n', 'Vercel', 'WhatsApp API', 'SAP', 'FAISS',
  'Make', 'Railway', 'Pinecone', 'TypeScript',
]

export function LogosStrip() {
  const items = [...TECHS, ...TECHS]

  return (
    <div className="logos-strip">
      <div className="logos-label">// TECNOLOGÍAS QUE USAMOS</div>
      <div className="logos-track-wrap">
        <div className="logos-track">
          {items.map((t, i) => (
            <span key={i} className="logo-item">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
