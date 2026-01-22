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
    AlertCircle,
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
        <div className="bg-white min-h-screen text-[#222222] relative">

            <SEO
                title="Investment Approach - London Real Estate ROI"
                description="Discover a strategic property investment strategy in the UK focusing on planning gain and high ROI. Dwell Rich Ltd offers predictable returns and UK development opportunities."
                keywords="Property investment strategy UK, planning gain investments, London real estate ROI, UK development opportunities"
            />

            {/* FIXED LOGO */}
            <div className="fixed top-10 left-10 md:left-14 z-50">
                <Link to="/">
                    <img src={logo} alt="Dwell Rich Ltd - Property investment strategy UK Logo" className="w-16 md:w-24" />
                </Link>
            </div>

            <main className="max-w-4xl mx-auto pt-44 pb-20 px-6">

                {/* PAGE TITLE */}
                <motion.div {...fadeInUp} className="mb-20">
                    <h2 className="sr-only">Property investment strategy UK and planning gain investments</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-10 tracking-tight">Investor</h1>
                    <div className="h-[2px] bg-[#8F6573] w-full"></div>
                </motion.div>

                {/* 1. APPROACH SECTION */}
                <motion.section {...fadeInUp} className="max-w-4xl mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-[#8F6573] mb-6">Our Investment Approach</h2>
                    <h3 className="sr-only">London real estate ROI and UK development opportunities</h3>
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                        Predictable Returns. <br />
                        Defined Timeframe. <br />
                        Disciplined Strategy.
                    </h3>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-600">
                        <p>
                            At Dwell Rich Developments, we offer investors a structured return model designed for clarity, security, and predictability.
                        </p>
                        <p className="border-l-4 border-[#8F6573] pl-8 text-gray-500">
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
                    className="grid md:grid-cols-2 gap-16 mb-20 bg-gray-50 px-6 py-8 md:p-10 rounded-sm"
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-8">How the Investment Works</h2>
                        <p className="text-base sm:text-lg font-light text-gray-600 mb-10">
                            Investors participate in our development projects through a fixed-return investment structure:
                        </p>
                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <TrendingUp className="text-[#8F6573] shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg">Fixed ROI</h4>
                                    <p className="font-light text-gray-500">A pre-agreed return on investment based on project fundamentals.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <Clock className="text-[#8F6573] shrink-0" size={28} />
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg">Defined Lock-in</h4>
                                    <p className="font-light text-gray-500">A clearly defined timeframe for capital deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center border-l border-gray-200 md:pl-16">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#8F6573] mb-4">At Maturity</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-3 text-base sm:text-xl font-light">
                                <CheckCircle2 className="text-green-600" size={20} />
                                Original capital returned
                            </li>
                            <li className="flex items-center gap-3 text-base sm:text-xl font-light">
                                <CheckCircle2 className="text-green-600" size={20} />
                                Agreed ROI paid in full
                            </li>
                        </ul>
                    </div>
                </motion.section>

                {/* 3. WHY THIS STRUCTURE */}
                <motion.section {...fadeInUp} className="max-w-4xl mb-20">
                    <h2 className="text-2xl font-bold mb-10">Why This Structure Appeals to Investors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {benefits.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="p-3 bg-white border border-gray-100 shadow-sm text-[#8F6573] group-hover:bg-[#8F6573] group-hover:text-white transition-all duration-300">
                                    <item.icon size={22} strokeWidth={1.5} />
                                </div>
                                <span className="text-base sm:text-lg font-light text-gray-600 leading-snug">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 4. COMMITMENT & RELATIONSHIP */}
                <div className="grid md:grid-cols-2 gap-20 mb-20">
                    <motion.section {...fadeInUp}>
                        <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
                        <p className="text-base sm:text-lg font-light leading-relaxed text-gray-600">
                            Dwell Rich Developments applies conservative assumptions and disciplined underwriting across all projects. We prioritise capital preservation, robust feasibility analysis, and responsible leverage to ensure our obligations to investors are met regardless of market conditions.
                        </p>
                    </motion.section>
                    <motion.section {...fadeInUp}>
                        <h2 className="text-2xl font-bold mb-6">Straightforward Relationship</h2>
                        <div className="space-y-4 text-base sm:text-lg font-light text-gray-600">
                            <p className="flex items-center gap-3"><Briefcase size={18} className="text-[#8F6573]" /> Fixed timelines & income-style returns</p>
                            <p className="flex items-center gap-3"><Briefcase size={18} className="text-[#8F6573]" /> Clear contractual terms</p>
                            <p className="flex items-center gap-3"><Briefcase size={18} className="text-[#8F6573]" /> No operational involvement required</p>
                        </div>
                    </motion.section>
                </div>

                {/* 5. LEGAL DISCLAIMER SECTION */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="border-t border-gray-300 pt-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-8 text-[#8F6573]">
                        <AlertCircle size={20} />
                        <h2 className="text-xl font-bold uppercase tracking-widest">Legal & Investor Disclaimer</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                        <p>
                            The content on this website is provided for general informational purposes only and does not constitute an offer, solicitation, or recommendation to invest in any property, security, or financial product.
                        </p>
                        <p>
                            All property investments carry risk, including the potential loss of capital. Past performance is not indicative of future results. Dwell Rich Ltd does not provide financial, legal, or tax advice. Prospective investors should seek independent professional advice before making any investment decisions.
                        </p>
                    </div>
                </motion.section>

            </main>
        </div>
    );
};

export default Investor;