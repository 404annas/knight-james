import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../../assets/logo-contact.svg";
import { Link } from 'react-router-dom';

const projects = [
    { title: "The Hayloft, WD3", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Exterior-Pre-Build.jpg" },
    { title: "Jermyn Street, SW1", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/IMG_5266.jpeg" },
    { title: "Lower Duplex, Brompton Square, SW3", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/IMG_4826.jpg" },
    { title: "Upper Duplex, Brompton Square, SW3", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/IMG_4843.jpg" },
    { title: "Cranley Gardens, SW7", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Exterior_2024-01-06-092147_uqwe.jpg" },
    { title: "Gloucester Terrace, W2", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Exterior_2024-01-06-092433_qkse.jpg" },
    { title: "Clifton Road, W9", img: "https://www.knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Exterior_2024-01-06-093109_jfej.jpg" },
];

const Current = () => {
    return (
        <div className="bg-white min-h-screen text-[#222222]">

            {/* HEADER SECTION */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-14 py-8">
                <Link to="/">
                    <img src={logo} alt="Knight James Logo" className="w-20 md:w-24" />
                </Link>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-5xl mx-auto pt-52 pb-20 px-6">

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
                                <img
                                    loading='lazy'
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-auto object-cover cursor-pointer hover:opacity-50 transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
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