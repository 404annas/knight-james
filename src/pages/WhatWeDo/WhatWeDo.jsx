import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AlignVerticalSpaceAround, Award, ChartNoAxesCombined, Handshake, House, LogOut, NotebookPen, PencilRuler, Pickaxe, UsersRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import imageMain from "../../assets/global1.jpg"
// import kingstonNew1 from "../../assets/kingstonNew1.jpg"
// import kingstonNew6 from "../../assets/kingstonNew6.jpg"
// import kingstonNew11 from "../../assets/kingstonNew11.jpg"
// import kingstonNew4 from "../../assets/kingstonNew4.jpg"
// import kingstonNew14 from "../../assets/kingstonNew14.jpg"
import SEO from "../../components/SEO";

const WhatWeDo = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 1. Array of images for the slider
    const sliderImages = [
        imageMain,
        // kingstonNew1,
        // kingstonNew6,
        // kingstonNew11,
        // kingstonNew4,
        // kingstonNew14
    ];

    // 2. State to track current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // 3. Interval for the slider (3 seconds)
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [sliderImages.length]);

    // Animation variants for the slide effect
    const slideVariants = {
        initial: { x: "100%" }, // Start completely off-screen to the right
        animate: { x: 0 },      // Slide to the center
        exit: { x: "-20%" },    // Old image slides slightly left as it's covered
    };

    return (
        <section className="relative w-full flex flex-col md:flex-row min-h-screen">
            <SEO
                title="What We Do - London Property Developments"
                description="Dwell Rich Ltd specializes in luxury residential development in London, focusing on planning gains and high-quality construction."
                keywords="London property developments, residential development London, planning gain property UK, property development company London"
            />

            {/* FIXED LOGO */}
            <Link to={"/"} className="fixed top-10 left-10 lg:left-14 z-50">
                <img loading="lazy" src={logo} alt="Dwell Rich Ltd - Property Developer London Logo" className="w-16 md:w-24 object-contain" />
            </Link>

            {/* LEFT CONTENT (Scrollable) - KEPT EXACTLY AS PROVIDED */}
            <div className="w-full md:w-3/4 bg-white min-h-screen">
                <div className="pt-52 md:pt-58 px-10 lg:px-20 xl:pl-44 pb-20">
                    {/* HEADING SECTION */}
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="sr-only">Property development company London specializing in planning gain property UK</h2>
                        <h1 className="text-3xl md:text-4xl uppercase font-bold mb-16 text-[#8F6573] tracking-tight leading-tight">
                            Global Capital
                            <br />
                            Enduring Value
                            <br />
                            One destination
                        </h1>
                        <div className={`h-[2px] bg-[#8F6573] mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className={`text-[#444444] text-lg md:text-xl font-light leading-relaxed space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-2xl font-normal text-[#222222]">London Real Estate Developments:</h1>
                        <div className="space-y-4">
                            <p>
                                Dwell Rich Ltd is a London‑based private property development and investment company specialising in identifying high‑quality property opportunities across Central London, South London, and carefully selected surrounding areas. Our focus is on sourcing properties with strong fundamentals and unlocking additional value through planning gains, intelligent design, and disciplined execution.
                            </p>
                            <p>London remains one of the world’s most resilient and transparent property markets. Through a selective and research‑driven approach, Dwell Rich Ltd enables investors to participate in value‑enhancing developments within one of the most sought‑after global cities. </p>
                            <p className="font-medium">We provide global property investment solutions.</p>
                        </div>
                    </div>
                </div>

                {/* SECOND SECTION */}
                {/* <div className="pt-10 px-10 lg:px-32 xl:pl-44 pb-20">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="sr-only">Residential development London and property investment strategy</h2>
                        <h1 className="text-3xl md:text-4xl font-bold mb-16 text-[#222222] tracking-tight">
                            What We Do ?
                        </h1>
                        <div className={`h-[2px] bg-[#8F6573] mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className={`text-[#444444] text-lg md:text-xl font-light leading-relaxed space-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="space-y-4">
                            <p className="pb-6">
                                We carefully source under‑utilised homes with huge potential for intelligent space planning and enhance their value through:
                            </p>
                            <ul className="flex flex-col gap-4">
                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3"><NotebookPen size={22} /><span className="font-medium">Planning & Change of Use</span></div>
                                    <p className="text-sm text-gray-500 pl-8">Unlocking permissions to increase asset potential</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3"><House size={22} /><span className="font-medium">Architectural Optimisation</span></div>
                                    <p className="text-sm text-gray-500 pl-8">Smarter layouts designed for maximum efficiency</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3"><Pickaxe size={22} /><span className="font-medium">Build & Interior Delivery</span></div>
                                    <p className="text-sm text-gray-500 pl-8">High-quality execution from shell to finish</p>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3"><LogOut size={22} /><span className="font-medium">ROI-Focused Exit Strategy</span></div>
                                    <p className="text-sm text-gray-500 pl-8">Clear exits aligned with market timing</p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#222222]">Why Invest with Dwell Rich Ltd ?</h2>
                            <ul className="flex flex-col gap-4 pt-6">
                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <Award size={20} />
                                        <span className="font-medium leading-tight">
                                            Prime London Focus
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        Central and South London locations with proven demand
                                    </p>
                                </li>

                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <ChartNoAxesCombined size={20} />
                                        <span className="font-medium leading-tight">
                                            Planning-Led Value Creation
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        Strategic planning to unlock hidden upside
                                    </p>
                                </li>

                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <UsersRound size={20} />
                                        <span className="font-medium leading-tight">
                                            Integrated Expert Team
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        Development, design, and delivery under one roof
                                    </p>
                                </li>

                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <PencilRuler size={20} />
                                        <span className="font-medium leading-tight">
                                            Disciplined Underwriting
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        Conservative assumptions with downside protection
                                    </p>
                                </li>

                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <Handshake size={20} />
                                        <span className="font-medium leading-tight">
                                            Investor-Friendly Structures
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        Clear, transparent frameworks for global investors
                                    </p>
                                </li>

                                <li className="flex flex-col gap-1">
                                    <div className="flex items-center gap-3">
                                        <AlignVerticalSpaceAround size={20} />
                                        <span className="font-medium leading-tight">
                                            Aligned Interests
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        Developer and investor incentives fully aligned
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#222222]">Why London:</h2>
                            <p>
                                London property continues to attract global capital due to its political stability and strong rental demand. Prime London property has historically acted as a safe‑haven asset during periods of global uncertainty.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* RIGHT IMAGE SLIDER (Updated Slide-Only logic) */}
            <div className="w-full md:w-1/2 h-screen sticky top-0 hidden md:block overflow-hidden bg-white">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentIndex}
                        src={sliderImages[currentIndex]}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.8,
                            ease: [0.4, 0, 0.2, 1] // Power3 ease for smooth sliding
                        }}
                        alt="Luxury London Property Development"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                </AnimatePresence>
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden w-full h-[50vh] relative overflow-hidden bg-white">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentIndex}
                        src={sliderImages[currentIndex]}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WhatWeDo;