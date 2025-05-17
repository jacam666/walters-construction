"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true); // start spinner

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "f1be0cbb-fbe0-4f52-9f10-45bdc7006a42");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const result = await response.json();
        setLoading(false); // stop spinner

        if (result.success) {
            form.reset();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        }
    }


    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12">
                <h1 className="text-4xl text-gray-900 font-bold mb-8 text-center">Contact Us</h1>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow-md w-full max-w-md"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={submitted || loading}
                        className={`flex justify-center items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded w-full transition-opacity ${submitted || loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading && (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        )}
                        {submitted ? "Submitted!" : loading ? "Sending..." : "Submit"}
                    </button>


                    {submitted && (
                        <p className="text-green-600 font-medium text-center mt-4">
                            Thank you! Your message has been sent.
                        </p>
                    )}
                </form>

                {/* Areas + Contact Info Section */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 w-full max-w-4xl">
                    {/* Areas Covered */}
                    <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Areas Covered</h3>
                        <ul className="space-y-2 text-gray-700 text-center">
                            {[
                                "Leighton Buzzard",
                                "Milton Keynes",
                                "Dunstable",
                                "Hertfordshire",
                                "Bedfordshire",
                                "Buckinghamshire",
                                "Northants",
                            ].map((area) => (
                                <li key={area}>
                                    <MapPinIcon className="inline-block h-5 w-5 mr-2 text-sky-600" />
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Contact Details</h3>
                        <p className="mb-4 flex items-center justify-center text-gray-700">
                            <EnvelopeIcon className="w-6 h-6 mr-2 text-sky-600" />
                            WaltersConstruction@gmail.com
                        </p>
                        <p className="flex items-center justify-center text-gray-700">
                            <PhoneIcon className="w-6 h-6 mr-2 text-sky-600" />
                            1234-567-890
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
