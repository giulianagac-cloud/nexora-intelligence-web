# REDESIGN V3 — NEXORA Intelligence
# Dirección visual: Dark Tech + Neón

> **ESTE ARCHIVO REEMPLAZA TODO LO ANTERIOR (SPEC.md, REDESIGN-V2.md).** 
> La estructura de componentes existente se mantiene, solo cambia la estética visual completa.
> REGLA: commiteá después de cada paso.

---

## 1. Nueva identidad visual

### Paleta de colores

Reemplazar TODA la paleta anterior. El sitio ahora es dark-mode completo.

```
nexora-dark: '#0A0E27'        → fondo principal
nexora-dark-card: '#141829'   → fondo de cards
nexora-neon: '#00F5A0'        → acento principal (verde neón)
nexora-coral: '#FF3D71'       → CTAs secundarios
nexora-cyan: '#00D9FF'        → detalles
nexora-light: '#F5F5F7'       → texto principal (off-white)
nexora-border: '#2A2E45'      → bordes sutiles
```

### Tipografías

Cambiar las fonts actuales por estas (importar con next/font/google):

- **Display/Headings**: `Outfit` (weight 700-800)
- **Body**: `Inter` (weight 400-700)  
- **Mono/Terminal**: `JetBrains Mono` (weight 400-500)

### Sombras personalizadas

Agregar en los design tokens:

```
shadow-neon: '4px 4px 0px rgba(0, 245, 160, 0.3)'
shadow-neon-lg: '6px 6px 0px #00F5A0'
shadow-soft: '0 8px 32px rgba(0, 245, 160, 0.15)'
```

### Animaciones base

Agregar en globals.css:

- `cursor-blink`: parpadeo del cursor (1s step-end infinite)
- `mesh-float`: movimiento suave de fondo mesh gradient (20s ease-in-out infinite)
- `slide-up`: entrada desde abajo (0.6s cubic-bezier)
- Custom scrollbar: ancho 8px, track nexora-dark-card, thumb nexora-neon
- Selection: background neon, texto dark
- Grain texture overlay opcional: opacity 0.03, fixed, pointer-events none

---

## 2. globals.css — cambios completos

- Fondo del body: nexora-dark (#0A0E27)
- Texto default: nexora-light (#F5F5F7)
- Scroll behavior smooth
- Custom scrollbar (8px, bg dark-card, thumb neon)
- `::selection { background: #00F5A0; color: #0A0E27; }`
- Grain texture overlay (pseudo-element en body, url de noise SVG, opacity 0.03)
- Keyframes: cursor-blink, mesh-float, slide-up

---

## 3. layout.tsx — actualizar

- Importar fonts: Outfit, Inter, JetBrains Mono (next/font/google)
- Variables CSS: --font-display, --font-body, --font-mono
- Metadata:
  - Title: "NEXORA Intelligence | Consultoría IT & Automatización"
  - Description: "Tu operación funciona. Nosotros la hacemos escalar. Desarrollo web, apps, automatización, bots IA y consultoría funcional."
- lang="es"
- Clase en body: bg-nexora-dark text-nexora-light font-body

---

## 4. Header.tsx — rediseño completo

- **Fondo**: transparente → al scroll bg-nexora-dark/90 backdrop-blur
- **Logo**: "NEXORA_" con cursor parpadeante (animación cursor-blink en el guión bajo). Texto en nexora-light, font Outfit weight 800, letter-spacing 2px. Debajo: "Intelligence" en nexora-neon, font Inter weight 400
- **Nav links**: Servicios, Proceso, Casos, Stack, Contacto. Color nexora-light/60, hover nexora-neon
- **CTA**: "Hablemos →" con borde neon, hover fondo neon + texto dark
- **Mobile**: hamburguesa con fondo dark-card, menú full-screen

---

## 5. Hero.tsx — rediseño completo

### Layout
- Min-height: 100vh
- Fondo: mesh gradient animado con radial-gradient (neon/15 at 20% 30%, cyan/10 at 80% 70%) sobre nexora-dark
- Grid 2 columnas en desktop (60/40), apilado en mobile

### Columna izquierda
- Subtag: "> consultora_digital" en font mono, color neon, font-size 14px
- Título en 2 líneas, font Outfit weight 800:
  - Línea 1: `> Tu operación funciona.`
  - Línea 2: `> Nosotros la hacemos` **`escalar_`**
  - La palabra "escalar" en color neon (#00F5A0) con cursor parpadeante después
- Subtítulo: "Diseñamos webs, sistemas, automatizaciones y asistentes digitales para transformar necesidades reales en soluciones concretas." — color nexora-light/70, font Inter
- CTA: "Hablemos de tu proyecto →" — fondo neon, texto dark, padding 16px 32px, border-radius 8px, shadow-neon, hover scale(1.02)

### Columna derecha — Terminal widget
- Max-width 480px
- Fondo: nexora-dark-card
- Border: 1px solid nexora-border
- Border-radius: 12px
- Header: 3 dots (rojo #FF5F56, amarillo #FFBD2E, verde #27C93F) + texto "// Sistema activo" en font mono, color neon/50
- Body con métricas (font mono):
  - "Proyectos en desarrollo:" → counter animado a **7**
  - "Bots respondiendo ahora:" → counter animado a **3,247**
  - "Uptime promedio:" → counter animado a **99.7%**
- Números en color neon, labels en nexora-light/60

### Animaciones
- Nav: fade-in desde arriba (0.6s)
- Título: slide-up con stagger (0.8s, delay 0.2s entre líneas)
- CTA: slide-up (delay 0.4s)
- Terminal: slide-up (delay 0.6s)
- Métricas: counter de 0 al valor final en 2s

---

## 6. ServiciosBento.tsx — NUEVA sección (reemplaza Services.tsx y Solutions.tsx)

Fusionar las secciones de "Soluciones que desarrollamos" y "Qué hacemos" en una sola sección con grid Bento asimétrico.

### Título
`// SERVICIOS.map(solución => impacto)` — font mono, color neon

### Layout Bento Grid (desktop)
```
┌────────────┬─────┬─────┐
│ Desarrollo │ Apps│ Auto│
│ Web (lg)   │     │     │
├────┬───────┴─────┴─────┤
│Bots│ Consultoría (wide)│
├────┴──────────┬─────────┤
│ Testing+Docs  │ Próximo │
└───────────────┴─────────┘
```

### Cards base
- Fondo: nexora-dark-card
- Border: 1px solid nexora-border
- Border-radius: 12px
- Padding: 28px
- Hover: border-neon/40, shadow-soft, translateY(-4px)

### 7 Cards:

**a) Desarrollo Web** (card-large, ícono Zap de Lucide):
- Tagline: "Sitios que convierten" — font display, color neon
- Bullets: Diseño moderno y responsive / Identidad profesional / Performance optimizado
- Hover reveal: "→ Landing page que triplicó conversiones en 60 días" — color coral

**b) Apps y Sistemas** (ícono Smartphone):
- Tagline: "Del caos a la operación ordenada"
- Bullets: Lógica personalizada / Escalabilidad real / Integración con tu stack
- Hover reveal: "→ Sistema de turnos que eliminó 90% de llamadas"

**c) Automatización** (ícono RefreshCw):
- Tagline: "Menos fricción, más flujo"
- Bullets: Procesos digitalizados / Flujos optimizados / Tiempo recuperado
- Hover reveal: "→ Automatización que ahorró 20hs/sem en reportes"

**d) Bots IA** (ícono Bot):
- Tagline: "Soporte 24/7 sin contratar"
- Bullets: Respuestas con contexto / Escalabilidad infinita / Sin errores humanos
- Hover reveal: "→ Bot HR: 847 consultas resueltas en 30 días"

**e) Consultoría Funcional** (card-wide, ícono Target):
- Tagline: "Relevamiento que encuentra lo que falta"
- Bullets: Análisis profundo / Estructura clara / Visión de negocio
- Hover reveal: "→ Consultoría que detectó cuello de botella en facturación"

**f) Testing + Docs** (ícono CheckCircle2):
- Tagline: "Calidad funcional garantizada"
- Bullets: Validación exhaustiva / Documentación clara / Claridad técnica

**g) "En construcción"** (card-next, ícono Settings, estilo especial):
- Título: "// En construcción" — font mono
- Lista: → Capacitación IA / → Legal + Finanzas / → [Tu próximo proyecto]
- Link: "Quiero estar en early access" — color neon
- Estilo: border dashed nexora-border, grain texture, colores desaturados

### Responsive
- Mobile: stack vertical 1 columna
- Tablet: grid 2 columnas
- Desktop: bento asimétrico completo

---

## 7. Proceso.tsx — NUEVA sección (reemplaza Differentiator.tsx)

### Título
`// PROCESO.filter(paso => agrega_valor)` — font mono, color neon

### Timeline horizontal (desktop) / vertical (mobile)

5 pasos conectados por línea animada:

```
01. Relevamiento       → "Te hacemos las preguntas incómodas"
02. Propuesta          → "Sin letra chica ni sorpresas"
03. Desarrollo         → "Ves avances cada semana"
04. Entrega            → "Sin bugs de último momento"
05. Soporte            → "No te dejamos solo"
```

### Estilo de cada paso
- Número: font mono, color neon, font-size grande (48px), opacity 0.3 de fondo
- Título: font display, color light
- Descripción: font body, color light/60
- Card: fondo dark-card, border nexora-border, border-radius 12px
- Paso activo (al scroll): border-neon, scale(1.05)

### Animación
- Al scroll, cada paso se activa secuencialmente
- Línea conectora se dibuja progresivamente (stroke-dasharray)
- Mobile: timeline vertical con línea izquierda en neon

---

## 8. CasoDeUso.tsx — NUEVA sección (reemplaza Projects.tsx)

### Título
`// CASOS_REALES.slice(0, 3)` — font mono, color neon

### 3 casos expandibles (accordion):

**Caso 1: Bot HR para estudio contable**
- Empresa: Estudio contable, 12 empleados
- Título: "El bot de RH que nos devolvió 15hs/semana"
- Problema: RRHH colapsado con consultas sobre recibos, vacaciones, licencias
- Solución: Bot con RAG sobre documentación interna + integración con sistema de RRHH
- Resultados (30 días): 847 consultas resueltas / 0 escalaciones incorrectas / 60% menos tiempo RRHH
- Tech: OpenAI GPT-4 + Pinecone + Slack
- CTA: "Quiero algo así →"

**Caso 2: Automatización de reportes financieros**
- Empresa: Pyme industrial, 45 empleados
- Título: "Reportes que pasaron de 8 horas a 15 minutos"
- Problema: 2 días/semana consolidando datos de 5 sistemas
- Solución: Pipeline automatizado con extracción, transformación y visualización
- Resultados (60 días): 90% reducción en tiempo / 0 errores / Dashboards real-time
- Tech: Python + PostgreSQL + Metabase

**Caso 3: Landing page de conversión**
- Empresa: Clínica odontológica, 3 sucursales
- Título: "De 2% a 7% de conversión en 8 semanas"
- Problema: Sitio genérico, baja tasa de contacto
- Solución: Rediseño total con copy de conversión + formularios optimizados
- Resultados (90 días): 3.5x conversión / 200% más consultas / Carga 1.2s (antes 4.8s)
- Tech: Next.js + Tailwind + Resend

### Estilo
- Estado colapsado: card dark-card, border nexora-border, título + empresa + "Leer caso completo ↓"
- Estado expandido: accordion con toda la info, métricas en neon, CTA en coral
- Animación: slide-down suave (300ms)

---

## 9. TechStack.tsx — NUEVA sección

### Título
`// STACK.tecnologías` — font mono, color neon

### 4 categorías en grid (4 cols desktop, 2 tablet, 1 mobile):

**Frontend**: React, Next.js 14, Tailwind CSS
**Backend**: Node.js, Python, PostgreSQL
**IA & Data**: OpenAI API, LangChain, Pinecone
**Deploy**: Vercel, Railway, AWS

### Estilo
- Cada tech: ícono/logo + nombre + tooltip on hover con descripción
- Fondo cards: dark-card
- Border: nexora-border
- Hover: border neon/30, tooltip fade-in arriba
- Tooltip: fondo dark, border neon/20, font mono, font-size 12px

---

## 10. CTAFinal.tsx — rediseño

- Fondo: gradient de neon/10 a dark con grain texture
- H2: "¿Listo para escalar tu operación?" — font Outfit 800, color light
- Subtítulo: "No te vamos a vender humo. Te vamos a mostrar cómo." — color light/70
- CTA principal: "Agendar consultoría gratuita (30 min) →" — fondo neon, texto dark, padding 20px 40px, shadow-neon-lg, font-size 18px
- Texto alternativo: "O escribinos directo: hola@nexoraintelligence.com" — color light/50, hover neon
- Parallax sutil en background al scroll

---

## 11. Contact.tsx — adaptar al dark theme

- Fondo: nexora-dark
- Título: "// CONTACTO" font mono, color neon
- Subtítulo: "Contacto" font Outfit
- Inputs: fondo dark-card, border nexora-border, focus border-neon, text light, placeholder light/30
- Botón submit: fondo neon, texto dark
- Info lateral: color light/60, labels en font mono uppercase

---

## 12. Footer.tsx — rediseño

### Layout 4 columnas (desktop), 1 col (mobile):

**Col 1 — Branding:**
- Logo NEXORA_ Intelligence
- Tagline: "Consultoría IT que escala operaciones" — color light/50

**Col 2 — Servicios:**
- Desarrollo Web / Apps y Sistemas / Automatización / Bots IA / Consultoría

**Col 3 — Soluciones:**
- HR Bot / Finance Bot (próximamente)

**Col 4 — Legal:**
- Términos y condiciones / Política de privacidad / LinkedIn

**Bottom bar:**
- "© 2026 NEXORA Intelligence • Buenos Aires, Argentina"

### Estilo
- Fondo: dark-card
- Border-top: 1px solid nexora-border
- Links: color light/50, hover neon
- Font-size: 13-14px

---

## 13. WhatsAppButton.tsx — adaptar

- Mantener funcionalidad actual
- Estilo: fondo #25D366, shadow con glow verde suave
- Aparece después de 300px de scroll

---

## 14. About.tsx — adaptar o eliminar

La sección "Sobre nosotros" se puede simplificar o integrar en el footer. Si se mantiene:
- Fondo: dark
- Títulos en Outfit
- Texto en Inter, color light/70
- Pilares con dots en neon

---

## 15. Eliminar componentes que ya no aplican

- Eliminar Solutions.tsx (fusionado en ServiciosBento)
- Eliminar ContrastBand.tsx (la banda negra ya no tiene sentido en dark theme)
- Eliminar Credibility.tsx (se reemplaza con CasoDeUso y TechStack)
- Eliminar ContactPopup.tsx

---

## 16. page.tsx — nuevo orden de secciones

```tsx
<Header />
<Hero />
<ServiciosBento />
<Proceso />
<CasoDeUso />
<TechStack />
<CTAFinal />
<Contact />
<Footer />
<WhatsAppButton />
```

---

## 17. Orden de ejecución

1. Actualizar globals.css (paleta dark, fonts, animaciones, scrollbar, selection)
2. Actualizar layout.tsx (fonts Outfit/Inter/JetBrains Mono, metadata)
3. Actualizar tailwind config / design tokens (colores, sombras)
4. Rediseñar Header.tsx (dark, logo con cursor, nav neon)
5. Rediseñar Hero.tsx (mesh gradient, terminal widget, counters)
6. Crear ServiciosBento.tsx (bento grid, 7 cards, hover reveals)
7. Crear Proceso.tsx (timeline horizontal/vertical, animación secuencial)
8. Crear CasoDeUso.tsx (3 casos accordion)
9. Crear TechStack.tsx (grid de tecnologías con tooltips)
10. Rediseñar CTAFinal.tsx (gradient + grain, CTA neon)
11. Adaptar Contact.tsx (dark theme)
12. Rediseñar Footer.tsx (4 columnas, dark-card)
13. Adaptar WhatsAppButton.tsx
14. Limpiar componentes obsoletos
15. Actualizar page.tsx con nuevo orden
16. Testing responsive (mobile/tablet/desktop)

**COMMITEÁ DESPUÉS DE CADA PASO.**

---

## 18. Nombre de marca

- Nombre: **NEXORA Intelligence**
- En el logo: "NEXORA_" (con cursor parpadeante) arriba, "Intelligence" abajo en neon
- Email: hola@nexoraintelligence.com
- Ubicación: Buenos Aires, Argentina
