import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111] text-white py-7 px-6 md:px-12 flex flex-col items-center relative">
            {/* Top Section: Logo and Brand Name */}
            <img className='invert w-40 mb-3' src="/footerLogo.svg" alt="" />

            {/* Middle Section: Company Information */}
            <div className="text-center max-w-2xl mb-3">
                <p className="text-[#888] text-xs leading-relaxed">
                    Knight James is the trading name of The Knight James Group Limited and its associated companies - 39 Hendon Lane,
                    London, N3 1RY - Registered in England and Wales - Company Number: 09129424
                </p>
            </div>

            {/* Bottom Section: Copyright and Credits */}
            <div className="w-full  border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[#444] text-[11px]">
                    © 2026 Knight James
                </div>

                <div className="flex items-center gap-2 text-[#444] text-[11px]">
                    <span>MADE BY</span>
                    <div className="flex items-center font-bold text-white">
                        {/* Minimal Northform logo representation */}
                        <svg width="12" height="12" viewBox="0 0 100 100" className="mr-1 fill-white">
                            <path d="M0 100 L40 0 L60 0 L100 100 L80 100 L50 25 L20 100 Z" />
                        </svg>
                        NORTHFORM
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;