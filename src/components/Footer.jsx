import { Link } from 'react-router-dom'
import logo from '../assets/logo-full.png'
import { openCookieSettings } from '../lib/consent'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0E2233', color: 'rgba(247,244,239,0.7)' }}>
      {/* Gold top line */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #B08D4F, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <img src={logo} alt="Principles Financial Consultants" style={{ height: 42, width: 'auto' }} />
            <p style={{ fontSize: '0.825rem', lineHeight: 1.7, color: 'rgba(247,244,239,0.6)' }}>
              Independent financial advisory and employee-benefits consulting firm.
              FSP 19721 — FSCA Accredited.
            </p>
            <div className="flex gap-4">
              {[
                {
                  label: 'Facebook', href: 'https://facebook.com/principlesfinancialconsultants',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
                },
                {
                  label: 'Instagram', href: 'https://instagram.com/principlesfinancialconsultants',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>,
                },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 36, height: 36,
                    border: '1px solid rgba(176,141,79,0.25)',
                    color: 'rgba(247,244,239,0.6)',
                    borderRadius: 2,
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#B08D4F'; e.currentTarget.style.borderColor = '#B08D4F' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(247,244,239,0.6)'; e.currentTarget.style.borderColor = 'rgba(176,141,79,0.25)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 4 }}>
              Navigate
            </h3>
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(247,244,239,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F7F4EF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,244,239,0.65)'}
              >{l.label}</Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 4 }}>
              Services
            </h3>
            {[
              ['Group Retirement', 'group-retirement'],
              ['Group Risk Benefits', 'group-risk'],
              ['Healthcare', 'healthcare'],
              ['Business Insurance', 'business-insurance'],
              ['Household & Motor', 'household-motor'],
              ['Personal Financial', 'personal-financial'],
              ['Wills & Trusts', 'wills-trusts'],
            ].map(([label, anchor]) => (
              <Link key={anchor} to={`/services#${anchor}`}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(247,244,239,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F7F4EF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,244,239,0.65)'}
              >{label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B08D4F', marginBottom: 4 }}>
              Contact
            </h3>
            {[
              { icon: '📍', text: '20 St Andrews Estate, Dryf Avenue, Ruimsig, Gauteng' },
              { icon: '☎', text: '+27 10 446 8033' },
              { icon: '✉', text: 'riana@principlesfc.co.za', href: 'mailto:riana@principlesfc.co.za' },
              { icon: '✉', text: 'herme@principlesfc.co.za', href: 'mailto:herme@principlesfc.co.za' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.85rem', marginTop: 1, flexShrink: 0 }}>{c.icon}</span>
                {c.href
                  ? <a href={c.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.825rem', color: 'rgba(247,244,239,0.65)', textDecoration: 'none', lineHeight: 1.5 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#B08D4F'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,244,239,0.65)'}
                    >{c.text}</a>
                  : <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.825rem', lineHeight: 1.5 }}>{c.text}</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(247,244,239,0.08)', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.775rem', color: 'rgba(247,244,239,0.4)' }}>
            © {year} Principles Financial Consultants. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.775rem' }}>
            <Link to="/privacy" className="text-paper/55 transition-colors hover:text-gold">Privacy &amp; Cookies</Link>
            <Link to="/legal" className="text-paper/55 transition-colors hover:text-gold">Legal &amp; Disclosures</Link>
            <button type="button" onClick={openCookieSettings} className="cursor-pointer text-paper/55 transition-colors hover:text-gold">Cookie settings</button>
          </nav>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.775rem', color: 'rgba(247,244,239,0.4)' }}>
            FSP 19721 · FAIS Compliant · FSCA Accredited
          </p>
        </div>
      </div>
    </footer>
  )
}
