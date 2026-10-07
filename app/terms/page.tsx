import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing the use of SunSpark Energy's website and solar installation services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | SunSpark Energy",
    description:
      "Terms and conditions governing the use of SunSpark Energy's website and solar installation services.",
    url: "/terms",
  },
};

const LAST_UPDATED = "1 January 2026";
const COMPANY_NAME = "SunSpark Energy";
const CONTACT_EMAIL = "sunsparkenergy@proton.me";
const CONTACT_PHONE = "+234 902 935 5082";
const CONTACT_PHONE_TEL = "+2349029355082";
const JURISDICTION = "Port Harcourt, Rivers State, Nigeria";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "definitions", title: "2. Definitions" },
  { id: "services", title: "3. Our Services" },
  { id: "quotes", title: "4. Quotes and Estimates" },
  { id: "payment", title: "5. Pricing and Payment" },
  { id: "installation", title: "6. Installation and Delivery" },
  { id: "warranty", title: "7. Warranty" },
  { id: "customer-obligations", title: "8. Customer Obligations" },
  { id: "cancellation", title: "9. Cancellation and Refunds" },
  { id: "website-use", title: "10. Website Use" },
  { id: "intellectual-property", title: "11. Intellectual Property" },
  { id: "liability", title: "12. Limitation of Liability" },
  { id: "indemnity", title: "13. Indemnity" },
  { id: "force-majeure", title: "14. Force Majeure" },
  { id: "governing-law", title: "15. Governing Law" },
  { id: "changes", title: "16. Changes to These Terms" },
  { id: "contact", title: "17. Contact Us" },
];

export default function TermsOfService() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 className="mb-4">Terms of Service</h1>
          <p className="prose-on-dark text-lg max-w-2xl">
            Please read these terms carefully before using our website or
            engaging our services.
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
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access
              to and use of the {COMPANY_NAME} website, as well as any solar
              energy products, installation services, consultations, and
              maintenance services we provide. By accessing our website,
              requesting a quote, or engaging our services, you agree to be
              bound by these Terms.
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
            <div id="acceptance" className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you confirm that you have
                read, understood, and agree to be bound by these Terms. If you
                do not agree with any part of these Terms, you must
                discontinue use of the website immediately.
              </p>
              <p>
                Where services are engaged on behalf of a company or other
                legal entity, you represent that you have the authority to
                bind that entity to these Terms.
              </p>
            </div>

            {/* ---------------- 2 ---------------- */}
            <div id="definitions" className="legal-section">
              <h2>2. Definitions</h2>
              <ul>
                <li>
                  <strong>&ldquo;Company&rdquo;</strong>,{" "}
                  <strong>&ldquo;we&rdquo;</strong>,{" "}
                  <strong>&ldquo;us&rdquo;</strong>, or{" "}
                  <strong>&ldquo;our&rdquo;</strong> refers to{" "}
                  {COMPANY_NAME}.
                </li>
                <li>
                  <strong>&ldquo;Customer&rdquo;</strong>,{" "}
                  <strong>&ldquo;you&rdquo;</strong>, or{" "}
                  <strong>&ldquo;your&rdquo;</strong> refers to any person or
                  entity accessing our website or engaging our services.
                </li>
                <li>
                  <strong>&ldquo;Services&rdquo;</strong> means solar system
                  design, supply, installation, commissioning, maintenance,
                  consultation, and any related work provided by the Company.
                </li>
                <li>
                  <strong>&ldquo;Products&rdquo;</strong> means solar panels,
                  inverters, batteries, mounting structures, cables,
                  accessories, and any other equipment supplied by the
                  Company.
                </li>
                <li>
                  <strong>&ldquo;Agreement&rdquo;</strong> means these Terms
                  together with any written quotation, invoice, or contract
                  issued by the Company.
                </li>
              </ul>
            </div>

            {/* ---------------- 3 ---------------- */}
            <div id="services" className="legal-section">
              <h2>3. Our Services</h2>
              <p>
                {COMPANY_NAME} provides solar energy solutions for
                residential, commercial, and industrial clients across
                Nigeria. Our services include, but are not limited to:
              </p>
              <ul>
                <li>Site assessment and energy requirement analysis</li>
                <li>Solar system design and engineering</li>
                <li>Supply of solar panels, inverters, and batteries</li>
                <li>Installation, wiring, and commissioning</li>
                <li>Preventive maintenance and technical support</li>
                <li>Energy consultation and advisory services</li>
              </ul>
              <p>
                The scope of any specific engagement will be set out in the
                written quotation or contract issued to you. Any work not
                expressly listed in that document is excluded.
              </p>
            </div>

            {/* ---------------- 4 ---------------- */}
            <div id="quotes" className="legal-section">
              <h2>4. Quotes and Estimates</h2>
              <p>
                All quotations are valid for <strong>30 days</strong> from the
                date of issue unless otherwise stated in writing. Quotations
                are based on the information available at the time of
                assessment, including your reported energy consumption, site
                conditions, and chosen equipment.
              </p>
              <p>
                If site conditions differ materially from those observed
                during assessment, or if you request changes to the
                specification, we reserve the right to revise the quotation
                accordingly. We will notify you in writing before any
                additional costs are incurred.
              </p>
              <div className="legal-callout">
                <p>
                  <strong>Please note:</strong> Verbal estimates are
                  indicative only and are not binding. Only a written
                  quotation signed or confirmed by both parties constitutes a
                  binding commitment.
                </p>
              </div>
            </div>

            {/* ---------------- 5 ---------------- */}
            <div id="payment" className="legal-section">
              <h2>5. Pricing and Payment</h2>
              <h3>5.1 Payment Terms</h3>
              <p>
                Unless otherwise agreed in writing, the following payment
                structure applies:
              </p>
              <ul>
                <li>
                  <strong>Deposit:</strong> A non-refundable deposit of 60% of
                  the total contract value is required before procurement of
                  equipment.
                </li>
                <li>
                  <strong>Balance:</strong> The remaining 40% is due upon
                  completion of installation and before final commissioning.
                </li>
              </ul>
              <p>
                For maintenance and service contracts, payment terms will be
                specified in the relevant service agreement.
              </p>

              <h3>5.2 Currency and Taxes</h3>
              <p>
                All prices are quoted in Nigerian Naira (NGN) unless otherwise
                stated. Prices are exclusive of any applicable taxes, duties,
                or levies, which will be added where required by law.
              </p>

              <h3>5.3 Late Payment</h3>
              <p>
                Where payment is overdue, we reserve the right to suspend
                work, withhold delivery, or charge interest on the outstanding
                amount at a rate of 2% per month or the maximum permitted by
                law, whichever is lower.
              </p>
            </div>

            {/* ---------------- 6 ---------------- */}
            <div id="installation" className="legal-section">
              <h2>6. Installation and Delivery</h2>
              <h3>6.1 Timelines</h3>
              <p>
                Installation timelines provided are estimates and depend on
                equipment availability, site readiness, weather conditions,
                and access to the site. We will make reasonable efforts to
                meet agreed dates but shall not be liable for delays arising
                from circumstances beyond our control.
              </p>

              <h3>6.2 Site Access</h3>
              <p>
                You agree to provide safe and unobstructed access to the
                installation site during agreed working hours. Any delay
                caused by lack of access may result in additional charges for
                return visits.
              </p>

              <h3>6.3 Risk and Title</h3>
              <p>
                Risk in the Products passes to you upon delivery to the site.
                Title to the Products remains with the Company until payment
                has been received in full.
              </p>

              <h3>6.4 Structural Suitability</h3>
              <p>
                While we assess roof and structural suitability as part of our
                survey, we are not structural engineers. You are responsible
                for ensuring that your roof, building, or mounting surface is
                structurally sound and capable of supporting the installation.
              </p>
            </div>

            {/* ---------------- 7 ---------------- */}
            <div id="warranty" className="legal-section">
              <h2>7. Warranty</h2>
              <h3>7.1 Workmanship Warranty</h3>
              <p>
                {COMPANY_NAME} warrants its installation workmanship for a
                period of <strong>12 months</strong> from the date of
                commissioning. If a defect arising from our workmanship
                appears within this period, we will rectify it at no cost to
                you.
              </p>

              <h3>7.2 Manufacturer Warranty</h3>
              <p>
                Products supplied are covered by the respective
                manufacturers&apos; warranties. Typical warranty periods are:
              </p>
              <ul>
                <li>Solar panels: 10–25 years (performance warranty)</li>
                <li>Inverters: 2–10 years depending on model</li>
                <li>Batteries: 2–10 years depending on chemistry and model</li>
                <li>Mounting structures and cables: 1–5 years</li>
              </ul>
              <p>
                Exact warranty terms are set out in the documentation supplied
                with each product. We will assist you in submitting warranty
                claims to manufacturers, but we are not the warrantor for
                those products.
              </p>

              <h3>7.3 Warranty Exclusions</h3>
              <p>This warranty does not cover:</p>
              <ul>
                <li>
                  Damage caused by misuse, negligence, or accidental damage
                </li>
                <li>
                  Damage from power surges, lightning, flooding, fire, or
                  other events outside our control
                </li>
                <li>
                  Modifications, repairs, or relocation carried out by
                  third parties without our written approval
                </li>
                <li>
                  Normal wear and tear, cosmetic deterioration, or gradual
                  reduction in battery capacity
                </li>
                <li>
                  Failure to perform recommended maintenance or to follow
                  operating instructions
                </li>
                <li>
                  Use of the system outside the parameters specified in the
                  design
                </li>
              </ul>

              <h3>7.4 Voiding of Warranty</h3>
              <p>
                The workmanship warranty is void if any part of the
                installation is tampered with, altered, or repaired by anyone
                other than {COMPANY_NAME} or its authorised representatives.
              </p>
            </div>

            {/* ---------------- 8 ---------------- */}
            <div id="customer-obligations" className="legal-section">
              <h2>8. Customer Obligations</h2>
              <p>You agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete information about your energy
                  usage, property, and requirements
                </li>
                <li>
                  Ensure safe and legal access to the installation site
                </li>
                <li>
                  Obtain any permissions, permits, or consents required from
                  landlords, co-owners, or relevant authorities
                </li>
                <li>
                  Follow all operating, safety, and maintenance instructions
                  provided
                </li>
                <li>
                  Not attempt to modify, relocate, or repair the system
                  yourself
                </li>
                <li>
                  Promptly notify us of any fault, damage, or performance
                  issue
                </li>
                <li>
                  Ensure that any existing electrical installation is safe and
                  compliant before we commence work
                </li>
              </ul>
            </div>

            {/* ---------------- 9 ---------------- */}
            <div id="cancellation" className="legal-section">
              <h2>9. Cancellation and Refunds</h2>
              <h3>9.1 Cancellation by You</h3>
              <p>
                You may cancel an order in writing. The following applies:
              </p>
              <ul>
                <li>
                  <strong>Before procurement begins:</strong> You forfeit the
                  deposit to cover design, survey, and administrative costs
                  already incurred.
                </li>
                <li>
                  <strong>After procurement but before installation:</strong>{" "}
                  You forfeit the deposit, and equipment already ordered may
                  only be returned at the manufacturer&apos;s discretion.
                  Where returns are refused, you remain liable for the full
                  equipment cost.
                </li>
                <li>
                  <strong>After installation begins:</strong> You are liable
                  for the full contract value, as the equipment is installed
                  and cannot be economically recovered.
                </li>
              </ul>

              <h3>9.2 Cancellation by Us</h3>
              <p>
                We may cancel or suspend an engagement if payment is not
                received, if site conditions are unsafe, if we discover
                misrepresentation of information, or if circumstances arise
                that make performance impractical. In such cases, you will be
                liable for costs incurred up to the date of cancellation.
              </p>

              <h3>9.3 Refunds</h3>
              <p>
                Refunds, where applicable, will be processed within 30 days of
                written agreement. Refunds will be made using the same payment
                method used for the original transaction, unless otherwise
                agreed.
              </p>
            </div>

            {/* ---------------- 10 ---------------- */}
            <div id="website-use" className="legal-section">
              <h2>10. Website Use</h2>
              <p>When using our website, you agree not to:</p>
              <ul>
                <li>
                  Use the website for any unlawful, fraudulent, or harmful
                  purpose
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of the
                  website or its underlying systems
                </li>
                <li>
                  Introduce viruses, malware, or any other harmful code
                </li>
                <li>
                  Scrape, copy, or republish substantial portions of our
                  content without permission
                </li>
                <li>
                  Interfere with the proper functioning or availability of the
                  website
                </li>
                <li>
                  Impersonate the Company, its staff, or any other person
                </li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access to the
                website at any time, without notice, if we reasonably believe
                these Terms have been breached.
              </p>
            </div>

            {/* ---------------- 11 ---------------- */}
            <div id="intellectual-property" className="legal-section">
              <h2>11. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos,
                images, illustrations, and software — is the property of{" "}
                {COMPANY_NAME} or its licensors and is protected by applicable
                copyright and trademark laws.
              </p>
              <p>
                You may view, download, and print content for personal,
                non-commercial reference only. Any other use, including
                reproduction, modification, distribution, or republication,
                requires our prior written consent.
              </p>
              <p>
                System designs, schematics, engineering drawings, and
                technical documentation prepared by {COMPANY_NAME} remain our
                intellectual property unless expressly assigned in writing.
              </p>
            </div>

            {/* ---------------- 12 ---------------- */}
            <div id="liability" className="legal-section">
              <h2>12. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {COMPANY_NAME} shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited
                to loss of profit, loss of revenue, loss of data, business
                interruption, or loss of opportunity, however arising.
              </p>
              <p>
                Our total aggregate liability arising out of or in connection
                with any engagement shall not exceed the total amount paid by
                you to us under the relevant contract.
              </p>
              <div className="legal-callout">
                <p>
                  <strong>Important:</strong> Nothing in these Terms excludes
                  or limits any liability that cannot lawfully be excluded,
                  including liability for fraud, death, or personal injury
                  caused by our negligence.
                </p>
              </div>
              <h3>12.1 Energy Savings</h3>
              <p>
                Any estimated savings, generation figures, or payback periods
                we provide are estimates only. Actual performance depends on
                factors outside our control, including weather, shading,
                usage patterns, equipment degradation, and grid availability.
                We do not guarantee specific savings or generation outcomes.
              </p>
            </div>

            {/* ---------------- 13 ---------------- */}
            <div id="indemnity" className="legal-section">
              <h2>13. Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless {COMPANY_NAME}, its
                directors, employees, and agents from any claims, damages,
                losses, liabilities, and expenses (including legal fees)
                arising from:
              </p>
              <ul>
                <li>Your breach of these Terms</li>
                <li>
                  Your failure to obtain necessary permits or permissions
                </li>
                <li>
                  Misinformation provided by you that affects system design or
                  safety
                </li>
                <li>
                  Any damage caused by your modification of the installed
                  system
                </li>
              </ul>
            </div>

            {/* ---------------- 14 ---------------- */}
            <div id="force-majeure" className="legal-section">
              <h2>14. Force Majeure</h2>
              <p>
                {COMPANY_NAME} shall not be liable for any failure or delay in
                performing its obligations where such failure or delay results
                from causes beyond its reasonable control. This includes, but
                is not limited to:
              </p>
              <ul>
                <li>Natural disasters, severe weather, or flooding</li>
                <li>Acts of government, changes in law, or regulatory action</li>
                <li>Power outages, grid failures, or utility restrictions</li>
                <li>Strikes, civil unrest, or labour disputes</li>
                <li>
                  Supply chain disruptions, equipment shortages, or transport
                  failures
                </li>
                <li>Epidemics, pandemics, or public health emergencies</li>
              </ul>
              <p>
                Where such an event occurs, timelines will be extended by a
                reasonable period, and we will notify you as soon as
                practicable.
              </p>
            </div>

            {/* ---------------- 15 ---------------- */}
            <div id="governing-law" className="legal-section">
              <h2>15. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria, and the
                courts of {JURISDICTION} shall have exclusive jurisdiction
                over any dispute arising from or in connection with these
                Terms.
              </p>
              <p>
                Before commencing legal proceedings, both parties agree to
                attempt to resolve any dispute in good faith through
                negotiation. If negotiation fails, the parties agree to
                consider mediation before resorting to litigation.
              </p>
            </div>

            {/* ---------------- 16 ---------------- */}
            <div id="changes" className="legal-section">
              <h2>16. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time to reflect changes
                in our services, legal requirements, or business practices.
                The revised version will be posted on this page with an
                updated &ldquo;Last updated&rdquo; date.
              </p>
              <p>
                Your continued use of our website or services after changes
                are posted constitutes acceptance of the revised Terms. We
                encourage you to review this page periodically.
              </p>
            </div>

            {/* ---------------- 17 ---------------- */}
            <div id="contact" className="legal-section">
              <h2>17. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
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
                  href="/privacy"
                  className="font-semibold text-solar-700 hover:text-navy-800 underline underline-offset-2"
                >
                  Privacy Policy
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