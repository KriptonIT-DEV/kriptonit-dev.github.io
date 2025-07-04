// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import starlightThemeObsidian from 'starlight-theme-obsidian'


// https://astro.build/config
export default defineConfig({
    site: 'https://kriptonit-dev.github.io',
    base: '/konnectapis',
    integrations: [
        starlight({
            favicon: '/favicon.jpg',
            plugins: [
                // Generate the OpenAPI documentation pages.
                starlightOpenAPI([
                    {
                        base: 'auth',
                        collapsed: false,
                        schema: './schemas/api-autentication.yaml',
                    },
                    {
                        base: 'whatsapp-messages',
                        collapsed: false,
                        schema: './schemas/api-whatsapp-messages.yaml',
                    },
                    {
                        base: 'whatsapp-template',
                        collapsed: false,
                        schema: './schemas/api-whatsapp-template.yaml',
                    }
                ]),
                starlightThemeObsidian()
            ],
            logo: {
                alt: 'Konnect-360',
                replacesTitle: true,
                light: '/public/imgs/logo-light.png',
                dark: '/public/imgs/logo-dark.png',
                
            },
            title: 'Konnect-360',
            social: [
                { icon: 'external', label: 'Website', href: 'https://www.konnect-360.pe/', },
            ],
            sidebar: [

                {
                    label: 'Guía',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Empezamos', slug: 'guides/example' },
                        { label: 'Versiones', slug: 'guides/changelog' }
                    ],
                },
                // Add the generated sidebar group to the sidebar.
                ...openAPISidebarGroups,
                // {
                //     label: 'Reference',
                //     autogenerate: { directory: 'reference' },
                // },
            ],
        }),
    ],
});
