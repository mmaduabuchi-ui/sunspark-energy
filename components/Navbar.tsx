"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="bg-white shadow px-6 py-2">

      <div className="flex justify-between items-center">


        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/moseslogo.png"
            alt="SUNSPARK ENERGY Logo"
            width={110}
            height={45}
            priority
            className="object-contain"
          />
        </Link>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#0B1B3D]"
          aria-label="Toggle Menu"
        >
          ☰
        </button>



        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-medium text-[#0B1B3D]">

          <Link href="/" className="hover:text-[#F7B500]">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#F7B500]">
            About
          </Link>

          <Link href="/services" className="hover:text-[#F7B500]">
            Services
          </Link>

          <Link href="/projects" className="hover:text-[#F7B500]">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-[#F7B500]">
            Contact
          </Link>

        </div>

      </div>




      {/* Mobile Navigation */}
      {open && (

        <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 font-medium text-[#0B1B3D]">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

        </div>

      )}

    </nav>

  );
}