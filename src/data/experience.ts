import type { ExperienceItem, StackCategory, Social } from './types';

export const experience: ExperienceItem[] = [
  {
    period: '2023 — 2026',
    role: 'Desarrollador de Software Full-Stack',
    org: 'TrackerDev · Remoto',
    description:
      'Arquitectura, desarrollo e implementación end-to-end de soluciones web y móviles para agroindustria, servicios, logística y turismo: del sistema desde cero hasta producción.',
    tags: ['Node.js', 'Laravel', 'React', 'React Native', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Docker', 'CI/CD'],
  },
    {
    period: '2023 — 2026',
    role: 'Desarrollador de Software Full-Stack',
    org: 'Freelance',
    description:
      'Arquitectura, desarrollo e implementación end-to-end de soluciones web y automatización de procesos.',
    tags: ['Node.js', 'JAVA', 'React', 'Rust', 'Tauri', 'SQL', 'NoSQL'],
  },
];

export const stack: StackCategory[] = [
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Laravel (PHP)', 'Java', 'Rust'],
  },
  {
    title: 'Front-End & Móvil',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Quasar'],
  },
  { title: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Firebase'] },
  {
    title: 'DevOps & Tools',
    items: ['Git', 'Docker', 'Tauri', 'Electron', 'CI/CD', 'REST', 'WebSockets'],
  },
];

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/almaranteManuel', handle: '@almaranteManuel' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/almarantemanuel',
    handle: '/in/almarantemanuel',
  },
];

export const nav = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
] as const;
