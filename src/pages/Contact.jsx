import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import MapEmbed from '../components/MapEmbed'
import { FORM_ENDPOINT, business } from '../config/site'

const contactInfo = [
  {
    label: 'Address',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="#B08D4F" strokeWidth="1.3" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="2" stroke="#B08D4F" strokeWidth="1.3" />
      </svg>
    ),
    lines: ['20 St Andrews Estate', 'Dryf Avenue, Ruimsig', 'Gauteng, South Africa'],
  },
  {
    label: 'Landline',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 4h4l1.5 4-2 1.5a11 11 0 005 5L13 12.5l4 1.5v4a2 2 0 01-2 2A16 16 0 012 4a2 2 0 012-2z" stroke="#B08D4F" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    lines: ['+27 10 446 8033'],
    href: 'tel:+27104468033',
  },
  {
    label: 'Riana Slabber',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="4" stroke="#B08D4F" strokeWidth="1.3" />
        <path d="M2 18c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#B08D4F" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    lines: ['082 455 5310', 'riana@principlesfc.co.za'],
    href: 'tel:+27824555310',
    href2: 'mailto:riana@principlesfc.co.za',
  },
  {
    label: 'Herme Slabber',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="4" stroke="#B08D4F" strokeWidth="1.3" />
        <path d="M2 18c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#B08D4F" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    lines: ['083 663 5954', 'herme@principlesfc.co.za'],
    href: 'tel:+27836635954',
    href2: 'mailto:herme@principlesfc.co.za',
  },
]

const subjects = [
  'Group Retirement Fund',
  'Group Risk Benefits',
  'Healthcare',
  'Business Insurance',
  'Household & Motor',
  'Personal Financial Planning',
  'Wills & Trusts',
  'General Enquiry',
  'Trustee Training',
]

export default function Contact() {
  // idle | sending | sent | mailto | error
  const [status, setStatus] = useState('idle')
  const sending = status === 'sending'

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    // Honeypot: the field is invisible to people, so only bots fill it in.
    if (data.get('_gotcha')) {
      setStatus('sent')
      return
    }

    if (!FORM_ENDPOINT) {
      const subject = `Website enquiry: ${data.get('subject') || 'General enquiry'}`
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone') || 'not given'}`,
        `Service: ${data.get('subject') || 'not specified'}`,
        '',
        data.get('message'),
      ].join('\n')
      window.location.href = `mailto:${business.enquiriesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Form service responded ${res.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — Principles Financial Consultants</title>
        <meta name="description" content="Get in touch with Principles Financial Consultants in Ruimsig, Gauteng. Call +27 10 446 8033 or email riana@principlesfc.co.za." />
        <link rel="canonical" href="https://principlesfc-sa.co.za/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Principles Financial Consultants" />
        <meta property="og:title" content="Contact — Principles Financial Consultants" />
        <meta property="og:description" content="Get in touch with Principles Financial Consultants in Ruimsig, Gauteng. Call +27 10 446 8033 or email riana@principlesfc.co.za." />
        <meta property="og:url" content="https://principlesfc-sa.co.za/contact" />
        <meta property="og:image" content="https://principlesfc-sa.co.za/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — Principles Financial Consultants" />
        <meta name="twitter:description" content="Get in touch with Principles Financial Consultants in Ruimsig, Gauteng." />
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
              Let's talk
            </span>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#F7F4EF', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
              We'd love to hear from you.
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', color: 'rgba(247,244,239,0.65)', lineHeight: 1.75 }}>
              Whether you're a retirement-fund trustee, an employer group or an individual — reach out and we'll point you in the right direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section style={{ backgroundColor: '#F7F4EF' }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact details */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <SectionHeading eyebrow="Get in touch" title="Reach us directly." />

              <div className="flex flex-col gap-8">
                {contactInfo.map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ marginTop: 2, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 6 }}>{c.label}</p>
                      {c.lines.map((line, li) => (
                        <div key={li}>
                          {li === 0 && c.href
                            ? <a href={c.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#0E2233', textDecoration: 'none', display: 'block', lineHeight: 1.7 }}
                                onMouseEnter={e => e.currentTarget.style.color = '#B08D4F'}
                                onMouseLeave={e => e.currentTarget.style.color = '#0E2233'}
                              >{line}</a>
                            : li === 1 && c.href2
                            ? <a href={c.href2} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#6B6B6B', textDecoration: 'none', display: 'block', lineHeight: 1.7 }}
                                onMouseEnter={e => e.currentTarget.style.color = '#B08D4F'}
                                onMouseLeave={e => e.currentTarget.style.color = '#6B6B6B'}
                              >{line}</a>
                            : <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.7 }}>{line}</p>
                          }
                        </div>
                      ))}
                      {c.note && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#B08D4F', marginTop: 4, opacity: 0.8 }}>{c.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 12 }}>Follow us</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Facebook @principlesfinancialconsultants', href: 'https://facebook.com/principlesfinancialconsultants', name: 'Facebook' },
                    { label: 'Instagram @principlesfinancialconsultants', href: 'https://instagram.com/principlesfinancialconsultants', name: 'Instagram' },
                  ].map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: '#0E2233', textDecoration: 'none', padding: '8px 16px', border: '1px solid rgba(14,34,51,0.15)', transition: 'border-color 0.2s, color 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#B08D4F'; e.currentTarget.style.borderColor = '#B08D4F' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#0E2233'; e.currentTarget.style.borderColor = 'rgba(14,34,51,0.15)' }}
                    >{s.name}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="lg:col-span-3"
            >
              {status === 'sent' || status === 'mailto' ? (
                <div role="status" style={{ backgroundColor: '#EDE9E2', border: '1px solid rgba(176,141,79,0.3)', padding: '56px 40px', textAlign: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid #B08D4F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4 11l5 5 9-9" stroke="#B08D4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '1.6rem', color: '#0E2233', marginBottom: 12 }}>{status === 'mailto' ? 'Your email app should now open.' : 'Message received.'}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.7 }}>
                    {status === 'mailto' ? (
                      <>
                        We've prepared an email with your message. Press send in your email app to reach us. If nothing opened, email{' '}
                        <a href={`mailto:${business.enquiriesEmail}`} style={{ color: '#7D6134' }}>{business.enquiriesEmail}</a>{' '}
                        or call <a href={business.landlineHref} style={{ color: '#7D6134' }}>{business.landline}</a>.
                      </>
                    ) : (
                      'Thank you for reaching out. One of our advisors will be in touch with you shortly.'
                    )}
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="post"
                  action={FORM_ENDPOINT || `mailto:${business.enquiriesEmail}`}
                  encType={FORM_ENDPOINT ? undefined : 'text/plain'}
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Name */}
                    <FormField label="Full name" name="name" type="text" required placeholder="Your name" autoComplete="name" maxLength={100} />
                    {/* Email */}
                    <FormField label="Email address" name="email" type="email" required placeholder="you@example.com" autoComplete="email" maxLength={254} />
                    {/* Phone */}
                    <FormField label="Phone number" name="phone" type="tel" placeholder="+27 XX XXX XXXX" autoComplete="tel" maxLength={30} />
                    {/* Subject */}
                    <FormField label="Service of interest" name="subject" type="select" options={subjects} />
                  </div>
                  {/* Message */}
                  <FormField label="Message" name="message" type="textarea" required maxLength={5000} placeholder="Tell us about your situation and how we can help…" />

                  {/* Honeypot for spam bots; hidden from people and screen readers. */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: -10000, width: 1, height: 1, overflow: 'hidden' }}>
                    <label>
                      Leave this field empty
                      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '24px 24px 0', fontFamily: 'Inter, sans-serif', fontSize: '0.825rem', lineHeight: 1.6, color: '#3a3a3a', cursor: 'pointer' }}>
                    <input type="checkbox" name="consent" value="yes" required style={{ marginTop: 4, width: 16, height: 16, flexShrink: 0, accentColor: '#B08D4F', cursor: 'pointer' }} />
                    <span>
                      I agree that Principles Financial Consultants may use the details I've provided to respond to my enquiry, as set out in the{' '}
                      <Link to="/privacy" style={{ color: '#7D6134', textDecoration: 'underline', textUnderlineOffset: 3 }}>Privacy Policy</Link>.
                      <span style={{ color: '#B08D4F' }}> *</span>
                    </span>
                  </label>

                  <div style={{ padding: '24px 24px 0' }}>
                    {status === 'error' && (
                      <p role="alert" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: 1.6, color: '#9B2C2C', marginBottom: 16 }}>
                        Sorry, your message couldn't be sent. Please try again, or email{' '}
                        <a href={`mailto:${business.enquiriesEmail}`} style={{ color: 'inherit', textDecoration: 'underline' }}>{business.enquiriesEmail}</a>{' '}
                        or call <a href={business.landlineHref} style={{ color: 'inherit', textDecoration: 'underline' }}>{business.landline}</a>.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        backgroundColor: sending ? '#8B6D35' : '#0E2233',
                        color: '#F7F4EF',
                        padding: '16px 32px',
                        border: 'none',
                        cursor: sending ? 'wait' : 'pointer',
                        transition: 'background-color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                      }}
                      onMouseEnter={e => { if (!sending) e.currentTarget.style.backgroundColor = '#B08D4F' }}
                      onMouseLeave={e => { if (!sending) e.currentTarget.style.backgroundColor = '#0E2233' }}
                    >
                      {sending ? 'Sending…' : 'Send message'}
                      {!sending && (
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#B08D4F', marginTop: 12, opacity: 0.8 }}>
                      FSP 19721 · All information is treated in strict confidence.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ backgroundColor: '#EDE9E2' }}>
        <div style={{ maxHeight: 440, overflow: 'hidden', position: 'relative' }}>
          <MapEmbed />
          {/* Overlay caption */}
          <div style={{
            position: 'absolute', bottom: 24, left: 24,
            backgroundColor: 'rgba(14,34,51,0.92)',
            color: '#F7F4EF',
            padding: '14px 20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            maxWidth: 260,
          }}>
            <strong style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '1rem', display: 'block', marginBottom: 4 }}>Principles FC</strong>
            20 St Andrews Estate, Dryf Avenue<br />Ruimsig, Gauteng
          </div>
        </div>
      </section>
    </>
  )
}

function FormField({ label, name, type, required, placeholder, options, autoComplete, maxLength }) {
  const base = {
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    color: '#0E2233',
    backgroundColor: '#F7F4EF',
    border: 'none',
    borderBottom: '1px solid rgba(14,34,51,0.18)',
    padding: '16px 0',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  const wrapper = { padding: '8px 24px 0' }

  return (
    <div style={wrapper}>
      <label htmlFor={name} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B08D4F', display: 'block', marginBottom: 4 }}>
        {label}{required && <span style={{ color: '#B08D4F' }}> *</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          maxLength={maxLength}
          style={{ ...base, resize: 'vertical', paddingTop: 12 }}
          onFocus={e => e.target.style.borderBottomColor = '#B08D4F'}
          onBlur={e => e.target.style.borderBottomColor = 'rgba(14,34,51,0.18)'}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          style={{ ...base, cursor: 'pointer', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4.5L6 8l4-3.5' stroke='%23B08D4F' strokeWidth='1.4' fill='none' strokeLinecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 4px center' }}
          onFocus={e => e.target.style.borderBottomColor = '#B08D4F'}
          onBlur={e => e.target.style.borderBottomColor = 'rgba(14,34,51,0.18)'}
        >
          <option value="">Select a service…</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          autoComplete={autoComplete}
          maxLength={maxLength}
          required={required}
          placeholder={placeholder}
          style={base}
          onFocus={e => e.target.style.borderBottomColor = '#B08D4F'}
          onBlur={e => e.target.style.borderBottomColor = 'rgba(14,34,51,0.18)'}
        />
      )}
    </div>
  )
}
