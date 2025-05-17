"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Footer from '@/components/Footer';


export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "f1be0cbb-fbe0-4f52-9f10-45bdc7006a42");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            form.reset();
            setSubmitted(true);
            // Reset the submitted state after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl text-gray-900 font-bold mb-6">Contact Us</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Message</label>
                        <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded"></textarea>
                    </div>
                    <button type="submit" className={`bg-sky-600 text-white px-4 py-2 rounded ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={submitted}>
                        {submitted ? 'Submitted!' : 'Submit'}
                    </button>
                </form>
                <div className="w-full max-w-xl xl:max-w-md backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6">
                    <h3 className="font-corben text-2xl lg:text-3xl text-center text-gray-900  mb-4">Areas Covered:</h3>
                    <ul className="list-inside space-y-2 text-center text-lg lg:text-2xl text-gray-900">
                        {['Leighton Buzzard', 'Milton Keynes', 'Dunstable', 'Hertfordshire', 'Bedfordshire', 'Buckinghamshire', 'Northants'].map(area => (
                            <li key={area}>
                                <MapPinIcon className="inline-block h-5 w-5 mr-2" />
                                {area}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 space-y-4 text-lg lg:text-2xl text-center text-gray-900">
                        <p className='flex items-center justify-center'>
                            <EnvelopeIcon className="w-6 h-6 mr-2" />
                            WaltersConstruction@gmail.com
                        </p>
                        <p className='flex items-center justify-center'>
                            <PhoneIcon className="w-6 h-6 mr-2" />
                            1234-567-890
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}