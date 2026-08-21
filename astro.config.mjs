// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
    site: 'https://kriptonit-dev.github.io/',
    // trailingSlash: 'always',
  integrations: [
    mermaid({
          theme: 'forest',
          autoTheme: true
        }),
        starlight({
            favicon: '/favicon.jpg',
            logo: {
                alt: 'Konnect-360',
                replacesTitle: true,
                light: './src/assets/logo-light.png',
                dark: './src/assets/logo-dark.png',

            },
            title: 'Konnect-360',
            social: [
              { icon: 'external', label: 'Website', href: 'https://www.konnect-360.pe/', },
              { icon: 'github', label: 'GitHub', href: 'https://github.com/KriptonIT-DEV/kriptonit-dev.github.io', },
              { icon: 'facebook', label: 'GitHub', href: 'https://github.com/KriptonIT-DEV/kriptonit-dev.github.io', },
            ],
            sidebar: [

                {
                    label: 'Guía',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Empezamos', slug: 'guides/example' },
                        { label: 'Widget Chat Bot', slug: 'guides/widgetbot' },
                        { label: 'Widget Chat Cliente', slug: 'guides/widgetcustomer' },
                        { label: 'Versiones', slug: 'guides/changelog' }
                    ],
                },
                {
                    label: 'Autenticación',
                    items: [{ autogenerate: { directory: 'authentication' } }],
                },
                {
                    label: 'Mensajes WhatsApp',
                    items: [{ autogenerate: { directory: 'whatsapp-messages' } }],
                },
                {
                    label: 'Plantillas WhatsApp',
                    items: [{ autogenerate: { directory: 'whatsapp-template' } }],
                },
                {
                    label: 'PLantilla Email',
                    items: [{ autogenerate: { directory: 'channels-chat' } }],
                },
                {
                    label: 'Api Webhook',
                    items: [
                        { label: 'Configuración', slug: 'webhooks/configuracion' },
                        { label: 'Webhook Canal', slug: 'webhooks/webhook-canal' },
                        { label: 'Webhook App', slug: 'webhooks/webhook-app' },
                    ],
              },
            ],
        }),
    ],
});
