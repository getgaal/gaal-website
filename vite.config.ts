import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// Project Pages live under /<repo>/. Override with BASE_PATH=/ for a custom domain.
const base = process.env.BASE_PATH ?? '/'

const SITE_URL = process.env.SITE_URL ?? 'https://getgaal.com'

const routes = ['/', '/privacy', '/terms']

const config = defineConfig({
  base,
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      pages: routes.map((path) => ({ path })),
      prerender: { enabled: true, crawlLinks: true },
      spa: { enabled: true },
    }),
    viteReact(),
    Sitemap({
      hostname: SITE_URL,
      dynamicRoutes: routes,
      changefreq: { '/': 'weekly', '*': 'yearly' },
      priority: { '/': 1.0, '*': 0.3 },
      lastmod: new Date(),
      readable: true,
      // TanStack Start emits the static client to dist/client, not dist.
      outDir: 'dist/client',
      // We maintain robots.txt by hand in public/, so don't let the plugin
      // overwrite it.
      generateRobotsTxt: false,
    }),
  ],
})

export default config
