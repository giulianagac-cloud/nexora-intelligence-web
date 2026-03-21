export interface Service {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Project {
  title: string;
  description: string;
  category?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  whatsapp: string;
  location: string;
}
