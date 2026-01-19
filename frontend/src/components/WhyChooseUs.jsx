import React from "react"
import {
    FaStar,
    FaUserTie,
    FaLeaf,
    FaShieldAlt,
} from "react-icons/fa"

const features = [
    {
        icon: <FaStar />,
        title: "25+ Years Experience",
        desc: "Decades of expertise delivering consistent quality and trusted beauty services.",
    },
    {
        icon: <FaUserTie />,
        title: "Expert Stylists",
        desc: "Certified professionals trained in the latest trends and techniques.",
    },
    {
        icon: <FaLeaf />,
        title: "Premium Products",
        desc: "We use only high-quality, skin-friendly and cruelty-free products.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Hygiene & Safety",
        desc: "Strict hygiene standards ensuring a safe and comfortable experience.",
    },
]

const WhyChooseUs = () => {
    return (
        <section className="w-full py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-5xl font-serif text-center mb-6">
                    WHY CHOOSE US
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    We combine experience, passion, and premium care to deliver
                    exceptional beauty services tailored to your unique style.
                </p>

                {/* Features Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white p-8 rounded-lg shadow-sm
                hover:shadow-md transition
                text-center
              "
                        >
                            <div className="text-blue-600 text-4xl mb-5 flex justify-center">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs
