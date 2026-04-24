import { useEffect } from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

const BASE = import.meta.env.BASE_URL ?? '/'
const favicon = `${BASE}favicon.svg?v=2`

// Inline script injected before hydration so the resolved theme is applied
// before the first paint — avoids a flash of the wrong palette for users
// whose stored preference (or OS preference) doesn't match the SSR default.
const THEME_BOOT = `(()=>{try{var s=localStorage.getItem('gaal-theme');var p=s==='light'||s==='dark'||s==='system'?s:'system';var r=p==='system'?(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):p;var h=document.documentElement;h.setAttribute('data-theme',r);h.dataset.themePref=p;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'gaal · one YAML, every coding agent, every machine' },
      {
        name: 'description',
        content:
          'gaal is an open-source CLI that keeps your AI coding agent skills, MCP servers, and repositories in sync across Claude Code, Cursor, Codex, and 14 other agents, from a single YAML file.',
      },
      { property: 'og:title', content: 'gaal · one YAML, every coding agent, every machine' },
      {
        property: 'og:description',
        content:
          'Open-source CLI for solo developers. Sync AI agent skills, MCPs, and repos across 17 coding agents from one YAML.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#000000' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: favicon },
      { rel: 'apple-touch-icon', href: favicon },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('@plausible-analytics/tracker/plausible.js').then(({ init }) => {
      init({
        domain: 'getgaal.com',
        endpoint: 'https://usage.getgaal.com/api/event',
      })
    })
  }, [])

  return (
    <html lang="en" data-theme="dark">
      <head>
        <HeadContent />
        {/* Inline pre-hydration theme boot. eslint-disable-next-line react/no-danger */}
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body className="font-sans antialiased">
        <div id="app">
          <Header />
          {children}
          <Footer />
        </div>
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
