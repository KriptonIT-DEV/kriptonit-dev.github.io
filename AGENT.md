# AGENT.md — Guía del Proyecto Konnect-360 APIs

> Documentación interna para agentes de IA y desarrolladores que trabajan en este proyecto.

---

## Resumen del Proyecto

**Konnect-360 APIs** es un sitio de documentación construido con [Astro](https://astro.build/) y [Starlight](https://starlight.astro.build/). Documenta las APIs de la plataforma Konnect-360, incluyendo autenticación, mensajería WhatsApp, plantillas y gestión de canales/chats.

**URL del sitio:** `https://kriptonit-dev.github.io/`

---

## Stack Tecnológico

| Capa | Herramienta | Versión |
|------|-------------|---------|
| Runtime | Node.js | ≥18 |
| Framework | Astro | `^5.6.1` |
| Theme/Docs | Starlight | `^0.34.4` |
| Theme custom | starlight-theme-obsidian | `^0.3.2` |
| Imágenes | sharp | `^0.32.5` |
| Deploy | gh-pages | `^6.3.0` |
| Package Manager | pnpm | (recomendado) |

> **Nota:** La documentación de APIs se genera manualmente en Markdown dentro de `src/content/docs/reference/`. Los esquemas OpenAPI en `schemas/` sirven como referencia pero no se procesan automáticamente.

---

## Estructura del Proyecto

```
konnectapis/
├── astro.config.mjs          # Configuración principal de Astro + Starlight
├── package.json              # Dependencias y scripts
├── tsconfig.json             # Configuración TypeScript (extiende astro/tsconfigs/strict)
├── pnpm-workspace.yaml       # Configuración de pnpm (controla builds de esbuild/sharp)
├── pnpm-lock.yaml            # Lock file de pnpm
│
├── schemas/                  # Esquemas OpenAPI 3.0 (referencia, no se procesan auto)
│   ├── api-autentication.yaml
│   ├── api-channels-chat.json
│   ├── api-channels-chat.yaml
│   ├── api-schema.yaml
│   ├── api-whatsapp-messages.yaml
│   └── api-whatsapp-template.yaml
│
├── src/
│   ├── content.config.ts     # Configuración de colecciones de contenido
│   └── content/
│       └── docs/             # Documentación (Markdown/MDX)
│           ├── index.mdx     # Landing page principal (template: splash)
│           ├── guides/       # Guías de uso
│           │   ├── example.md
│           │   ├── widgetbot.md
│           │   ├── widgetcustomer.md
│           │   └── changelog.md
│           ├── reference/    # Referencia de APIs (manuales)
│           │   ├── authentication.md
│           │   ├── whatsapp-messages.md
│           │   ├── whatsapp-template.md
│           │   ├── channels-chat.md
│           │   └── example.md
│           └── webhooks/     # Documentación de webhooks
│               ├── configuracion.md
│               ├── webhook-canal.md
│               └── webhook-app.md
│
├── public/                   # Assets estáticos (no procesados por Astro)
│   └── imgs/                 # Logos e imágenes
│
├── .github/
│   └── workflows/
│       └── deploy.yml        # Deploy automático a GitHub Pages
│
└── .atl/                     # Configuración de agentes/skills
    ├── skill-registry.md
    └── .skill-registry.cache.json
```

---

## Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo con hot reload
pnpm start        # Alias de dev
pnpm build        # Build de producción → dist/
pnpm preview      # Previsualizar el build de producción
pnpm astro        # CLI de Astro directamente
pnpm predeploy    # Ejecuta build antes de deploy
pnpm deploy       # Deploy manual a GitHub Pages via gh-pages
```

---

## Arquitectura de Contenido

El sitio tiene **documentación manuscrita** en Markdown/MDX. Los esquemas OpenAPI en `schemas/` sirven como referencia para escribir la documentación.

### Flujo de Documentación

```
schemas/*.yaml (referencia) → Escritura manual → src/content/docs/reference/*.md
                                                        ↓
                                              Starlight → sitio estático
```

### APIs Documentadas

| Sección | Archivo | Ruta Sidebar |
|---------|---------|--------------|
| Autenticación | `reference/authentication.md` | Autenticación |
| Mensajes WhatsApp | `reference/whatsapp-messages.md` | Mensajes WhatsApp |
| Plantillas WhatsApp | `reference/whatsapp-template.md` | Plantillas WhatsApp |
| Chats por Canal | `reference/channels-chat.md` | Chats por Canal |

---

## Configuración de Starlight (astro.config.mjs)

### Estructura Actual

```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'

export default defineConfig({
    site: 'https://kriptonit-dev.github.io/',
    integrations: [
        starlight({
            favicon: '/favicon.jpg',
            plugins: [starlightThemeObsidian()],
            logo: {
                alt: 'Konnect-360',
                replacesTitle: true,
                light: '/public/imgs/logo-light.png',
                dark: '/public/imgs/logo-dark.png',
            },
            title: 'Konnect-360',
            social: [
                { icon: 'external', label: 'Website', href: 'https://www.konnect-360.pe/' },
                { icon: 'github', label: 'GitHub', href: 'https://github.com/KriptonIT-DEV/kriptonit-dev.github.io' },
            ],
            sidebar: [
                {
                    label: 'Guía',
                    items: [
                        { label: 'Empezamos', slug: 'guides/example' },
                        { label: 'Widget Chat Bot', slug: 'guides/widgetbot' },
                        { label: 'Widget Chat Cliente', slug: 'guides/widgetcustomer' },
                        { label: 'Versiones', slug: 'guides/changelog' }
                    ],
                },
                {
                    label: 'Api Webhook',
                    items: [
                        { label: 'Configuración', slug: 'webhooks/configuracion' },
                        { label: 'Webhook Canal', slug: 'webhooks/webhook-canal' },
                        { label: 'Webhook App', slug: 'webhooks/webhook-app' },
                    ],
                },
                // APIs - autogenerate desde directorios
                { label: 'Autenticación', autogenerate: { directory: 'authentication' } },
                { label: 'Mensajes WhatsApp', autogenerate: { directory: 'whatsapp-messages' } },
                { label: 'Plantillas WhatsApp', autogenerate: { directory: 'whatsapp-template' } },
                { label: 'Chats por Canal', autogenerate: { directory: 'channels-chat' } },
            ],
        }),
    ],
})
```

### Plugins

| Plugin | Propósito |
|--------|-----------|
| `starlight-theme-obsidian` | Tema personalizado con estilos adicionales |

### Sidebar - Tipos de Entradas

```javascript
// Enlace interno (slug)
{ label: 'Empezamos', slug: 'guides/example' }

// Grupo con items
{ label: 'Guía', items: [/* ... */] }

// Autogenerate desde directorio
{ label: 'Autenticación', autogenerate: { directory: 'authentication' } }
```

---

## Colección de Contenido

Definida en `src/content.config.ts`:

```typescript
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { pageThemeObsidianSchema } from 'starlight-theme-obsidian/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: pageThemeObsidianSchema })
  }),
};
```

### Formatos Soportados

- **`.md`** — Markdown estándar
- **`.mdx`** — Markdown con soporte JSX (componentes de Astro/Starlight)

### Frontmatter Común

```yaml
---
title: Título de la Página
description: Descripción para SEO
template: splash  # Opcional: layout especial para landing pages
sidebar:
  label: Etiqueta personalizada
  order: 1        # Orden en el sidebar
  badge:
    text: Nuevo
    variant: tip
---
```

---

## Componentes Starlight Disponibles

```astro
---
import { Card, CardGrid } from '@astrojs/starlight/components';
import { Tabs, TabItem } from '@astrojs/starlight/components';
import { Steps } from '@astrojs/starlight/components';
import { FileTree } from '@astrojs/starlight/components';
import { LinkCard } from '@astrojs/starlight/components';
import { Aside } from '@astrojs/starlight/components';
---

<CardGrid stagger>
  <Card title="Título" icon="pencil">Contenido</Card>
</CardGrid>

<Steps>
  1. Paso uno
  2. Paso dos
</Steps>

<Aside type="tip">Consejo importante</Aside>
```

---

## Esquemas OpenAPI (Referencia)

Los esquemas en `schemas/` siguen el formato OpenAPI 3.0.3 y sirven como fuente de verdad para escribir la documentación manual.

### Esquemas Disponibles

| Archivo | Contenido |
|---------|-----------|
| `api-autentication.yaml` | OAuth 2.0 (token + verify) |
| `api-whatsapp-messages.yaml` | Envío de mensajes WhatsApp |
| `api-whatsapp-template.yaml` | Gestión de plantillas |
| `api-channels-chat.yaml` | Clientes, tickets, mensajes, medios |
| `api-channels-chat.json` | Versión Postman de chats |
| `api-schema.yaml` | Esquema combinado/maestro |

### Estructura Estándar

```yaml
openapi: 3.0.3
info:
  title: Nombre de la API
  description: Descripción
  version: 1.0.0
servers:
  - url: 'https://api.konnect-360.pe'
paths:
  /endpoint:
    get:
      summary: Resumen
      parameters: [...]
      responses:
        '200':
          content:
            application/json:
              schema: {...}
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
```

### Agregar Nueva Documentación API

1. Crear/escribir esquema en `schemas/` (opcional, como referencia)
2. Crear archivo `.md` en `src/content/docs/reference/`
3. Agregar entrada al sidebar en `astro.config.mjs`:
   ```javascript
   { label: 'Nueva API', autogenerate: { directory: 'nueva-api' } }
   ```
4. Reiniciar servidor de desarrollo

---

## Deploy

### Automático (GitHub Actions)

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`:
1. Instala dependencias con pnpm
2. Ejecuta `astro build`
3. Publica en GitHub Pages

### Manual

```bash
pnpm deploy  # Usa gh-pages para publicar dist/
```

---

## Guías de Desarrollo

### Agregar Nueva Página de Documentación

1. Crear archivo `.md` o `.mdx` en `src/content/docs/`
2. Agregar frontmatter con `title` y `description`
3. Si es una guía, agregar al sidebar en `astro.config.mjs`
4. Si es referencia API, crear en `reference/` y agregar al sidebar

### Agregar Sección API al Sidebar

```javascript
// En astro.config.mjs → sidebar
{
    label: 'Nombre de la API',
    autogenerate: { directory: 'nombre-directorio' }
}
```

### Modificar Estilos

- CSS personalizado: `<style>` en componentes `.astro`
- Tema: Configurar `starlight-theme-obsidian` en plugins

---

## Comandos Útiles

```bash
# Desarrollo
pnpm dev                           # Iniciar servidor de desarrollo

# Build
pnpm build                         # Build de producción
pnpm preview                       # Previsualizar build

# Deploy
pnpm deploy                        # Deploy manual a GitHub Pages

# Astro CLI
pnpm astro add [integration]       # Agregar integración
pnpm astro check                   # Verificar tipos
pnpm astro sync                    # Sincronizar colecciones
```

---

## Solución de Problemas

### Errores Comunes

| Problema | Solución |
|----------|----------|
| `Module not found` | Ejecutar `pnpm install` |
| Build falla | Ejecutar `pnpm astro check` para ver errores |
| Deploy no funciona | Verificar permisos del workflow de GitHub |
| Página no aparece en sidebar | Verificar slug en `astro.config.mjs` |

### Hot Reload No Funciona

1. Verificar que no hay errores en consola
2. Reiniciar servidor: `pnpm dev`
3. Limpiar caché: `rm -rf .astro`

---

## pnpm-workspace.yaml

Controla qué paquetes pueden ejecutar scripts de instalación:

```yaml
allowBuilds:
  esbuild: false
  sharp: false
```

> **Importante:** `sharp` requiere scripts de instalación nativos. Si hay problemas, ejecutar `pnpm install` con `--config.allow-builds=true`.

---

## Referencias

- [Astro Docs](https://docs.astro.build/)
- [Starlight Docs](https://starlight.astro.build/)
- [Starlight Sidebar](https://starlight.astro.build/guides/sidebar/)
- [OpenAPI 3.0 Specification](https://swagger.io/specification/)

---

*Última actualización: Julio 2026*
