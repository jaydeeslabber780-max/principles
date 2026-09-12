import { Helmet } from 'react-helmet-async'
import LegalPage from '../components/LegalPage'
import { business, FORM_ENDPOINT, POLICY_LAST_UPDATED } from '../config/site'
import { openCookieSettings } from '../lib/consent'

const pageTitle = 'Privacy & Cookie Policy — Principles Financial Consultants'
const pageDescription =
  'How Principles Financial Consultants collects, uses and protects personal information under POPIA, and how this website uses cookies.'

export default function Privacy() {
  const officer = business.informationOfficer

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://principlesfc-sa.co.za/privacy" />
      </Helmet>

      <LegalPage eyebrow="Privacy" title="Privacy & Cookie Policy" updated={POLICY_LAST_UPDATED}>
        <h2>Who we are</h2>
        <p>
          {business.name} (&ldquo;Principles&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an
          authorised financial services provider (FSP {business.fsp}) based at {business.address}.
          We are the responsible party for personal information collected through this website, as
          defined in the Protection of Personal Information Act 4 of 2013 (POPIA).
        </p>
        <p>
          This policy covers this website. If you become a client, how we handle your information is
          also governed by your client agreement and our legal obligations as a financial services
          provider.
        </p>

        <h2>Our Information Officer</h2>
        <p>
          Our Information Officer is <strong>{officer.name}</strong>. For any question about your
          personal information, or to exercise your rights below, contact:
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${officer.email}`}>{officer.email}</a>
          </li>
          <li>
            Telephone: <a href={business.landlineHref}>{business.landline}</a>
          </li>
          <li>Address: {business.address}</li>
        </ul>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>When you contact us</strong> through our contact form, by email or by phone: your
            name, email address, phone number (optional), the service you are interested in, your
            message, and your agreement to this policy.
          </li>
          <li>
            <strong>When you visit the site</strong>: our hosting provider automatically processes your
            IP address and basic browser information to deliver the pages and protect the site against
            abuse. We don&rsquo;t use these records to identify or track you.
          </li>
        </ul>
        <p>
          We do not use analytics, advertising or tracking tools, and we don&rsquo;t build profiles of
          visitors. Please don&rsquo;t send ID numbers, bank details, health information or other
          sensitive information through the contact form. If you become a client, we will collect
          what we need through a secure process.
        </p>

        <h2>Why we use it</h2>
        <ul>
          <li>To respond to your enquiry and arrange a consultation.</li>
          <li>To provide services you ask for, under a separate agreement with you.</li>
          <li>
            To meet our legal and regulatory obligations, including under the Financial Advisory and
            Intermediary Services Act (FAIS) and the Financial Intelligence Centre Act (FICA).
          </li>
        </ul>
        <p>
          We will not use your details for direct marketing unless you have agreed to it, and you can
          opt out at any time.
        </p>

        <h2>Who we share it with</h2>
        <p>We never sell or rent personal information. We only share it with:</p>
        <ul>
          <li>
            <strong>GitHub, Inc.</strong>, which hosts this website.
          </li>
          {FORM_ENDPOINT && (
            <li>
              <strong>Our contact-form service</strong>, which delivers messages sent through our
              contact form to our inbox.
            </li>
          )}
          <li>
            <strong>The providers of our email and IT systems</strong>, which store the messages you
            send us.
          </li>
          <li>
            <strong>Google LLC</strong>, only if you choose to load the map on our Contact page.
          </li>
          <li>Regulators, ombuds, courts or other authorities, where the law requires it.</li>
        </ul>

        <h2>Information stored outside South Africa</h2>
        <p>
          Some of these providers, including GitHub and Google, are based in the United States and may
          process information there. By using this website and our contact form you consent to this
          transfer, as allowed by section 72 of POPIA. These providers apply their own contractual and
          technical safeguards to the information they process.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep enquiry details only for as long as we need them to deal with your enquiry. If you
          become a client, we keep records for at least five years where the FAIS Act or other laws
          require it. After that, we delete or de-identify them.
        </p>

        <h2>How we protect it</h2>
        <p>
          This website is served only over encrypted (HTTPS) connections and uses a strict content
          security policy. Access to enquiries is limited to our team, and we take reasonable technical
          and organisational measures to prevent loss, damage or unauthorised access, as section 19 of
          POPIA requires. If we become aware of a security compromise affecting your information, we
          will notify you and the Information Regulator as POPIA requires.
        </p>

        <h2>Cookies and local storage</h2>
        <p>
          <strong>We don&rsquo;t set any cookies.</strong> We store one setting in your browser&rsquo;s
          local storage (named <code>pfc-cookie-consent</code>) to remember your cookie choice. It never
          leaves your device.
        </p>
        <p>
          The map on our Contact page is provided by Google Maps. If you allow it, Google may set
          cookies and receive your IP address; see{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s privacy policy
          </a>
          . If you choose &ldquo;Essential only&rdquo;, the map is not loaded and you can use the
          &ldquo;Open in Google Maps&rdquo; link instead.
        </p>
        <p>Our fonts are hosted on this website, so no other company is contacted when you load a page.</p>
        <p>
          <button type="button" className="legal-button" onClick={openCookieSettings}>
            Change cookie settings
          </button>
        </p>

        <h2>Your rights</h2>
        <p>Under POPIA you may:</p>
        <ul>
          <li>ask whether we hold personal information about you, and request a copy of it;</li>
          <li>ask us to correct, update or delete it;</li>
          <li>object to us processing it, including for direct marketing;</li>
          <li>
            withdraw your consent at any time (this does not affect processing that has already
            happened).
          </li>
        </ul>
        <p>
          To make a request, contact our Information Officer. We may need to confirm your identity
          before we act on it.
        </p>
        <p>
          If you are unhappy with how we have handled your information, you may complain to the
          Information Regulator (South Africa):{' '}
          <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">
            inforegulator.org.za
          </a>
          .
        </p>

        <h2>Children</h2>
        <p>
          This website is not directed at children under 18, and we do not knowingly collect their
          personal information through it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The date at the top of the page shows when it
          was last changed.
        </p>
      </LegalPage>
    </>
  )
}
