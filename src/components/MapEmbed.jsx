import { CONSENT_ALL, setConsent, useConsent } from '../lib/consent'

const EMBED_SRC =
  'https://maps.google.com/maps?q=Ruimsig,+Roodepoort,+Gauteng,+South+Africa&output=embed&z=14'
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Dryf+Avenue%2C+Ruimsig%2C+Gauteng'

// Google's embed sets Google cookies as soon as it loads, so it stays a
// placeholder until the visitor has allowed third-party content.
export default function MapEmbed({ height = 440 }) {
  const { consent } = useConsent()

  if (consent === CONSENT_ALL) {
    return (
      <iframe
        title="Map of Principles Financial Consultants in Ruimsig, Gauteng"
        src={EMBED_SRC}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block', filter: 'grayscale(20%) contrast(1.05)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    )
  }

  return (
    <div
      style={{
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#EDE9E2',
        backgroundImage:
          'linear-gradient(rgba(14,34,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,34,51,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div style={{ maxWidth: 360, textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
        <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.25rem', color: '#0E2233', marginBottom: 8 }}>
          Map hidden for your privacy
        </p>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#555', marginBottom: 20 }}>
          Showing the map lets Google set cookies on your device.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setConsent(CONSENT_ALL)}
            className="cursor-pointer bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-gold hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Load map
          </button>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-navy/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:border-gold hover:text-gold-dark"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
