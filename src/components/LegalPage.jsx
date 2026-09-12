// Shared layout for the privacy and legal pages: the same navy page header as
// the rest of the site, then a readable single column of policy text.
export default function LegalPage({ eyebrow, title, updated, children }) {
  return (
    <>
      <section style={{ backgroundColor: '#0E2233', paddingTop: 72 }} className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B08D4F', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: '#B08D4F' }} />
              {eyebrow}
            </span>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: '#F7F4EF', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
              {title}
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(247,244,239,0.6)' }}>
              Last updated: {updated}
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F7F4EF' }} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="legal-prose max-w-3xl">{children}</div>
        </div>
      </section>
    </>
  )
}
