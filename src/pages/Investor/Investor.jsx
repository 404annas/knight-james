import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TrendingUp,
    Clock,
    ShieldCheck,
    BarChart3,
    Lock,
    CheckCircle2,
    Briefcase,
    Handshake
} from 'lucide-react';
import logo from "../../assets/logo.png";
import SEO from '../../components/SEO';

const Investor = () => {
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const benefits = [
        { icon: TrendingUp, text: "Predictable returns with no reliance on market upside" },
        { icon: BarChart3, text: "Reduced volatility compared to equity-based investments" },
        { icon: Lock, text: "Clear risk profile with defined entry and exit" },
        { icon: ShieldCheck, text: "Professional, disciplined underwriting behind every project" },
        { icon: Handshake, text: "No dilution, no profit-sharing complexity overall" }
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen text-[#222222] bg-white relative">
            <SEO
                title="Property Investment Opportunities | UK & International | Dwell Rich"
                description="Discover property investment opportunities with Dwell Rich. Advisory support for UK investors and international clients seeking secure, strategic real estate investments."
                keywords="Property investment strategy UK, planning gain investments, London real estate ROI, UK development opportunities"
            />

            {/* FIXED LOGO */}
            <div className="fixed top-8 left-8 md:top-10 md:left-14 z-50">
                <Link to="/">
                    <img loading='lazy' src={logo} alt="Dwell Rich Ltd" className="w-16 md:w-24" />
                </Link>
            </div>

            {/* LEFT COLUMN: Content */}
            <div className="w-full lg:w-[60%] px-6 md:px-16 lg:pl-44 lg:pr-24 pt-32 md:pt-44 pb-20">
                <main className="max-w-3xl">
                    {/* PAGE TITLE */}
                    <motion.div {...fadeInUp} className="mb-10 md:mb-20">
                        <h2 className="sr-only">Property investment strategy UK and planning gain investments</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Investor</h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                            className="h-[2px] bg-[#8F6573] w-full origin-left"
                        ></motion.div>
                    </motion.div>

                    {/* 1. APPROACH SECTION */}
                    <motion.section {...fadeInUp} className="mb-10 md:mb-20">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#222222] mb-6">Our Investment Approach</h2>
                        <h3 className="sr-only">London real estate ROI and UK development opportunities</h3>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-[#8F6573]">
                            Predictable Returns. <br />
                            Defined Timeframe. <br />
                            Disciplined Strategy.
                        </h3>
                        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-600">
                            <p>
                                At Dwell Rich Developments, we offer investors a structured return model designed for clarity, security, and predictability.
                            </p>
                            <p className="border-l-4 border-[#8F6573] pl-6 md:pl-8 font-normal text-gray-800">
                                Our investment approach is focused on delivering fixed returns over a defined lock-in period, without exposure to development risk beyond the agreed terms.
                            </p>
                            <p>
                                This structure is ideal for investors seeking stable ROI rather than long-term capital appreciation or equity participation.
                            </p>
                        </div>
                    </motion.section>

                    {/* 2. HOW IT WORKS */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 md:p-12 rounded-sm mb-10 md:mb-20"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">How the Investment Works?</h2>
                        <p className="text-lg font-light text-gray-600 mb-10">
                            Investors participate in our development projects through a fixed-return investment structure:
                        </p>

                        <div className="grid grid-cols-1 gap-10">
                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <TrendingUp className="text-[#8F6573] shrink-0" size={28} />
                                    <div>
                                        <h4 className="font-bold text-lg">Fixed ROI</h4>
                                        <p className="font-light text-gray-500 text-sm md:text-base">A pre-agreed return on investment based on project fundamentals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <Clock className="text-[#8F6573] shrink-0" size={28} />
                                    <div>
                                        <h4 className="font-bold text-lg">Defined Lock-in</h4>
                                        <p className="font-light text-gray-500 text-sm md:text-base">A clearly defined timeframe for capital deployment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-start border-t md:border-t-0 md:border-l-2 border-[#8F6573] pt-8 md:pt-0 md:pl-10">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-[#8F6573] mb-6">At Maturity</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 text-lg font-light">
                                        <CheckCircle2 className="text-green-600" size={20} />
                                        Original capital returned
                                    </li>
                                    <li className="flex items-center gap-3 text-lg font-light">
                                        <CheckCircle2 className="text-green-600" size={20} />
                                        Agreed ROI paid in full
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* 3. WHY THIS STRUCTURE */}
                    <motion.section {...fadeInUp} className="mb-10 md:mb-20">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10">Why This Structure Appeals to Investors</h2>
                        <div className="grid grid-cols-1 gap-y-8">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex items-start gap-5 group">
                                    <div className="p-3 bg-white border border-gray-100 shadow-sm text-[#8F6573] group-hover:bg-[#8F6573] group-hover:text-white transition-all duration-300">
                                        <item.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-lg font-normal text-gray-600 leading-snug pt-1">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* 4. COMMITMENT & RELATIONSHIP */}
                    <div className="space-y-20 md:space-y-20">
                        <motion.section {...fadeInUp}>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600">
                                Dwell Rich Developments applies conservative assumptions and disciplined underwriting across all projects. We prioritise capital preservation, robust feasibility analysis, and responsible leverage to ensure our obligations to investors are met regardless of market conditions.
                            </p>
                        </motion.section>

                        <motion.section {...fadeInUp}>
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">Straightforward Relationship</h2>
                            <div className="space-y-5 text-lg font-normal text-gray-600">
                                <p className="flex items-center gap-4"><Briefcase size={20} className="text-[#8F6573] shrink-0" /> Fixed timelines & income-style returns</p>
                                <p className="flex items-center gap-4"><Briefcase size={20} className="text-[#8F6573] shrink-0" /> Clear contractual terms</p>
                                <p className="flex items-center gap-4"><Briefcase size={20} className="text-[#8F6573] shrink-0" /> No operational involvement required</p>
                            </div>
                        </motion.section>
                    </div>
                </main>
            </div>

            {/* RIGHT COLUMN: Enquiry Form */}
            <div className="w-full lg:w-[40%] bg-[#ebebeb] px-6 md:px-16 lg:px-20 py-20 lg:pt-44 flex flex-col items-center">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="w-full max-w-md lg:sticky lg:top-44"
                >
                    <h2 className="text-3xl font-bold mb-10 text-[#222222]">Investment Enquiry</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white border-none p-4 outline-none focus:ring-2 focus:ring-[#8F6573]/20 transition-all"
                                placeholder="Full Name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white border-none p-4 outline-none focus:ring-2 focus:ring-[#8F6573]/20 transition-all"
                                placeholder="email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2" htmlFor="type">Investment Type</label>
                            <div className="relative">
                                <select
                                    id="type"
                                    className="w-full bg-white border-none p-4 outline-none focus:ring-2 focus:ring-[#8F6573]/20 appearance-none cursor-pointer transition-all"
                                >
                                    <option value="">Select an option</option>
                                    <option value="individual">Individual Investor</option>
                                    <option value="institutional">Institutional Investor</option>
                                    <option value="joint-venture">Joint Venture Partner</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full bg-white border-none p-4 outline-none resize-none focus:ring-2 focus:ring-[#8F6573]/20 transition-all"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-5 text-[12px] font-bold uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer hover:bg-[#8F6573] active:scale-[0.98]"
                        >
                            Send Enquiry
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Investor;