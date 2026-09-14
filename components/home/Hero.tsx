import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const trustStats = [
    { value: "150+", label: "Installations" },
    { value: "2MW+", label: "Capacity" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative bg-navy-900 on-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo_2026-08-26_01-06-45.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlay — navy from left, fades to reveal image on the right */}
      <div className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/90 to-navy-900/60" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container-x py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="eyebrow eyebrow-light">
            Solar Energy Solutions · Nigeria
          </span>

          {/* Headline */}
          <h1 className="mb-6 text-white">
            Reliable Solar Energy for{" "}
            <span className="text-gradient-solar">Homes and Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="prose-on-dark text-lg md:text-xl mb-10 max-w-2xl">
            SunSpark Energy designs, installs, and maintains professional
            solar systems that deliver dependable electricity — cutting your
            bills and ending reliance on unstable power.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote
            </Link>
            <Link href="/projects" className="btn btn-outline-light btn-lg">
              View Our Projects
            </Link>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg pt-8 border-t border-white/15">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-solar-400 mb-0.5">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-medium text-navy-100 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}