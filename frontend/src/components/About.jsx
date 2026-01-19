import React, { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import img1 from "../assets/about-1.jpg"
import img2 from "../assets/about-2.jpg"
import img3 from "../assets/about-3.jpg"

const images = [img1, img2, img3]

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length)

    const prev = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )

    return (
        <section className="w-full py-20 " id="about" >
            <h1 className="text-5xl text-center mb-16 font-bold underline underline-offset-4">ABOUT</h1>

            < div className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl mx-auto px-6" >

                {/* ===== LEFT : MOBILE SLIDER ===== */}
                < div className="lg:hidden w-full max-w-md" >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="w-full h-64 object-cover flex-shrink-0 rounded-lg"
                                    alt="About"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button onClick={prev} className="p-3 bg-black/60 rounded-full">
                            <FaChevronLeft className="text-white" />
                        </button>
                        <button onClick={next} className="p-3 bg-black/60 rounded-full">
                            <FaChevronRight className="text-white" />
                        </button>
                    </div>
                </div >

                {/* ===== LEFT : DESKTOP COLLAGE ===== */}
                < div className="hidden lg:block relative w-[500px] h-[420px]" >

                    <img
                        src={img1}
                        className="absolute left-0 top-16 w-[240px] h-[320px] object-cover shadow-lg z-10"
                        alt="Haircut"
                    />

                    <img
                        src={img2}
                        className="absolute right-0 top-0 w-[260px] h-[180px] object-cover shadow-lg z-20"
                        alt="Facial"
                    />

                    <img
                        src={img3}
                        className="absolute right-16 bottom-0 w-[300px] h-[200px] object-cover shadow-lg z-30"
                        alt="Nail care"
                    />
                </div >

                {/* ===== RIGHT CONTENT ===== */}
                < div className="max-w-xl text-center lg:text-left flex flex-col items-center    " >
                    <h2 className="text-4xl font-bold mb-6">
                        25+ Years Work Experiences
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Step into our salon, a sanctuary where modern expertise converges
                        with personalized care to create an unparalleled experience for
                        every client. We believe that beauty is a reflection of inner
                        wellness, and our comprehensive suite of services—from precision
                        cuts and vibrant color treatments to meticulous nail care and
                        rejuvenating facials—is designed to enhance both. Our highly
                        skilled team is not just trained in the latest techniques, but is
                        deeply committed to understanding your unique needs.
                    </p>
                    <a href="/inquiry" className="">
                        <button className="bg-blue-500 px-8 py-2 rounded-xl cursor-pointer text-white hover:bg-blue-400 transition mt-10    ">
                            {'Know More'}
                        </button>
                    </a>

                </div >

            </div >
        </section >
    );
};

export default About;