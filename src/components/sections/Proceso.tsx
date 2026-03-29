const STEPS = [
  { n: '01', name: 'relevamiento', desc: 'Las preguntas incómodas que nadie te hizo' },
  { n: '02', name: 'propuesta',    desc: 'Alcance, precio y tiempos. Sin vaguedades' },
  { n: '03', name: 'desarrollo',   desc: 'Avances semanales, siempre al tanto' },
  { n: '04', name: 'entrega',      desc: 'Testeado, documentado, sin bugs sorpresa' },
  { n: '05', name: 'soporte',      desc: 'No te dejamos solo después de entregar' },
]

export function Proceso() {
  return (
    <section className="proc-sec sec-pad" id="proceso">
      <div className="eyebrow reveal">// PROCESO.filter(paso =&gt; agrega_valor)</div>
      <h2 className="sec-title reveal d1">
        Sin letra chica.<br /><em>Sin sorpresas.</em>
      </h2>
      <div className="proc-steps reveal d2">
        {STEPS.map(s => (
          <div key={s.n} className="ps">
            <div className="ps-circ">{s.n}</div>
            <div className="ps-name">{s.name}</div>
            <div className="ps-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
