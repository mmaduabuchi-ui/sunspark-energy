import Image from "next/image";
import Link from "next/link";

export default function ProjectsPreview() {
  const featured = [
    {
      image: "/images/photo_2026-08-26_01-04-05.jpg",
      title: "Residential Solar Installation",
      location: "Lagos, Nigeria",
      description:
        "A complete 8kW rooftop system with battery backup — powering a family home around the clock.",
      stats: { panels: "24", capacity: "8kW", savings: "40%" },
    },
    {
      image: "/images/photo_2026-08-26_01-06-00.jpg",
      title: "Industrial Warehouse System",
      location: "Port Harcourt, Nigeria",
      description:
        "A 100kW industrial-grade installation delivering uninterrupted power to a manufacturing facility.",
      stats: { panels: "250", capacity: "100kW", savings: "60%" },
    },
    {
      image: "/images/photo_2026-08-26_01-05-17.jpg",
      title: "Commercial Office Building",
      location: "Abuja, Nigeria",
      description:
        "Large-scale solar installation for a corporate office complex, significantly reducing energy costs.",
      stats: { panels: "120", capacity: "45kW", savings: "55%" },
    },
  ];

  return (
    <section className="section">
      <div className="container-x">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <span className="title-rule title-rule-center" />
          <p className="section-subtitle">
            Residential, commercial, and industrial solar installations
            completed by SunSpark Energy across Nigeria.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <article
              key={project.title}
              className="card card-hover overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 w-full bg-ink-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/90 via-navy-900/25 to-transparent" />

                {/* Capacity badge */}
                <div className="absolute top-4 right-4 bg-solar-500 text-navy-800 text-sm font-black px-3 py-1.5 rounded-lg shadow-lg">
                  {project.stats.capacity}
                </div>

                {/* Title over image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-solar-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {project.location}
                  </p>
                  <h3 className="text-white text-lg font-bold leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col grow">
                <p className="prose-muted mb-5 grow">
                  {project.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-ink-200">
                  <div>
                    <p className="text-xs text-ink-400 mb-0.5">Panels</p>
                    <p className="text-sm font-bold text-navy-800">
                      {project.stats.panels}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 mb-0.5">Capacity</p>
                    <p className="text-sm font-bold text-navy-800">
                      {project.stats.capacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 mb-0.5">Savings</p>
                    <p className="text-sm font-bold text-solar-600">
                      {project.stats.savings}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link href="/projects" className="btn btn-primary btn-lg">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}