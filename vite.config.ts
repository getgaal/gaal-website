import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Project Pages live under /<repo>/. Override with BASE_PATH=/ for a custom domain.
const base = process.env.BASE_PATH ?? '/'

const config = defineConfig({
  base,
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      pages: [{ path: '/' }, { path: '/about' }],
      prerender: { enabled: true, crawlLinks: true },
      spa: { enabled: true },
    }),
    viteReact(),
  ],
})

export default config
