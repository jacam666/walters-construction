"use client";
import Navbar from "@/components/Navbar";
import { FaDraftingCompass, FaHammer, FaTools } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gray-100 text-white px-4 py-12 sm:py-24 text-center">
        <div className="block sm:hidden mb-6">
          <img
            src="/images/homepage-image-1.jpg"
            alt="Construction site"
            className="w-full h-auto rounded shadow"
          />
        </div>

        <div className="hidden sm:block absolute inset-0 z-0 bg-[url('/images/homepage-image-1.jpg')] bg-cover bg-center opacity-60"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 sm:text-white">
            Welcome to Walters Construction
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-800 sm:text-white">
            Building dreams with quality and integrity.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            View Our Services
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Waters Construction has been delivering high-quality construction services across the UK for over 20 years. We specialize in residential, commercial, and industrial projects.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div>
              <div className="text-yellow-500 text-5xl mb-4 flex justify-center">
                <FaDraftingCompass />
              </div>
            </div>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">Planning & Design</h3>
            <p className="text-gray-600">Expert architectural and project planning services.</p>
          </div>
          <div>
            <div className="text-yellow-500 text-5xl mb-4 flex justify-center">
              <FaHammer />
            </div>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">Construction</h3>
            <p className="text-gray-600">From ground-up builds to renovations.</p>
          </div>
          <div>
            <div className="text-yellow-500 text-5xl mb-4 flex justify-center">
              <FaTools />
            </div>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">Maintenance</h3>
            <p className="text-gray-600">Ongoing property and structural upkeep.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">What Our Clients Say</h2>
        <blockquote className="max-w-xl mx-auto italic text-gray-700">
          "Waters Construction exceeded our expectations. The team was professional, reliable, and completed our project on time and within budget."
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">— Sarah M., London</p>
      </section>

      {/* Call To Action Section */}
      <section className="py-12 bg-yellow-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build With Us?</h2>
        <p className="mb-6">Contact us today for a free consultation.</p>
        <button className="bg-white text-yellow-600 font-bold py-2 px-6 rounded hover:bg-gray-100">
          Get a Free Quote
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Waters Construction. All rights reserved.</p>
      </footer>
    </div>
  );
}
