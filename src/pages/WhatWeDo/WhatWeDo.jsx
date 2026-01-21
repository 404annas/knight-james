import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AlignVerticalSpaceAround, Award, ChartNoAxesCombined, Handshake, House, LogOut, NotebookPen, PencilRuler, Pickaxe, UsersRound } from "lucide-react";

import imageMain from "../../assets/KingstonMain.jpg"
import SEO from "../../components/SEO";

const WhatWeDo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative w-full flex flex-col md:flex-row min-h-screen">

            <SEO
                title="What We Do - London Property Developments"
                description="Dwell Rich Ltd specializes in luxury residential development in London, focusing on planning gains and high-quality construction."
                keywords="London property developments, residential development London, planning gain property UK, property development company London"
            />

            {/* FIXED LOGO */}
            <Link to={"/"} className="fixed top-10 left-10 lg:left-14 z-50">
                <img loading="lazy" src={logo} alt="Dwell Rich Ltd - Property Developer London Logo" className="w-20 md:w-24 object-contain" />
            </Link>

            {/* LEFT CONTENT (Scrollable) */}
            <div className="w-full md:w-1/2 bg-white min-h-screen">
                <div className="pt-52 md:pt-58 px-10 lg:px-32 xl:pl-44 pb-20">

                    {/* HEADING SECTION */}
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="sr-only">Property development company London specializing in planning gain property UK</h2>
                        <h1 className="text-5xl md:text-5xl font-bold mb-16 text-[#222222] tracking-tight">
                            Where Global Capital Meets Timeless Value
                        </h1>

                        {/* DECORATIVE LINE */}
                        <div className={`h-[2px] bg-[#8F6573] mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className={`text-[#444444] text-lg md:text-xl font-light leading-relaxed space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                        <h1 className="text-2xl font-normal text-[#222222]">London Real Estate Developments:</h1>
                        {/* Section: What We Do */}
                        <div className="space-y-4">
                            <p>
                                Dwell Rich Ltd is a London‑based private property development and investment company specialising in identifying high‑quality property opportunities across Central London, South London, and carefully selected surrounding areas. Our focus is on sourcing properties with strong fundamentals and unlocking additional value through planning gains, intelligent design, and disciplined execution.
                            </p>
                            <p>London remains one of the world’s most resilient and transparent property markets. Through a selective and research‑driven approach, Dwell Rich Ltd enables investors to participate in value‑enhancing developments within one of the most sought‑after global cities. </p>
                        </div>
                    </div>
                </div>

                <div className="pt-10 px-10 lg:px-32 xl:pl-44 pb-20">

                    {/* HEADING SECTION */}
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="sr-only">Residential development London and property investment strategy</h2>
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
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3 leading-6"><NotebookPen size={24} />Planning permissions and change‑of‑use opportunities</li>
                                <li className="flex items-center gap-3 leading-6"><House size={24} />Architectural reconfiguration and space optimisation</li>
                                <li className="flex items-center gap-3 leading-6"><Pickaxe size={24} />High‑quality construction and interior delivery</li>
                                <li className="flex items-center gap-3 leading-6"><LogOut size={24} />Clear exit strategies focused on maximising ROI</li>
                            </ul>
                        </div>

                        {/* Section: Why Invest */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#222222]">Why Invest with Dwell Rich Ltd:</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3 leading-6"><Award size={20} />Prime Central and South London focus</li>
                                <li className="flex items-center gap-3 leading-6"><ChartNoAxesCombined size={20} />Planning‑led value creation strategy</li>
                                <li className="flex items-center gap-3 leading-6"><UsersRound size={20} />Fully integrated professional team</li>
                                <li className="flex items-center gap-3 leading-6"><PencilRuler size={20} />Conservative and disciplined underwriting</li>
                                <li className="flex items-center gap-3 leading-6"><Handshake size={20} />International investor‑friendly structures</li>
                                <li className="flex items-center gap-3 leading-6"><AlignVerticalSpaceAround size={20} />Alignment of developer and investor interests</li>
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
                    src={imageMain}
                    alt="Luxury London property developments by Dwell Rich Ltd"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Mobile Image */}
            <div className="md:hidden w-full h-96">
                <img src={imageMain} alt="Residential development London interiors" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default WhatWeDo;