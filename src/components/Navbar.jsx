import React, { useState } from 'react';
import { Mail, Menu, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo2.png"
import mainImg from "../assets/mainHero.jpeg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const navLinks = [
        { label: "Home", path: "/what-we-do" },
        { label: "About", path: "/about" },
        { label: "Investor", path: "/investor" },
        // { label: "Global Investor", path: "/global-investor" },
        { label: "Current Projects", path: "/projects" },
        { label: "Past Developments", path: "/developments" },
        { label: "Contact", path: "/contact" },
    ];

    const menuVariants = {
        closed: { x: '-100%' },
        open: {
            x: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        },
        exit: {
            x: '-100%',
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 30 },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.4 + i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <>
            {/* MOBILE TOP BAR BACKGROUND */}
            <div className={`fixed top-0 left-0 w-full h-32 md:bg-transparent z-[49] transition-colors duration-500 
                ${isHomePage ? 'bg-transparent' : 'bg-white border-b border-gray-100 shadow-sm md:border-none md:shadow-none'}`}
            />

            {/* FIXED LOGO */}
            {/* <Link to={"/"} className="fixed top-7 left-10 lg:left-14 z-[100]">
                <img loading="lazy" src={logo} alt="Logo" className="w-20 md:w-24 object-contain" />
            </Link> */}

            {/* FIXED MENU BUTTON CONTAINER */}
            <div className="fixed top-10 right-5 md:right-10 flex items-center gap-4 z-[100] select-none">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.a href='mailto:info@dwellrich.co.uk'
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className={`uppercase tracking-widest text-xs sm:text-sm font-medium transition-colors duration-300 flex items-center gap-2 cursor-pointer 
                                ${isHomePage ? 'text-white' : 'text-black'}`}
                        >
                            <Mail size={20}/>
                            <p>info@dwellrich.co.uk</p>
                        </motion.a>
                    )}
                </AnimatePresence>

                {/* THE CIRCLE BUTTON */}
                <motion.div
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
    w-10 h-10 aspect-square flex items-center justify-center
    rounded-full shadow-lg cursor-pointer overflow-hidden
    bg-white
    ${isHomePage ? "ring-1 ring-black/20" : ""}
  `}
                >
                    {isOpen ? (
                        <X size={24} strokeWidth={2} className="text-black" />
                    ) : (
                        // Added strokeLinecap and strokeLinejoin for rounder icon lines
                        <Menu size={24} strokeWidth={1.8} className="text-[#998a8f]" />
                    )}
                </motion.div>
            </div>

            {/* FULL SCREEN NAVIGATION MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="fixed inset-0 z-[90] flex justify-end overflow-hidden"
                    >
                        <motion.img
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1.15 }}
                            transition={{ duration: 0.8, delay: 0.4, exit: { delay: 0, duration: 0 }, }}
                            className='absolute h-full w-full md:w-1/2 bottom-0 left-0 right-0 z-0 object-center object-cover'
                            src={mainImg}    
                        />
                        <div className='absolute inset-0 bg-black/50 z-5'></div>

                        <motion.div
                            className='absolute md:block hidden top-0 right-0 bottom-0 bg-[#111] z-10'
                            initial={{ width: "100%" }}
                            animate={{ width: "50%" }}
                            exit={{ width: "100%" }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5,
                                exit: { delay: 0, duration: 0 },
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        ></motion.div>

                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20 xl:pl-44 z-10 relative">
                            <ul className="flex flex-col gap-5">
                                {navLinks.map((item, i) => (
                                    <motion.li
                                        key={item.label}
                                        custom={i}
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                        className="text-white text-3xl lg:text-4xl tracking-wide group w-fit"
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                                            className="inline-block"
                                        >
                                            {item.label}
                                            <div className="w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;