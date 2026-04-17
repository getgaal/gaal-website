import { useState, type FormEvent } from 'react'

// Loops.co form endpoint. Replace with the real form ID before launch.
// Using the public form POST pattern (https://loops.so/docs/contacts/api-reference).
const LOOPS_FORM_URL = 'https://app.loops.so/api/newsletter-form/REPLACE_WITH_FORM_ID'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg(null)

    try {
      const body = new FormData()
      body.append('email', email)
      body.append('userGroup', 'gaal-community-edition')

      const res = await fetch(LOOPS_FORM_URL, { method: 'POST', body })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)

      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] px-5 py-4 text-sm">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-black">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        <span>
          <span className="font-semibold text-white">You're on the list.</span>{' '}
          <span className="text-[var(--fg-muted)]">
            We'll email you when Community Edition ships.
          </span>
        </span>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@dev.local"
        className="input flex-1"
        disabled={status === 'submitting'}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-pill primary justify-center disabled:opacity-60"
      >
        {status === 'submitting' ? 'Subscribing…' : 'Notify me'}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
      {status === 'error' && errorMsg ? (
        <p
          role="alert"
          className="sm:col-span-2 text-xs text-[var(--error)]"
        >
          {errorMsg} Please try again.
        </p>
      ) : null}
    </form>
  )
}
