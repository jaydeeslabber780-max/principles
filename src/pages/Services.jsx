import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Card3D from '../components/Card3D'
import Button from '../components/Button'
import CtaBand from '../components/CtaBand'

function useScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [hash])
}

const services = [
  {
    id: 'group-retirement',
    num: '01',
    title: 'Group Retirement Fund Consulting',
    tagline: 'Securing the financial future of South African employees.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#B08D4F" strokeWidth="1.2" />
        <path d="M11 24V16l7-6 7 6v8M15 24v-5h6v5" stroke="#B08D4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    body: [
      'We provide end-to-end consulting services for defined contribution (DC) retirement funds, from inception through to ongoing management and governance support.',
      'Our services include fund re-broking and tendering processes, benefit design and realignment, structuring legacy arrangements, and setting up new retirement funds from the ground up.',
      'We advise trustee boards on their fiduciary duties, investment strategy, asset-liability matching, and member communication — ensuring the fund operates within the governance framework set out by the Pension Funds Act and National Treasury.',
    ],
    highlights: ['DC plan management & governance', 'Re-broking and fund tendering', 'Benefit realignment & restructuring', 'Legacy arrangement structuring', 'New fund establishment', 'Trustee fiduciary advisory'],
  },
  {
    id: 'group-risk',
    num: '02',
    title: 'Group Risk Benefit Consulting',
    tagline: 'Protecting employees when it matters most.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L6 9v9c0 7 5.5 13 12 14 6.5-1 12-7 12-14V9L18 4z" stroke="#B08D4F" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M13 18l3.5 3.5L24 14" stroke="#B08D4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    body: [
      'Group risk benefits — life insurance, disability cover, funeral benefits and critical illness — are among the most complex and high-stakes decisions an employer or trustee body makes.',
      'We perform detailed claims-data analysis to identify trends, ensure benefits are priced correctly, and negotiate competitive terms during risk broking and renewal cycles.',
      'Our benefit design service aligns cover levels with the genuine needs of your workforce, while our RFP (request for proposals) process ensures you always achieve fair value from insurers.',
    ],
    highlights: ['Life & disability benefit design', 'Claims-data analysis', 'Risk broking & renewals', 'Benefit adequacy reviews', 'RFP management', 'Insurer negotiations'],
  },
  {
    id: 'healthcare',
    num: '03',
    title: 'Healthcare Consulting',
    tagline: 'Quality healthcare access for every employee.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="4" stroke="#B08D4F" strokeWidth="1.2" />
        <path d="M18 12v12M12 18h12" stroke="#B08D4F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    body: [
      "Navigating South Africa's medical-scheme landscape requires specialist knowledge — of scheme rules, contribution structures, option designs and the regulatory framework of the Council for Medical Schemes.",
      'We assist employer groups in selecting and setting up appropriate medical schemes, advising on the right option selection for different employee segments, and running ongoing member education sessions.',
      "Our goal is to ensure that every employee has access to quality healthcare that suits their family's needs and budget — and that employers understand and manage their obligations under the Medical Schemes Act.",
    ],
    highlights: ['Medical-scheme selection & setup', 'Option advisory for employees', 'Contribution modelling', 'Member education programmes', 'CMS compliance guidance', 'Annual scheme reviews'],
  },
  {
    id: 'business-insurance',
    num: '04',
    title: 'Business Insurance Consulting',
    tagline: 'Comprehensive cover for your commercial assets and liabilities.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="10" width="24" height="18" rx="2" stroke="#B08D4F" strokeWidth="1.2" />
        <path d="M12 10V8a6 6 0 0112 0v2" stroke="#B08D4F" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="18" cy="19" r="2.5" stroke="#B08D4F" strokeWidth="1.2" />
      </svg>
    ),
    body: [
      'Business insurance is not a once-off exercise — it requires regular review as your assets, liabilities and risk profile evolve. We provide independent advice across all commercial insurance lines.',
      'Our coverage includes assets and property, commercial liability, professional indemnity, public liability, cybercrime and data-breach cover, business interruption insurance, and fidelity guarantee (employee dishonesty) cover.',
      'As independent brokers, we access the full market to ensure you pay the right premium for the right protection — with no conflicts of interest.',
    ],
    highlights: ['Commercial asset cover', 'Professional indemnity', 'Public & product liability', 'Cybercrime insurance', 'Business interruption', 'Fidelity guarantee'],
  },
  {
    id: 'household-motor',
    num: '05',
    title: 'Household & Motor Insurance',
    tagline: 'Personal cover, handled personally.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 20l3-8h18l3 8" stroke="#B08D4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="20" width="28" height="8" rx="2" stroke="#B08D4F" strokeWidth="1.2" />
        <circle cx="11" cy="28" r="2.5" stroke="#B08D4F" strokeWidth="1.2" />
        <circle cx="25" cy="28" r="2.5" stroke="#B08D4F" strokeWidth="1.2" />
      </svg>
    ),
    body: [
      'Your home and vehicles represent some of your most significant assets. Personal insurance should protect them fully — without unexpected gaps at claim time.',
      'We advise on building and contents insurance, all-risks cover for portable possessions, comprehensive and third-party vehicle insurance, and personal liability protection.',
      "We shop the market on your behalf, compare terms across leading short-term insurers, and ensure your replacement values are correctly specified — so you're never underinsured when you need it most.",
    ],
    highlights: ['Building & contents insurance', 'All-risks cover', 'Vehicle insurance (all classes)', 'Personal liability', 'Specified asset cover', 'Annual policy reviews'],
  },
  {
    id: 'personal-financial',
    num: '06',
    title: 'Personal Financial Planning',
    tagline: 'Your financial future, mapped with precision.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 28L14 18l6 4 10-14" stroke="#B08D4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="18" r="2" fill="#B08D4F" />
        <circle cx="20" cy="22" r="2" fill="#B08D4F" />
      </svg>
    ),
    body: [
      'A robust financial plan is more than a savings target — it is a living document that integrates your income, expenditure, risk profile, investment objectives and retirement timeline into a coherent strategy.',
      'We build tailored financial plans using a thorough discovery process: understanding your goals, stress-testing assumptions, and modelling multiple scenarios to identify the most resilient path.',
      'Our plans cover cash-flow management, debt reduction, emergency fund structuring, investment portfolio construction, tax efficiency, and retirement income planning — reviewed and updated as your circumstances evolve.',
    ],
    highlights: ['Cash-flow & debt planning', 'Investment portfolio design', 'Retirement income modelling', 'Tax-efficient structuring', 'Emergency fund strategy', 'Ongoing plan reviews'],
  },
  {
    id: 'wills-trusts',
    num: '07',
    title: 'Wills & Trusts',
    tagline: 'Protecting your legacy and your loved ones.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="4" width="20" height="28" rx="2" stroke="#B08D4F" strokeWidth="1.2" />
        <path d="M13 12h10M13 17h10M13 22h6" stroke="#B08D4F" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    body: [
      'A valid, up-to-date will is one of the most important documents you will ever sign. Without it, your estate is distributed according to the Intestate Succession Act — often not reflecting your wishes.',
      'Our estate planning service includes will drafting and review, the establishment of inter vivos (living) trusts and testamentary trusts, and ongoing fiduciary advisory to ensure your estate plan remains current.',
      'We work with you to minimise estate duty, protect assets from creditors, provide for minor children, and ensure a seamless transition of wealth across generations.',
    ],
    highlights: ['Will drafting & review', 'Inter vivos trust setup', 'Testamentary trust planning', 'Estate duty minimisation', 'Fiduciary advisory', 'Executor services'],
  },
]

export default function Services() {
  useScrollToHash()

  return (
    <>
      <Helmet>
        <title>Services — Principles Financial Consultants</title>
        <meta name="description" content="Seven financial advisory services: Group Retirement, Group Risk, Healthcare, Business Insurance, Household & Motor, Personal Financial Planning, and Wills & Trusts." />
        <link rel="canonical" href="https://principlesfc-sa.co.za/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Principles Financial Consultants" />
        <meta property="og:title" content="Services — Principles Financial Consultants" />
        <meta property="og:description" content="Seven financial advisory services: Group Retirement, Group Risk, Healthcare, Business Insurance, Household & Motor, Personal Financial Planning, and Wills & Trusts." />
        <meta property="og:url" content="https://principlesfc-sa.co.za/services" />
        <meta property="og:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services — Principles Financial Consultants" />
        <meta name="twitter:description" content="Seven financial advisory services, from group retirement to wills & trusts." />
        <meta name="twitter:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
      </Helmet>

      {/* Page header */}
      <section style={{ backgroundColor: '#0E2233', paddingTop: 72 }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B08D4F', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: '#B08D4F' }} />
              What we do
            </span>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#F7F4EF', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
              Seven disciplines. One trusted partner.
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', color: 'rgba(247,244,239,0.65)', lineHeight: 1.75 }}>
              From retirement fund governance to personal estate planning, we cover the full spectrum of financial wellbeing for individuals, employer groups and trustee bodies.
            </p>
          </motion.div>

          {/* Quick nav */}
          <div className="mt-12 flex flex-wrap gap-3">
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 500,
                  padding: '8px 16px',
                  border: '1px solid rgba(176,141,79,0.3)',
                  color: 'rgba(247,244,239,0.7)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                  borderRadius: 2,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#B08D4F'; e.currentTarget.style.color = '#B08D4F' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(176,141,79,0.3)'; e.currentTarget.style.color = 'rgba(247,244,239,0.7)' }}
              >
                {s.num} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={s.id}
            id={s.id}
            style={{ backgroundColor: isEven ? '#F7F4EF' : '#EDE9E2', scrollMarginTop: 80 }}
            className="py-20 md:py-28"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-start gap-4">
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: '3.5rem', fontWeight: 300, color: '#B08D4F', opacity: 0.25, lineHeight: 1, marginTop: -8 }}>{s.num}</span>
                    <div>
                      <div style={{ marginBottom: 4 }}>{s.icon}</div>
                    </div>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#0E2233', lineHeight: 1.15, letterSpacing: '-0.015em', marginBottom: 8 }}>
                      {s.title}
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#B08D4F', fontWeight: 500 }}>{s.tagline}</p>
                  </div>
                  {s.body.map((para, pi) => (
                    <p key={pi} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9625rem', color: '#6B6B6B', lineHeight: 1.8 }}>{para}</p>
                  ))}
                  <Button to="/contact" variant="primary">
                    Enquire about this service
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </motion.div>

                {/* Highlights card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card3D
                    style={{ backgroundColor: '#0E2233', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}
                  >
                    {/* bg pattern */}
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(176,141,79,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, width: 3, height: 60, background: '#B08D4F' }} />

                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 24 }}>
                      What's included
                    </p>
                    <div className="flex flex-col gap-4">
                      {s.highlights.map((h, hi) => (
                        <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#B08D4F', marginTop: 7, flexShrink: 0 }} />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(247,244,239,0.8)', lineHeight: 1.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(176,141,79,0.15)' }}>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(247,244,239,0.45)', lineHeight: 1.6 }}>
                        All engagements are conducted under FSP 19721 — FSCA accredited and FAIS compliant.
                      </p>
                    </div>
                  </Card3D>
                </motion.div>

              </div>
            </div>
          </section>
        )
      })}

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Talk to us. We'll find the right fit."
        subtitle="Our advisors will listen first and recommend only what genuinely serves you."
        ctaLabel="Book a consultation"
      />
    </>
  )
}
