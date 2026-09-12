// Contact-form delivery. GitHub Pages can't receive form submissions, so they
// go to a form service. Create a free form at https://formspree.io (verify
// riana@principlesfc.co.za as the recipient) and paste its endpoint here, e.g.
// 'https://formspree.io/f/abcdwxyz'. The endpoint is public by design and is
// not a secret. While this is empty, the form opens the visitor's own email
// app with their message filled in instead.
export const FORM_ENDPOINT = ''

export const business = {
  name: 'Principles Financial Consultants',
  fsp: '19721',
  address: '20 St Andrews Estate, Dryf Avenue, Ruimsig, Gauteng, South Africa',
  landline: '+27 10 446 8033',
  // Phone links use the local 0XX format, which dials exactly like typing
  // the number on a South African phone.
  landlineHref: 'tel:0104468033',
  enquiriesEmail: 'riana@principlesfc.co.za',
  keyIndividual: 'Herme Slabber',
  informationOfficer: { name: 'Herme Slabber', email: 'herme@principlesfc.co.za' },
}

export const POLICY_LAST_UPDATED = '11 September 2026'

const formOrigin = FORM_ENDPOINT ? ` ${new URL(FORM_ENDPOINT).origin}` : ''

// Shipped as a <meta> tag on production pages only: GitHub Pages can't send
// security headers, and the dev server needs inline scripts for hot reload.
// Inline styles are allowed because the components use style attributes.
export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${formOrigin}`,
  'frame-src https://www.google.com https://maps.google.com',
  `form-action 'self' mailto:${formOrigin}`,
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')
