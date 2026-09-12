import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero3D from '../components/Hero3D'
import StatStrip from '../components/StatCounter'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import CtaBand from '../components/CtaBand'
import teamOfficePhoto from '../assets/team-office.jpg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const homeServices = [
  { num: '01', title: 'Group Retirement Fund Consulting', anchor: 'group-retirement', blurb: 'DC plan management, re-broking, benefit realignment and legacy arrangements for retirement funds of all sizes.' },
  { num: '02', title: 'Group Risk Benefit Consulting', anchor: 'group-risk', blurb: 'Life & disability benefits, claims-data analysis, risk broking, benefit design and RFP management.' },
  { num: '03', title: 'Healthcare Consulting', anchor: 'healthcare', blurb: 'Medical-scheme selection, setup, option advisory and ongoing member education programmes.' },
  { num: '04', title: 'Business Insurance Consulting', anchor: 'business-insurance', blurb: 'Assets, liability, professional indemnity, cybercrime cover, business interruption and fidelity guarantee.' },
  { num: '05', title: 'Household & Motor Insurance', anchor: 'household-motor', blurb: 'Building, contents, all-risks, vehicle and personal liability cover tailored to your household.' },
  { num: '06', title: 'Personal Financial Planning', anchor: 'personal-financial', blurb: 'Tailored financial plans built around your life goals, risk profile and retirement timeline.' },
  { num: '07', title: 'Wills & Trusts', anchor: 'wills-trusts', blurb: 'Will drafting, estate planning and fiduciary services to protect your legacy.' },
]

const whyPoints = [
  { title: 'Independent Advice', body: 'We are not tied to any single product provider. Every recommendation is driven by your best interests, not commission structures.' },
  { title: 'Deep Regulatory Expertise', body: "FSCA accredited FSP 19721. FAIS compliant. We stay ahead of South Africa's evolving financial legislation so you don't have to." },
  { title: 'Multilingual Access', body: "Our team can advise members across 8 of South Africa's 11 official languages — ensuring no employee is left behind." },
  { title: 'Trustee Development', body: "Herme Slabber developed course content for the FSCA's Professional Trusteeship programme, bringing that institutional knowledge directly to your board." },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Principles Financial Consultants — Empowering South Africans to Retire Secure</title>
        <meta name="description" content="Independent employee-benefits and financial advisory firm based in Ruimsig, Gauteng. FSP 19721. 45+ years of combined experience consulting to 40+ retirement funds." />
        <link rel="canonical" href="https://principlesfc-sa.co.za/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Principles Financial Consultants" />
        <meta property="og:title" content="Principles Financial Consultants — Empowering South Africans to Retire Secure" />
        <meta property="og:description" content="Independent employee-benefits and financial advisory firm based in Ruimsig, Gauteng. FSP 19721. 45+ years of combined experience consulting to 40+ retirement funds." />
        <meta property="og:url" content="https://principlesfc-sa.co.za/" />
        <meta property="og:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Principles Financial Consultants" />
        <meta name="twitter:description" content="Independent employee-benefits and financial advisory firm based in Ruimsig, Gauteng. FSP 19721." />
        <meta name="twitter:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
      </Helmet>

      {/* ── HERO ── */}
      <section
        style={{ minHeight: '100vh', backgroundColor: '#F7F4EF', paddingTop: 72, position: 'relative', overflow: 'hidden' }}
        className="flex items-center"
      >
        {/* background grid lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(14,34,51,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,34,51,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }} />

        {/* gold vertical accent */}
        <div style={{ position: 'absolute', left: '58%', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent 0%, rgba(176,141,79,0.18) 40%, rgba(176,141,79,0.18) 60%, transparent 100%)', display: 'none' }} className="md:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center py-16 md:py-24">

            {/* Left: copy */}
            <div className="flex flex-col gap-8">
              <motion.div {...fadeUp(0.1)} className="flex flex-col gap-3">
                <span
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08D4F', display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <span style={{ display: 'inline-block', width: 28, height: 1, background: '#B08D4F' }} />
                  Ruimsig, Gauteng · Est. FSP 19721
                </span>
                <h1
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontWeight: 300,
                    fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                    lineHeight: 1.05,
                    color: '#0E2233',
                    letterSpacing: '-0.025em',
                    margin: 0,
                  }}
                >
                  Empowering South&nbsp;Africans<br />
                  <em style={{ fontStyle: 'italic', color: '#B08D4F' }}>to retire</em>
                  <br />financially secure.
                </h1>
              </motion.div>

              <motion.p {...fadeUp(0.25)}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75, color: '#6B6B6B', maxWidth: 480 }}
              >
                Independent employee-benefits and financial advisory firm with 45 years of combined experience consulting to retirement-fund trustees and employer groups across South Africa.
              </motion.p>

              <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-4 items-center">
                <Button to="/contact" variant="primary" size="lg">
                  Speak to an Advisor
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
                <Button to="/services" variant="secondary" size="lg">Our Services</Button>
              </motion.div>

              <motion.div {...fadeUp(0.48)} className="flex gap-8 pt-4">
                {[['40+', 'Retirement funds'], ['45+', 'Years experience'], ['5,000+', 'Members served']].map(([num, label]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: '1.8rem', fontWeight: 300, color: '#0E2233', lineHeight: 1 }}>{num}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B6B6B', letterSpacing: '0.04em' }}>{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: 3D interactive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            >
              <Hero3D />
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(176,141,79,0.6), transparent)' }} />
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <StatStrip />

      {/* ── ABOUT TEASER ── */}
      <section style={{ backgroundColor: '#F7F4EF' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Independent advisors with institutional depth."
                subtitle="Principles Financial Consultants was built on the belief that every South African deserves sound, unbiased financial guidance — from the factory floor to the boardroom."
              />
              <div className="mt-10 flex gap-4">
                <Button to="/about" variant="primary">Meet the team</Button>
              </div>
            </div>
            <div className="relative">
              {/* decorative placeholder */}
              <div
                style={{
                  aspectRatio: '4/3',
                  backgroundColor: '#EDE9E2',
                  border: '1px solid rgba(14,34,51,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={teamOfficePhoto}
                  alt="Principles Financial Consultants — advisory meeting"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(14,34,51,0.12) 0%, transparent 60%)' }} />
                {/* gold corner accent */}
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, borderTop: '1px solid #B08D4F', borderLeft: '1px solid #B08D4F' }} />
              </div>
              <div style={{ position: 'absolute', top: -16, left: -16, width: 80, height: 80, border: '1px solid rgba(176,141,79,0.3)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section style={{ backgroundColor: '#EDE9E2' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <SectionHeading
              eyebrow="What we do"
              title="Seven disciplines. One trusted partner."
              subtitle="From group retirement funds to personal wills, we cover the full spectrum of financial wellbeing."
            />
          </div>

          <div className="flex flex-col">
            {homeServices.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/services#${s.anchor}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '56px 1fr auto',
                    gap: '0 24px',
                    alignItems: 'center',
                    padding: '24px 0',
                    borderTop: i === 0 ? '1px solid rgba(14,34,51,0.12)' : 'none',
                    borderBottom: '1px solid rgba(14,34,51,0.12)',
                    textDecoration: 'none',
                    group: true,
                  }}
                  className="group"
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(14,34,51,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 300, color: '#B08D4F', opacity: 0.7 }}>{s.num}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', fontWeight: 400, color: '#0E2233', minWidth: 260 }}>{s.title}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8625rem', color: '#6B6B6B', lineHeight: 1.6, maxWidth: 440 }}>{s.blurb}</span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, color: '#B08D4F', transition: 'transform 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                  >
                    <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PRINCIPLES ── */}
      <section style={{ backgroundColor: '#0E2233' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <SectionHeading
              eyebrow="Why Principles"
              title="The standard we hold ourselves to."
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                style={{
                  padding: '32px',
                  border: '1px solid rgba(176,141,79,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: '#B08D4F', opacity: 0.6 }} />
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '1.25rem', color: '#F7F4EF', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(247,244,239,0.62)', lineHeight: 1.75 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONAL TREASURY PULL QUOTE ── */}
      <section style={{ backgroundColor: '#F7F4EF', position: 'relative', overflow: 'hidden' }} className="py-24 md:py-32">
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: 1, background: 'rgba(14,34,51,0.06)' }} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, #B08D4F)' }} />
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
                  color: '#0E2233',
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                }}
              >
                "Improving the retirement outcomes of South Africans through better fund governance, trustee knowledge and the protection of members' interests is not optional — it is a national imperative."
              </p>
              <footer style={{ marginTop: 20 }}>
                <cite style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#B08D4F', letterSpacing: '0.12em', textTransform: 'uppercase', fontStyle: 'normal' }}>
                  National Treasury — Retirement Reform Framework
                </cite>
              </footer>
            </blockquote>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to top, transparent, #B08D4F)' }} />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBand />
    </>
  )
}
