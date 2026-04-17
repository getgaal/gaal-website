import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

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
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
      { rel: 'apple-touch-icon', href: '/favicon.svg?v=2' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
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
