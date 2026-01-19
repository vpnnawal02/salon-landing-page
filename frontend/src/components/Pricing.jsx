import React from "react"

const pricingPlans = [
    {
        title: "Basic Care",
        price: "₹999",
        desc: "Perfect for regular grooming and maintenance.",
        features: [
            "Hair Cut & Styling",
            "Basic Hair Wash",
            "Blow Dry",
            "Consultation",
        ],
        highlight: false,
    },
    {
        title: "Premium Beauty",
        price: "₹2,499",
        desc: "Our most popular package for complete styling.",
        features: [
            "Hair Cut & Styling",
            "Hair Spa Treatment",
            "Makeup (Basic)",
            "Nail Care",
            "Personal Stylist Consultation",
        ],
        highlight: true,
    },
    {
        title: "Luxury Experience",
        price: "₹4,999",
        desc: "Indulge in a full luxury salon experience.",
        features: [
            "Advanced Hair Styling",
            "Premium Hair Spa",
            "Professional Makeup",
            "Nail Art",
            "Skin Care Session",
            "Priority Service",
        ],
        highlight: false,
    },
]

const Pricing = () => {
    return (
        <section className="w-full py-24 bg-white" id="pricing">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-5xl font-serif text-center mb-6">
                    PRICING PLANS
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    Transparent pricing designed to suit every beauty need.
                    Choose the perfect plan and let our experts take care of you.
                </p>

                {/* Pricing Cards */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                relative rounded-xl border p-10 text-center
                ${plan.highlight
                                    ? "border-blue-600 shadow-xl scale-105"
                                    : "border-gray-200 shadow-sm"}
              `}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-xl font-semibold mb-3">
                                {plan.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-6">
                                {plan.desc}
                            </p>

                            <div className="text-4xl font-bold mb-6">
                                {plan.price}
                            </div>

                            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>• {feature}</li>
                                ))}
                            </ul>
                            <a href="/book-appointment"><button className={`w-full py-3 rounded-full text-sm font-medium transition
                                                ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer" : "border border-gray-300 hover:bg-gray-300 hover:cursor-pointer"}`}>
                                Book Now
                            </button></a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Pricing
