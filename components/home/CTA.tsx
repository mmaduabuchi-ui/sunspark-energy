import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#F7B500] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-5 text-[#0B1B3D]">
          Ready to Switch to Solar?
        </h2>

        <p className="mb-6 text-[#0B1B3D]">
          Contact SUNSPARK ENERGY today for professional solar assessment.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#0B1B3D] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#14275a] transition-colors"
        >
          Request Quote
        </Link>
      </div>
    </section>
  );
}