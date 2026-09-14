"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Residential Solar Installation",
    location: "Lagos, Nigeria",
    category: "Residential",
    description:
      "Complete solar panel installation for a 4-bedroom home with battery backup system.",
    image: "/images/photo_2026-08-26_01-04-05.jpg",
    stats: { panels: "24", capacity: "8kW", savings: "40%" },
  },
  {
    id: 2,
    title: "Commercial Office Building",
    location: "Abuja, Nigeria",
    category: "Commercial",
    description:
      "Large-scale solar installation for a corporate office complex reducing energy costs significantly.",
    image: "/images/photo_2026-08-26_01-05-17.jpg",
    stats: { panels: "120", capacity: "45kW", savings: "55%" },
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    location: "Port Harcourt, Nigeria",
    category: "Industrial",
    description:
      "Industrial-grade solar power system for a manufacturing facility with 24/7 power requirements.",
    image: "/images/photo_2026-08-26_01-06-00.jpg",
    stats: { panels: "250", capacity: "100kW", savings: "60%" },
  },
  {
    id: 4,
    title: "Solar Farm Installation",
    location: "Lagos, Nigeria",
    category: "Industrial",
    description:
      "Ground-mounted solar array delivering reliable clean power at scale.",
    image: "/images/photo_2026-08-26_01-06-45.jpg",
    stats: { panels: "180", capacity: "70kW", savings: "50%" },
  },
  {
    id: 5,
    title: "Rooftop Commercial Array",
    location: "Abuja, Nigeria",
    category: "Commercial",
    description:
      "Rooftop solar system designed for maximum energy yield in a compact footprint.",
    image: "/images/photo_2026-08-26_01-07-14.jpg",
    stats: { panels: "90", capacity: "35kW", savings: "48%" },
  },
  {
    id: 6,
    title: "Hybrid Solar & Battery System",
    location: "Port Harcourt, Nigeria",
    category: "Residential",
    description:
      "Hybrid installation combining solar generation with battery storage for 24/7 uptime.",
    image: "/images/photo_2026-08-26_01-07-26.jpg",
    stats: { panels: "60", capacity: "25kW", savings: "52%" },
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

const whatsappNumber = "2349029355082";
const whatsappMessage =
  "Hello SunSpark Energy! I'm interested in learning more about your completed projects and solar solutions.";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x text-center">
          <span className="eyebrow eyebrow-light">Our Work</span>
          <h1 className="mb-4">Our Projects</h1>
          <p className="prose-on-dark text-lg max-w-2xl mx-auto">
            See how we&apos;re powering Nigeria&apos;s future with solar energy.
          </p>
        </div>
      </section>

      {/* ================= FILTER + GRID ================= */}
      <section className="section">
        <div className="container-x">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border-2 ${
                    isActive
                      ? "bg-navy-800 text-white border-navy-800 shadow-md"
                      : "bg-white text-ink-600 border-ink-200 hover:border-navy-800 hover:text-navy-800"
                  }`}
                >
                  {category}
                  <span
                    className={`ml-2 text-xs ${
                      isActive ? "text-solar-400" : "text-ink-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <p className="text-center text-sm text-ink-500 mb-8">
            Showing{" "}
            <strong className="text-navy-800">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <strong className="text-navy-800">{activeCategory}</strong>
              </>
            )}
          </p>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="card card-hover overflow-hidden group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 w-full bg-ink-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy-900/90 via-navy-900/20 to-transparent" />

                  {/* Category pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-navy-800 text-xs font-bold px-3 py-1.5 rounded-full">
                    {project.category}
                  </div>

                  {/* Capacity badge */}
                  <div className="absolute top-4 right-4 bg-solar-500 text-navy-800 text-sm font-black px-3 py-1.5 rounded-lg shadow-lg">
                    {project.stats.capacity}
                  </div>

                  {/* Title over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-solar-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {project.location}
                    </p>
                    <h2 className="text-white text-lg font-bold leading-snug">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col grow">
                  <p className="prose-muted mb-5 grow">
                    {project.description}
                  </p>

                  {/* Stats */}
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

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="prose-muted mb-4">
                No projects found in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="btn btn-outline"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= WHY OUR PROJECTS WORK ================= */}
      <section className="bg-ink-50 section">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="eyebrow">Our Approach</span>
            <h2 className="section-title">
              Every Project Follows the Same Process
            </h2>
            <span className="title-rule title-rule-center" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Site Assessment",
                text: "We measure your actual load, inspect the roof, and check shading before quoting.",
              },
              {
                step: "02",
                title: "System Design",
                text: "Panels, inverter, and battery sized to your consumption — not oversold.",
              },
              {
                step: "03",
                title: "Installation",
                text: "Qualified technicians install, wire, and commission the system on site.",
              },
              {
                step: "04",
                title: "Handover & Support",
                text: "Performance check, operating walkthrough, and ongoing maintenance support.",
              },
            ].map((item) => (
              <div key={item.step} className="card p-6">
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
      <section className="section">
        <div className="container-x">
          <div className="bg-linear-to-br from-navy-800 to-navy-900 on-dark rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-4">
              Want to See More Projects?
            </h2>
            <p className="prose-on-dark mb-8 max-w-lg mx-auto">
              Contact us on WhatsApp to see our complete portfolio of completed
              projects and success stories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green btn-lg"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us on WhatsApp
              </Link>

              <Link href="/contact" className="btn btn-outline-light btn-lg">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}