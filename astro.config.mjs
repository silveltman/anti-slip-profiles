import { defineConfig } from 'astro/config';

// Astro plugins
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// Third party astro plugins
import robotsTxt from 'astro-robots-txt';

// Vite plugins
import yaml from '@rollup/plugin-yaml';

// Global site config
import site from './src/data/site';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [tailwind(), svelte(), sitemap(), prefetch(), robotsTxt(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  vite: {
    plugins: [yaml()]
  }
});