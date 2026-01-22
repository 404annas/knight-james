import React from 'react';
import { motion } from 'framer-motion';
import ImageLoader from '../../../components/ImageLoader';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

import current1 from "../../../assets/current1.jpg"

const projects = [
    { title: "Wimbledon", img: current1 }
];

const Current = () => {
    return (
        <div className="bg-white min-h-screen text-[#222222]">

            <SEO
                title="Current Projects - London Property Developments"
                description="View our latest residential development projects across London. Dwell Rich Ltd specializes in planning gain and luxury property development."
                keywords="London property developments, residential development London, planning gain property UK, property development company London"
            />

            {/* HEADER SECTION */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-14 py-8">
                <Link to="/">
                    <ImageLoader
                        src={logo}
                        alt="Dwell Rich Ltd - Property Development Company London"
                        className="w-16 md:w-24"
                        priority={true}
                    />
                </Link>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-5xl mx-auto pt-52 pb-20 px-6">
                <h2 className="sr-only">Residential development London and planning gain property UK specialists</h2>

                {/* ANIMATED HEADING */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-10"
                >
                    Current Projects
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
                        <motion.div
                            key={index}
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-full overflow-hidden mb-6">
                                <ImageLoader
                                    src={project.img}
                                    alt={`${project.title} - London property development by Dwell Rich Ltd`}
                                    className="w-full h-[500px] object-cover cursor-pointer hover:opacity-50 transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
                                    priority={false}
                                    placeholder="color"
                                    placeholderColor="#e5e7eb"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-lg md:text-xl font-medium tracking-wide">
                                    {project.title}
                                </p>
                                <div className="h-[2px] bg-[#8F6573] w-1/4 mx-auto mt-1 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Current;