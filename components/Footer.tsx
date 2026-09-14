import Image from "next/image";
import Link from "next/link";

const COMPANY_NAME = "SunSpark Energy";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    "Residential Solar",
    "Commercial Solar",
    "Battery Storage",
    "Maintenance & Support",
    "Energy Consultation",
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/moseslogo.png"
              alt="SunSpark Energy"
              width={150}
              height={60}
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="prose-on-dark-muted text-sm mb-5">
              Professional solar energy solutions for homes and businesses
              across Nigeria.
            </p>

            <div className="space-y-2 text-sm">
              <a
                href="tel:+2349029355082"
                className="block text-navy-100 hover:text-solar-400 transition-colors"
              >
                +234 902 935 5082
              </a>
              <a
                href="mailto:sunsparkenergy@proton.me"
                className="block text-navy-100 hover:text-solar-400 transition-colors"
              >
                sunsparkenergy@proton.me
              </a>
              <p className="text-navy-100">Port Harcourt, Nigeria</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-solar-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-100 hover:text-solar-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-solar-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service} className="text-navy-100">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-solar-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-navy-100 hover:text-solar-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-navy-100 hover:text-solar-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <Link href="/contact" className="btn btn-primary mt-6 text-sm">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-navy-100">
          <p>
            © {year} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className="hover:text-solar-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-solar-400 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}