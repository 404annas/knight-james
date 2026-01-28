import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Globe,
    ArrowRightLeft,
    ShieldCheck,
    Network,
    Zap,
    MapPin,
    CheckCircle2,
    MessageSquare
} from 'lucide-react';
import logo from "../../assets/logo2.png";
import SEO from '../../components/SEO';

import global1 from "../../assets/global1.jpg"
import global2 from "../../assets/global2.jpeg"
import global3 from "../../assets/global3.jpeg"
import global4 from "../../assets/mainHero.jpeg"

// Placeholder images - Replace with your actual asset imports
const img1 = global1; // Middle East / Dubai
const img2 = global3; // London
const img3 = global2; // Interior / Modern
const img4 = global4; // Architecture detail

const Global = () => {
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const whyChooseUs = [
        { icon: Globe, text: "Specialist focus on UK & Middle East property markets" },
        { icon: Network, text: "Trusted network of developers and professional partners" },
        { icon: ShieldCheck, text: "Clear, transparent advisory — no unnecessary complexity" },
        { icon: Zap, text: "A single point of contact throughout the investment journey" }
    ];

    return (
        <div className="bg-white min-h-screen text-[#222222] relative">

            <SEO
                title="Cross-Border Property Investment | UK & Middle East | Dwell Rich"
                description="Expert cross-border property investment advisory connecting UK and Middle East investors. Trusted guidance for UK, UAE & Qatar real estate opportunities."
                keywords="Cross-border property investments, London property investment Middle East, UAE real estate advisory, Doha property investment"
            />

            {/* FIXED LOGO */}
            <div className="fixed top-10 left-10 md:left-14 z-50">
                <Link to="/">
                    <img loading='lazy' src={logo} alt="Dwell Rich Ltd Logo" className="w-16 md:w-24" />
                </Link>
            </div>

            <main className="max-w-5xl mx-auto pt-44 pb-20 px-10">

                {/* PAGE TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="sr-only">Cross-Border Property Investment Advisory UK Middle East</h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
                        Global Property Investments Advisory
                    </h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                        className="h-[2px] bg-[#8F6573] w-full origin-left"
                    ></motion.div>
                </motion.div>

                {/* HERO TEXT */}
                <motion.section {...fadeInUp} className="max-w-4xl mb-20">
                    <h2 className="text-xl md:text-3xl font-semibold text-[#8F6573] leading-8 mb-8">
                        A Trusted Gateway to International Property Investment between the UK & the Middle East
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-600">
                        <p>
                            At Dwell Rich, we specialise in cross-border property investment advisory, helping investors seamlessly access opportunities across the UK and key Middle Eastern markets.
                        </p>
                        <p>
                            Whether you are a UK-based investor exploring international diversification, or an overseas buyer seeking secure and strategic property investments in the UK, we provide expert guidance, trusted market access, and end-to-end support.
                        </p>
                    </div>
                </motion.section>

                {/* IMAGE 1: FULL WIDTH */}
                <motion.div {...fadeInUp} className="mb-20">
                    <img loading='lazy' src={img1} alt="Middle East Property Market Advisory" className="w-full h-[500px] object-cover shadow-sm" />
                </motion.div>

                {/* SECTION: UK to Middle East */}
                <div className="grid md:grid-cols-2 gap-20 mb-20 items-center">
                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold">UK Investors Investing in the Middle East</h2>
                        </div>
                        <p className="text-lg font-light text-gray-600 mb-8">
                            For investors based in the UK, we offer advisory services for property investments in high-growth Middle Eastern markets, including the United Arab Emirates and Doha.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Strategic market insights and positioning",
                                "Guidance on local regulations & structures",
                                "Access to investment-grade projects",
                                "Full support throughout acquisition"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-lg font-medium text-gray-600">
                                    <CheckCircle2 size={20} className="text-[#8F6573] mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div {...fadeInUp}>
                        <img loading='lazy' src={img3} alt="International Diversification" className="w-full h-[450px] object-cover" />
                    </motion.div>
                </div>

                {/* SECTION: Middle East to UK */}
                <div className="grid md:grid-cols-2 gap-20 mb-20 items-center">
                    <motion.div {...fadeInUp} className="order-2 md:order-1">
                        <img loading='lazy' src={img2} alt="London Property Investment Support" className="w-full h-[450px] object-cover" />
                    </motion.div>
                    <motion.div {...fadeInUp} className="order-1 md:order-2">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold">Middle East Investors Investing in the UK</h2>
                        </div>
                        <p className="text-lg font-light text-gray-600 mb-8">
                            We assist investors from the Middle East looking to acquire property in the UK, with a strong focus on London and prime emerging locations.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Market intelligence and location advisory",
                                "Access to residential-led developments",
                                "Legal, financial, and compliance matters",
                                "Transparent buying for overseas investors"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-lg font-medium text-gray-600">
                                    <CheckCircle2 size={20} className="text-[#8F6573] mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* WHY CHOOSE US GRID */}
                <motion.section {...fadeInUp} className="bg-gray-50 px-6 py-8 md:px-10 py-14 mb-20 rounded-sm">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Dwell Rich for Cross-Border Investments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {whyChooseUs.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="mb-6 bg-[#8F6573] text-white p-3 rounded-full">
                                    <item.icon size={30} strokeWidth={1} />
                                </div>
                                <p className="text-lg font-medium text-gray-700 leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* IMAGE 4 & FINAL TEXT */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-20 items-center">
                    <motion.div {...fadeInUp}>
                        <p className="text-xl md:text-2xl font-light text-gray-500 border-l-4 border-[#8F6573] pl-8 h-60 flex items-center">
                            We support Middle East investors acquiring UK property, while guiding UK clients investing in selected Middle Eastern markets with clarity and confidence.
                        </p>
                    </motion.div>
                    <motion.div {...fadeInUp}>
                        <img loading='lazy' src={img4} alt="Professional Advisory Partners" className="w-full h-[400px] object-cover shadow-lg" />
                    </motion.div>
                </div>

                {/* CTA SECTION */}
                <motion.div
                    {...fadeInUp}
                    className="flex flex-col items-center text-center pt-20 border-t"
                >
                    <MessageSquare size={30} className="text-[#8F6573] mb-8" />
                    <h2 className="text-3xl font-bold mb-10">Speak to Our Investment Advisory Team</h2>
                    <Link to="/contact">
                        <button className="px-12 py-5 bg-[#111] text-white uppercase text-sm tracking-[0.3em] font-bold hover:bg-[#8F6573] transition-all duration-300 cursor-pointer shadow-md">
                            Enquire Now
                        </button>
                    </Link>
                </motion.div>

            </main>
        </div>
    );
};

export default Global;