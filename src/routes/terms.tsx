import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Use · gaal' },
      {
        name: 'description',
        content:
          'Terms of use for the gaal open-source CLI and the getgaal.com website. Provided as-is under AGPL-3.0, with no warranty.',
      },
    ],
  }),
  component: Terms,
})

const REPO = 'https://github.com/getgaal/gaal'

function Terms() {
  return (
    <main className="page-wrap py-24">
      <p className="eyebrow mb-5">Legal</p>
      <h1 className="display mb-6">Terms of Use</h1>
      <p className="lead max-w-2xl mb-10">
        gaal is a free, open-source tool for individual developers. These
        terms keep things simple and set clear expectations on both sides.
      </p>

      <section className="legal-prose max-w-3xl">
        <p className="text-sm text-[var(--fg-dim)]">Last updated: April 27, 2026</p>

        <h2>About these terms</h2>
        <p>
          These terms (“Terms”) govern your use of the gaal open-source command
          line interface (the “CLI”) and the website at <code>getgaal.com</code>{' '}
          (the “Site”), both operated by <strong>nlsio LLC</strong>, 1715
          Enclave Parkway, Apt. 306, Houston, TX 77077, United States (“we”,
          “us”, “our”). They cover the open-source individual version of gaal
          only. Any future hosted, team, or commercial offering will have its
          own terms.
        </p>

        <h2>Open-source license</h2>
        <p>
          The gaal CLI is distributed under the{' '}
          <a
            href={`${REPO}/blob/main/LICENSE`}
            target="_blank"
            rel="noreferrer"
          >
            GNU Affero General Public License v3.0 (AGPL-3.0)
          </a>
          . Your use, modification, and redistribution of the CLI source code
          are governed by that license. In case of conflict between the
          AGPL-3.0 and these Terms regarding the source code, the AGPL-3.0
          controls.
        </p>

        <h2>Use of the CLI</h2>
        <p>
          You may install and run the gaal CLI on machines you own or are
          authorized to use, for any lawful purpose. You are responsible for:
        </p>
        <ul>
          <li>The skills, MCP server configurations, and YAML files you author or sync</li>
          <li>The state of your local machine and repositories</li>
          <li>Backing up anything you cannot afford to lose before running sync or write operations</li>
          <li>Your compliance with the terms of any AI coding agent or third-party service that gaal interacts with on your behalf</li>
        </ul>

        <h2>No warranty</h2>
        <p>
          The CLI and the Site are provided <strong>“as is”</strong> and{' '}
          <strong>“as available”</strong>, without warranty of any kind,
          express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the CLI will be error-free,
          uninterrupted, or that it will produce any particular result.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, <strong>nlsio LLC</strong>{' '}
          and its contributors will not be liable for any damages, losses, or
          claims arising out of or relating to your use of the CLI or the
          Site, including without limitation:
        </p>
        <ul>
          <li>Damage to, loss of, or corruption of your skill configurations, MCP servers, YAML files, repositories, or any other data</li>
          <li>Damage to or instability of your machine, operating system, or environment</li>
          <li>Unintended changes made by an AI coding agent operating on configurations synced by gaal</li>
          <li>Loss of profits, time, or productivity, or any indirect, incidental, special, consequential, or punitive damages</li>
        </ul>
        <p>
          You use gaal at your own risk. Test changes in a safe environment
          before applying them to anything you depend on.
        </p>

        <h2>Reporting issues</h2>
        <p>
          We welcome bug reports and feedback. Please open an issue on the{' '}
          <a href={`${REPO}/issues`} target="_blank" rel="noreferrer">
            GitHub repository
          </a>
          . We do our best to respond, but we make no commitment to a
          particular response time or fix for the open-source individual
          version.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to use the CLI or the Site to violate any law, infringe
          anyone’s rights, or interfere with the operation of the Site or our
          telemetry endpoint (for example, by sending forged or abusive
          traffic).
        </p>

        <h2>Trademarks</h2>
        <p>
          “gaal” and the gaal logo are trademarks of nlsio LLC. The AGPL-3.0
          license grants rights to the source code, not to our trademarks.
          Please do not use the gaal name or logo in a way that suggests
          official endorsement of a fork or third-party product without our
          permission.
        </p>

        <h2>Privacy</h2>
        <p>
          Your use of the CLI and the Site is also subject to our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these Terms over time. The “Last updated” date above
          will reflect any change. Continued use of the CLI or the Site after
          a change constitutes acceptance of the updated Terms.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Texas, USA,
          without regard to its conflict-of-laws principles. To the extent any
          dispute is not resolved informally, it will be brought in the state
          or federal courts located in Harris County, Texas.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms? Email{' '}
          <a href="mailto:hello@getgaal.com">hello@getgaal.com</a>.
        </p>
      </section>
    </main>
  )
}
