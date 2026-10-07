"use client";

import Image from "next/image";
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

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
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
        Showing <strong className="text-navy-800">{filtered.length}</strong>{" "}
        {filtered.length === 1 ? "project" : "projects"}
        {activeCategory !== "All" && (
          <>
            {" "}
            in <strong className="text-navy-800">{activeCategory}</strong>
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
            <div className="relative h-56 w-full bg-ink-100 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} — solar installation in ${project.location} by SunSpark Energy`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-navy-900/90 via-navy-900/20 to-transparent" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-navy-800 text-xs font-bold px-3 py-1.5 rounded-full">
                {project.category}
              </div>

              <div className="absolute top-4 right-4 bg-solar-500 text-navy-800 text-sm font-black px-3 py-1.5 rounded-lg shadow-lg">
                {project.stats.capacity}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-solar-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {project.location}
                </p>
                <h2 className="text-white text-lg font-bold leading-snug">
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="p-6 flex flex-col grow">
              <p className="prose-muted mb-5 grow">{project.description}</p>

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
    </>
  );
}