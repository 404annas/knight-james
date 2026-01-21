import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo-contact.svg";
import logo2 from "../../assets/logo2.svg";
import { pastProjectsData } from './pastProjects';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the specific project data based on the ID in the URL
    const project = pastProjectsData.find((p) => p.id === id);

    // Scroll to top when the project changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Handle case where project ID is wrong
    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl mb-4">Project not found</h1>
                <Link to="/developments" className="text-[#8F6573] underline">Back to Developments</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen text-[#222222]">
            {/* FIXED LOGO & MENU */}
            <div className="fixed top-10 left-10 md:left-14 z-50">
                <Link to="/"><img src={logo} alt="Logo" className="w-20 md:w-24" /></Link>
            </div>

            <main className="max-w-5xl mx-auto pt-44 pb-20 px-6">
                {/* TITLE SECTION */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Link to="/developments" className="text-[#8F6573] text-sm uppercase tracking-widest mb-4 inline-block hover:opacity-70">
                        Past Developments
                    </Link>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">{project.title}</h1>
                    <div className="flex items-center gap-4 mt-2 mb-16">
                        <div className="w-12 h-[2px] bg-[#8F6573]"></div>
                        <span className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-400">{project.location}</span>
                    </div>
                </motion.div>

                {/* HERO IMAGE */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="mb-24">
                    <img loading='lazy' src={project.heroImg} alt={project.title} className="w-full aspect-[16/9] object-cover shadow-sm" />
                </motion.div>

                {/* INFO SECTION */}
                <div className="grid md:grid-cols-1 gap-10 mb-32 max-w-3xl mx-auto">
                    <div className="md:col-span-5">
                        <h2 className="text-3xl text-[#222222] font-bold mb-8">{project.subTitle}</h2>
                        <div className="border-t border-gray-100">
                            {project.specs.map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100 text-xl">
                                    <span className="font-normal text-gray-700">{item.label}</span>
                                    <span className="text-gray-700 font-light">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-7 space-y-6 text-[#666666] leading-relaxed text-xl font-light">
                        {project.description.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>

                {/* GALLERY LIST */}
                <div className="space-y-10">
                    {project.gallery.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img loading='lazy' src={img} alt={`Gallery ${i}`} className="w-full h-[500px] object-cover" />
                        </motion.div>
                    ))}
                </div>

                {/* NEXT PROJECT LINK */}
                <div className="mt-20 text-center py-20 bg-gray-50 flex flex-col items-center">
                    <img src={logo2} alt="Logo" className="w-30 md:w-40 mb-4" />
                    <p className="text-sm font-bold tracking-widest uppercase mb-2">Next Project</p>
                    <Link
                        to={`/developments/${project.nextProjectId}`}
                        className="text-2xl font-light hover:text-[#8F6573] transition-colors"
                    >
                        {project.nextProjectName} →
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetails;