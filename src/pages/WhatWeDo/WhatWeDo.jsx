import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-contact.svg";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative w-full flex flex-col md:flex-row min-h-screen">

            {/* FIXED LOGO */}
            <Link to={"/"} className="fixed top-14 left-10 lg:left-16 z-50">
                <img loading="lazy" src={logo} alt="Logo" className="w-20 md:w-24 object-contain" />
            </Link>

            {/* LEFT CONTENT (Scrollable) */}
            <div className="w-full md:w-1/2 bg-white min-h-screen">
                <div className="pt-52 md:pt-58 px-10 lg:px-32 xl:pl-44 pb-20">

                    {/* HEADING SECTION */}
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-16 text-[#222222] tracking-tight">
                            What We Do
                        </h1>

                        {/* DECORATIVE LINE */}
                        <div className={`h-[2px] bg-[#8F6573] mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className={`text-[#444444] text-lg md:text-xl font-light leading-relaxed space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                        {/* Section: What We Do */}
                        <div className="space-y-4">
                            <p>
                                We carefully source under‑utilised homes with huge potential for intelligent space planning, good location and connectivity and enhance their value through:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Planning permissions and change‑of‑use opportunities</li>
                                <li>Architectural reconfiguration and space optimisation</li>
                                <li>High‑quality construction and interior delivery</li>
                                <li>Clear exit strategies focused on maximising ROI</li>
                            </ul>
                        </div>

                        {/* Section: Why Invest */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#222222]">Why Invest with Dwell Rich Ltd:</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Prime Central and South London focus</li>
                                <li>Planning‑led value creation strategy</li>
                                <li>Fully integrated professional team</li>
                                <li>Conservative and disciplined underwriting</li>
                                <li>International investor‑friendly structures</li>
                                <li>Alignment of developer and investor interests</li>
                            </ul>
                        </div>

                        {/* Section: Why London */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#222222]">Why London:</h2>
                            <p>
                                London property continues to attract global capital due to its political stability, transparent legal system, strong rental demand, limited land supply, and long‑term capital appreciation. Prime London property has historically acted as a safe‑haven asset during periods of global uncertainty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT IMAGE (Fixed/Sticky) */}
            <div className="w-full md:w-1/2 h-screen sticky top-0 hidden md:block">
                <img
                    loading="lazy"
                    src={wallImage}
                    alt="Interior Design"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Mobile Image */}
            <div className="md:hidden w-full h-96">
                <img src={wallImage} alt="Wall" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default WhatWeDo;