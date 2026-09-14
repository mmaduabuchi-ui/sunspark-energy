import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Bifacial Solar Panel Installation",
    tagline: "Maximum yield from the same roof",
    description:
      "Advanced bifacial solar panels that capture sunlight from both sides for maximum energy generation. Perfect for residential and commercial applications.",
    image: "/services/bifacialsolar-panel.jpg",
    features: [
      "Dual-sided energy capture",
      "Up to 30% more efficiency",
      "Tier-1 panel quality",
      "25-year performance warranty",
    ],
  },
  {
    id: 2,
    title: "Smart Solar Solutions",
    tagline: "Monitor and optimise from anywhere",
    description:
      "Intelligent solar energy systems with smart monitoring and optimization features for maximum power output and energy savings.",
    image: "/services/Gemini_Generated_Image_dtglwpdtglwpdtgl.png",
    features: [
      "Real-time performance monitoring",
      "Automatic fault detection",
      "Energy storage ready",
      "Remote access via mobile app",
    ],
  },
  {
    id: 3,
    title: "Commercial Solar Systems",
    tagline: "Cut operational costs at scale",
    description:
      "Large-scale solar installations designed for businesses, offices, and industrial facilities to reduce operational costs.",
    image: "/services/Gemini_Generated_Image_p0ki6dp0ki6dp0ki.png",
    features: [
      "Custom system design",
      "High-capacity configurations",
      "Diesel and grid cost reduction",
      "ROI and payback analysis",
    ],
  },
  {
    id: 4,
    title: "Residential Solar Power",
    tagline: "End generator dependence at home",
    description:
      "Complete home solar solutions that provide clean, renewable energy while significantly reducing your electricity bills.",
    image: "/services/Gemini_Generated_Image_u40pnfu40pnfu40p.png",
    features: [
      "Energy independence",
      "Lower monthly bills",
      "Professional installation",
      "Maintenance included",
    ],
  },
  {
    id: 5,
    title: "Solar Maintenance & Support",
    tagline: "Keep systems performing year-round",
    description:
      "Comprehensive maintenance and support services to ensure your solar system operates at peak performance year-round.",
    image: "/services/Gemini_Generated_Image_yaq8opyaq8opyaq8.png",
    features: [
      "Scheduled inspections",
      "Performance monitoring",
      "Priority technical support",
      "Preventive maintenance",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Consultation",
    text: "Tell us about your energy needs, current bills, and backup requirements.",
  },
  {
    step: "02",
    title: "Site Assessment",
    text: "We measure your load, inspect the roof, and check shading before designing.",
  },
  {
    step: "03",
    title: "System Design & Quote",
    text: "You receive a written specification with pricing and expected output.",
  },
  {
    step: "04",
    title: "Installation & Handover",
    text: "Qualified technicians install, commission, and walk you through the system.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x text-center">
          <span className="eyebrow eyebrow-light">What We Do</span>
          <h1 className="mb-4">Our Services</h1>
          <p className="prose-on-dark text-lg max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your needs — from
            single homes to industrial facilities.
          </p>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="section">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="card card-hover overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-ink-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-900/40 to-transparent" />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-solar-600 mb-2">
                    {service.tagline}
                  </span>

                  <h2 className="text-xl font-bold text-navy-800 mb-3 leading-snug">
                    {service.title}
                  </h2>

                  <p className="prose-muted mb-5 grow">
                    {service.description}
                  </p>

                  <ul className="feature-list mb-6">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="text-sm font-bold text-solar-600 hover:text-navy-800 transition-colors inline-flex items-center gap-1.5 mt-auto"
                  >
                    Request This Service
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}

            {/* CTA card fills the 6th slot */}
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
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>

                <h2 className="text-xl font-bold mb-3 text-white">
                  Need a Custom Configuration?
                </h2>

                <p className="prose-on-dark-muted text-sm mb-6">
                  Every site is different. We design around your actual
                  consumption, roof layout, and budget — not a fixed package.
                </p>

                <ul className="feature-list mb-6 [&_li]:text-navy-100">
                  <li>Free energy assessment</li>
                  <li>Written specification and quote</li>
                  <li>No obligation to proceed</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="btn btn-primary btn-block mt-2"
              >
                Book Free Assessment
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-ink-50 section">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">From First Call to Switch-On</h2>
            <span className="title-rule title-rule-center" />
            <p className="section-subtitle">
              A clear four-step process, whether you&apos;re powering a home or
              an industrial facility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="card p-6 relative">
                <p className="text-3xl font-black text-solar-500 mb-3">
                  {item.step}
                </p>
                <h3 className="text-base font-bold mb-2 text-navy-800">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-solar-500 section">
        <div className="container-x text-center">
          <h2 className="text-navy-800 mb-4">
            Not sure which system fits your needs?
          </h2>
          <p className="text-navy-800/80 text-lg mb-8 max-w-xl mx-auto">
            Our engineers will assess your energy usage and recommend the right
            configuration — free of charge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-navy btn-lg">
              Request Free Assessment
            </Link>
            <Link href="/projects" className="btn btn-outline btn-lg">
              See Completed Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}