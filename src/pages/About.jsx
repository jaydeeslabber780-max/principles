import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Card3D from '../components/Card3D'
import CtaBand from '../components/CtaBand'
import rianaPhoto from '../assets/riana.png'
import hermePhoto from '../assets/herme.png'

const values = [
  { title: 'Integrity', body: 'We operate with complete transparency. Our advice is never influenced by third-party incentives.' },
  { title: 'Knowledge', body: 'Continuous professional development ensures our counsel reflects the most current legislative and market landscape.' },
  { title: 'Accountability', body: 'We take ownership of every recommendation and stand behind our work long after the engagement ends.' },
  { title: 'Accessibility', body: 'Financial security should be universal. We engage members across 8 official languages.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Principles Financial Consultants</title>
        <meta name="description" content="Meet Riana and Herme Slabber — the experienced team behind Principles Financial Consultants. 45+ years of combined expertise in employee benefits and fund consulting." />
        <link rel="canonical" href="https://principlesfc-sa.co.za/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Principles Financial Consultants" />
        <meta property="og:title" content="About Us — Principles Financial Consultants" />
        <meta property="og:description" content="Meet Riana and Herme Slabber — the experienced team behind Principles Financial Consultants. 45+ years of combined expertise in employee benefits and fund consulting." />
        <meta property="og:url" content="https://principlesfc-sa.co.za/about" />
        <meta property="og:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us — Principles Financial Consultants" />
        <meta name="twitter:description" content="Meet the team behind Principles Financial Consultants." />
        <meta name="twitter:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
      </Helmet>

      {/* Page header */}
      <section style={{ backgroundColor: '#0E2233', paddingTop: 72 }} className="py-24 md:py-32 relative overflow-hidden">
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(176,141,79,0.4), transparent)' }} />
        <div style={{ position: 'absolute', right: '10%', top: '20%', width: 200, height: 200, border: '1px solid rgba(176,141,79,0.08)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: '15%', top: '15%', width: 120, height: 120, border: '1px solid rgba(176,141,79,0.12)', borderRadius: '50%' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B08D4F', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: '#B08D4F' }} />
              Our story
            </span>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#F7F4EF', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
              Principles built on trust, expertise and independence.
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', color: 'rgba(247,244,239,0.65)', lineHeight: 1.75, maxWidth: 560 }}>
              For over four decades of combined experience, Principles Financial Consultants has been the trusted partner for retirement funds, employer groups and individuals navigating South Africa's complex financial landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company intro */}
      <section style={{ backgroundColor: '#F7F4EF' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Founded in Ruimsig"
                title="Independent advisors, accountable to you."
              />
              <div className="flex flex-col gap-5 mt-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9625rem', color: '#6B6B6B', lineHeight: 1.8 }}>
                <p>Principles Financial Consultants is an independently owned, FSCA-accredited Financial Service Provider (FSP 19721) based in Ruimsig, Gauteng. We specialise in employee-benefits consulting — advising retirement-fund trustees, healthcare committees and employer bodies across South Africa.</p>
                <p>Our mission is clear: empower South Africans to retire financially secure through skills, knowledge and the right attitude. We work to raise the standard of fund governance — improving trustee knowledge and conduct, protecting members' interests and ensuring accountability at every level.</p>
                <p>We consult to over 40 retirement funds, serving more than 5,000 members (medical and retirement combined) across 10 employer groups — in 8 of South Africa's 11 official languages.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { label: 'FSP Number', value: '19721' },
                { label: 'Regulatory body', value: 'FSCA — Financial Sector Conduct Authority' },
                { label: 'Compliance', value: 'FAIS Act Compliant' },
                { label: 'Location', value: 'Ruimsig, Gauteng, South Africa' },
                { label: 'Languages', value: '8 of South Africa\'s 11 official languages' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 20, paddingBottom: 20, borderBottom: '1px solid rgba(14,34,51,0.08)' }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#B08D4F', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: 130, paddingTop: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#0E2233' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ backgroundColor: '#EDE9E2' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <SectionHeading eyebrow="Leadership" title="The people behind the practice." />
          </div>

          <div className="flex flex-col gap-10">

            {/* Riana */}
            <Card3D
              style={{ backgroundColor: '#0E2233', overflow: 'hidden' }}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Photo */}
                <div style={{ backgroundColor: '#162d40', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={rianaPhoto}
                    alt="Riana Slabber"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  {/* gold corner */}
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 60, borderTop: '1px solid rgba(176,141,79,0.4)', borderLeft: '1px solid rgba(176,141,79,0.4)' }} />
                </div>
                <div className="px-6 py-9 sm:px-8 sm:py-10 md:p-10 lg:px-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ width: 32, height: 1, background: '#B08D4F', marginBottom: 18 }} />
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(1.6rem, 4.5vw, 2.1rem)', color: '#F7F4EF', marginBottom: 8 }}>Riana Slabber</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 22 }}>Managing Director — Growth & Strategy</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(247,244,239,0.65)', lineHeight: 1.8 }}>
                    Riana drives the firm's growth and strategic direction. With 20+ years of deep expertise across employee benefits, fund consulting, medical schemes and wealth management, she combines big-picture vision with hands-on client relationships that span South Africa's largest employers.
                  </p>
                  <div style={{ marginTop: 28 }}>
                    <a href="tel:0824555310" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#B08D4F', textDecoration: 'none', display: 'block', marginBottom: 8 }}>
                      082 455 5310
                    </a>
                    <a href="mailto:riana@principlesfc.co.za" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(247,244,239,0.5)', textDecoration: 'none' }}>
                      riana@principlesfc.co.za
                    </a>
                  </div>
                </div>
              </motion.div>
            </Card3D>

            {/* Herme */}
            <Card3D
              style={{ backgroundColor: '#0E2233', overflow: 'hidden' }}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 }}
              >
                <div style={{ backgroundColor: '#162d40', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={hermePhoto}
                    alt="Herme Slabber"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 60, borderTop: '1px solid rgba(176,141,79,0.4)', borderLeft: '1px solid rgba(176,141,79,0.4)' }} />
                </div>
                <div className="px-6 py-9 sm:px-8 sm:py-10 md:p-10 lg:px-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ width: 32, height: 1, background: '#B08D4F', marginBottom: 18 }} />
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(1.6rem, 4.5vw, 2.1rem)', color: '#F7F4EF', marginBottom: 8 }}>Herme Slabber</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 22 }}>Key Individual & Information Officer</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(247,244,239,0.65)', lineHeight: 1.8 }}>
                    B Com (Economics) and Higher Diploma in Education. With the firm since 2005. A qualified trustee trainer who developed course content for the FSCA's Professional Trusteeship programme. His prior career spanned Momentum and NMG Consultants & Actuaries. Past trustee-training clients include FNB, Pick n Pay, BHP Billiton SA, Anglo American, DaimlerChrysler and the Chamber of Mines.
                  </p>
                  <div style={{ marginTop: 28 }}>
                    <a href="tel:0836635954" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#B08D4F', textDecoration: 'none', display: 'block', marginBottom: 8 }}>
                      083 663 5954
                    </a>
                    <a href="mailto:herme@principlesfc.co.za" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(247,244,239,0.5)', textDecoration: 'none' }}>
                      herme@principlesfc.co.za
                    </a>
                  </div>
                </div>
              </motion.div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#0E2233' }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <SectionHeading eyebrow="Our values" title="How we show up for every client." light />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ borderTop: '1px solid rgba(176,141,79,0.3)', paddingTop: 24 }}
              >
                <span style={{ fontFamily: 'Fraunces, serif', fontSize: '0.85rem', fontWeight: 400, color: '#B08D4F', display: 'block', marginBottom: 12 }}>0{i + 1}</span>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '1.3rem', color: '#F7F4EF', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(247,244,239,0.6)', lineHeight: 1.75 }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Partner with us" title="Let's protect what matters to you." ctaLabel="Schedule a consultation" />
    </>
  )
}
