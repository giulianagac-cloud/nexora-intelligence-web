import type { SiteConfig, NavLink, Service, Project } from "./types";

export const SITE_CONFIG: SiteConfig = {
  name: "Nexora Intelligence",
  tagline: "Soluciones digitales, automatización y tecnología con visión de negocio.",
  email: "info@nexoraintelligence.com",
  whatsapp: "5411XXXXXXXX", // placeholder
  location: "Argentina",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES: Service[] = [
  {
    title: "Desarrollo Web",
    description: "Sitios profesionales con diseño claro y orientado a resultados.",
    icon: "layout",
  },
  {
    title: "Apps y Sistemas",
    description: "Sistemas a medida para gestión de clientes, turnos y operaciones.",
    icon: "monitor",
  },
  {
    title: "Automatización de Procesos",
    description: "Reducimos fricción y optimizamos procesos con soluciones digitales.",
    icon: "zap",
  },
  {
    title: "Asistentes Inteligentes",
    description: "Bots y asistentes para consultas frecuentes y soporte automatizado.",
    icon: "message-circle",
  },
  {
    title: "Consultoría Funcional",
    description: "Relevamiento, estructura y diseño de soluciones alineadas al negocio.",
    icon: "search",
  },
  {
    title: "Testing y Documentación",
    description: "Validación funcional y documentación clara para proyectos digitales.",
    icon: "check-square",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Solución digital para estudio jurídico",
    description:
      "Presencia digital profesional con estructura clara, estética moderna y enfoque en confianza.",
    category: "Desarrollo Web",
  },
  {
    title: "Gestión digital para gimnasio",
    description:
      "Propuesta orientada a organización de turnos, clientes y experiencia digital.",
    category: "Apps y Sistemas",
  },
  {
    title: "Asistente interno empresarial",
    description:
      "Diseño de bot conversacional para automatización de consultas internas.",
    category: "Asistentes Inteligentes",
  },
  {
    title: "Diseño funcional de soluciones",
    description:
      "Documentación, estructura y definición de procesos digitales.",
    category: "Consultoría",
  },
];

export const PROJECT_TYPES = [
  "Web institucional",
  "Landing page",
  "Sistema / app",
  "Automatización",
  "Bot / asistente",
  "Consultoría",
  "Otro",
];

export const DIFFERENTIATOR_PILLARS = [
  "Análisis",
  "Claridad",
  "Solución",
  "Escalabilidad",
];

export const ABOUT_PILLARS = [
  "Análisis",
  "Estrategia",
  "Tecnología",
  "Automatización",
  "Claridad",
];
