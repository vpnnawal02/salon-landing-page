import React from "react";
import fbIcon from "../assets/facebook_icon.png";
import instaIcon from "../assets/instagram_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";
import NavigationBar from "./NavigationBar";

const Header = () => {
    return (
        <header
        >
            {/* Top Info Bar */}
            <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2 gap-2 text-sm">
                <p className="text-center md:text-left">
                    5/1, Double Storey, Najafgarh Road, Delhi
                </p>

                <div className="flex gap-6">
                    <img src={fbIcon} alt="Facebook" className="h-6 w-6 cursor-pointer" />
                    <img src={instaIcon} alt="Instagram" className="h-6 w-6 cursor-pointer" />
                    <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6 cursor-pointer" />
                </div>
            </div>

            {/* Offer Strip (Marquee Replacement) */}
            <div className="bg-gray-300 overflow-hidden">
                <div className="flex items-center">
                    <marquee behavior="" direction=""><p className="text-[15px]">FESTIVAL OFFER — 25% OFF ON EVERYTHING</p></marquee>
                </div>
            </div>

            {/* Navigation */}
            <NavigationBar />

        </header>
    );
};

export default Header;
