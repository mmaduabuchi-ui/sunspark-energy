import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Projects — Residential, Commercial & Industrial",
  description:
    "See SunSpark Energy's completed solar installations across Nigeria — residential rooftops, commercial offices, industrial warehouses, and hybrid battery systems.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Solar Projects | SunSpark Energy",
    description:
      "Completed solar installations across Nigeria — residential, commercial, and industrial.",
    url: "/projects",
    images: [{ url: "/images/photo_2026-08-26_01-04-05.jpg" }],
  },
};

const whatsappMessage =
  "Hello SunSpark Energy! I'm interested in learning more about your completed projects and solar solutions.";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ]}
      />

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
          <ProjectsGrid />
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
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
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