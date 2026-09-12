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
  'flex-1 cursor-pointer px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:px-4 md:py-2.5 md:text-xs'

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
      className="fixed inset-x-3 bottom-3 z-[60] p-4 md:inset-x-4 md:bottom-4 md:right-auto md:max-w-sm md:p-6"
      style={{
        backgroundColor: '#0E2233',
        color: '#F7F4EF',
        border: '1px solid rgba(176,141,79,0.35)',
        boxShadow: '0 16px 40px rgba(8,21,32,0.35)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Kept short so on a phone it covers as little of the page as possible. */}
      <p className="hidden md:block" style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', marginBottom: 8 }}>
        Cookies &amp; your privacy
      </p>
      <p className="mb-3 md:mb-4" style={{ fontSize: '0.8rem', lineHeight: 1.55, color: 'rgba(247,244,239,0.78)' }}>
        We don't use tracking cookies. The Google map on our Contact page sets cookies, so it only
        loads if you allow it.{' '}
        <Link to="/privacy" className="text-gold-light underline underline-offset-2 hover:text-gold">
          Privacy policy
        </Link>
      </p>
      <div className="flex gap-2 md:gap-3">
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
