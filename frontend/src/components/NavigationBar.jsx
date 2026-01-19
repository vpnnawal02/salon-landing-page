import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/menu-icon.png";

const menuItems = [
  { label: "HOME", id: "home" },
  { label: "SERVICES", id: "services" },
  { label: "REVIEWS", id: "reviews" },
  { label: "ABOUT", id: "about" },
  { label: "PRICING", id: "pricing" },
  { label: "GALLERY", path: "/gallery" }, // separate page
];

const NavigationBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    setShowMobileMenu(false);

    // Gallery page navigation
    if (item.path) {
      navigate(item.path);
      return;
    }

    // Same-page scroll
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(item.id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-24 py-4">

        {/* Logo */}
        <button
          onClick={() => handleNavigation({ id: "home" })}
          className="text-3xl lg:text-4xl font-bold"
        >
          SALON<span className="text-blue-500 text-4xl">.</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 lg:gap-10 font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavigation(item)}
                className="hover:text-blue-500 transition duration-100 cursor-pointer hover:underline underline-offset-25 decoration-5"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="/book-appointment">
          <button className="hidden md:block bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-400 transition">
            Make an Appointment
          </button>

        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setShowMobileMenu(true)}
        >
          <img src={menuIcon} alt="menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white backdrop-blur-md transition-transform duration-300 md:hidden z-50
${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)}>
            <img src={menuIcon} alt="close" className="w-6 rotate-180" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavigation(item)}
                className="hover:text-gray-400 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-10">
          <a href="/book-appointment">
            <button className="bg-blue-500 px-8 py-3 rounded-full text-white hover:bg-blue-400 transition">
              Make an Appointment
            </button>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
