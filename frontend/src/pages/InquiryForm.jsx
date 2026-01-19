import React, { useState } from "react";

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        inquiryType: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with backend / email logic later
        console.log("Inquiry Data:", formData);

        alert("Thank you! We’ll get back to you shortly.");
    };

    return (
        <section id="inquiry" className="w-full py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-5xl font-serif text-center mb-6">
                    Have a Question?
                </h2>

                <p className="text-center text-gray-600 max-w-xl mx-auto mb-16">
                    Reach out to us for service details, custom requests, or any
                    other inquiries. Our team will respond promptly.
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 rounded-xl shadow-md p-10 grid gap-6"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Inquiry Type *
                        </label>
                        <select
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select inquiry type</option>
                            <option>Service Details</option>
                            <option>Pricing & Packages</option>
                            <option>Custom Request</option>
                            <option>Callback Request</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Your Message *
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-full font-medium mt-4"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

export default InquiryForm;
