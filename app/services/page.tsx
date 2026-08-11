import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Bifacial Solar Panel Installation",
      description: "Advanced bifacial solar panels that capture sunlight from both sides for maximum energy generation. Perfect for residential and commercial applications.",
      image: "/services/bifacialsolar-panel.jpg",
      features: ["Dual-sided energy capture", "Up to 30% more efficiency", "Premium quality", "25-year warranty"]
    },
    {
      id: 2,
      title: "Smart Solar Solutions",
      description: "Intelligent solar energy systems with smart monitoring and optimization features for maximum power output and energy savings.",
      image: "/services/Gemini_Generated_Image_dtglwpdtglwpdtgl.png",
      features: ["Smart monitoring", "AI optimization", "Energy storage ready", "Remote access"]
    },
    {
      id: 3,
      title: "Commercial Solar Systems",
      description: "Large-scale solar installations designed for businesses, offices, and industrial facilities to reduce operational costs.",
      image: "/services/Gemini_Generated_Image_p0ki6dp0ki6dp0ki.png",
      features: ["Custom designs", "High capacity", "Cost reduction", "ROI optimization"]
    },
    {
      id: 4,
      title: "Residential Solar Power",
      description: "Complete home solar solutions that provide clean, renewable energy while significantly reducing your electricity bills.",
      image: "/services/Gemini_Generated_Image_u40pnfu40pnfu40p.png",
      features: ["Energy independence", "Bill reduction", "Professional installation", "Maintenance included"]
    },
    {
      id: 5,
      title: "Solar Maintenance & Support",
      description: "Comprehensive maintenance and support services to ensure your solar system operates at peak performance year-round.",
      image: "/services/Gemini_Generated_Image_yaq8opyaq8opyaq8.png",
      features: ["Regular inspections", "Performance monitoring", "Priority support", "Preventive maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0B1B3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Services</h1>
          <p className="text-center mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1B3D] mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="text-[#F7B500] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}