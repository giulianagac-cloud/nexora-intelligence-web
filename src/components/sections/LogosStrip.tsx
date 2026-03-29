const TECHS = [
  'Python','FastAPI','Next.js','React','LangChain','OpenAI GPT-4',
  'PostgreSQL','Pinecone','n8n','Vercel','AWS','WhatsApp API',
  'SAP','FAISS','Railway','Tailwind',
]

export function LogosStrip() {
  // duplicate for infinite loop
  const items = [...TECHS, ...TECHS]

  return (
    <div className="logos-strip">
      <div className="logos-label">// tecnologías que usamos</div>
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
