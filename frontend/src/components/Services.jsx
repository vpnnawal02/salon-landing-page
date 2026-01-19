import React, { useEffect, useRef, useState } from "react"

import nail from "../assets/nail-art.jpg"
import makeup from "../assets/skin.jpg"
import hair from "../assets/hair-styling.jpg"

const services = [
    { title: "NAIL ART", image: nail },
    { title: "MAKE UP", image: makeup },
    { title: "HAIR", image: hair },
]

const Services = () => {
    const trackRef = useRef(null)

    useEffect(() => {
        let animationFrame
        let position = 0

        const speed = 0.4 // 🔥 controls smoothness (lower = slower)

        const animate = () => {
            if (!trackRef.current) return

            position += speed
            trackRef.current.style.transform = `translateX(-${position}px)`

            const width = trackRef.current.scrollWidth / 2

            if (position >= width) {
                position = 0
            }

            animationFrame = requestAnimationFrame(animate)
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [])

    return (
        <section className="w-full py-20 bg-white overflow-hidden" id="services">
            <h1 className="text-5xl text-center mb-16 font-serif">
                SERVICES
            </h1>

            <div className="relative w-full overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-6 w-max"
                >
                    {[...services, ...services].map((service, index) => (
                        <div
                            key={index}
                            className="
                relative
                w-[280px] sm:w-[340px] lg:w-[420px]
                h-[240px] lg:h-[260px]
                flex-shrink-0
                overflow-hidden
              "
                        >
                            {/* Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
                                <h2 className="text-3xl tracking-widest font-serif">
                                    {service.title}
                                </h2>

                                <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full text-sm transition">
                                    Know More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
