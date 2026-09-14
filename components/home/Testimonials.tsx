const testimonials = [
  {
    quote:
      "SunSpark installed an 8kW system for our home and we have not run the generator since. The team was professional, the installation was neat, and the system has been flawless for over a year.",
    name: "Adaeze Okonkwo",
    role: "Homeowner",
    location: "Lekki, Lagos",
    initials: "AO",
    rating: 5,
  },
  {
    quote:
      "Our office was spending heavily on diesel every month. After the 45kW installation, our running costs dropped dramatically. The monitoring app makes it easy to track performance.",
    name: "Ibrahim Musa",
    role: "Operations Manager",
    location: "Abuja",
    initials: "IM",
    rating: 5,
  },
  {
    quote:
      "What stood out was the assessment before the quote. They measured our actual load and designed around it instead of overselling capacity we did not need. Honest work.",
    name: "Chinedu Eze",
    role: "Factory Owner",
    location: "Port Harcourt",
    initials: "CE",
    rating: 5,
  },
  {
    quote:
      "We had a battery fault eight months in. SunSpark handled the warranty claim with the manufacturer and had it resolved within two weeks. That after-sales support is rare here.",
    name: "Folake Adeyemi",
    role: "Business Owner",
    location: "Victoria Island, Lagos",
    initials: "FA",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < count ? "text-solar-500" : "text-ink-300"}
          aria-hidden="true"
        >
          <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink-50 section">
      <div className="container-x">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <span className="title-rule title-rule-center" />
          <p className="section-subtitle">
            Real feedback from homeowners and businesses we have powered across
            Nigeria.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card p-6 md:p-7 flex flex-col relative"
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-4 right-6 text-6xl leading-none font-serif text-solar-200 select-none"
                aria-hidden="true"
              >
                &rdquo;
              </span>

              {/* Stars */}
              <div className="mb-4">
                <Stars count={t.rating} />
              </div>

              {/* Quote */}
              <blockquote className="prose-body grow mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 pt-5 border-t border-ink-200">
                <div className="w-11 h-11 rounded-full bg-linear-to-br from-navy-700 to-navy-900 text-solar-400 font-bold text-sm flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-navy-800 text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-ink-500 truncate">
                    {t.role} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 pt-10 border-t border-ink-200 text-center">
          <p className="text-sm font-semibold text-ink-500 uppercase tracking-wider mb-2">
            Trusted across Nigeria
          </p>
          <p className="prose-muted max-w-xl mx-auto">
            Join over 150 homeowners and businesses who have switched to solar
            with SunSpark Energy.
          </p>
        </div>
      </div>
    </section>
  );
}