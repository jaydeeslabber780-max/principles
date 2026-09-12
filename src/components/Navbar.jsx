import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo-full.png'

const services = [
  { label: 'Group Retirement Fund', anchor: 'group-retirement' },
  { label: 'Group Risk Benefits', anchor: 'group-risk' },
  { label: 'Healthcare Consulting', anchor: 'healthcare' },
  { label: 'Business Insurance', anchor: 'business-insurance' },
  { label: 'Household & Motor', anchor: 'household-motor' },
  { label: 'Personal Financial Planning', anchor: 'personal-financial' },
  { label: 'Wills & Trusts', anchor: 'wills-trusts' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  const navLinkStyle = ({ isActive }) => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.8125rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: isActive ? '#B08D4F' : '#0E2233',
    textDecoration: 'none',
    padding: '4px 0',
    borderBottom: isActive ? '1px solid #B08D4F' : '1px solid transparent',
    transition: 'color 0.2s, border-color 0.2s',
  })

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(247,244,239,0.95)' : 'rgba(247,244,239,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(14,34,51,0.1)' : '1px solid transparent',
        transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
        boxShadow: scrolled ? '0 2px 24px rgba(14,34,51,0.07)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between" style={{ height: 72 }}>
        {/* Logo */}
        <Link to="/" aria-label="Principles Financial Consultants Home">
          <img src={logo} alt="Principles Financial Consultants" style={{ height: 44, width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About</NavLink>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                ...navLinkStyle({ isActive }),
                display: 'flex', alignItems: 'center', gap: 4,
              })}
            >
              Services
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }}
              >
                <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute', top: 'calc(100% + 12px)', left: -16,
                    backgroundColor: '#fff',
                    border: '1px solid rgba(14,34,51,0.08)',
                    borderRadius: 4,
                    boxShadow: '0 16px 48px rgba(14,34,51,0.14)',
                    minWidth: 240,
                    padding: '6px 0',
                    zIndex: 200,
                  }}
                >
                  {services.map(s => (
                    <Link
                      key={s.anchor}
                      to={`/services#${s.anchor}`}
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8125rem',
                        color: '#0E2233',
                        textDecoration: 'none',
                        transition: 'background 0.15s, color 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#F7F4EF'; e.currentTarget.style.color = '#B08D4F' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0E2233' }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>

          <Link
            to="/contact"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              backgroundColor: '#0E2233',
              color: '#F7F4EF',
              padding: '10px 20px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#B08D4F'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0E2233'}
          >
            Speak to an Advisor
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={
                mobileOpen
                  ? i === 0 ? { rotate: 45, y: 9 } : i === 2 ? { rotate: -45, y: -9 } : { opacity: 0 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              style={{
                display: 'block', width: 22, height: 1.5,
                backgroundColor: '#0E2233', borderRadius: 1,
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', backgroundColor: '#F7F4EF', borderTop: '1px solid rgba(14,34,51,0.08)' }}
          >
            <nav className="mobile-menu-scroll max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: '#0E2233',
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(14,34,51,0.06)',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#0E2233',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(14,34,51,0.06)',
                  padding: '12px 0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                Services
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"
                  style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'none' }}>
                  <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                    style={{ overflow: 'hidden', paddingLeft: 12 }}
                  >
                    {services.map(s => (
                      <Link
                        key={s.anchor}
                        to={`/services#${s.anchor}`}
                        style={{
                          display: 'block',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.8rem',
                          color: '#6B6B6B',
                          textDecoration: 'none',
                          padding: '9px 0',
                          borderBottom: '1px solid rgba(14,34,51,0.04)',
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                to="/contact"
                style={{
                  marginTop: 12,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  backgroundColor: '#0E2233',
                  color: '#F7F4EF',
                  padding: '14px 20px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block',
                }}
              >
                Speak to an Advisor
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
