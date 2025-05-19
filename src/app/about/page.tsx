"use client";
import React from "react";
import Footer from "@/components/Footer";
import ResponsiveAppBar from "@/components/Navbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = [
  {
    quote:
      "Waters Construction did an amazing job on our patio — professional, on time, and the result was stunning.",
    name: "Sarah M.",
    location: "Milton Keynes",
  },
  {
    quote:
      "We couldn’t be happier with our new driveway. The team worked efficiently and left the site spotless.",
    name: "James T.",
    location: "Bedford",
  },
  {
    quote:
      "Top-quality landscaping work! Our garden has never looked better.",
    name: "Leanne H.",
    location: "Northampton",
  },
  {
    quote:
      "Reliable, affordable, and excellent workmanship. Highly recommend Waters Construction.",
    name: "Ahmed R.",
    location: "Luton",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};


const services = [
  {
    title: "Patios",
    description:
      "We design and build stylish, durable patios that elevate your outdoor living space and add value to your home.",
    image: "/images/image-12.jpg",
  },
  {
    title: "Driveways",
    description:
      "From block paving to resin-bound surfaces, we craft driveways that are both functional and visually appealing.",
    image: "/images/image-14.jpg",
  },
  {
    title: "Garden Landscaping",
    description:
      "Our team transforms gardens with custom planting, decking, turfing, and fencing solutions.",
    image: "/images/image-1.jpg",
  },
  {
    title: "Fencing & Boundaries",
    description:
      "We install secure and attractive fencing to complement your landscape and enhance privacy.",
    image: "/images/image-10.jpg",
  },
];

export default function About() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="flex flex-col min-h-screen bg-gray-100 px-4 py-12">
        <h1 className="text-4xl text-gray-900 font-bold mb-8 text-center">About Us</h1>

        <Image
          src="/images/image-2.jpg"
          alt="Construction site"
          className="w-full h-auto rounded shadow mb-8"
          width={1000}
          height={500}
        />

        <p className="text-lg text-gray-700 max-w-2xl text-center mx-auto mb-16">
          Waters Construction has been delivering high-quality construction and landscaping services across the UK for over 20 years. Our expert team specializes in transforming residential and commercial spaces with exceptional craftsmanship and care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-md mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          What Our Clients Say
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.quote}"</p>
                  <h4 className="text-md font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <Footer />
    </div>
  );
}
