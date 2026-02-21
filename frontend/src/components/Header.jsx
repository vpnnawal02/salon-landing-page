import React from "react";
import fbIcon from "../assets/facebook_icon.png";
import instaIcon from "../assets/instagram_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";
import NavigationBar from "./NavigationBar";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Header = () => {

    const delay = () => {
        setTimeout(() => {
            document.querySelector('#offers').style.display = 'block'
        }, 3000)
    }
    // delay()

    return (
        <>
            <header className="">
                {/* Top Info Bar */}
                <div className="bg-gray-200 flex flex-col md:flex-row items-center justify-around px-4 md:px-10 py-2 gap-2 text-sm">
                    <p className="text-center md:text-left">
                        5/1, Double Storey, Najafgarh Road, Delhi
                    </p>

                    <div className="flex gap-6">
                        <FaFacebook className="h-6 w-6 cursor-pointer hover:text-blue-500" />
                        <IoLogoWhatsapp className="h-6 w-6 cursor-pointer hover:text-green-800" />
                        <FaInstagramSquare className="h-6 w-6 cursor-pointer hover:text-pink-600" />
                    </div>
                </div>

                {/* Offer Strip (Marquee Replacement) */}
                <div className="bg-gray-300 hidden " id='offers' >
                    <p className="text-[15px] text-center font-black ">FESTIVAL OFFER — 25% OFF ON EVERYTHING</p>
                </div>

            </header>
            <NavigationBar />
        </>
    );
};

export default Header;
