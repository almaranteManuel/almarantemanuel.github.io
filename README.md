# Portfolio Dev — Astro + Tailwind + TypeScript

Portfolio personal estático, minimalista y elegante, inspirado en la estética dev sobria de
[jscamp](https://github.com/midudev/jscamp) (fondo oscuro neutro, tipografía de sistema,
acentos monoespaciados), pero con implementación propia y ligera.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev      # servidor local en http://localhost:4321
npm run preview  # previsualizar el build
```

## Build

```bash
npm run build
```

Genera HTML estático en `dist/`.

## Calidad

```bash
npm run lint        # ESLint
npm run lint:fix    # ESLint con autofix
npm run format      # Prettier write
npm run format:check
npm run check       # astro check (tipos)
```

## Deploy

El sitio es 100 % estático (`output: 'static'`), sin adaptador necesario.

- **Vercel:** importa el repo, framework `Astro`, build `npm run build`, output `dist`.
- **Netlify:** igual (ya incluye `netlify.toml`).
- **GitHub Pages:** `npm run build` → publica `dist/` (p. ej. con `peaceiris/actions-gh-pages`).
  No olvides ajustar `site` en `src/data/site.ts` a tu dominio para el canonical/OG.

## Personalización

Todo el contenido está en `src/data/` — no toques componentes:

| Archivo                  | Qué editar                                                 |
| ------------------------ | ---------------------------------------------------------- |
| `src/data/site.ts`       | Título, descripción, URL, **paleta** (`neutral`/`vibrant`) |
| `src/data/profile.ts`    | Nombre, rol, tagline, sobre mí, propuesta de valor, email  |
| `src/data/projects.ts`   | Proyectos (`origen: propio/cliente`, imágenes, logros)     |
| `src/data/experience.ts` | Experiencia, stack por categorías, redes, nav              |
| `src/data/contact.ts`    | Endpoint del formulario (Formspree/Web3Forms)              |

### Contacto (sin exponer el email)

- El email **no se muestra** en la página: hay un discreto botón **Copiar email**
  (usa `profile.email` en `src/data/profile.ts`; si está vacío, el botón no aparece).
- El formulario envía vía servicio externo, sin `mailto:` ni backend propio:
  pega tu endpoint en `src/data/contact.ts` (`formEndpoint`).
- Incluye honeypot anti-spam (`_gotcha`) y estados accesibles de envío/error.

### Proyectos: propios vs. cliente + galería

- Cada proyecto lleva `origen: 'propio' | 'cliente'`:
  - **propio**: mostrable — admite `images`, `demo` y `repo`. Con imágenes, la card
    muestra miniatura y abre la galería lightbox (zoom sutil, ←/→/Esc, contador).
  - **cliente**: contable, sin demo pública — usa `contexto` (pill de confidencialidad)
    y `logros` (lista de responsabilidades). Sin bloque de enlaces vacío.
- **Imágenes**: colócalas en `public/proyectos/<slug>/` (ej. `1.png`, `2.png`) y
  referéncialas como `images: ['/proyectos/<slug>/1.png', ...]`. Con array vacío
  no se muestra galería.

### Colores

- **Paleta A — neutra profesional (por defecto):** monocromo zinc. `palette: 'neutral'`.
- **Paleta B — neutra con acento vibrante:** ámbar estilo jscamp (`#b45309` claro / `#fbbf24` oscuro).
  Actívala con `palette: 'vibrant'` en `src/data/site.ts`. Los tokens viven en
  `src/styles/global.css` (`:root` / `.dark` / `[data-palette='vibrant']`).

### Modo claro/oscuro

- Detección automática vía `prefers-color-scheme`.
- Toggle manual en el header, persistente en `localStorage` (`ThemeToggle.astro`).
- Script anti-flash en `BaseLayout.astro`.

## Estructura

```
public/            favicon, robots.txt
src/
  components/      Header, Hero, About, Projects, Experience, Stack, Contact, Footer…
  data/            site, profile, projects, experience (contenido editable)
  layouts/         BaseLayout (SEO + OG + tema)
  pages/           index.astro
  styles/          global.css (tokens + Tailwind v4)
```

## Checklist de lo implementado

- [x] Astro + TS + Tailwind v4, salida estática
- [x] ESLint + Prettier + scripts dev/build/preview/lint/format
- [x] Hero, Sobre mí, Proyectos, Experiencia, Stack, Contacto, Footer
- [x] Componentes reutilizables (`SectionHeading`, `ProjectCard`, `ThemeToggle`)
- [x] 2 paletas (neutral por defecto, vibrant configurable) + modo claro/oscuro persistente
- [x] Responsive mobile-first, nav sticky, skip-link, focos visibles, teclado
- [x] SEO: title/description, canonical, OpenGraph, Twitter card, favicon, robots, semántica
- [x] Contenido centralizado en `src/data/` con ejemplos en español
- [x] Transiciones discretas + `prefers-reduced-motion`
