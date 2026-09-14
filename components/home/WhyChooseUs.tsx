const reasons = [
  {
    title: "Certified Engineers",
    description:
      "Installations carried out by qualified technicians following NEMSA-aligned safety standards.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Quality Components",
    description:
      "Tier-1 panels, inverters, and batteries from manufacturers with proven field reliability.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Free Energy Assessment",
    description:
      "We analyse your consumption and site conditions before quoting — no guesswork.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "Reliable Support",
    description:
      "Responsive after-sales service, warranty handling, and preventive maintenance visits.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3v3ZM3 19a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3v3Z" />
      </svg>
    ),
  },
];

const guarantees = [
  "Site assessment before every quote",
  "Written warranty on workmanship and products",
  "Installation by qualified technicians only",
  "Post-installation performance check",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink-50 section">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — heading + guarantees */}
          <div>
            <span className="eyebrow">Our Advantage</span>
            <h2 className="section-title">
              Why Choose SunSpark Energy?
            </h2>
            <span className="title-rule" />

            <p className="prose-body mb-8">
              Solar is a long-term investment. We build systems that hold up
              over years of Nigerian weather, load patterns, and grid
              instability — backed by support you can actually reach.
            </p>

            <ul className="feature-list mb-8">
              {guarantees.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn btn-primary">
                Book Free Assessment
              </a>
              <a href="/about" className="btn btn-outline">
                About Us
              </a>
            </div>
          </div>

          {/* Right — reason cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <article key={reason.title} className="card card-hover p-5">
                <div className="icon-badge mb-3">{reason.icon}</div>

                <h3 className="text-base font-bold mb-1.5 text-navy-800">
                  {reason.title}
                </h3>

                <p className="text-sm text-ink-500 leading-relaxed">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}