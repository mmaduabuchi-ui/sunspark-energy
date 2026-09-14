import Link from "next/link";

const services = [
  {
    title: "Bifacial Solar Panels",
    description:
      "Dual-sided panels that capture reflected light for up to 30% more energy output.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="14" rx="1.5" />
        <path d="M3 9h18M3 13.5h18M9 4v14M15 4v14" />
        <path d="M12 18v3M8 21h8" />
      </svg>
    ),
  },
  {
    title: "Smart Solar Solutions",
    description:
      "Intelligent systems with monitoring and optimization for maximum output.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M4 9h-1M4 15h-1M21 9h-1M21 15h-1M9 4V3M15 4V3M9 21v-1M15 21v-1" />
      </svg>
    ),
  },
  {
    title: "Commercial Systems",
    description:
      "Large-scale installations designed for offices, factories, and industrial sites.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    ),
  },
  {
    title: "Residential Solar",
    description:
      "Complete home systems that cut electricity bills and end generator dependence.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description:
      "Inspections, performance monitoring, and priority support to keep systems at peak.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9Z" />
        <path d="M14.7 6.3 17 4" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container-x">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <span className="title-rule title-rule-center" />
          <p className="section-subtitle">
            Professional solar solutions designed around your energy needs —
            from single homes to industrial facilities.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="card card-hover p-6">
              <div className="icon-badge mb-4">{service.icon}</div>

              <h3 className="text-lg font-bold mb-2 text-navy-800">
                {service.title}
              </h3>

              <p className="prose-muted">{service.description}</p>
            </article>
          ))}

          {/* CTA card — fills the empty 6th slot */}
          <article className="rounded-2xl p-6 flex flex-col justify-between bg-linear-to-br from-navy-800 to-navy-900 on-dark">
            <div>
              <div className="icon-badge icon-badge-navy mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2 text-white">
                Not sure what you need?
              </h3>

              <p className="prose-on-dark-muted text-sm">
                Our engineers will assess your usage and recommend the right
                configuration.
              </p>
            </div>

            <Link href="/services" className="btn btn-primary mt-6 text-sm">
              Explore All Services
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}