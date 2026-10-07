import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Solar Installation in Nigeria | Homes & Businesses",
  description:
    "SunSpark Energy designs, installs, and maintains reliable solar systems for homes, businesses, and industry across Nigeria. Free site assessment. 150+ projects delivered.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Solar Installation in Nigeria | SunSpark Energy",
    description:
      "Reliable solar energy for homes and businesses. Free assessment. 150+ installations across Nigeria.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }]} />
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <ProjectsPreview />
      <Testimonials />
      <CTA />
    </main>
  );
}