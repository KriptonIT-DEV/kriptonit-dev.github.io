// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import lucode from 'lucode-starlight';

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
          customCss: ['./src/styles/global.css'],
          lastUpdated: true,

            plugins: [
              lucode({
                docs: {
                  includeAiUtilities: true,
                },
                    navLinks: [
                        { label: 'Docs', link: '/guides/example/' },
                        { label: 'API', link: '/authentication/' },
                        { label: 'Website', link: 'https://www.konnect-360.com/' },
                    ],
                    footerText:
                        '© Konnect-360',
                }),
            ],
            logo: {
                alt: 'Konnect-360',
                replacesTitle: true,
                light: './src/assets/logo-kripton.jpg',
                dark: './src/assets/logo-kripton.jpg',

            },
            title: 'Konnect-360',
            social: [
              { icon: 'external', label: 'Website', href: 'https://www.konnect-360.com/', },
              { icon: 'github', label: 'GitHub', href: 'https://github.com/KriptonIT-DEV/kriptonit-dev.github.io', },
              { icon: 'facebook', label: 'GitHub', href: 'https://www.facebook.com/konnect36', },
            ],
            sidebar: [

                {
                    label: 'Guía',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Empezamos', slug: 'guides/example' },
                        { label: 'Convenciones de la API', slug: 'guides/convenciones' },
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
                    label: 'Email',
                    items: [
                        { label: 'Introducción', slug: 'email-templates' },
                        { label: 'Envío Directo', slug: 'email-templates/enviar-directo' },
                        { label: 'Listar Plantillas', slug: 'email-templates/listar' },
                        { label: 'Parámetros', slug: 'email-templates/parametros' },
                        { label: 'Enviar Plantilla', slug: 'email-templates/enviar-plantilla' },
                        { label: 'Envíos por Lote', slug: 'email-templates/lotes' },
                    ],
                },
                {
                    label: 'Canales de Chat',
                    items: [{ autogenerate: { directory: 'channels-chat' } }],
                },
                {
                    label: 'Flow Chat',
                    badge: { text: 'Experimental', variant: 'caution' },
                    items: [
                        { label: 'Introducción', slug: 'flow-chat' },
                        { label: 'Info del Flujo', slug: 'flow-chat/info' },
                        { label: 'Abrir Conversación', slug: 'flow-chat/abrir-conversacion' },
                        { label: 'Enviar Mensajes', slug: 'flow-chat/mensajes' },
                        { label: 'Stream de la Conversación', slug: 'flow-chat/stream' },
                        { label: 'Cerrar Conversación', slug: 'flow-chat/cerrar-conversacion' },
                        { label: 'Adjuntos', slug: 'flow-chat/adjuntos' },
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
            ],
        }),
    ],
});
