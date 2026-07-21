# Konnect-360 · Documentación de APIs

Sitio de documentación de las APIs de **Konnect-360**, construido con [Astro](https://astro.build/) y [Starlight](https://starlight.astro.build/). Las páginas de referencia de cada API se **generan automáticamente** a partir de esquemas OpenAPI 3.0 mediante el plugin [`starlight-openapi`](https://starlight-openapi.vercel.app/); las guías se escriben a mano en Markdown/MDX.

## Stack

| Capa | Herramienta |
|------|-------------|
| Framework | Astro `^5.6` |
| Docs / UI | Starlight `^0.34` + tema `starlight-theme-obsidian` |
| Generación de API | `starlight-openapi` `^0.19` (OpenAPI 3.0) |
| Imágenes | `sharp` |
| Deploy | GitHub Pages (GitHub Actions) + `gh-pages` (manual) |

## Arquitectura

El proyecto tiene dos fuentes de contenido que Starlight unifica en un solo sitio:

1. **Referencia de APIs (autogenerada).** Los esquemas OpenAPI viven en `schemas/`. En `astro.config.mjs`, el plugin `starlight-openapi` recibe una lista de esquemas y, por cada uno, genera un grupo de páginas bajo una ruta `base`. Esos grupos se inyectan al sidebar con `openAPISidebarGroups`.

2. **Guías (manuales).** Documentos en `src/content/docs/` (colección `docs` definida en `src/content.config.ts`). El sidebar de guías se declara explícitamente en `astro.config.mjs`.

```
Postman ──(export .json)──> postman2openapi ──> .yaml ──┐
                                                        ▼
                                              schemas/*.yaml
                                                        │
                          astro.config.mjs · starlight-openapi
                                                        ▼
                    páginas de referencia + openAPISidebarGroups
                                                        │
   src/content/docs/*  (guías) ──────────────> Starlight ──> sitio estático
                                                        │
                              GitHub Actions ──> GitHub Pages
```

### APIs documentadas

Definidas en `astro.config.mjs`, cada una con su ruta base:

| Ruta base | Esquema |
|-----------|---------|
| `/auth` | `schemas/api-autentication.yaml` |
| `/whatsapp-messages` | `schemas/api-whatsapp-messages.yaml` |
| `/whatsapp-template` | `schemas/api-whatsapp-template.yaml` |
| `/channel-chats` | `schemas/api-channels-chat.yaml` |

## Estructura

```
├── astro.config.mjs          # Config de Astro/Starlight + registro de esquemas OpenAPI
├── schemas/                  # Esquemas OpenAPI 3.0 (fuente de la referencia de APIs)
├── src/
│   ├── content/docs/         # Guías manuales (Markdown/MDX) + landing (index.mdx)
│   └── content.config.ts     # Colección de contenido de Starlight
├── public/                   # Assets estáticos (logos, favicon)
└── .github/workflows/        # Deploy automático a GitHub Pages
```

## Desarrollo local

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build de producción -> dist/
npm run preview    # previsualizar el build
```

## Agregar o actualizar una API

1. Exportá la colección de Postman a `.json`.
2. Convertila a `.yaml` con [postman2openapi](https://kevinswiber.github.io/postman2openapi/).
3. Guardá el archivo en `schemas/`.
4. Registralo en `astro.config.mjs` dentro del array de `starlightOpenAPI([...])` con su `base` y `schema`.
5. Reiniciá el servidor de desarrollo.

## Deploy

El sitio se publica en **GitHub Pages** automáticamente en cada `push` a `main` mediante el workflow `.github/workflows/deploy.yml` (usa `withastro/action`). También existe un deploy manual con `npm run deploy` (`gh-pages -d dist`).

## Referencias

- [Starlight OpenAPI](https://starlight-openapi.vercel.app/getting-started/)
- [Starlight](https://starlight.astro.build/getting-started/)
