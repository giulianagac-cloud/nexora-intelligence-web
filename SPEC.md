# Especificación Técnica — Web Nexora Intelligence

## Para Claude Code / Codex

> **DIRECTIVA CRÍTICA DE DISEÑO**: Esta web NO debe verse como una plantilla genérica de AI ni como un template básico. Debe tener nivel visual de consultora premium internacional, con inspiración en estudios boutique de tecnología modernos. Excelente manejo del espacio, tipografía elegante, cards refinadas, jerarquía visual fuerte. Cada decisión de diseño debe ser intencional y sofisticada.

---

## 1. Proyecto

- **Nombre**: Nexora Intelligence
- **Tipo**: Web institucional / landing profesional
- **Objetivo**: Presentar la consultora, comunicar servicios, captar clientes, transmitir imagen premium y confiable
- **URL futura**: nexoraintelligence.com (o similar)

---

## 2. Stack técnico

| Tecnología | Uso |
|---|---|
| **Next.js 14+** | Framework principal (App Router) |
| **React 18+** | UI Components |
| **Tailwind CSS** | Estilos |
| **TypeScript** | Tipado |
| **Formspree** | Formulario de contacto (o similar serverless) |
| **Vercel** | Deploy |

---

## 3. Estructura del proyecto

```
nexora-intelligence/
├── app/
│   ├── layout.tsx          # Layout principal, fonts, metadata
│   ├── page.tsx            # Home (landing principal)
│   ├── globals.css         # Estilos globales + Tailwind
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navbar sticky
│   │   ├── Footer.tsx      # Footer institucional
│   │   └── WhatsAppButton.tsx  # Botón flotante WhatsApp
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Differentiator.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── CTAFinal.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx      # Botón reutilizable (primary/secondary/whatsapp)
│       ├── ServiceCard.tsx
│       ├── ProjectCard.tsx
│       └── SectionHeading.tsx  # Subtítulo + título de sección
├── lib/
│   ├── constants.ts        # Textos, datos de servicios, proyectos
│   └── types.ts            # Tipos TypeScript
├── public/
│   └── (assets si los hay)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 4. Identidad visual y sistema de diseño

### 4.1 Posicionamiento estético

La web debe sentirse como:
- Consultora boutique premium
- Tecnológica, elegante, minimalista, moderna, sobria
- Seria con proyección internacional

**NO debe sentirse como:**
- Plantilla genérica / template básico
- Startup vacía o improvisada
- Excesivamente corporativa clásica
- Recargada ni barata

### 4.2 Paleta de colores

```typescript
// tailwind.config.ts - extender colores
const colors = {
  nexora: {
    white: '#FAFAFA',
    black: '#0A0A0A',
    graphite: '#1A1A1A',
    gray: {
      50: '#F7F7F7',
      100: '#F0F0F0',
      200: '#E4E4E4',
      300: '#D1D1D1',
      400: '#A0A0A0',
      500: '#6B6B6B',
      600: '#4A4A4A',
    },
    // Acento principal: azul petróleo profundo
    accent: {
      DEFAULT: '#1B4D5C',
      light: '#2A6F82',
      dark: '#0F3542',
      subtle: '#E8F1F4', // para fondos sutiles
    },
    // Acento secundario opcional: cobre muy suave (usar con moderación)
    copper: {
      DEFAULT: '#B87B5E',
      light: '#D4A088',
      subtle: '#F5EDE8',
    },
  },
};
```

### 4.3 Tipografía

Usar Google Fonts. Dos familias complementarias:

- **Headings**: `Syne` (weight 500-600) — geométrica, moderna, con personalidad. Alternativa: `Outfit` o `Archivo`.
- **Body**: `Inter` o `DM Sans` (weight 400-500) — limpia, profesional, excelente legibilidad.

```typescript
// Importar en layout.tsx con next/font/google
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], variable: '--font-heading' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
```

**Escala tipográfica:**

| Elemento | Font | Tamaño desktop | Peso | Tracking |
|---|---|---|---|---|
| Hero título | Syne | 56-64px | 500 | -0.02em |
| Sección título | Syne | 36-42px | 500 | -0.01em |
| Sección subtag | DM Sans | 12-13px | 500 | 0.15em, uppercase |
| Card título | Syne | 18-20px | 500 | 0 |
| Body | DM Sans | 16-17px | 400 | 0 |
| Body small | DM Sans | 14-15px | 400 | 0 |
| CTA botones | DM Sans | 14px | 500 | 0.03em |
| Nav links | DM Sans | 14px | 400 | 0.02em |

### 4.4 Espaciado y layout

- **Secciones**: padding vertical generoso (100-140px desktop, 64-80px mobile)
- **Contenido máximo**: max-w de 1200px centrado
- **Grid servicios**: 3 columnas desktop, 2 tablet, 1 mobile
- **Grid proyectos**: 2 columnas desktop, 1 mobile
- **Separadores**: líneas finas (1px) con opacity baja entre secciones, o espacio limpio
- **Cards**: border radius 12-16px, border sutil (1px gray-200), padding generoso (32px), hover con elevación suave

### 4.5 Recursos visuales permitidos

- Íconos minimalistas (Lucide React o similares, stroke-width fino)
- Líneas finas decorativas
- Bloques con mucho aire
- Animaciones suaves al scroll (framer-motion o CSS intersection observer)
- Transiciones discretas en hover
- Fondos limpios
- Detalles geométricos sutiles (líneas, puntos, formas abstractas)
- Opcional: subtle grid pattern o dot pattern como fondo del hero

**NO usar:**
- Exceso de efectos
- Gradientes intensos
- Sombras pesadas
- Imágenes stock genéricas
- Animaciones distractivas

---

## 5. Contenido exacto por sección

### 5.1 Header

**Componente**: `Header.tsx` — sticky, con blur backdrop en scroll

```
Logo/Nombre: "Nexora Intelligence" (tipográfico, "Intelligence" en color acento)

Menú:
- Inicio
- Servicios
- Proyectos
- Nosotros
- Contacto

CTA botón derecho: "Solicitar propuesta"
```

**Comportamiento:**
- Sticky top con backdrop-blur al hacer scroll
- Menú hamburguesa elegante en mobile
- Smooth scroll a las secciones
- El botón CTA debe destacar visualmente

---

### 5.2 Hero

**Componente**: `Hero.tsx`

```
Subtag: "Consultora digital" (uppercase, tracking amplio, color acento)

Título principal:
"Soluciones digitales inteligentes para negocios, profesionales y nuevos proyectos."

Subtítulo:
"Diseñamos webs, sistemas, automatizaciones y asistentes digitales para transformar necesidades reales en soluciones concretas."

Botones:
- [Solicitar propuesta] → primary (fondo acento, texto blanco)
- [Ver servicios] → secondary (borde, fondo transparente) → scroll a #servicios
```

**Diseño del Hero:**
- Layout asimétrico: texto a la izquierda (60%), visual abstracto a la derecha (40%)
- El visual puede ser: composición geométrica sutil con SVG, panel abstracto minimalista, o elemento decorativo que refuerce la identidad tech/premium
- Altura: mínimo 85vh en desktop
- El título debe tener máximo ~600px de ancho para buena legibilidad
- Espacio generoso entre elementos

---

### 5.3 Servicios

**Componente**: `Services.tsx`

```
Subtag: "Servicios"
Título: "Qué hacemos"
Intro: "Soluciones pensadas para ordenar, digitalizar y potenciar proyectos con una mirada práctica, moderna y escalable."

Cards (6):

1. Desarrollo Web
   Sitios institucionales, landing pages y webs profesionales con diseño claro, moderno y orientado a resultados.
   Ícono: layout/globe

2. Apps y Sistemas
   Soluciones digitales a medida para gestión de clientes, turnos, circuitos internos y necesidades operativas concretas.
   Ícono: smartphone/monitor

3. Automatización de Procesos
   Digitalización de tareas y mejora de procesos para reducir fricción operativa y ganar eficiencia.
   Ícono: settings/zap

4. Asistentes Inteligentes
   Bots y asistentes digitales para consultas frecuentes, soporte interno y automatización conversacional.
   Ícono: message-circle/bot

5. Consultoría y Análisis Funcional
   Relevamiento, orden de requerimientos y diseño de soluciones alineadas al negocio.
   Ícono: search/clipboard

6. Testing Funcional y Documentación
   Casos de prueba, validación funcional y documentación clara para proyectos digitales.
   Ícono: check-square/file-text

CTA debajo de las cards: "Quiero una propuesta" → scroll a contacto
```

**Diseño:**
- Grid de 3 columnas en desktop
- Cada card con: ícono en cuadrado con fondo acento-subtle, título, descripción
- Hover suave: leve elevación o cambio de borde
- Ícono: Lucide React, stroke fino, color acento

---

### 5.4 Diferencial

**Componente**: `Differentiator.tsx`

```
Subtag: "Diferencial"
Título: "Tecnología con visión de negocio"

Texto principal:
"En Nexora Intelligence no se trata solo de desarrollar una herramienta. Se trata de entender el problema, ordenar el proceso y construir una solución útil, clara y alineada con cada necesidad."

Pilares (pills/badges):
- Análisis
- Claridad
- Solución
- Escalabilidad
```

**Diseño:**
- Layout de 2 columnas: texto a la izquierda, elemento visual abstracto a la derecha
- Los pilares como pills/badges minimalistas con borde fino
- El visual puede ser un gráfico abstracto de crecimiento, composición geométrica, o elemento que refuerce la idea de "proceso → resultado"

---

### 5.5 Proyectos

**Componente**: `Projects.tsx`

```
Subtag: "Proyectos"
Título: "Líneas de trabajo y soluciones desarrolladas"

Cards (4):

1. Solución digital para estudio jurídico
   Presencia digital profesional con estructura clara, estética moderna y enfoque en confianza.

2. Gestión digital para gimnasio
   Propuesta orientada a organización de turnos, clientes y experiencia digital.

3. Asistente interno empresarial
   Diseño de bot conversacional para automatización de consultas internas.

4. Diseño funcional de soluciones
   Documentación, estructura y definición de procesos digitales.
```

**Diseño:**
- Grid de 2 columnas en desktop
- Cards con línea superior de acento (3-4px, color acento con opacity)
- Hover con elevación suave
- Opciones visuales: etiqueta de categoría en cada card, número o ícono decorativo sutil

---

### 5.6 Sobre Nosotros

**Componente**: `About.tsx`

```
Subtag: "Nosotros"
Título: "Sobre Nexora Intelligence"

Texto (2 párrafos):
"Nexora Intelligence nace con una visión clara: combinar análisis, tecnología y comprensión real de negocio para crear soluciones digitales modernas, útiles y escalables."

"Trabajamos con una mirada consultiva, enfocada en entender cada necesidad y transformarla en una solución concreta y profesional."

Pilares verticales:
- Análisis
- Estrategia
- Tecnología
- Automatización
- Claridad
```

**Diseño:**
- Layout de 2 columnas: texto a la izquierda, pilares a la derecha
- Pilares como lista vertical con dot/bullet de color acento
- Opción: fondo sutil diferenciado (gray-50) para darle identidad visual a esta sección

---

### 5.7 CTA Final

**Componente**: `CTAFinal.tsx`

```
Subtag: "Hablemos"

Título:
"¿Tenés una idea, un proceso para mejorar o una necesidad digital concreta?"

Texto:
"Podemos ayudarte a ordenarla y convertirla en una solución digital clara, funcional y profesional."

Botones:
- [Solicitar propuesta] → primary → scroll a contacto
- [Contactar por WhatsApp] → estilo WhatsApp (verde #25D366 como borde/texto)
```

**Diseño:**
- Centrado
- Fondo diferenciado (puede ser el graphite oscuro con textos claros, o fondo acento muy sutil)
- Máximo impacto visual como cierre comercial

---

### 5.8 Contacto

**Componente**: `Contact.tsx`

```
Subtag: "Contacto"
Título: "Contacto"
Texto: "Contanos qué necesitás y te responderemos con una propuesta inicial."

Formulario:
- Nombre (input text)
- Email (input email)
- Empresa / rubro (input text)
- Tipo de proyecto (select):
    - Web institucional
    - Landing page
    - Sistema / app
    - Automatización
    - Bot / asistente
    - Consultoría
    - Otro
- Mensaje (textarea)
- [Enviar consulta] → botón primary

Info lateral:
- Email: info@nexoraintelligence.com
- WhatsApp: +54 11 XXXX-XXXX (placeholder)
- Ubicación: Argentina
```

**Diseño:**
- Layout 2 columnas: info a la izquierda, formulario a la derecha
- Inputs con estilo minimalista (borde fino, border-radius 8px, focus con color acento)
- Integrar con Formspree (action URL)

---

### 5.9 Footer

**Componente**: `Footer.tsx`

```
Marca: "Nexora Intelligence"
Descripción: "Soluciones digitales, automatización y tecnología con visión de negocio."

Links:
- Inicio
- Servicios
- Nosotros
- Contacto

Frase de cierre:
"Diseñamos soluciones con criterio, claridad y proyección."

Copyright:
"© 2026 Nexora Intelligence. Todos los derechos reservados."
```

---

### 5.10 Botón WhatsApp flotante

**Componente**: `WhatsAppButton.tsx`

- Botón flotante fijo (bottom-right)
- Color verde WhatsApp (#25D366)
- Ícono de WhatsApp (SVG)
- Border-radius circular
- Leve sombra
- Link a `https://wa.me/5411XXXXXXXX` (placeholder)
- Aparece después de un pequeño scroll (no inmediatamente)

---

## 6. Comportamiento e interacciones

### 6.1 Navegación
- Smooth scroll entre secciones usando IDs (`#servicios`, `#proyectos`, `#nosotros`, `#contacto`)
- Header sticky con backdrop-blur
- Active state en nav según sección visible (intersection observer)

### 6.2 Animaciones
- **Scroll reveal**: elementos aparecen con fade-in + translate-y suave al entrar en viewport
- **Stagger en cards**: las cards de servicios y proyectos aparecen escalonadas
- **Hover en cards**: leve elevación (translate-y -4px) + border más visible
- **Hover en botones**: transición suave de color/fondo
- **Hero**: texto con fade-in escalonado al cargar

Implementar con CSS (intersection observer) o framer-motion si ya está disponible.

### 6.3 Responsive

| Breakpoint | Comportamiento |
|---|---|
| **Desktop** (≥1024px) | Layout completo, grids de 3 y 2 columnas |
| **Tablet** (768-1023px) | Grids de 2 columnas, hero apilado |
| **Mobile** (<768px) | Todo en 1 columna, menú hamburguesa, padding reducido |

---

## 7. Requisitos técnicos

### 7.1 SEO básico
- Metadata en `layout.tsx`: title, description, Open Graph
- Tags semánticos: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Alt text en imágenes/íconos decorativos
- Heading hierarchy correcta (h1 solo en hero, h2 en secciones, h3 en cards)

```typescript
// app/layout.tsx metadata
export const metadata = {
  title: 'Nexora Intelligence — Soluciones digitales inteligentes',
  description: 'Consultora de tecnología. Desarrollo web, apps, automatización, asistentes inteligentes y consultoría funcional para negocios y profesionales.',
  openGraph: {
    title: 'Nexora Intelligence',
    description: 'Soluciones digitales inteligentes para negocios, profesionales y nuevos proyectos.',
    type: 'website',
  },
};
```

### 7.2 Performance
- Optimizar imágenes con next/image si se agregan
- Fonts con next/font (sin layout shift)
- Componentes lazy donde corresponda
- Minimal JS bundle

### 7.3 Accesibilidad básica
- Contraste suficiente en todos los textos
- Focus visible en elementos interactivos
- Aria labels en botones de ícono (WhatsApp, hamburguesa)
- Formulario con labels asociados

### 7.4 Escalabilidad
La estructura debe quedar preparada para agregar después:
- Páginas individuales de servicios (`/servicios/desarrollo-web`, etc.)
- Portfolio / casos de éxito con detalle
- Blog
- Versión bilingüe (español/inglés)
- Backend para formularios
- Integraciones futuras

---

## 8. Datos centralizados

Todos los textos y datos de servicios/proyectos deben estar en `lib/constants.ts` para fácil edición:

```typescript
// lib/constants.ts

export const SITE_CONFIG = {
  name: 'Nexora Intelligence',
  tagline: 'Soluciones digitales, automatización y tecnología con visión de negocio.',
  email: 'info@nexoraintelligence.com',
  whatsapp: '5411XXXXXXXX', // placeholder
  location: 'Argentina',
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES = [
  {
    title: 'Desarrollo Web',
    description: 'Sitios institucionales, landing pages y webs profesionales con diseño claro, moderno y orientado a resultados.',
    icon: 'layout', // Lucide icon name
  },
  // ... las 6 cards
];

export const PROJECTS = [
  {
    title: 'Solución digital para estudio jurídico',
    description: 'Presencia digital profesional con estructura clara, estética moderna y enfoque en confianza.',
  },
  // ... los 4 proyectos
];

export const PROJECT_TYPES = [
  'Web institucional',
  'Landing page',
  'Sistema / app',
  'Automatización',
  'Bot / asistente',
  'Consultoría',
  'Otro',
];
```

---

## 9. Orden de construcción recomendado

1. Setup del proyecto (Next.js + Tailwind + TypeScript + fonts)
2. Definir design tokens en tailwind.config.ts (colores, fonts, spacing)
3. Crear `lib/constants.ts` con todos los textos
4. Construir componentes UI base (Button, SectionHeading, ServiceCard, ProjectCard)
5. Construir layout (Header + Footer + WhatsAppButton)
6. Construir Hero
7. Construir Services
8. Construir Differentiator
9. Construir Projects
10. Construir About
11. Construir CTAFinal
12. Construir Contact (con Formspree)
13. Ensamblar todo en `page.tsx`
14. Implementar smooth scroll + intersection observer
15. Agregar animaciones de scroll reveal
16. Adaptar responsive completo
17. Ajustar tipografía, espaciado y detalles finales
18. SEO y metadata
19. Testing visual en desktop/tablet/mobile
20. Deploy en Vercel

---

## 10. Recordatorio final para Claude Code

**IMPORTANTE**: El resultado debe tener calidad visual real de consultora premium internacional. Esto significa:

- Tipografía con carácter (Syne para headings, no usar Inter/Roboto/Arial para todo)
- Espaciado generoso y deliberado, no apretado
- Cards con aire interno, no apretadas
- Jerarquía visual fuerte: el ojo debe saber dónde ir primero
- Color acento usado con criterio, no en exceso
- Detalles sutiles que eleven: líneas decorativas, hover states, transiciones suaves
- El hero debe impactar, no ser un bloque de texto genérico
- Cada sección debe respirar y tener su propia identidad visual dentro del sistema
- Mobile debe sentirse premium también, no una versión "achicada"

**NO producir:**
- Layout genérico de template gratuito
- Cards todas iguales sin personalidad
- Tipografía default sin jerarquía
- Colores planos sin sistema
- Espaciado uniforme sin ritmo visual
- Hero sin impacto visual

La web debe transmitir: *"esta consultora sabe lo que hace y se toma en serio su propia imagen."*
