import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Reliability",
    description:
      "Premium components engineered for maximum efficiency and long-term performance.",
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
        <path d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    description:
      "Reducing carbon footprint with clean, renewable energy for generations to come.",
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
        <path d="M11 20A7 7 0 0 1 4 13c0-6 8-11 8-11s8 5 8 11a7 7 0 0 1-7 7Z" />
        <path d="M11 20c0-4 1-7 4-9" />
      </svg>
    ),
  },
  {
    title: "Affordability",
    description:
      "Custom solar configurations designed to reduce energy costs from day one.",
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
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M14.5 9.5a2.5 2.5 0 0 0-2.5-2 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1-2.5-2" />
      </svg>
    ),
  },
];

const reasons = [
  "Expert technical execution",
  "Professional energy assessment",
  "Tailored residential and commercial solutions",
  "Reliable customer support",
];

const stats = [
  { value: "150+", label: "Installations Completed" },
  { value: "2MW+", label: "Capacity Installed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const timeline = [
  {
    year: "2019",
    title: "Founded in Lagos",
    text: "SunSpark Energy was established to address Nigeria's growing demand for reliable, affordable solar power.",
  },
  {
    year: "2021",
    title: "Expanded to Commercial",
    text: "Moved beyond residential work into office complexes and small industrial facilities.",
  },
  {
    year: "2023",
    title: "Battery Storage Added",
    text: "Introduced hybrid and battery-backed systems for clients needing power beyond daylight hours.",
  },
  {
    year: "2026",
    title: "150+ Projects Delivered",
    text: "Now serving homeowners, businesses, and industrial clients across multiple Nigerian states.",
  },
];

const credentials = [
  "Qualified installation technicians",
  "Tier-1 equipment suppliers",
  "NEMSA-aligned safety practices",
  "Written warranty on all work",
];

export default function About() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow eyebrow-light">About Us</span>
          <h1 className="mb-5">About SunSpark Energy</h1>
          <p className="prose-on-dark text-xl max-w-2xl">
            Powering a brighter future with dependable solar energy across
            Nigeria.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE (with image) ================= */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">Who We Are</h2>
              <span className="title-rule" />

              <p className="prose-lead mb-5">
                At SunSpark Energy, we are dedicated to powering a brighter
                future by providing dependable solar energy systems across
                Nigeria.
              </p>

              <p className="prose-body mb-8">
                We deliver smart, reliable, and affordable solar solutions for
                homes, businesses, and communities — designed around your
                actual energy usage, not a fixed package. From the first site
                assessment to ongoing maintenance, every project is handled by
                our own qualified team.
              </p>

              <ul className="feature-list mb-8">
                {credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Book Free Assessment
                </Link>
                <Link href="/projects" className="btn btn-outline">
                  View Our Projects
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-80 md:h-112 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/photo_2026-08-26_01-07-14.jpg"
                  alt="SunSpark Energy solar installation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-xl border border-ink-200 px-6 py-4">
                <p className="text-3xl font-black text-gradient-solar">
                  2MW+
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Capacity Installed
                </p>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-ink-50 border border-ink-200"
              >
                <p className="text-3xl md:text-4xl font-extrabold text-gradient-solar mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-ink-50 section">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-t-4 border-t-solar-500">
              <h2 className="text-2xl font-bold mb-4 text-navy-800">
                Our Mission
              </h2>
              <p className="prose-body">
                To provide reliable, affordable, and sustainable solar energy
                solutions that improve access to clean power across Nigeria.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-t-navy-800">
              <h2 className="text-2xl font-bold mb-4 text-navy-800">
                Our Vision
              </h2>
              <p className="prose-body">
                To become a leading solar energy provider delivering innovative
                renewable energy solutions across Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="section">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <span className="title-rule title-rule-center" />
            <p className="section-subtitle">
              The principles behind every installation we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card card-hover p-6">
                <div className="icon-badge mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-navy-800">
                  {value.title}
                </h3>
                <p className="prose-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-navy-800 on-dark section">
        <div className="container-x">
          <div className="text-center mb-14">
            <span className="eyebrow eyebrow-light">Our Journey</span>
            <h2 className="section-title section-title-light">
              Growing With Nigeria&apos;s Solar Transition
            </h2>
            <span className="title-rule title-rule-center" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative p-6 rounded-xl bg-navy-700/50 border border-navy-700"
              >
                <p className="text-2xl font-black text-solar-400 mb-2">
                  {item.year}
                </p>
                <h3 className="text-base font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="prose-on-dark-muted text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-brandgreen-500 on-dark section">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-white/80">Our Advantage</span>
              <h2 className="mb-6">Why Choose SunSpark Energy?</h2>

              <ul className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 text-base text-white/95"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-brandgreen-600 font-black text-sm shrink-0 mt-0.5">
                      ✓
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">
                What You Get
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-solar-400 font-bold">→</span>
                  Free site assessment before any quote
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-solar-400 font-bold">→</span>
                  Written specification and clear pricing
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-solar-400 font-bold">→</span>
                  Installation by our own qualified team
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-solar-400 font-bold">→</span>
                  Post-installation performance verification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-solar-400 font-bold">→</span>
                  Ongoing maintenance and warranty support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-solar-500 section">
        <div className="container-x text-center">
          <h2 className="text-navy-800 mb-4">Ready to Switch to Solar?</h2>
          <p className="text-navy-800/80 text-lg mb-8 max-w-xl mx-auto">
            Request your free energy consultation today and discover how much
            you could save.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-navy btn-lg">
              Request Free Consultation
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}