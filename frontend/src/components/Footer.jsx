import React from "react"
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-[#111] text-gray-300 pt-20">

            {/* MAIN FOOTER CONTENT */}
            <div className="max-w-7xl mx-auto px-6 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">

                {/* BRAND */}
                <div>
                    <h2 className="text-3xl font-serif text-white mb-4">
                        SALON
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Where beauty meets expertise. We provide premium hair,
                        makeup, and wellness services crafted with care, precision,
                        and passion to bring out your best.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 mt-6">
                        <a className="hover:text-white transition" href="#"><FaFacebookF /></a>
                        <a className="hover:text-white transition" href="#"><FaInstagram /></a>
                        <a className="hover:text-white transition" href="#"><FaTwitter /></a>
                        <a className="hover:text-white transition" href="#"><FaYoutube /></a>
                    </div>
                </div>

                {/* SERVICES */}
                <div>
                    <h3 className="text-lg text-white mb-6 font-semibold">
                        Our Services
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white">Hair Styling</a></li>
                        <li><a href="#" className="hover:text-white">Makeup</a></li>
                        <li><a href="#" className="hover:text-white">Nail Art</a></li>
                        <li><a href="#" className="hover:text-white">Skin Care</a></li>
                        <li><a href="#" className="hover:text-white">Spa & Wellness</a></li>
                    </ul>
                </div>

                {/* WORKING HOURS */}
                <div>
                    <h3 className="text-lg text-white mb-6 font-semibold">
                        Working Hours
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between">
                            <span>Monday – Friday</span>
                            <span>9:00 AM – 8:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Saturday</span>
                            <span>10:00 AM – 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sunday</span>
                            <span className="text-red-400">Closed</span>
                        </li>
                    </ul>
                </div>

                {/* CONTACT + NEWSLETTER */}
                <div>
                    <h3 className="text-lg text-white mb-6 font-semibold">
                        Contact Us
                    </h3>

                    <ul className="space-y-4 text-sm">
                        <li className="flex gap-3">
                            <FaMapMarkerAlt className="mt-1" />
                            <span>123 Luxury Street, New Delhi, India</span>
                        </li>

                        <li className="flex gap-3">
                            <FaPhoneAlt className="mt-1" />
                            <span>+91 98765 43210</span>
                        </li>

                        <li className="flex gap-3">
                            <FaEnvelope className="mt-1" />
                            <span>contact@salon.com</span>
                        </li>
                    </ul>

                    {/* NEWSLETTER */}
                    <div className="mt-6">
                        <p className="text-sm mb-3">
                            Subscribe to our newsletter
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 bg-[#222] text-sm outline-none"
                            />
                            <button className="bg-blue-600 px-4 text-sm hover:bg-blue-700 transition">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-700 mt-16" />

            {/* BOTTOM BAR */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} SALON. All rights reserved.</p>

                <div className="flex gap-6 mt-3 sm:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
