# Konnect-360 · Documentación de APIs

Sitio de documentación de las APIs de **Konnect-360**, construido con [Astro](https://astro.build/) y [Starlight](https://starlight.astro.build/). Las guías y la referencia de APIs se escriben a mano en **MDX**.

## Stack

| Capa | Herramienta |
|------|-------------|
| Framework | Astro `^7.2` |
| Docs / UI | Starlight `^0.41` |
| Gestor de paquetes | pnpm |
| Deploy | GitHub Pages (GitHub Actions) + `gh-pages` (manual) |

## Arquitectura

El contenido vive enteramente en `src/content/docs/`, organizado por secciones. Cada sección es una carpeta con `index.mdx` (landing) y subpáginas por endpoint.

```
src/content/docs/
├── authentication/       # POST /oauth/token · GET /token-verify
├── whatsapp-messages/    # PUT /messages · PUT /messages-files
├── whatsapp-template/    # GET /templates · GET /template · GET /template-params · POST /send-template
├── channels-chat/        # GET /customer · GET /tickets · PUT /messages · GET /medias
├── guides/               # Guías de integración (widgets, changelog)
├── webhooks/             # Webhooks (configuración, canal, app)
└── index.mdx             # Landing page
```

Cada subpágina de API documenta un endpoint con: endpoint, headers, parámetros, ejemplos en Tabs (cURL / JavaScript), respuesta exitosa, campos y errores.

## Estructura

```
├── astro.config.mjs          # Config de Astro/Starlight
├── src/
│   ├── assets/               # Imágenes (logo, banner)
│   ├── content/
│   │   ├── docs/             # Documentación completa (MDX/MD)
│   │   └── config.ts         # Colección de contenido de Starlight
├── public/                   # Assets estáticos (favicon)
└── .github/workflows/        # Deploy automático a GitHub Pages
```

## Desarrollo local

```bash
pnpm install
pnpm dev         # servidor de desarrollo
pnpm build       # build de producción -> dist/
pnpm preview     # previsualizar el build
```

## Agregar o actualizar una API

1. Creá una carpeta en `src/content/docs/` con el nombre de la sección.
2. Escribí `index.mdx` con la visión general.
3. Agregá un archivo `.mdx` por cada endpoint.
4. El sidebar se autogenera desde la estructura de carpetas (ver `autogenerate` en `astro.config.mjs`).

## Deploy

El sitio se publica en **GitHub Pages** automáticamente en cada `push` a `main` mediante el workflow `.github/workflows/deploy.yml`. También existe deploy manual con `pnpm deploy` (`gh-pages -d dist`).

## Componentes usados

| Componente | Uso |
|---|---|
| `Tabs` / `TabItem` | Ejemplos multi-lenguaje (cURL / JavaScript) |
| `Card` / `CardGrid` | Landing page |
| `Aside` | Tips y advertencias |

## Referencias

- [Starlight](https://starlight.astro.build/getting-started/)
- [Starlight Components](https://starlight.astro.build/components/using-components/)
