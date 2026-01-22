import React from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"

import mainBg from "../../../assets/SurreyMain.jpg"

const Hero = () => {
    const brandName = "KNIGHT JAMES";

    // Variants for the staggered letter animation
    const letterVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 + i * 0.05,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier for smoothness
            },
        }),
    };

    return (
        /* CHANGED: h-screen to min-h-screen, removed overflow-hidden, added py-20 for spacing when scrolling */
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center select-none py-20">

            {/* Background Image Layer - CHANGED: absolute to fixed so it covers the whole scroll area */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${mainBg}')`,
                }}
            >
                {/* Background Overlay Animation: Fades from 1 to 0.85 */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-black"
                ></motion.div>
            </div>

            {/* Top Right Menu Bar - CHANGED: absolute to fixed so it stays visible while scrolling */}
            <div className="fixed top-10 right-10 flex items-center gap-4 z-20">
                <span className="text-black uppercase tracking-[0.2em] text-sm font-medium">
                    Menu
                </span>
                <div className="bg-white w-10 h-10 flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
                    <MenuIcon size={24} strokeWidth={1.5} className="text-[#998a8f]" />
                </div>
            </div>

            {/* Center Content Container */}
            <div className="relative z-10 flex flex-col items-center text-white w-full max-w-3xl px-6">

                {/* SVG Icon - Simple Fade In */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-3"
                >
                    <svg
                        width="250"
                        height="250"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="2" y="2" width="96" height="96" stroke="#905b65" strokeWidth="5" />
                        <path
                            d="M2 2 L45 75 L2 98 M45 75 L98 98"
                            stroke="#905b65"
                            strokeWidth="5"
                            strokeLinecap="square"
                            fill="none"
                        />
                    </svg>
                </motion.div> */}

                <img loading='lazy' src={logo} alt="Logo" className="w-36 md:w-44 object-cover mb-4" />

                {/* Brand Typography - Each letter animates up */}
                {/* <h1 className="text-2xl tracking-[0.18em] font-medium mb-4 text-center ml-[0.35em] flex overflow-hidden">
                    {brandName.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={letterVariants}
                            // Keep space width consistent
                            className={char === " " ? "mr-4" : ""}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1> */}

                {/* Navigation Links - Smooth Fade In */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.2 }}
                    className="w-xs space-y-0 text-center"
                >
                    <Link to={"/projects"} >
                        <button className="w-full py-6 uppercase tracking-[0.25em] text-xs sm:text-sm font-bold hover:text-white/70 transition-colors cursor-pointer duration-300">
                            Current Projects
                        </button>
                    </Link>

                    <div className="w-full flex h-px ">
                        <motion.div className='h-[1px] bg-white/40 w-1/2'></motion.div>
                        <motion.div className='h-[1px] bg-white/40 w-1/2'></motion.div>
                    </div>

                    <Link to={"/developments"} >
                        <button className="w-full py-6 uppercase tracking-[0.25em] text-xs sm:text-sm font-bold hover:text-white/70 transition-colors duration-300 cursor-pointer">
                            Past Developments
                        </button>
                    </Link>

                    {/* <div className="w-full h-[1px] bg-white/40"></div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;