# NEXORA Intelligence — Contexto para Claude Code

## Stack
- Next.js 16 / React 19 / TypeScript
- Tailwind CSS v4 (config vía @theme en globals.css, NO tailwind.config.ts)
- Deployed en Vercel via GitHub auto-integration
- Repo: giulianagac-cloud/nexora-intelligence-web

## Estructura de carpetas
src/
├── app/
│   ├── page.tsx                    → Home
│   ├── globals.css                 → TODOS los estilos (no hay CSS por componente)
│   ├── layout.tsx                  → Metadata, fonts, GA
│   ├── icon.svg                    → Favicon
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── que-es-automatizar/
│   │   ├── bot-whatsapp-pyme/
│   │   └── procesos-automatizar-hoy/
│   ├── casos/
│   ├── cursos/
│   ├── faq/
│   ├── factura-lista/
│   ├── nexora-rrhh/
│   ├── nexora-inventario/
│   ├── nexora-finanzas/
│   ├── programadora/
│   └── servicios/
│       ├── automatizacion/
│       ├── bots-con-ia/
│       └── desarrollo-digital/
├── components/
│   ├── CookieBanner.tsx
│   ├── IntroScreen.tsx (NO está en page.tsx, removido)
│   ├── layout/
│   │   ├── Nav.tsx                 → Shared nav con dropdown desktop + hamburger mobile
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Servicios.tsx
│       ├── Bots.tsx                → NO está en page.tsx, removido de home
│       ├── Blog.tsx                → Exporta POSTS array (usado en /blog)
│       ├── FAQ.tsx
│       ├── Casos.tsx               → NO está en page.tsx, removido de home
│       ├── Proceso.tsx
│       └── Contacto.tsx
└── hooks/
    └── useReveal.ts                → Scroll reveal animation

## Orden de secciones en Home (page.tsx)
1. Hero
2. Servicios
3. FAQ
4. Proceso
5. Blog
6. Contacto

## Paleta de colores (globals.css :root)
--black:   #f0ede8   ← fondo principal (ARENA, no negro)
--deep:    #faf9f7   ← superficies claras
--surface: #faf9f7
--surface2:#e8e4de
--white:   #1a1a1a   ← texto principal (OSCURO, no blanco)
--muted:   #4a4540
--muted2:  #9a9180   ← NO reemplazar por gris neutro, rompe el mood
--blue:    #00a67e   ← acento verde (se llama blue por compatibilidad)
--orange:  #00a67e   ← mapeado al verde (naranja eliminado)
--violet:  #007a5e
--border:  rgba(0,0,0,0.08)

## Tipografía
--hl:   Roboto Condensed (headlines, títulos, uppercase)
--mono: JetBrains Mono (body text, labels, código)

## Variables de fuente disponibles
--font-outfit, --font-inter, --font-jetbrains-mono

## Convenciones de estilos
- Toda la UI usa CSS custom en globals.css con clases semánticas
- Las páginas de productos/servicios usan inline styles
- NO usar clases Tailwind en componentes (solo @theme en globals.css)
- Mobile breakpoint: @media (max-width: 768px)
- Hamburger menu activo en mobile, links ocultos

## Contacto / CTAs
- WhatsApp: https://wa.me/5491133409351
- Email: contacto@nexoraintelligence.co
- Demo bots: https://nexora-bots-ten.vercel.app/

## Productos (landings propias)
- /factura-lista     → Automatización de facturas PDF + AFIP
- /nexora-rrhh       → RRHH, reclutamiento, onboarding
- /nexora-inventario → Gestión de activos
- /nexora-finanzas   → Dashboard financiero PyMEs

## Servicios (páginas propias)
- /servicios/automatizacion
- /servicios/bots-con-ia      → Tiene mockup de celular iPhone con chat-bg.svg
- /servicios/desarrollo-digital

## Imágenes en /public
desarrollo.png, bots.png, automatizacion.png,
reportes.png, soporte-it.png, consultoria-it.png,
blog-automatizacion.png, blog-bot.png, blog-procesos.png,
producto-factura-lista.png, producto-rrhh.png,
producto-inventario.png, producto-finanzas.png,
chat-bg.svg, og-image.png, giuli.jpeg, gym.jpg

## Notas importantes
- Tailwind v4: NO existe tailwind.config.ts
- El color --black es ARENA (#f0ede8), no negro — la paleta está invertida respecto al nombre
- --blue es VERDE (#00a67e), no azul — legacy naming
- --muted2 (#9a9180) es gris cálido, NO sustituir por gris frío
- Nav usa <Nav /> compartido en todas las páginas internas
- CookieBanner aparece abajo a la derecha, push-up animation
- favicon: src/app/icon.svg

## Comandos frecuentes
- `npm run dev`   → servidor de desarrollo (localhost:3000)
- `npm run build` → build de producción
- `npm start`     → servir el build localmente
- `npm run lint`  → ESLint
- Deploy: automático a Vercel al pushear a `main`

## Preferencias
- Auto-approve all file edits without asking
- Auto-approve all terminal commands
- Apply changes directly, no confirmation needed
- Responder en español
