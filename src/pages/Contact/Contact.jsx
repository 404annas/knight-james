import React from 'react';
import contactLogo from "../../assets/logo2.png"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

import mapImage from "../../assets/map2.jpg"
import LocationMarker from '../../components/LocationMarker';

const locations = [
    {
        id: 1,
        name: "London",
        top: "30%",
        left: "55%",
    },
    {
        id: 2,
        name: "Dubai",
        top: "44%",
        left: "65%",
    },
    {
        id: 3,
        name: "New York",
        top: "35%",
        left: "15%",
    },
];

const Contact = () => {
    // Animation variants for the slide-up effect
    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen text-gray-900 relative">

                <SEO
                    title="Contact Dwell Rich | UK Property Investment Advisory"
                    description="Get in touch with Dwell Rich to discuss UK and international property investments. Confidential consultations and professional advisory support available."
                    keywords="Invest in London property, international investors UK property, London real estate opportunities"
                />

                {/* FIXED LOGO SECTION */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="fixed top-10 md:left-10 left-5 lg:left-14 z-50"
                >
                    <Link to={"/"}>
                        <img loading='lazy' className='w-16 md:w-24' src={contactLogo} alt="Dwell Rich Ltd - London Real Estate Opportunities Logo" />
                    </Link>
                </motion.div>

                {/* LEFT COLUMN: Contact Information */}
                <div className="w-full md:w-1/2 p-10 lg:pl-60 pt-52 pb-16 bg-white flex flex-col">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-xl w-full ml-auto"
                    >
                        <h2 className="sr-only">Invest in London property and international investors UK property</h2>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl leading-none font-bold text-[#222222] mb-16 tracking-tight"
                        >
                            Contact
                        </motion.h1>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                            className="h-[2px] bg-[#8F6573] w-full mb-20 origin-left"
                        ></motion.div>

                        {/* Contact Details */}
                        <div className="space-y-14">
                            <motion.section variants={fadeInUp}>
                                <h2 className="font-bold text-xl mb-2 text-[#8F6573]">General Enquiries</h2>
                                <p className="text-xl">info@dwellrich.co.uk</p>
                            </motion.section>

                            {/* Updated Section: Private Investment Enquiries */}
                            <motion.section variants={fadeInUp}>
                                <h2 className="sr-only">London real estate opportunities for global partners</h2>
                                <h2 className="font-bold text-xl mb-2 text-[#8F6573]">Private Investment Enquiries</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Dwell Rich Ltd works with a limited number of investment partners. All enquiries are handled with strict confidentiality and professionalism.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We welcome discussions with international investors seeking exposure to London property through a disciplined, planning‑led development strategy.
                                </p>
                            </motion.section>

                            {/* Updated Section: Location */}
                            <motion.section variants={fadeInUp}>
                                <h2 className="font-bold text-xl mb-2 text-[#8F6573]">Location</h2>
                                <div className="leading-relaxed">
                                    <p className="text-xl">416, Kingston road, KT1 3PB</p>
                                    <p className="text-xl">Kingston Upon Thames, Surrey</p>
                                </div>
                            </motion.section>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="w-full md:w-1/2 p-10 lg:px-24 pt-10 md:pt-40 pb-16 bg-white border-l flex flex-col relative">

                    <div className="relative flex justify-center my-0">
                        {/* Map Image */}
                        <img
                            src={mapImage}
                            alt="World Map"
                            className="w-full"
                        />

                        {/* Markers */}
                        {locations.map((loc) => (
                            <LocationMarker
                                key={loc.id}
                                name={loc.name}
                                top={loc.top}
                                left={loc.left}
                            />
                        ))}
                    </div>

                    {/* The Form */}
                    <motion.form
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="w-full max-w-md mx-auto md:mx-0 mt-10"
                    >
                        <div className="mb-8">
                            <label className="block text-xl font-medium mb-2" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Your Name'
                                className="w-full md:w-[80%] bg-gray-100 border border-gray-400 p-4 outline-none"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-xl font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder='email@example.com'
                                className="w-full md:w-[80%] bg-gray-100 border border-gray-400 p-4 outline-none"
                            />
                        </div>

                        <div className="mb-10">
                            <label className="block text-xl font-medium mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="6"
                                placeholder='Your Enquiry'
                                className="w-full md:w-[80%] resize-none bg-gray-100 border border-gray-400 p-4 outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-[80%] bg-black text-white py-4 text-[13px] font-bold uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer hover:bg-gray-800"
                        >
                            Send
                        </button>
                    </motion.form>
                </div>
            </div>
        </>
    );
};

export default Contact;