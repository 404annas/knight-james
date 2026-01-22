import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    PenTool,
    Settings,
    Scale,
    HardHat,
    Palette,
    MapPin,
    FileSearch,
    Hammer,
    TrendingUp,
    Target
} from 'lucide-react';
import logo from "../../assets/logo.png";
import SEO from '../../components/SEO';
// import founderImg from "../../assets/founder.jpg";

const About = () => {
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    // Data for Team with Icons
    const teamItems = [
        { icon: PenTool, text: "Architects and planning consultants" },
        { icon: Settings, text: "Structural engineers" },
        { icon: Scale, text: "Legal and conveyancing advisors" },
        { icon: HardHat, text: "Construction and project management professionals" },
        { icon: Palette, text: "Interior designers and fit‑out specialists" }
    ];

    // Data for Selection Criteria with Icons
    const criteriaItems = [
        { icon: MapPin, text: "Location fundamentals and demand" },
        { icon: FileSearch, text: "Planning and development potential" },
        { icon: Hammer, text: "Construction feasibility and cost control" },
        { icon: TrendingUp, text: "Risk‑adjusted return potential" },
        { icon: Target, text: "Defined exit strategy" }
    ];

    return (
        <div className="bg-white min-h-screen text-[#222222] relative">

            <SEO
                title="About Us - UK Property Specialists"
                description="Dwell Rich Ltd is a premier London real estate investment company. Founded by Saleha Ali Khan, we are leading property developers in London."
                keywords="Property developer London, women property developer UK, London real estate investment company, UK property specialists"
            />

            {/* FIXED LOGO */}
            <div className="fixed top-10 left-10 md:left-14 z-50">
                <Link to="/">
                    <img loading='lazy' src={logo} alt="Dwell Rich Ltd - Property Developer London Logo" className="w-16 md:w-24" />
                </Link>
            </div>

            <main className="max-w-4xl mx-auto pt-44 pb-20 px-6">

                {/* PAGE TITLE */}
                <motion.div {...fadeInUp} className="mb-20">
                    <h2 className="sr-only">London real estate investment company and UK property specialists</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-10 tracking-tight text-[#222222]">About</h1>
                    <div className="h-[2px] bg-[#8F6573] w-full"></div>
                </motion.div>

                {/* 1. ABOUT HEADLINE */}
                <motion.section {...fadeInUp} className="max-w-4xl mb-20">
                    <h2 className="text-2xl font-bold mb-6">About Dwell Rich Ltd</h2>
                    <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-600">
                        Dwell Rich Ltd is a privately owned property development and investment company built on discipline, selectivity, and execution excellence.
                    </p>
                </motion.section>

                {/* 2. FOUNDER SECTION (Right-aligned Image Layout) */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20"
                >
                    <div className="w-full md:w-3/5 order-2 md:order-1">
                        <h2 className="sr-only">Leading women property developer UK - Saleha Ali Khan</h2>
                        <h2 className="text-3xl font-bold mb-1">Saleha Ali Khan</h2>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-8">Founder</h3>

                        <div className="space-y-6 text-base sm:text-lg font-light leading-relaxed text-gray-600">
                            <p>
                                Dwell Rich Ltd is founded by Saleha Ali Khan. The founder brings hands‑on experience across construction, interior design, and property investment in London.
                            </p>
                            <p>
                                This practical background enables a deep understanding of buildability, cost control, and design efficiency, ensuring that projects remain commercially viable throughout the development lifecycle.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5 order-1 md:order-2">
                        <div className="aspect-[4/5] overflow-hidden bg-gray-50 shadow-sm">
                            <img
                                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Saleha Ali Khan - Women property developer London"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* 3. OUR TEAM (Icon Grid) */}
                <motion.section {...fadeInUp} className="max-w-4xl mb-20">
                    <h2 className="sr-only">Our professional team of UK property specialists</h2>
                    <h2 className="text-2xl font-bold mb-8">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-10">
                        {teamItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="p-3 bg-gray-50 rounded-sm text-[#8F6573] group-hover:bg-[#8F6573] group-hover:text-white transition-colors duration-300">
                                    <item.icon size={22} strokeWidth={1.5} />
                                </div>
                                <span className="text-lg font-light text-gray-600">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-base sm:text-lg font-light leading-relaxed text-gray-500 border-l-2 border-[#8F6573] pl-6">
                        This integrated approach allows us to reduce execution risk, improve coordination, and maintain quality at every stage of development.
                    </p>
                </motion.section>

                {/* 4. STRATEGY */}
                <motion.section {...fadeInUp} className="max-w-4xl mb-20">
                    <h2 className="sr-only">Property investment strategy in London and planning gain developments</h2>
                    <h2 className="text-2xl font-bold mb-6">Strategy</h2>
                    <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-600">
                        Our strategy is centred on planning‑led and design‑driven value creation. Rather than relying solely on market appreciation, we actively seek opportunities where value can be unlocked through planning permissions, layout optimisation, or change of use.
                    </p>
                </motion.section>

                {/* 5. PROPERTY SELECTION CRITERIA (Icon List) */}
                <motion.section {...fadeInUp} className="max-w-4xl">
                    <h2 className="text-2xl font-bold mb-10">Property Selection Criteria</h2>
                    <div className="space-y-8">
                        {criteriaItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-5">
                                <div className="mt-1 text-[#8F6573]">
                                    <item.icon size={26} strokeWidth={1} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base sm:text-lg font-light text-gray-700">{item.text}</span>
                                    <div className="h-[1px] w-12 bg-gray-100 mt-2"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

            </main>
        </div>
    );
};

export default About;