export interface Social {
  label: string;
  href: string;
  handle?: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  availability: string;
  email: string;
  /** Ruta del CV dentro de `public/` (ej. '/cv.pdf'). Vacío = no mostrar botón. */
  cvUrl: string;
  about: string[];
  valueProps: { title: string; description: string }[];
}

export interface Project {
  title: string;
  description: string;
  /** Tecnologías (opcional en proyectos de cliente si no aplica). */
  stack?: string[];
  /** 'propio' = mostrable (imágenes + enlaces) · 'cliente' = contable, sin demo pública */
  origen: 'propio' | 'cliente';
  /** Nota de contexto para proyectos de cliente (rol, confidencialidad). */
  contexto?: string;
  /** Logros / responsabilidades (proyectos de cliente). */
  logros?: string[];
  /** Rutas a imágenes en `public/` para la galería (proyectos propios). */
  images?: string[];
  demo?: string;
  repo?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  description: string;
  tags?: string[];
}

export interface StackCategory {
  title: string;
  items: string[];
}
