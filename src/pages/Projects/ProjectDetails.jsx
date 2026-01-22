import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
    Home, Layout, Hammer, Coins, TrendingUp, CheckCircle2
} from 'lucide-react';
import logo from "../../assets/logo.png";
import { pastProjectsData } from './pastProjects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = pastProjectsData.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return null;

    // Logic to determine how many images are full width based on project ID
    const getFullWidthCount = () => {
        if (project.id === "kingston-upon-thames") return 1; // Kingston: 1st image full width
        if (project.id === "thames-surrey") return 2;        // Surrey: 1st and 2nd images full width
        return 0;
    };

    const fullWidthCount = getFullWidthCount();
    const fullWidthImages = project.gallery.slice(0, fullWidthCount);
    const gridImages = project.gallery.slice(fullWidthCount);

    const fadeInUp = {
        initial: { y: 30, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    return (
        <div className="bg-white min-h-screen text-[#222222] lg:px-44">
            {/* FIXED LOGO */}
            <div className="fixed top-10 left-10 md:left-14 z-50">
                <Link to="/"><img src={logo} alt="Logo" className="w-20 md:w-24" /></Link>
            </div>

            <main className="max-w-6xl mx-auto pt-44 pb-20 px-6">

                {/* HEADER */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Link to="/developments" className="text-[#8F6573] text-sm uppercase tracking-widest mb-4 inline-block hover:opacity-70">
                        Past Developments
                    </Link>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2">{project.title}</h1>
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-12 h-[2px] bg-[#8F6573]"></div>
                        <span className="text-3xl md:text-4xl font-light text-gray-400">{project.location}</span>
                    </div>
                </motion.div>

                {/* HERO IMAGE */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="mb-24">
                    <img loading='lazy' src={project.heroImg} alt={project.title} className="w-full aspect-video object-cover shadow-sm" />
                </motion.div>

                {/* PROJECT OVERVIEW */}
                <section className="max-w-4xl mx-auto mb-32">
                    <div className="flex items-center gap-3 mb-6 text-[#8F6573]">
                        <Home size={28} strokeWidth={1.5} />
                        <h2 className="text-3xl font-bold">Project Overview</h2>
                    </div>
                    <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed space-y-6">
                        <p>{project.overview}</p>
                        <p>{project.overviewSecondary}</p>
                    </div>
                </section>

                {/* ASSET PROFILE & STRATEGY GRID */}
                <div className="grid md:grid-cols-2 gap-20 mb-20">
                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-3 mb-8 border-b pb-4">
                            <Layout size={24} className="text-[#8F6573]" />
                            <h3 className="text-2xl font-bold">Asset Profile</h3>
                        </div>
                        <div className="space-y-6">
                            {project.assetProfile?.map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-sm uppercase tracking-widest text-[#8F6573] font-bold mb-1">{item.label}</span>
                                    <span className="text-xl font-light">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-3 mb-8 border-b pb-4">
                            <TrendingUp size={24} className="text-[#8F6573]" />
                            <h3 className="text-2xl font-bold">Strategy</h3>
                        </div>
                        <ul className="space-y-4">
                            {project.strategy?.map((item, i) => (
                                <li key={i} className="flex gap-4 text-lg font-light text-gray-600">
                                    <CheckCircle2 size={20} className="text-[#8F6573] mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* GALLERY SECTION */}
                <div className="flex flex-col gap-4 mb-20">

                    {/* 1. FULL WIDTH IMAGES (1 for Kingston, 2 for Surrey) */}
                    <div className="flex flex-col gap-4">
                        {fullWidthImages.map((img, index) => (
                            <motion.img
                                key={`full-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={img}
                                className="w-full h-[600px] object-cover"
                                alt={`Featured ${index}`}
                                loading="lazy"
                            />
                        ))}
                    </div>

                    {/* 2. GRID IMAGES (The rest of the gallery) */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {gridImages.map((img, index) => (
                            <motion.img
                                key={`grid-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={img}
                                className="w-full h-[500px] object-cover"
                                alt={`Detail ${index}`}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>

                {/* FINANCIAL SUMMARY */}
                <motion.section {...fadeInUp} className="bg-gray-50 px-6 py-8 md:p-10 mb-20 rounded-sm">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <Coins size={28} className="text-[#8F6573]" />
                        <h2 className="text-3xl font-bold">Financial Summary</h2>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {project.financials?.map((item, i) => (
                            <div key={i} className={`flex justify-between py-5 border-b border-gray-200 ${item.highlight ? 'text-[#8F6573] font-bold text-2xl mt-4' : 'text-xl'}`}>
                                <span className="font-normal">{item.label}</span>
                                <span className='font-light'>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* DESIGN & BUILD */}
                <section className="grid md:grid-cols-2 gap-20 items-center mb-20">
                    {/* Using index 2 or 0 of the grid images for this section to avoid repeats if preferred */}
                    <img src={project.gallery[0]} className="w-full aspect-square object-cover" alt="Design" />
                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-3 mb-8">
                            <Hammer size={24} className="text-[#8F6573]" />
                            <h3 className="text-3xl font-bold">Design & Build</h3>
                        </div>
                        <ul className="space-y-6">
                            {project.designBuild?.map((item, i) => (
                                <li key={i} className="text-xl font-light text-gray-600 border-l-2 border-[#8F6573] pl-6">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </section>

                {/* NEXT PROJECT */}
                <div className="mt-20 text-center pt-20 border-t flex flex-col items-center">
                    <p className="text-sm font-bold tracking-[0.4em] uppercase mb-4 text-[#8F6573]">Next Project</p>
                    <Link to={`/developments/${project.nextProjectId}`} className="text-4xl md:text-5xl font-light hover:opacity-50 transition-all duration-300">
                        {project.nextProjectName} →
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetails;