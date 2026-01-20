import React, { useEffect, useState } from "react";
import wallImage from "../../assets/whatImg.jpg";
import logo from "../../assets/logo-contact.svg";

const WhatWeDo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative w-full flex flex-col md:flex-row min-h-screen">

            {/* FIXED LOGO */}
            <div className="fixed top-14 left-10 lg:left-16 z-50">
                <img src={logo} alt="Logo" className="w-20 md:w-24 object-contain" />
            </div>

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

                    {/* TEXT CONTENT (Using proper spacing instead of <br/>) */}
                    <div className={`text-[#444444] text-lg md:text-xl font-light leading-relaxed space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p>
                            Knight James is a multi-award winning residential property developer,
                            operating in Prime Central London.
                        </p>

                        <p>
                            We take tired, dilapidated and poorly laid out properties and turn
                            them into stunning, contemporary homes, through clever design and
                            using some of the finest craftsmen.
                        </p>

                        <p>
                            We look for predominantly period properties, where we can create an
                            uplift in value, either through planning gains, the improvement of
                            layouts or the full restoration and reinstatement of period features.
                        </p>

                        <p>
                            Over the years we have built up a team of some of the finest
                            professionals and master craftsmen in London, who we bring together
                            to create beautiful homes.
                        </p>

                        <p>
                            What started out as very small development business is now a
                            multi-million pound property group, with multiple companies and a
                            development pipeline of c. £20,000,000 (GDV).
                        </p>

                        <p>
                            Annual turnover from development related activities is expected to
                            exceed £12,000,000 in 2025.
                        </p>
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

            {/* Mobile Image (appears at bottom of text on mobile) */}
            <div className="md:hidden w-full h-96">
                <img src={wallImage} alt="Wall" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default WhatWeDo;