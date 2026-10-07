"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add a deeper shadow once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="container-x">
        <div className="flex items-center justify-between py-3">
          {/* Logo — h-12 w-auto preserves the PNG's natural aspect ratio */}
          <Link
            href="/"
            className="shrink-0 flex items-center"
            aria-label="SunSpark Energy home"
            onClick={closeMenu}
          >
            <Image
              src="/images/moseslogo.png"
              alt="SunSpark Energy"
              width={120}
              height={48}
              priority
              className="h-12 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-navy-800"
                    : "text-ink-600 hover:text-navy-800"
                }`}
              >
                {link.label}

                {/* Gold underline for the active link */}
                {isActive(link.href) && (
                  <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-solar-500" />
                )}
              </Link>
            ))}

            <Link href="/contact" className="btn btn-primary ml-4 text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-navy-800 hover:bg-ink-100 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {/* Animated hamburger that morphs into an X */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              className="overflow-visible"
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={`origin-center transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={`transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={`origin-center transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu — max-h-104 = 26rem, fits 5 links + CTA */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-ink-200 bg-white transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-104 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-solar-50 text-navy-800 border-l-4 border-solar-500"
                  : "text-ink-600 hover:bg-ink-50 hover:text-navy-800"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn btn-primary btn-block mt-3"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}