import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import kingstonMain from "../../../assets/KingstonMain.jpg"
import surreyMain from "../../../assets/SurreyMain.jpg"

const projects = [
    { title: "Kingston Upon Thames", img: kingstonMain },
    { title: "Thames Surrey", img: surreyMain },
    // { title: "Sutherland Avenue, W9", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/CORE-Flat-4-116-Sutherland-Avenue-Reception3.1-1.jpg" },
    // { title: "Midhurst Avenue, N10", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Kitchen-front-zoomed.jpg" },
    // { title: "Leamington Road Villas, W11", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/LRV-Rear-Living-Room.jpg" },
    // { title: "Oxford Gardens, W10", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Kitchen-I.jpg" },
    // { title: "Clanricarde Gardens, W2", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Living-Room-Main.jpg" },
    // { title: "Queens Gate Place, SW7", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Drawing-Room-Wide-angle_2020-10-26-130738.jpg" },
    // { title: "Craven Hill, W2", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Website-main-shot-terrace-and-living-from-side.jpg" },
    // { title: "Trebovir Road, SW5", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Drawing-Room-I.jpg" },
    // { title: "Linden Gardens, W2", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Linden-Gardens-W2-LIVING-MEZZ-AND-KITCHEN.jpg" },
    // { title: "St. Mark's Road, W10", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/St-Marks-Place-91D-2.jpg" },
    // { title: "Ashmore Road, W9", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Ashmore-Road-68D-22.jpg" },
    // { title: "St. Quintin Gardens, W10", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/St-Quintin-Gardens-W10_19.jpg" },
    // { title: "Shirland Road, W9", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Shirland-rd-4.jpg" },
    // { title: "Elgin Avenue, W9", img: "https://knightjames.co.uk/assets/developments/_1536xAUTO_crop_center-center_70_none/Elgin-Avenue-Diner-Through-A.jpg" },
];

const Past = () => {
    return (
        <div className="bg-white min-h-screen text-[#222222]">

            {/* HEADER SECTION */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-14 py-8">
                <Link to="/">
                    <img src={logo} alt="Knight James Logo" className="w-16 md:w-24" />
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
                        <Link to={`/developments/${project.title.toLowerCase().replace(/ /g, "-")}`}>
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