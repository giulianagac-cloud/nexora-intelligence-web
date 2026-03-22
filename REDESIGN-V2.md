# Instrucción para Claude Code — Rediseño Nexora Intelligence v2

Leé SPEC.md como base, pero aplicá los siguientes cambios al sitio actual. IMPORTANTE: commiteá después de cada bloque de cambios.

## 1. Nueva paleta de colores

Reemplazar el azul petróleo (#1B4D5C) como color principal por NEGRO (#0A0A0A). Agregar coral (#D85A30) como acento secundario.

Tokens nuevos:
- nexora-black: #0A0A0A (principal, reemplaza al petróleo en textos, íconos, checks, botón principal, header)
- nexora-coral: #D85A30 (acento: badges, palabra destacada del hero, "Intelligence" en logo, hover secundario, CTA final)
- nexora-coral-subtle: #FAECE7 (fondo de badges)
- nexora-coral-dark: #993C1D (texto sobre fondo coral-subtle)
- nexora-gray-500: #6B6B6B (textos secundarios, descripciones — se mantienen)
- nexora-gray-200: #E4E4E4 (bordes)
- nexora-gray-50: #F7F7F7 (fondos alternados)
- Blanco: #FFFFFF (fondo principal)

El petróleo (#1B4D5C) ya NO se usa en ningún lado.

## 2. Logo nuevo — componente Logo.tsx

Crear componente Logo.tsx reutilizable con prop `variant: 'light' | 'dark'`.

Formato del logo:
- Isotipo: hexágono SVG con borde de 1.5-2px y letra "N" centrada (font-weight 700)
- Al lado, dos líneas:
  - "NEXORA" en uppercase, font-weight 800, letter-spacing 2-3px
  - "Intelligence" debajo, font-weight 400, color coral (#D85A30)

Variante light (fondo blanco): hexágono y "NEXORA" en negro (#0A0A0A), "Intelligence" en coral.
Variante dark (fondo oscuro): hexágono y "NEXORA" en blanco, "Intelligence" en coral.

Tamaño: logo text ~16-18px. Usar en Header y Footer.

## 3. Tipografía hero

Cambiar la font del título hero a Manrope (importar con next/font/google). Weight 700, tracking -0.5px.
Resaltar la palabra "inteligentes" en color coral (#D85A30).

## 4. Reemplazar SVG del hero por imagen

Eliminar el componente SVG abstracto/geométrico del hero. En su lugar, mostrar la imagen `/public/hero-image.png` usando next/image, con:
- border-radius 12px
- sombra suave
- object-fit cover
- Que ocupe el espacio derecho del hero (la columna del 40%)

## 5. Nueva sección "Soluciones que desarrollamos"

Agregar debajo del hero. Grid de 6 cards (3x2 en desktop, 2 cols tablet, 1 col mobile).

Cada card:
- Fondo blanco
- border-radius 12px
- border: 1px solid #F0F0F0
- box-shadow: 0 1px 4px rgba(0,0,0,0.06)
- padding: 22-24px
- Badge pequeño (fondo #FAECE7, texto #993C1D, border-radius 16-20px, font-size ~11px) — solo en las primeras 3 cards
- Título (font-weight 600, negro)
- Descripción breve (gris #6B6B6B)
- 3 checks con ícono Check de Lucide en negro (#0A0A0A), stroke-width 1.5
- Hover: leve translate-y -2px + shadow más visible

Contenido:

Card 1: badge "Presencia digital" / Desarrollo Web / Sitios institucionales y landing pages con diseño profesional. / checks: diseño moderno, responsive, identidad profesional

Card 2: badge "Solución a medida" / Apps y Sistemas / Soluciones digitales para gestión de clientes, turnos y circuitos internos. / checks: lógica personalizada, organización operativa, escalabilidad

Card 3: badge "Eficiencia real" / Automatización / Digitalizamos tareas y optimizamos flujos operativos. / checks: menos fricción, más orden, mejor operación

Card 4: (sin badge) / Asistentes Inteligentes / Bots y asistentes digitales para soporte y automatización. / checks: consultas ágiles, respuestas inmediatas, escalabilidad futura

Card 5: (sin badge) / Consultoría Funcional / Relevamos necesidades y diseñamos soluciones alineadas. / checks: análisis, estructura, visión de negocio

Card 6: (sin badge) / Testing y Documentación / Validación funcional y documentación clara. / checks: calidad funcional, orden documental, claridad técnica

Título de sección: "Soluciones que desarrollamos"
Subtag: "SOLUCIONES"
Intro: "Herramientas digitales pensadas para resolver necesidades reales, ordenar procesos y potenciar proyectos."

## 6. Banda de contraste

Debajo de la sección "Soluciones que desarrollamos", agregar una banda horizontal con:
- Fondo: #0A0A0A (negro)
- Centrado
- Título: "Tecnología con visión de negocio" en blanco, font-weight 700
- Subtítulo: "Entender el problema, ordenar el proceso y construir una solución útil, clara y alineada con cada necesidad." en #A0A0A0
- Padding vertical generoso (36-48px)

## 7. Alternancia de fondos

Aplicar este ritmo de fondos entre secciones:
- Hero: blanco
- Soluciones que desarrollamos: blanco
- Banda contraste: negro
- Servicios (Qué hacemos): gris #F7F7F7
- Diferencial: blanco
- Proyectos: gris #F7F7F7
- Nosotros: blanco
- CTA final: negro (#0A0A0A)
- Contacto: blanco

## 8. Actualizar colores en secciones existentes

Todo lo que era azul petróleo (#1B4D5C) ahora pasa a negro (#0A0A0A):
- Subtags (SERVICIOS, DIFERENCIAL, etc.)
- Íconos de servicios
- Checks
- Pills del diferencial (borde gris #D1D1D1, texto #4A4A4A en vez de petróleo)
- Íconos de cuadrado de servicio (fondo #F0F0F0 en vez de accent-subtle)
- Puntos de los pilares en About

El coral (#D85A30) aparece en:
- Borde superior de las cards de proyectos (opacity 50%, 100% en hover)
- Subtag "HABLEMOS" del CTA final
- Botón principal del CTA final (background coral)
- "Intelligence" en el logo

## 9. Botones refinados

Botón principal: background #0A0A0A, color blanco, hover con scale(1.02) + box-shadow suave.
Botón secundario: borde #D1D1D1, hover cambia borde y texto a coral (#D85A30).
Botón CTA final: background coral (#D85A30), color blanco.
Botón WhatsApp: se mantiene verde #25D366.

## 10. Popup de contacto — ContactPopup.tsx

Crear componente "use client" con:
- Botón flotante: bottom-right, ARRIBA del botón de WhatsApp (por ejemplo bottom-24). Fondo blanco, border-radius 50%, sombra suave, ícono MessageCircle de Lucide en negro. Width/height 48px.
- Al hacer click, abre un popup:
  - Fondo blanco, border-radius 12px, box-shadow visible
  - Botón X para cerrar (arriba derecha)
  - Opción 1: "Chateá por WhatsApp" con ícono WhatsApp SVG + link a wa.me/5411XXXXXXXX
  - Opción 2: "Llamanos" con ícono Phone de Lucide + número visible: +54 11 XXXX-XXXX (placeholder)
  - Estilo limpio, coherente con paleta negro/coral/gris
- El popup aparece hacia arriba del botón, no hacia abajo
- Animación suave de entrada (fade + scale)
- Aparece después de 300px de scroll (igual que el botón de WhatsApp)

## 11. Sección de credibilidad

Agregar antes del CTA final. Una sección breve con:
- Frase central: "Soluciones pensadas para profesionales, pymes y equipos internos"
- 3 o 4 mini bloques en fila: ícono (Lucide) + texto corto que refuerce confianza. Ejemplos:
  - "Enfoque consultivo"
  - "Soluciones a medida"  
  - "Tecnología con criterio"
  - "Visión escalable"
- Fondo blanco o gris suave, look sobrio y discreto

## Orden de ejecución recomendado

1. Actualizar paleta de colores y tokens
2. Crear Logo.tsx y aplicar en Header + Footer
3. Actualizar tipografía hero (Manrope) + palabra coral + reemplazar SVG por imagen
4. Crear sección "Soluciones que desarrollamos"
5. Crear banda de contraste
6. Aplicar alternancia de fondos
7. Actualizar colores en todas las secciones existentes (petróleo → negro/coral)
8. Refinar botones
9. Crear ContactPopup.tsx
10. Crear sección de credibilidad
11. Testing responsive en mobile/tablet/desktop

COMMITEÁ DESPUÉS DE CADA PASO.

## Recordatorio

Todo debe seguir sintiéndose premium, profesional, moderno. La paleta es negro + blanco + gris + coral como único acento de color. Nada recargado, nada agresivo. Consultora boutique con más vida visual.
