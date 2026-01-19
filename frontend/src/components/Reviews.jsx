import React, { useEffect, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import user1 from "../assets/client-1.jpg"
import user2 from "../assets/client-2.jpg"
import user3 from "../assets/client-3.jpg"

const testimonials = [
    {
        name: "Ananya",
        image: user1,
        text: "My visit to 'SALON' was generally positive. The salon has a pleasant atmosphere and the location is convenient. My stylist was friendly and did a good job on my root touch-up.",
    },
    {
        name: "Riya",
        image: user2,
        text: "Amazing experience! The staff is very professional and attentive. I loved the care and precision they put into every detail.",
    },
    {
        name: "Arohi",
        image: user3,
        text: "Highly recommended! Beautiful ambiance, skilled professionals, and excellent service quality.",
    },
]

const Reviews = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    const next = () => {
        setIndex((prev) => (prev + 1) % testimonials.length)
    }

    return (
        <section className="w-full py-24 bg-gray-200" id="reviews">
            {/* Heading */}
            <h1 className="text-5xl text-center font-serif mb-4">
                CLIENTS SAY
            </h1>

            <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
                After owning two successful locations Beauty move there passion.
            </p>

            {/* Testimonial Wrapper */}
            <div className="relative max-w-4xl mx-auto px-6">

                {/* Card */}
                <div className="bg-gray-100 rounded-lg py-12 px-10 text-center transition-all duration-500">

                    {/* Avatar */}
                    <img
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
                    />

                    {/* Text */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {testimonials[index].text}
                    </p>

                    {/* Name */}
                    <h3 className="font-semibold tracking-wide">
                        {testimonials[index].name}
                    </h3>
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="
            absolute left-0 top-1/2 -translate-y-1/2
            bg-gray-200 hover:bg-gray-300
            p-3 rounded-full transition
          "
                >
                    <FaArrowLeft />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="
            absolute right-0 top-1/2 -translate-y-1/2
            bg-gray-200 hover:bg-gray-300
            p-3 rounded-full transition
          "
                >
                    <FaArrowRight />
                </button>

            </div>
        </section>
    )
}

export default Reviews
