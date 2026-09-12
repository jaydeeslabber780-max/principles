import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CONSENT_ALL,
  CONSENT_ESSENTIAL,
  onOpenCookieSettings,
  setConsent,
  useConsent,
} from '../lib/consent'

const buttonBase =
  'flex-1 cursor-pointer px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

export default function CookieBanner() {
  const { consent, ready } = useConsent()
  const [reopened, setReopened] = useState(false)

  useEffect(() => onOpenCookieSettings(() => setReopened(true)), [])

  if (!ready || (consent && !reopened)) return null

  const choose = (value) => {
    setConsent(value)
    setReopened(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[60] md:right-auto md:max-w-sm"
      style={{
        backgroundColor: '#0E2233',
        color: '#F7F4EF',
        border: '1px solid rgba(176,141,79,0.35)',
        boxShadow: '0 16px 40px rgba(8,21,32,0.35)',
        padding: 24,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', marginBottom: 8 }}>
        Cookies &amp; your privacy
      </p>
      <p style={{ fontSize: '0.825rem', lineHeight: 1.65, color: 'rgba(247,244,239,0.78)', marginBottom: 16 }}>
        We don't use tracking or advertising cookies. The map on our Contact page is
        provided by Google, which sets its own cookies, so we only load it if you allow it.{' '}
        <Link to="/privacy" className="text-gold-light underline underline-offset-2 hover:text-gold">
          Privacy policy
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose(CONSENT_ESSENTIAL)}
          className={`${buttonBase} border border-paper/40 text-paper hover:border-gold hover:text-gold`}
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => choose(CONSENT_ALL)}
          className={`${buttonBase} bg-gold text-navy hover:bg-gold-light`}
        >
          Allow Google Maps
        </button>
      </div>
    </div>
  )
}
