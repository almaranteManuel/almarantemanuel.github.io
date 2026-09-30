import type { Profile } from './types';

export const profile: Profile = {
  name: 'Manuel Almarante',
  role: 'Desarrollador Full-Stack',
  tagline:
    'Experiencia construyendo soluciones web y móviles escalables, de cero a producción: agroindustria, logística, servicios y turismo.',
  location: 'Paraná, Entre Ríos, Argentina · Remoto',
  availability: 'Disponible para nuevos proyectos',
  email: 'almarante.manu@gmail.com',
  cvUrl: '/cv.pdf',
  about: [
    'Soy desarrollador full-stack con más de 3 años de experiencia en arquitectura, desarrollo e implementación end-to-end de soluciones web y móviles. Construí sistemas integrales desde cero hasta producción para agroindustria, servicios, logística y turismo.',
    'Trabajén en una startup bajo dirección de ingeniería en producto real: gestión de flotas, apps móviles con geolocalización, trazabilidad ganadera y paneles de administración. Me especializo en optimización de rendimiento, APIs robustas y arquitecturas limpias.',
  ],
  valueProps: [
    {
      title: 'APIs robustas',
      description:
        'Diseño de APIs con validación, autenticación y documentación. Integración con bases de datos SQL y NoSQL, y servicios externos.',
    },
    {
      title: 'Sistemas end-to-end',
      description: 'Del requerimiento a producción: datos, roles, tiempo real, Docker y CI/CD.',
    },
    {
      title: 'Web + móvil',
      description: 'Paneles, plataformas y apps Android/iOS.',
    },
  ],
};
