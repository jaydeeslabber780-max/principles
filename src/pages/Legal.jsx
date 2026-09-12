import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { business, POLICY_LAST_UPDATED } from '../config/site'

const pageTitle = 'Legal & Regulatory Disclosures — Principles Financial Consultants'
const pageDescription =
  'Regulatory disclosures for Principles Financial Consultants (FSP 19721): FAIS status, complaints procedure, conflicts of interest and website terms of use.'

const external = { target: '_blank', rel: 'noopener noreferrer' }

export default function Legal() {
  const officer = business.informationOfficer

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://principlesfc.co.za/legal" />
      </Helmet>

      <LegalPage eyebrow="Legal" title="Legal & Regulatory Disclosures" updated={POLICY_LAST_UPDATED}>
        <h2>About us</h2>
        <dl>
          <dt>Name</dt>
          <dd>{business.name}</dd>
          <dt>Regulatory status</dt>
          <dd>
            Authorised financial services provider under the Financial Advisory and Intermediary
            Services Act 37 of 2002 (FAIS), FSP number {business.fsp}
          </dd>
          <dt>Regulator</dt>
          <dd>
            Financial Sector Conduct Authority (FSCA) &mdash;{' '}
            <a href="https://www.fsca.co.za" {...external}>
              fsca.co.za
            </a>
          </dd>
          <dt>Key Individual</dt>
          <dd>{business.keyIndividual}</dd>
          <dt>Information Officer</dt>
          <dd>{officer.name}</dd>
          <dt>Physical address</dt>
          <dd>{business.address}</dd>
          <dt>Telephone</dt>
          <dd>
            <a href={business.landlineHref}>{business.landline}</a>
          </dd>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${business.enquiriesEmail}`}>{business.enquiriesEmail}</a>
          </dd>
        </dl>
        <p>You can confirm our authorisation on the FSCA&rsquo;s website using our FSP number.</p>

        <h2>This website is not financial advice</h2>
        <p>
          The content on this website is general information about our firm and services. It is not
          financial, tax, legal or investment advice as defined in the FAIS Act, and it does not take
          your personal objectives, financial situation or needs into account. Please speak to one of
          our consultants before you make any financial decision. Past performance is not an indication
          of future performance.
        </p>

        <h2>Conflicts of interest</h2>
        <p>
          We identify and manage actual and potential conflicts of interest in line with the FAIS
          General Code of Conduct. Our conflict of interest management policy is available on request.
        </p>

        <h2>Complaints</h2>
        <p>
          We take complaints seriously. Please send your complaint in writing to{' '}
          <a href={`mailto:${business.enquiriesEmail}`}>{business.enquiriesEmail}</a> or{' '}
          <a href={`mailto:${officer.email}`}>{officer.email}</a>, with your contact details and a
          description of the problem. We will acknowledge it promptly and handle it under our
          complaints-resolution procedure, which is available on request.
        </p>
        <p>
          If we have not resolved your complaint within six weeks, or you are unhappy with our
          response, you may refer it to the relevant independent body:
        </p>
        <ul>
          <li>
            <strong>FAIS Ombud</strong>, for complaints about financial advice and intermediary
            services &mdash;{' '}
            <a href="https://www.faisombud.co.za" {...external}>
              faisombud.co.za
            </a>
          </li>
          <li>
            <strong>National Financial Ombud Scheme South Africa</strong>, for insurance complaints
            &mdash;{' '}
            <a href="https://www.nfosa.co.za" {...external}>
              nfosa.co.za
            </a>
          </li>
          <li>
            <strong>Pension Funds Adjudicator</strong>, for retirement fund complaints &mdash;{' '}
            <a href="https://www.pfa.org.za" {...external}>
              pfa.org.za
            </a>
          </li>
          <li>
            <strong>Council for Medical Schemes</strong>, for medical scheme complaints &mdash;{' '}
            <a href="https://www.medicalschemes.co.za" {...external}>
              medicalschemes.co.za
            </a>
          </li>
        </ul>

        <h2>Access to information (PAIA)</h2>
        <p>
          Requests for records under the Promotion of Access to Information Act 2 of 2000 can be made
          to our Information Officer, {officer.name}, at{' '}
          <a href={`mailto:${officer.email}`}>{officer.email}</a>. Our PAIA manual is available on
          request. For how we handle personal information, see our{' '}
          <Link to="/privacy">Privacy &amp; Cookie Policy</Link>.
        </p>

        <h2>Website terms of use</h2>
        <p>By using this website, you agree to these terms.</p>
        <ul>
          <li>
            <strong>Accuracy.</strong> We work to keep the information on this website accurate and up
            to date, but we do not guarantee that it is complete or current.
          </li>
          <li>
            <strong>Liability.</strong> To the extent permitted by law, {business.name} is not liable
            for any loss arising from the use of, or reliance on, this website or its content.
          </li>
          <li>
            <strong>Other websites.</strong> Links to third-party websites are provided for
            convenience. We are not responsible for their content or privacy practices.
          </li>
          <li>
            <strong>Intellectual property.</strong> The text, design, logos and images on this website
            belong to {business.name} or are used with permission, and may not be reproduced without
            our written consent.
          </li>
          <li>
            <strong>Email security.</strong> Email is not a fully secure medium. Please do not send ID
            numbers, bank details or other sensitive information by email or through our contact form.
          </li>
          <li>
            <strong>Governing law.</strong> These terms are governed by the laws of the Republic of
            South Africa.
          </li>
        </ul>
      </LegalPage>
    </>
  )
}
