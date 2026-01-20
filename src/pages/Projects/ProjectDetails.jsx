import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import logo from "../../assets/logo-contact.svg";

const ProjectDetails= () => {
    const { id } = useParams();

    // In a real app, you'd fetch data based on 'id'. 
    // Here is mock data based on the provided image.
    const projectData = {
        title: "Westbourne Terrace",
        location: "W2",
        heroImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600",
        subTitle: "Lancaster Gate Penthouse",
        specs: [
            { label: "Architect", value: "Jack Dusek" },
            { label: "Bedrooms", value: "3" },
            { label: "Bathrooms", value: "3" },
            { label: "Size", value: "1650 sq ft" },
            { label: "Sale Price", value: "£2,450,000" },
        ],
        description: [
            "When purchased this property had been unofficially split into two units: a three bedroom duplex and a studio flat. We secured planning permission and listed building consent to reconfigure the space as one large duplex penthouse, reinstating the original Victorian facade to the front and adding a full width terrace to the rear.",
            "We also undertook a particularly involved process to purchase the fourth and fifth floor communal hallways, enlarging the flat by around 150 sq ft and creating a far more impressive entrance hall and living space.",
            "On the lower floor we created three bedrooms and three marble-clad bathrooms, with a principal suite of some 400 sq ft in size.",
            "To the upper floor we created one vast open-plan kitchen and living area with a bar and two sets of French doors leading out onto the terrace.",
            "The flat was sold with a share in the freehold and a long lease."
        ],
        gallery: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c67?q=80&w=1200"
        ]
    };

    return (
        <div className="bg-white min-h-screen text-[#222222]">

            {/* FIXED LOGO & MENU */}
            <div className="fixed top-10 left-10 md:left-14 z-50">
                <Link to="/"><img src={logo} alt="Logo" className="w-20 md:w-24" /></Link>
            </div>

            <main className="max-w-5xl mx-auto pt-44 pb-20 px-6">

                {/* TITLE SECTION */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Link to={"/developments"} className="text-[#8F6573] hover:text-[#8F6573] text-sm uppercase tracking-widest mb-4">Past Developments</Link>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">{projectData.title}</h1>
                    <div className="flex items-center gap-4 mt-2 mb-16">
                        <div className="w-12 h-[2px] bg-[#8F6573]"></div>
                        <span className="text-4xl md:text-6xl font-light text-gray-400">{projectData.location}</span>
                    </div>
                </motion.div>

                {/* HERO IMAGE */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="mb-24">
                    <img src={projectData.heroImg} alt="Hero" className="w-full aspect-[16/9] object-cover shadow-lg" />
                </motion.div>

                {/* INFO SECTION */}
                <div className="grid md:grid-cols-12 gap-16 mb-32">
                    {/* Left: Table */}
                    <div className="md:col-span-5">
                        <h2 className="text-2xl font-bold mb-8">{projectData.subTitle}</h2>
                        <div className="border-t border-gray-100">
                            {projectData.specs.map((item, i) => (
                                <div key={i} className="flex justify-between py-4 border-b border-gray-100 text-[15px]">
                                    <span className="font-bold">{item.label}</span>
                                    <span className="text-gray-500">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right: Description */}
                    <div className="md:col-span-7 space-y-6 text-[#666666] leading-relaxed text-lg font-light">
                        {projectData.description.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>

                {/* GALLERY LIST */}
                <div className="space-y-24">
                    {projectData.gallery.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src={img} alt={`Gallery ${i}`} className="w-full object-cover" />
                        </motion.div>
                    ))}
                </div>

                {/* NEXT PROJECT LINK */}
                <div className="mt-40 text-center py-20 bg-gray-50 flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-16 opacity-30 mb-4 grayscale" />
                    <p className="text-sm font-bold tracking-widest uppercase mb-2">Next Project</p>
                    <Link to="/developments" className="text-2xl font-light hover:text-[#8F6573] transition-colors">Sutherland Avenue, W9 →</Link>
                </div>
            </main>

            {/* DARK FOOTER */}
            <footer className="bg-[#111111] text-white py-16 px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase">Knight James</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose">
                    Knight James is the trading name of The Knight James Group Limited and its associated companies.<br />
                    39 Hendon Lane, London, N3 1RY - Company Number: 09129424
                </p>
            </footer>
        </div>
    );
};

export default ProjectDetails;