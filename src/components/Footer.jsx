import React, { useState, useEffect } from 'react';
import ImageLoader from './ImageLoader';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { Linkedin, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

    // Lock body scroll when disclaimer is open
    useEffect(() => {
        if (isDisclaimerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isDisclaimerOpen]);

    return (
        <footer className="bg-[#292929] text-white py-4 px-6 md:px-12 flex flex-col items-center relative">

            {/* DISCLAIMER MODAL */}
            <AnimatePresence>
                {isDisclaimerOpen && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center px-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDisclaimerOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-5xl bg-white text-[#222] p-8 md:p-16 rounded-sm shadow-2xl z-10 overflow-y-auto max-h-[90vh]"
                        >
                            {/* Close Icon */}
                            <button
                                onClick={() => setIsDisclaimerOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors cursor-pointer duration-300"
                            >
                                <X size={30} />
                            </button>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-3 mb-8 text-[#8F6573]">
                                    <AlertCircle size={28} />
                                    <h2 className="text-base sm:text-xl md:text-2xl leading-none font-bold uppercase tracking-widest">Legal & Investor Disclaimer</h2>
                                </div>

                                <div className="grid md:grid-cols-1 gap-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-light text-center">
                                    <p>
                                        The content on this website is provided for general informational purposes only and does not constitute an offer, solicitation, or recommendation to invest in any property, security, or financial product.
                                    </p>
                                    <p>
                                        All property investments carry risk, including the potential loss of capital. Past performance is not indicative of future results. Dwell Rich Ltd does not provide financial, legal, or tax advice. Prospective investors should seek independent professional advice before making any investment decisions.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsDisclaimerOpen(false)}
                                    className="mt-12 px-10 py-3 bg-[#111] text-white uppercase text-xs tracking-widest font-bold hover:bg-[#8F6573] transition-colors duration-300 cursor-pointer"
                                >
                                    I Understand
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Top Section: Logo and Brand Name */}
            <Link to={"/"}>
                <img
                loading='lazy'
                    src={logo}
                    alt="Dwell Rich Ltd Logo"
                    className='w-20 mb-3'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
            </Link>

            {/* Middle Section: Company Information */}
            <div className="text-center max-w-3xl mb-3">
                <p className="text-white text-xs leading-relaxed">
                    Dwell Rich Ltd is a London-based property development and investment company focused on high-quality opportunities across Central and South London, targeting strong risk-adjusted returns through planning potential, prime locations, and market demand.
                </p>
            </div>

            {/* Bottom Section: Copyright and Credits */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/5">
                <div className="text-white text-[11px] flex md:flex-row flex-col items-center gap-2">
                    <p className='text-sm'>© 2026 - Dwell Rich Ltd</p>
                    <button
                        onClick={() => setIsDisclaimerOpen(true)}
                        className='uppercase text-xs tracking-widest text-white bg-transparent border border-white/20 px-4 py-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300'
                    >
                        disclaimer
                    </button>
                </div>

                <div className='text-sm text-center flex flex-col lg:flex-row lg:-ml-44 items-center gap-2'>
                    <p>Company Registration: 12592480 |</p>
                    <p>hello@designz.dwell-rich.com |</p>
                    <p>078033 26891</p>
                </div>

                <div className="flex items-center gap-2 text-[#444] text-[11px]">
                    <div className='text-white cursor-pointer pr-2'>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#0A66C2] hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;