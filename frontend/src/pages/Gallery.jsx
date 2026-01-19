import React, { useState } from "react";

import g1 from "../assets/gallery/g-1.jpg";
import g2 from "../assets/gallery/g-2.jpg";
import g3 from "../assets/gallery/g-3.jpg";
import g4 from "../assets/gallery/g-4.jpg";
import g5 from "../assets/gallery/g-5.jpg";
import g6 from "../assets/gallery/g-6.jpg";
import g7 from "../assets/gallery/g-7.jpg";
import g8 from "../assets/gallery/g-8.jpg";
import g9 from "../assets/gallery/g-9.jpg";
import g10 from "../assets/gallery/g-10.jpg";
import g11 from "../assets/gallery/g-11.jpg";
import g12 from "../assets/gallery/g-12.jpg";
import g13 from "../assets/gallery/g-13.jpg";
import g14 from "../assets/gallery/g-14.jpg";
import g15 from "../assets/gallery/g-15.jpg";

const galleryItems = [
    { image: g1, category: "Makeup" },
    { image: g2, category: "Makeup" },
    { image: g3, category: "Makeup" },
    { image: g4, category: "Makeup" },
    { image: g5, category: "Makeup" },
    { image: g6, category: "Makeup" },
    { image: g7, category: "Hair" },
    { image: g8, category: "Hair" },
    { image: g9, category: "Hair" },
    { image: g10, category: "Hair" },
    { image: g11, category: "Nails" },
    { image: g12, category: "Nails" },
    { image: g13, category: "Nails" },
    { image: g14, category: "Nails" },
    { image: g15, category: "Nails" },
];

const categories = ["All", "Hair", "Makeup", "Nails"];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeCategory
            );

    return (
        <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h1 className="text-5xl font-serif text-center mb-6">
                    Our Gallery
                </h1>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    A glimpse of our artistry, passion, and precision —
                    where beauty comes to life.
                </p>

                {/* Filters */}
                <div className="flex justify-center gap-2 mb-14 md:gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                px-6 py-2 rounded-full text-sm transition
                ${activeCategory === category
                                    ? "bg-blue-500 text-white"
                                    : "border border-gray-300 hover:bg-gray-100"
                                }
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredImages.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg"
                        >
                            <img
                                src={item.image}
                                alt="Salon Work"
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;

