import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Strip the trailing slash from Vite's BASE_URL to get a router basepath
// ('/gaal-website/' → '/gaal-website', '/' → '').
const basepath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    basepath,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
