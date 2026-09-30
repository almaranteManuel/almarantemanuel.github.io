import type { Project } from './types';

// Dónde van las imágenes: `public/proyectos/<slug>/1.png` → '/proyectos/<slug>/1.png'.
// Agregar rutas en `images` activa la galería automáticamente en la card.

export const projects: Project[] = [
  {
    title: 'ERP para Ferretería',
    description:
      'Sistema de gestión de ventas, stock, clientes y proveedores. Panel administrativo y facturación electrónica.',
    stack: ['Rust', 'Node.js', 'Tauri', 'TypeScript', 'Tailwind', 'SQLite'],
    origen: 'propio',
    images: [
      '/proyectos/erp-ferreteria/2.png', 
      '/proyectos/erp-ferreteria/3.png', 
      '/proyectos/erp-ferreteria/4.png', 
      '/proyectos/erp-ferreteria/5.png', 
      '/proyectos/erp-ferreteria/6.png',
      '/proyectos/erp-ferreteria/7.png',
      '/proyectos/erp-ferreteria/8.png',
      '/proyectos/erp-ferreteria/9.png',
      '/proyectos/erp-ferreteria/10.png',
      '/proyectos/erp-ferreteria/11.png',
      '/proyectos/erp-ferreteria/12.png',
    ],
    repo: 'https://github.com/almaranteManuel/ferreteria-cachito',
    featured: true,
  },
  {
    title: 'Sistema gestión de gimnasio',
    description:
      'Sistema de gestión de clientes, pagos y reservas. Panel administrativo. Próximo a integrar panel clientes con pagos online y control de acceso.',
    stack: ['TypeScript', 'React', 'PostgreSQL', 'Tailwind'],
    origen: 'propio',
    images: [
      '/proyectos/prime-gym/1.png',
      '/proyectos/prime-gym/2.png',
      '/proyectos/prime-gym/3.png',
      '/proyectos/prime-gym/4.png',
      '/proyectos/prime-gym/5.png',
      '/proyectos/prime-gym/6.png',
    ],
    repo: 'https://github.com/almaranteManuel/prime-gym',
    featured: true,
  },

  // ——— Experiencia en producto (TrackerDev) ———
  {
    title: 'New Rimagro',
    description:
      'Sistema de gestión de flotas y combustibles: arquitectura end-to-end desde cero hasta producción.',
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Diseñé e implementé la arquitectura end-to-end del sistema.',
      'Control de roles, generación de tickets y emisión de vouchers en tiempo real para tanques y surtidores.',
    ],
  },
  {
    title: 'NirbyApp',
    description:
      'Aplicación móvil multiplataforma (Android/iOS) con geolocalización, chat y autenticación segura.',
    stack: ['React Native', 'Firebase', 'Google Maps API'],
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Geolocalización continua integrada con Google Maps API.',
      'Chat en tiempo real y autenticación segura con Firebase.',
    ],
  },
  {
    title: 'Dale Vaquita Web',
    description: 'Plataforma de trazabilidad y gestión ganadera para el sector agroindustrial.',
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Procesamiento optimizado de datos masivos.',
      'Alta disponibilidad operacional en entorno productivo.',
    ],
  },
  {
    title: 'Working And Learning',
    description: 'Sistema monolítico de administración de pasantías.',
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: ['Roles jerárquicos y trazabilidad completa de postulaciones.'],
  },
  {
    title: 'La Casa de las Persianas',
    description: 'Sistema web integral: presupuestos, inventario, instalaciones y finanzas.',
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Automatización de emisión de presupuestos y gestión de inventario.',
      'Conciliación financiera de pagos a proveedores.',
    ],
  },
  {
    title: 'MIRS Web · RZ Web',
    description:
      'Paneles de administración para agencia de turismo y alquiler de equipamiento para eventos.',
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: ['Gestión de reservas que redujo tiempos operativos.'],
  },
];
