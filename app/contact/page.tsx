import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Solar Assessment in Nigeria",
  description:
    "Request a free solar assessment from SunSpark Energy. Call 0703 988 5479, email sunsparkenergy@proton.me, or chat on WhatsApp. Available 24/7.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SunSpark Energy | Free Solar Assessment",
    description:
      "Request a free solar assessment. Call, email, or WhatsApp — available 24/7.",
    url: "/contact",
  },
};

const contactDetails = [
  {
    label: "Phone",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    icon: "📞",
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "✉",
  },
  {
    label: "Address",
    value: `${SITE.address.city}, ${SITE.address.countryName}`,
    href: null as string | null,
    icon: "📍",
  },
];

export default function Contact() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow eyebrow-light">Get In Touch</span>
          <h1 className="mb-5">Contact SunSpark Energy</h1>
          <p className="prose-on-dark text-xl">
            Request your free solar energy consultation today.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {/* ---------- Contact Information ---------- */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-navy-800">
              Get In Touch
            </h2>
            <p className="prose-body mb-8">
              Reach out by phone, email, or WhatsApp — or send us a request
              using the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-5 mb-8">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-ink-50 border border-ink-200"
                >
                  <div className="icon-badge shrink-0">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy-800 font-semibold hover:text-solar-600 transition-colors wrap-break-word"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-800 font-semibold wrap-break-word">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              Chat on WhatsApp
            </Link>

            {/* Availability */}
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4 text-navy-800">
                Availability
              </h3>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-brandgreen-50 border border-brandgreen-100">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brandgreen-500 text-white shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-navy-800 text-sm">
                    Open 24 hours, 7 days a week
                  </p>
                  <p className="text-xs text-ink-500">
                    Including weekends and public holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Quote Form ---------- */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="bg-ink-50 section">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="eyebrow">Visit Us</span>
            <h2 className="section-title">Our Location</h2>
            <span className="title-rule title-rule-center" />
          </div>

          <div className="h-80 rounded-2xl border border-ink-200 bg-ink-100 flex flex-col items-center justify-center gap-3">
            <span className="text-5xl">🗺️</span>
            <p className="prose-muted">Google Map will be added here</p>
            <p className="text-xs text-ink-400">
              {SITE.address.city}, {SITE.address.countryName}
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-brandgreen-500 on-dark section">
        <div className="container-x text-center">
          <h2 className="mb-4">Switch To Clean Energy Today</h2>
          <p className="prose-on-dark text-lg max-w-xl mx-auto mb-8">
            SunSpark Energy is ready to design the right solar solution for
            you.
          </p>
          <Link href="/projects" className="btn btn-outline-light">
            View Our Projects
          </Link>
        </div>
      </section>
    </main>
  );
}