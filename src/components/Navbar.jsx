import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

import mainImg from "../assets/secondaryMain3.jpg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", path: "/home" },
        { label: "Current Projects", path: "/projects" },
        { label: "Past Developments", path: "/developments" },
        { label: "Contact", path: "/contact" },
    ];


    // Variants for the whole menu panel slide-in
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

    // Variants for staggered link animation
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
            {/* FIXED MENU BUTTON - Always visible on top */}
            <div className="fixed top-10 right-10 flex items-center gap-4 z-[100] select-none">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="text-black uppercase tracking-[0.2em] text-sm font-medium"
                        >
                            Menu
                        </motion.span>
                    )}
                </AnimatePresence>

                <motion.div
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer transition-colors"
                >
                    {isOpen ? (
                        <X size={24} className="text-black" />
                    ) : (
                        <MenuIcon size={24} strokeWidth={1.5} className="text-[#998a8f]" />
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
                            className='absolute h-full w-1/2   bottom-0 left-0 right-0 z-0 object-center object-cover'
                            src={mainImg}
                        />
                        <div className='absolute inset-0 z-5'></div>
                        <motion.div
                            className='absolute top-0 right-0 bottom-0 bg-[#111] z-10 '
                            initial={{ width: "100%" }}
                            animate={{ width: "50%" }}
                            exit={{ width: "100%" }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5, // Delay only on enter
                                exit: { delay: 0, duration: 0 }, // No delay on exit
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        ></motion.div>
                        {/* logo  */}
                        <Link to={"/"}>

                            <img onClick={() => setIsOpen(!isOpen)} src={logo} className='absolute top-10 left-14 w-24 z-50' />
                        </Link>
                        {/* RIGHT SIDE: Black panel with links */}
                        <div className="w-full md:w-1/2 h-full  flex flex-col justify-center px-10 md:px-20  xl:pl-44 z-10 relative">
                            <ul className=" flex flex-col gap-10">
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
                                            onClick={() => setIsOpen(false)}
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