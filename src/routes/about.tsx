import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap py-24">
      <p className="eyebrow mb-5">About</p>
      <h1 className="display mb-6">
        gaal is the <span className="accent-word">Governed Agent Access Layer</span>.
      </h1>
      <p className="lead max-w-2xl">
        A single CLI to keep your local repositories, AI agent skills, and MCP
        server configurations in sync across every coding agent and every
        machine. Open source. AGPL-3.0.
      </p>
    </main>
  )
}
