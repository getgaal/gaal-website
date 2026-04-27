// Emit sitemap.xml into the static build output. Runs after `vite build`,
// so the file lands next to index.html in dist/client.
//
// Override the public origin with SITE_URL when previewing on a non-prod host.
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'dist', 'client')

const SITE_URL = (process.env.SITE_URL ?? 'https://getgaal.com').replace(/\/$/, '')

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
]

const today = new Date().toISOString().slice(0, 10)

const urls = pages
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true })
}

const target = join(OUT_DIR, 'sitemap.xml')
writeFileSync(target, xml)
console.log(`[sitemap] wrote ${pages.length} URLs to ${target}`)
