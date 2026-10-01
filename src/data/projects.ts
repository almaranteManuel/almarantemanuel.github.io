import type { Project } from './types';

// Dónde van las imágenes: `public/proyectos/<slug>/1.png` → '/proyectos/<slug>/1.png'.
// Agregar rutas en `images` activa la galería automáticamente en la card.
const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: 'ERP para Ferretería',
    description:
      'Sistema de gestión de ventas, stock, clientes y proveedores. Panel administrativo y facturación electrónica.',
    stack: ['Rust', 'Node.js', 'Tauri', 'TypeScript', 'Tailwind', 'SQLite'],
    origen: 'propio',
    images: [
      `${base}proyectos/erp-ferreteria/2.png`,
      `${base}proyectos/erp-ferreteria/3.png`,
      `${base}proyectos/erp-ferreteria/4.png`,
      `${base}proyectos/erp-ferreteria/5.png`,
      `${base}proyectos/erp-ferreteria/6.png`,
      `${base}proyectos/erp-ferreteria/7.png`,
      `${base}proyectos/erp-ferreteria/8.png`,
      `${base}proyectos/erp-ferreteria/9.png`,
      `${base}proyectos/erp-ferreteria/10.png`,
      `${base}proyectos/erp-ferreteria/11.png`,
      `${base}proyectos/erp-ferreteria/12.png`,
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
      `${base}proyectos/prime-gym/1.png`,
      `${base}proyectos/prime-gym/2.png`,
      `${base}proyectos/prime-gym/3.png`,
      `${base}proyectos/prime-gym/4.png`,
      `${base}proyectos/prime-gym/5.png`,
      `${base}proyectos/prime-gym/6.png`,
    ],
    repo: 'https://github.com/almaranteManuel/prime-gym',
    featured: true,
  },

  // ——— Experiencia en producto (TrackerDev) ———
  {
    title: 'New Rimagro',
    description:
      'Sistema integral de gestión de surtidores de combustible (fuel dispensers) diseñado para operaciones en Argentina. La plataforma permite administrar descargas de combustible, controlar inventario de tanques, gestionar usuarios con roles diferenciados, y generar reportes detallados de ventas y movimientos. Es una solución empresarial que sincroniza datos entre dispositivos locales (bombas de combustible) y servidores remotos en tiempo real.',
    stack: ['TypeScript', ' Angular 6+', 'Node.js', 'MongoDB(local + remote)', 'Express', 'Mongoose', 'JWT'],
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Gestión fragmentada de surtidores: Unifica el control de múltiples bombas de combustible en una sola plataforma.',
      'Registra cada descarga con detalles de vehículo, conductor, cantidad, hora y fecha.',
      'Automatiza la sincronización local-remota cada 10 segundos.',
      'Implementa roles (superadmin, admin, operador) con visibilidad limitada por tanque.',
      'Genera reportes de ventas y movimientos con filtros por fecha, surtidor y usuario.',
      'Permite filtrar descargas por rangos de fecha, CUIT de empresa, y diferentes filtros.',
      'Seguridad de datos: Requiere autenticación JWT y auditoría de transacciones.',
    ],
  },
  {
    title: 'RZ Web',
    description:
      'Sistema integral de gestión de órdenes de alquiler y facturación diseñado para empresas de rental/alquiler de productos. Permite administrar clientes, productos, órdenes de trabajo, movimientos de inventario y generar facturas. Es una solución empresarial completa que controla todo el ciclo de vida de una orden: desde su creación, asignación a trabajadores, seguimiento de stock durante el alquiler, hasta su facturación final.',
    stack: ['PHP 8.2', 'Laravel 12', 'React', 'Typescript', 'SQLite/MySQL', 'Eloquent ORM', 'Inertia.js'],  
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Gestión completa de ciclo de órdenes: Crea órdenes, asigna trabajadores, registra productos salientes/entrantes, y finaliza órdenes con devoluciones automáticas.',
      'Control de inventario en tiempo real: Rastrea movimientos de stock (entradas/salidas/devoluciones) vinculados a órdenes específicas, permitiendo saber qué está en alquiler y qué está disponible.',
      'Facturación automática: Genera facturas basadas en órdenes completadas, calcula días de alquiler, aplica costos de productos y exporta a PDF.',
      'Roles y permisos: Distingue entre Administradores, Trabajadores y Clientes con vistas personalizadas (dashboard para admin, panel de órdenes asignadas para trabajadores).',
      'Auditoría y trazabilidad: Registra notas privadas/públicas en órdenes, adjunta archivos, y mantiene historial de cambios.'
    ],
  },
  {
    title: 'La Casa de las Persianas',
    description: 'Sistema web integral de gestión empresarial para una empresa especializada en la fabricación y distribución de persianas (cortinas de enrollar), cortinas metálicas y automatismos. Combina un sitio de catálogo público con un panel administrativo interno que gestiona clientes, solicitudes, pedidos, inventario, pagos y asignaciones de trabajo a múltiples roles de usuarios (instaladores, colocadores, operarios de taller).',
    stack: ['PHP 8.2', 'Laravel 12', 'Blade', 'JavaScript', 'MySQL', 'Eloquent ORM', 'React'],
    origen: 'cliente',
    contexto: 'TrackerDev · producto de cliente, sin demo pública.',
    logros: [
      'Automatización del flujo de trabajo de solicitudes, desde la creación y asignación hasta el seguimiento por estados, pagos y cierre del pedido.',
      'Gestión integral de materiales, costos e inventario, con validación de cantidades y cálculo de deuda por cliente o proyecto.',
      'Desarrollo de módulos para cortinas metálicas, incluyendo asignación a talleres, control de materiales, costos de instalación y seguimiento de entrega.',
      'Integración de pagos y facturación parcial, con registro de efectivo, transferencia y tarjeta para controlar cobros y pendientes.',
      'Implementación de autenticación, gestión de usuarios y control de accesos para garantizar seguridad y organización interna.',
      'Generación de reportes y documentación asociada a cada solicitud, mejorando la trazabilidad y la toma de decisiones.'
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
];
