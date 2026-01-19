import React from 'react'
import fbIcon from "../assets/facebook_icon.png";
import instaIcon from "../assets/instagram_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Hero = () => {
    return (
        <div className="min-h-screen w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/header-main.jpg')" }} id="home">

            <div className="flex justify-center">
                <div className="text-center text-white w-[60%] mt-30 md:mt-100 xl:mt-70">
                    <h1 className="font-extrabold text-4xl sm:text-4xl md:text-6xl lg:text-6xl">An Experience Where Style, Comfort, and Confidence Come Together.</h1>
                    <h1 className="font-extrabold text-4xl sm:text-4xl md:text-6xl lg:text-6xl">
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                            Test text.
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero
