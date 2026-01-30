import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../../assets/logo2.png";
import { Link } from 'react-router-dom';
import kingstonMain from "../../../assets/KingstonMain.jpg"
import surreyMain from "../../../assets/SurreyMain.jpg"
import kingstonNewMain from "../../../assets/kingstonNew6.jpg"
import SEO from '../../../components/SEO';

import childMain from "../../../assets/childMain.jpg"
import bnbMain from "../../../assets/bnbMain.jpg"
import gilliMain from "../../../assets/gilliMain.jpg"
import harrowMain from "../../../assets/harrowMain.jfif"
import chelseaMain from "../../../assets/chelsea3.jpg"
import bromleyMain from "../../../assets/bromleyMain.jpg"

const projects = [
    { title: "Kingston Upon Thames", img: kingstonNewMain },
    { title: "Cheam Surrey", img: kingstonMain },
    { title: "Chelsea Flat", img: chelseaMain },
    { title: "Gillian Road Sutton", img: gilliMain },
    { title: "Chiltren Drive Sutton", img: childMain },
    { title: "Holiday Home ( Air B&B ) Mitcham", img: bnbMain },
    { title: "Harrow", img: harrowMain },
    { title: "Bromley", img: bromleyMain },
];

const Past = () => {
    return (
        <div className="bg-white min-h-screen text-[#222222]">

            <SEO
                title="Past Property Developments | Proven UK Investments | Dwell Rich"
                description="View past property developments advised by Dwell Rich. A track record of successful UK residential and investment property projects."
                keywords="London property developments, residential development London, planning gain property UK, property development company London"
            />

            {/* HEADER SECTION */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-14 py-8">
                <Link to="/">
                    <img loading='lazy' src={logo} alt="Dwell Rich Ltd - London Real Estate Opportunities Logo" className="w-16 md:w-24" />
                </Link>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-5xl mx-auto pt-52 pb-20 px-6">

                {/* ANIMATED HEADING */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10"
                >
                    Past Developments
                </motion.h1>

                {/* ANIMATED LINE */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                    className="h-[2px] bg-[#8F6573] w-full mb-20 origin-left"
                ></motion.div>

                {/* PROJECTS LIST */}
                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <Link onClick={() => scrollTo(0, 0)} to={`/developments/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                            <motion.div
                                key={index}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-full overflow-hidden mb-6">
                                    <img
                                        loading='lazy'
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-[80vh] object-cover cursor-pointer transition-all duration-700 ease-in-out transform hover:scale-110"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg md:text-xl font-medium tracking-wide">
                                        {project.title}
                                    </p>
                                    <div className="h-[2px] bg-[#8F6573] w-1/4 mx-auto mt-1 group-hover:w-full transition-all duration-500"></div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Past;