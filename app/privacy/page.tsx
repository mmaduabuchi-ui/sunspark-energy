import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SunSpark Energy",
  description:
    "How SunSpark Energy collects, uses, and protects your personal information in compliance with the Nigeria Data Protection Act (NDPA).",
};

const LAST_UPDATED = "1 January 2026";
const COMPANY_NAME = "SunSpark Energy";
const CONTACT_EMAIL = "sunsparkenergy@proton.me";
const CONTACT_PHONE = "+234 902 935 5082";
const JURISDICTION = "Port Harcourt, Rivers State, Nigeria";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "lawful-basis", title: "4. Lawful Basis for Processing" },
  { id: "data-sharing", title: "5. How We Share Your Information" },
  { id: "data-security", title: "6. Data Security" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "your-rights", title: "8. Your Rights Under NDPA" },
  { id: "cookies", title: "9. Cookies and Tracking" },
  { id: "third-party", title: "10. Third-Party Links" },
  { id: "children", title: "11. Children's Privacy" },
  { id: "international", title: "12. International Transfers" },
  { id: "changes", title: "13. Changes to This Policy" },
  { id: "governing-law", title: "14. Governing Law" },
  { id: "contact", title: "15. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="prose-on-dark text-lg max-w-2xl">
            How we collect, use, and protect your personal information.
          </p>
          <div className="mt-6">
            <span className="legal-meta bg-navy-700 border-navy-600 text-navy-100">
              <span className="legal-meta-dot" />
              Last updated: {LAST_UPDATED}
            </span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section">
        <div className="container-x">
          <div className="legal-wrap">
            {/* Intro */}
            <p className="legal-intro">
              {COMPANY_NAME} is committed to protecting the privacy and
              confidentiality of your personal information. This Privacy Policy
              explains how we collect, use, store, and share your data when you
              visit our website, request a quote, or engage our solar energy
              services. We comply with the{" "}
              <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and
              other applicable data protection laws in Nigeria.
            </p>

            {/* Table of contents */}
            <nav className="legal-toc" aria-label="Table of contents">
              <p className="legal-toc-title">On this page</p>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ---------------- 1 ---------------- */}
            <div id="introduction" className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                {COMPANY_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) is a solar energy company providing
                installation, maintenance, and consultation services across
                Nigeria. We act as a <strong>data controller</strong> in
                respect of the personal information we collect from you.
              </p>
              <p>
                This policy applies to personal information collected through
                our website, quote request forms, WhatsApp communications,
                email correspondence, site surveys, and any other channel
                through which you interact with us.
              </p>
              <p>
                By using our website or engaging our services, you acknowledge
                that you have read and understood this Privacy Policy.
              </p>
            </div>

            {/* ---------------- 2 ---------------- */}
            <div id="information-collect" className="legal-section">
              <h2>2. Information We Collect</h2>

              <h3>2.1 Information You Provide Directly</h3>
              <p>
                When you request a quote, contact us, or engage our services,
                we may collect:
              </p>
              <ul>
                <li>
                  <strong>Identity and contact data:</strong> Full name, phone
                  number, email address, and physical address
                </li>
                <li>
                  <strong>Property information:</strong> Property type
                  (residential, commercial, industrial), location, and site
                  details
                </li>
                <li>
                  <strong>Energy usage data:</strong> Current electricity
                  consumption, appliance load requirements, backup needs, and
                  daily kWh targets
                </li>
                <li>
                  <strong>Payment information:</strong> Bank details or
                  transaction references necessary to process payments
                </li>
                <li>
                  <strong>Correspondence:</strong> Messages you send us via
                  email, WhatsApp, or our website forms
                </li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <p>
                When you visit our website, we may automatically collect
                certain technical information:
              </p>
              <ul>
                <li>
                  <strong>Usage data:</strong> IP address, browser type,
                  device type, pages visited, and time spent on pages
                </li>
                <li>
                  <strong>Cookies and similar technologies:</strong> Small
                  data files that help us understand how visitors use our site
                  (see Section 9)
                </li>
              </ul>

              <h3>2.3 Information from Site Surveys</h3>
              <p>
                During physical site assessments, our engineers may record:
              </p>
              <ul>
                <li>Roof dimensions and structural observations</li>
                <li>Electrical panel and wiring conditions</li>
                <li>Shading analysis and site photographs</li>
              </ul>
            </div>

            {/* ---------------- 3 ---------------- */}
            <div id="how-we-use" className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul>
                <li>
                  <strong>Provide our services:</strong> Assess your energy
                  requirements, design solar systems, prepare quotations, and
                  execute installations
                </li>
                <li>
                  <strong>Communicate with you:</strong> Respond to enquiries,
                  send project updates, schedule site visits, and provide
                  customer support
                </li>
                <li>
                  <strong>Process payments:</strong> Issue invoices and
                  confirm transactions
                </li>
                <li>
                  <strong>Improve our services:</strong> Analyse website usage
                  and customer feedback to enhance our offerings
                </li>
                <li>
                  <strong>Comply with legal obligations:</strong> Maintain
                  records as required by Nigerian law, including tax and
                  regulatory requirements
                </li>
                <li>
                  <strong>Marketing (with consent):</strong> Send you updates
                  about our services, promotions, or energy tips — only where
                  you have opted in, and you may unsubscribe at any time
                </li>
              </ul>
              <div className="legal-callout">
                <p>
                  <strong>We do not sell your personal data.</strong> We will
                  never sell, rent, or trade your personal information to
                  third parties for their own marketing purposes.
                </p>
              </div>
            </div>

            {/* ---------------- 4 ---------------- */}
            <div id="lawful-basis" className="legal-section">
              <h2>4. Lawful Basis for Processing</h2>
              <p>
                Under the NDPA, we must have a lawful basis for processing your
                personal data. We rely on the following:
              </p>
              <ul>
                <li>
                  <strong>Contractual necessity:</strong> Processing is
                  necessary to fulfil a contract with you or to take steps at
                  your request before entering into a contract (e.g., preparing
                  a quotation)
                </li>
                <li>
                  <strong>Consent:</strong> Where you have given clear consent
                  for a specific purpose (e.g., receiving marketing
                  communications)
                </li>
                <li>
                  <strong>Legitimate interests:</strong> Where processing is
                  necessary for our legitimate business interests, provided
                  those interests are not overridden by your rights (e.g.,
                  improving our website, preventing fraud)
                </li>
                <li>
                  <strong>Legal obligation:</strong> Where processing is
                  necessary to comply with Nigerian law
                </li>
              </ul>
            </div>

            {/* ---------------- 5 ---------------- */}
            <div id="data-sharing" className="legal-section">
              <h2>5. How We Share Your Information</h2>
              <p>
                We may share your personal information only in the following
                limited circumstances:
              </p>

              <h3>5.1 Service Providers</h3>
              <p>
                We may share data with trusted third parties who assist us in
                delivering our services, including:
              </p>
              <ul>
                <li>Logistics and delivery partners</li>
                <li>Payment processors and financial institutions</li>
                <li>
                  Equipment manufacturers and suppliers (for warranty
                  registration)
                </li>
                <li>IT and website hosting providers</li>
              </ul>
              <p>
                These providers are bound by confidentiality obligations and
                may only use your data for the purposes we specify.
              </p>

              <h3>5.2 Legal Requirements</h3>
              <p>
                We may disclose your information where required by law,
                regulation, court order, or governmental authority, or where
                disclosure is necessary to protect our rights, property, or
                safety, or that of our customers or the public.
              </p>

              <h3>5.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your
                personal information may be transferred. We will notify you
                before your data is transferred and becomes subject to a
                different privacy policy.
              </p>
            </div>

            {/* ---------------- 6 ---------------- */}
            <div id="data-security" className="legal-section">
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal information against unauthorised
                access, alteration, disclosure, or destruction. These
                measures include:
              </p>
              <ul>
                <li>
                  Encryption of data in transit and at rest where applicable
                </li>
                <li>
                  Access controls limiting data access to authorised personnel
                  only
                </li>
                <li>Secure authentication for internal systems</li>
                <li>Regular security reviews and software updates</li>
                <li>Confidentiality agreements with staff and contractors</li>
              </ul>
              <p>
                While we take reasonable steps to protect your data, no method
                of transmission over the internet or electronic storage is
                completely secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* ---------------- 7 ---------------- */}
            <div id="data-retention" className="legal-section">
              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfil the purposes for which it was collected,
                including:
              </p>
              <ul>
                <li>
                  <strong>During active service delivery:</strong> For the
                  duration of your project and any warranty period
                </li>
                <li>
                  <strong>After service completion:</strong> For a reasonable
                  period to handle warranty claims, resolve disputes, and
                  comply with legal obligations
                </li>
                <li>
                  <strong>Legal compliance:</strong> Where Nigerian law
                  requires longer retention (e.g., tax records)
                </li>
              </ul>
              <p>
                When data is no longer needed, we securely delete or anonymise
                it.
              </p>
            </div>

            {/* ---------------- 8 ---------------- */}
            <div id="your-rights" className="legal-section">
              <h2>8. Your Rights Under NDPA</h2>
              <p>
                Under the Nigeria Data Protection Act, you have the following
                rights:
              </p>
              <ul>
                <li>
                  <strong>Right to be informed:</strong> To know how your data
                  is being used
                </li>
                <li>
                  <strong>Right of access:</strong> To request a copy of the
                  personal data we hold about you
                </li>
                <li>
                  <strong>Right to rectification:</strong> To have inaccurate
                  or incomplete data corrected
                </li>
                <li>
                  <strong>Right to erasure:</strong> To request deletion of
                  your data, subject to legal and contractual obligations
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> To limit how
                  we use your data in certain circumstances
                </li>
                <li>
                  <strong>Right to data portability:</strong> To receive your
                  data in a structured, commonly used format
                </li>
                <li>
                  <strong>Right to object:</strong> To object to processing
                  based on legitimate interests or for direct marketing
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing
                  is based on consent, you may withdraw it at any time
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                details in Section 15. We will respond within 30 days.
              </p>
              <div className="legal-callout">
                <p>
                  You also have the right to lodge a complaint with the{" "}
                  <strong>Nigeria Data Protection Commission (NDPC)</strong> if
                  you believe your data protection rights have been violated.
                </p>
              </div>
            </div>

            {/* ---------------- 9 ---------------- */}
            <div id="cookies" className="legal-section">
              <h2>9. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                your browsing experience and analyse site traffic.
              </p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Necessary for the website
                  to function properly
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  visitors use our site so we can improve it
                </li>
              </ul>
              <p>
                You can control or disable cookies through your browser
                settings. Please note that disabling essential cookies may
                affect website functionality.
              </p>
            </div>

            {/* ---------------- 10 ---------------- */}
            <div id="third-party" className="legal-section">
              <h2>10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or
                services (such as WhatsApp or social media platforms). We are
                not responsible for the privacy practices or content of those
                third parties. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </div>

            {/* ---------------- 11 ---------------- */}
            <div id="children" className="legal-section">
              <h2>11. Children&apos;s Privacy</h2>
              <p>
                Our services are intended for adults. We do not knowingly
                collect personal information from children under the age of 18.
                If you believe we have inadvertently collected such data,
                please contact us so we can delete it promptly.
              </p>
            </div>

            {/* ---------------- 12 ---------------- */}
            <div id="international" className="legal-section">
              <h2>12. International Transfers</h2>
              <p>
                Your personal information is primarily stored and processed
                within Nigeria. Where we engage service providers that operate
                outside Nigeria, we take steps to ensure your data receives an
                adequate level of protection consistent with the NDPA.
              </p>
            </div>

            {/* ---------------- 13 ---------------- */}
            <div id="changes" className="legal-section">
              <h2>13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                for other operational reasons. The revised version will be
                posted on this page with an updated &ldquo;Last updated&rdquo;
                date.
              </p>
              <p>
                We encourage you to review this page periodically to stay
                informed about how we protect your information.
              </p>
            </div>

            {/* ---------------- 14 ---------------- */}
            <div id="governing-law" className="legal-section">
              <h2>14. Governing Law</h2>
              <p>
                This Privacy Policy is governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria. Any dispute
                arising in connection with this policy shall be subject to the
                exclusive jurisdiction of the courts of {JURISDICTION}.
              </p>
            </div>

            {/* ---------------- 15 ---------------- */}
            <div id="contact" className="legal-section">
              <h2>15. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or how we handle your personal data, please
                contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+2349029355082">{CONTACT_PHONE}</a>
                </li>
                <li>
                  <strong>Address:</strong> Port Harcourt, Nigeria
                </li>
              </ul>
            </div>

            {/* Footer nav */}
            <div className="mt-14 pt-8 border-t border-ink-200 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <p className="text-sm text-ink-500">
                Also read our{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-solar-700 hover:text-navy-800 underline underline-offset-2"
                >
                  Terms of Service
                </Link>
                .
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}