import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'nextui-admin',
      defaultLocale: 'root', // optional
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
      },
      social: {
        github: 'https://github.com/Enalmada/nextui-admin',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Getting Started',
              link: '/guides/getting-started/',
            },
            {
              label: 'Layout',
              link: '/guides/layout/',
            },
            {
              label: 'Table',
              link: '/guides/table/',
            },
          ],
        },
        {
          label: 'Technologies',
          items: [
            {
              label: 'Summary',
              link: '/technologies/summary/',
            },
          ],
        },
      ],
      customCss: ['./src/assets/landing.css', './src/tailwind.css'],
    }),
    react(),
    // applyBaseStyles causes lists to not work anymore
    tailwind({
      applyBaseStyles: false,
    }),
    prefetch(),
  ],
});
