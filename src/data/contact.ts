// Configuración del formulario de contacto.
// El email NO se muestra en la página: solo vive en el servicio externo.
// 1. Crea un formulario gratis en https://formspree.io (50 envíos/mes)
//    o https://www.web3forms.com (con access_key).
// 2. Pega aquí tu endpoint y listo — no toques el componente.
export const contact = {
  formEndpoint: 'https://formspree.io/f/TU_ID',
  responseTime: 'Respondo en 24–48 h.',
} as const;
