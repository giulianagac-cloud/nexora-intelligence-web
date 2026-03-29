const STACK = [
  'Python','FastAPI','Flow Engine','Intent Router','React','Next.js',
  'PostgreSQL','OpenAI GPT-4','LangChain','Pinecone','FAISS','n8n',
  'Make','Vercel','Railway','AWS','WhatsApp API','SAP','pytest',
]

export function TechStack() {
  return (
    <section className="sec-pad" id="stack">
      <div className="eyebrow reveal">// STACK.tecnologías</div>
      <h2 className="sec-title reveal d1">
        Stack <em>de producción</em>,<br />no de demo
      </h2>
      <div className="stk-row reveal d2">
        {STACK.map(t => <span key={t} className="stk">{t}</span>)}
      </div>
    </section>
  )
}
