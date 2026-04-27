import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy · gaal' },
      {
        name: 'description',
        content:
          'How gaal handles data: opt-in usage telemetry only, self-hosted on a privacy-respecting European provider. No skill content, no code, no machine data.',
      },
    ],
  }),
  component: Privacy,
})

const REPO = 'https://github.com/getgaal/gaal'

function Privacy() {
  return (
    <main className="page-wrap py-24">
      <p className="eyebrow mb-5">Legal</p>
      <h1 className="display mb-6">Privacy Policy</h1>
      <p className="lead max-w-2xl mb-10">
        gaal is built privacy-first. We collect the minimum needed to know the
        project is alive and useful, and nothing more.
      </p>

      <section className="legal-prose max-w-3xl">
        <p className="text-sm text-[var(--fg-dim)]">Last updated: April 27, 2026</p>

        <h2>Who we are</h2>
        <p>
          The gaal CLI and this website are operated by <strong>nlsio LLC</strong>,
          1715 Enclave Parkway, Apt. 306, Houston, TX 77077, United States.
          You can reach us at{' '}
          <a href="mailto:hello@getgaal.com">hello@getgaal.com</a>.
        </p>

        <h2>Scope of this policy</h2>
        <p>
          This policy covers the gaal open-source CLI for individual use and the
          marketing website at <code>getgaal.com</code>. It does not cover any
          third-party AI coding agent, MCP server, or repository host that you
          choose to use alongside gaal — those services are governed by their
          own privacy policies.
        </p>

        <h2>What we collect</h2>
        <p>
          gaal ships with <strong>opt-in</strong> usage telemetry. Telemetry is
          off by default. When you turn it on, the CLI records anonymous usage
          events — for example, that a command was run — so we can understand
          how the tool is used and prioritize what to build next.
        </p>
        <p>
          Telemetry is collected through a self-hosted instance of{' '}
          <a href="https://plausible.io/open-source" target="_blank" rel="noreferrer">
            Plausible Analytics
          </a>
          , the open-source, cookie-free, GDPR-friendly analytics tool. Our
          Plausible instance runs on infrastructure provided by{' '}
          <strong>SNR</strong>, a hosting provider located in Germany. Data
          stays on European servers.
        </p>

        <h2>What we do not collect</h2>
        <p>We deliberately do not collect, transmit, or store:</p>
        <ul>
          <li>The contents of your skills, MCP server configs, or any YAML you give to gaal</li>
          <li>Your source code, repository contents, or file paths</li>
          <li>Identifiers about your machine (hostname, username, MAC address, IP-derived location beyond coarse country, etc.)</li>
          <li>Prompts, completions, or any data exchanged with AI coding agents</li>
          <li>Personal information of any kind</li>
        </ul>
        <p>
          Plausible Analytics by design does not use cookies and does not build
          a cross-site profile of you.
        </p>

        <h2>Website analytics</h2>
        <p>
          The same self-hosted Plausible instance powers analytics on{' '}
          <code>getgaal.com</code>. Page views are recorded anonymously, with
          no cookies and no personal identifiers.
        </p>

        <h2>Opting in and opting out</h2>
        <p>
          CLI telemetry is opt-in. You can disable it at any time by following
          the instructions in the gaal documentation, and any future events
          will simply not be sent. We do not retain a way to identify you, so
          there is no per-user record to delete.
        </p>

        <h2>Data sharing</h2>
        <p>
          We do not sell, rent, or share telemetry data with third parties.
          Aggregated, anonymous statistics may occasionally appear in blog
          posts or release notes (for example, “command X is the most used”).
        </p>

        <h2>Security</h2>
        <p>
          The telemetry endpoint is served over HTTPS. Because we never collect
          identifying data, the blast radius of any incident is limited to
          coarse, anonymous usage counters.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as gaal evolves. Material changes will be
          announced in the repository’s release notes, and the “Last updated”
          date above will be revised.
        </p>

        <h2>Contact</h2>
        <p>
          Questions or concerns? Email{' '}
          <a href="mailto:hello@getgaal.com">hello@getgaal.com</a> or open an
          issue on{' '}
          <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </section>
    </main>
  )
}
