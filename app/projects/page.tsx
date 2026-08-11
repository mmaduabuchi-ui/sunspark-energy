import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Residential Solar Installation",
      location: "Lagos, Nigeria",
      description: "Complete solar panel installation for a 4-bedroom home with battery backup system.",
      image: "/images/projects/residential-1.jpg",
      stats: {
        panels: "24",
        capacity: "8kW",
        savings: "40%"
      }
    },
    {
      id: 2,
      title: "Commercial Office Building",
      location: "Abuja, Nigeria",
      description: "Large-scale solar installation for a corporate office complex reducing energy costs significantly.",
      image: "/images/projects/commercial-1.jpg",
      stats: {
        panels: "120",
        capacity: "45kW",
        savings: "55%"
      }
    },
    {
      id: 3,
      title: "Industrial Warehouse",
      location: "Port Harcourt, Nigeria",
      description: "Industrial-grade solar power system for a manufacturing facility with 24/7 power requirements.",
      image: "/images/projects/industrial-1.jpg",
      stats: {
        panels: "250",
        capacity: "100kW",
        savings: "60%"
      }
    }
  ];

  const whatsappNumber = "2349029355082";
  const whatsappMessage = "Hello SunSpark Energy! I'm interested in learning more about your completed projects and solar solutions.";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0B1B3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Projects</h1>
          <p className="text-center mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            See how we're powering Nigeria's future with solar energy
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1B3D]">{project.title}</h3>
                  <p className="text-[#F7B500] text-sm mb-2">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4 border-t pt-4">
                    <div>
                      <p className="text-xs text-gray-500">Panels</p>
                      <p className="font-bold text-[#0B1B3D]">{project.stats.panels}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Capacity</p>
                      <p className="font-bold text-[#0B1B3D]">{project.stats.capacity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Savings</p>
                      <p className="font-bold text-[#F7B500]">{project.stats.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-[#0B1B3D] rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to See More Projects?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact us on WhatsApp to see our complete portfolio of completed projects and success stories.
              </p>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1DA851] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact Us on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}