import React, { useState } from "react";

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        stylist: "",
        date: "",
        time: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TEMP: Replace with API call later
        console.log("Appointment Data:", formData);

        alert("Appointment request submitted successfully!");
    };

    return (
        <section
            id="appointment"
            className="w-full py-24 bg-gray-50"
        >
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-5xl font-serif text-center mb-6">
                    Book Appointment
                </h2>

                <p className="text-center text-gray-600 max-w-xl mx-auto mb-16">
                    Schedule your visit with our experts and let us take care of
                    your beauty needs.
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-xl p-10 grid gap-6"
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

                    {/* Service */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Select Service *
                        </label>
                        <select
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Choose a service</option>
                            <option>Hair Styling</option>
                            <option>Makeup</option>
                            <option>Nail Art</option>
                            <option>Skin Care</option>
                            <option>Spa & Wellness</option>
                        </select>
                    </div>

                    {/* Stylist */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Preferred Stylist (Optional)
                        </label>
                        <select
                            name="stylist"
                            value={formData.stylist}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">No preference</option>
                            <option>Senior Stylist</option>
                            <option>Makeup Artist</option>
                            <option>Nail Specialist</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Preferred Date *
                        </label>
                        <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Preferred Time *
                        </label>
                        <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Additional Notes
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Any special request or message"
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
                        Confirm Appointment
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookAppointment;
