import Link from "next/link";

export default function Contact() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-[#0B1B3D] text-white py-20">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold mb-5">
            Contact SUNSPARK ENERGY
          </h1>

          <p className="text-xl">
            Request your free solar energy consultation today.
          </p>

        </div>
      </section>


      {/* Contact Information + Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">


          {/* Contact Information */}
          <div>

            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>


            <p className="mb-4">
              📞 Phone:
              <br />
              +2349029355082
            </p>


            <p className="mb-4">
              ✉ Email:
              <br />
              info@sunsparkenergy.com
            </p>


            <p className="mb-4">
              📍 Address:
              <br />
              Lagos, Nigeria
            </p>


            <Link
              href="https://wa.me/2349029355082"
              className="inline-block bg-[#1E824C] text-white px-6 py-3 rounded-lg font-bold"
            >
              Chat on WhatsApp
            </Link>


          </div>



          {/* Quote Form */}
          <div>

            <h2 className="text-3xl font-bold mb-6">
              Request A Quote
            </h2>


            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
              />


              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
              />


              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
              />


              <select className="w-full border p-3 rounded-lg">

                <option>
                  Property Type
                </option>

                <option>
                  Residential
                </option>

                <option>
                  Commercial
                </option>

                <option>
                  Industrial
                </option>

              </select>


              <textarea
                placeholder="Tell us about your energy requirement"
                className="w-full border p-3 rounded-lg h-32"
              />


              <button
                type="submit"
                className="bg-[#F7B500] px-8 py-3 rounded-lg font-bold"
              >
                Submit Request
              </button>


            </form>


          </div>


        </div>
      </section>



      {/* Location */}
      <section className="bg-gray-100 py-16">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-8">
            Our Location
          </h2>


          <div className="h-80 bg-gray-300 flex items-center justify-center rounded-lg">

            <p>
              Google Map will be added here
            </p>

          </div>


        </div>

      </section>



      {/* Final CTA */}
      <section className="bg-[#1E824C] text-white py-16">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-5">
            Switch To Clean Energy Today
          </h2>


          <p>
            SUNSPARK ENERGY is ready to design the right solar solution for you.
          </p>


        </div>

      </section>


    </main>
  );
}