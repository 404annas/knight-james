import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  Home,
  Layout,
  Hammer,
  Coins,
  TrendingUp,
  CheckCircle2,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import ImageLoader from "../../components/ImageLoader";
import logo from "../../assets/logo2.png";
import { pastProjectsData } from "./pastProjects";

const ProjectDetails = () => {
  const { id } = useParams();

  const currentIndex = pastProjectsData.findIndex((p) => p.id === id);
  const project = pastProjectsData[currentIndex];

  const prevProject = pastProjectsData[currentIndex - 1];
  const nextProject = pastProjectsData[currentIndex + 1];

  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImg]);

  if (!project) return null;

  const getFullWidthCount = () => {
    if (project.id === "kingston-upon-thames") return 1;
    if (project.id === "thames-surrey") return 2;
    return 0;
  };

  const fullWidthCountMax = getFullWidthCount();

  // 👉 SHOW ALL IMAGES AT ONCE
  const fullWidthImages = project.gallery.slice(0, fullWidthCountMax);
  const gridImages = project.gallery.slice(fullWidthCountMax);

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-white min-h-screen text-[#222222] lg:px-44 relative">
      {/* IMAGE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImg}
              alt="Preview"
              className="max-w-full max-h-full object-contain pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED LOGO */}
      <div className="fixed top-10 md:left-10 left-5 md:left-14 z-50">
        <Link to="/">
          <ImageLoader
            src={logo}
            alt="Dwell Rich Ltd - London Real Estate Opportunities Logo"
            className="w-16 md:w-24"
            priority={true}
          />
        </Link>
      </div>

      <main className="max-w-6xl mx-auto pt-44 pb-20 px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/developments"
            className="text-[#8F6573] text-sm uppercase tracking-widest mb-4 inline-block hover:opacity-70"
          >
            Past Developments
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 mt-2 mb-16">
            <div className="w-12 h-[2px] bg-[#8F6573]" />
            <span className="text-3xl md:text-4xl font-light text-gray-400">
              {project.location}
            </span>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-24"
        >
          <ImageLoader
            src={project.heroImg}
            alt={project.title}
            className="w-full aspect-video object-cover shadow-sm cursor-zoom-in hover:opacity-95 transition-opacity"
            onClick={() => setSelectedImg(project.heroImg)}
            priority={true}
            placeholder="color"
            placeholderColor="#e5e7eb"
          />
        </motion.div>

        {/* PROJECT OVERVIEW */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="flex items-center gap-3 mb-6 text-[#8F6573]">
            <Home size={28} strokeWidth={1.5} />
            <h2 className="text-3xl font-bold">Project Overview</h2>
          </div>
          <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed space-y-6">
            <div className="space-y-3">
              {project.overviewHeading && (
                <p className="text-2xl font-bold mb-1 text-[#8F6573]">
                  {project.overviewHeading}
                </p>
              )}
              <p
                className="m-0"
                dangerouslySetInnerHTML={{ __html: project.overview }}
              />
            </div>
            <div className="space-y-3">
              {project.overviewSecondaryHeading && (
                <p className="text-2xl font-bold mb-1 text-[#8F6573]">
                  {project.overviewSecondaryHeading}
                </p>
              )}
              <p
                className="m-0"
                dangerouslySetInnerHTML={{ __html: project.overviewSecondary }}
              />
            </div>
          </div>
        </section>

        {/* ASSET PROFILE & STRATEGY */}
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <Layout size={24} className="text-[#8F6573]" />
              <h3 className="text-2xl font-bold">Asset Profile</h3>
            </div>
            <div className="space-y-6">
              {project.assetProfile?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm uppercase tracking-widest text-[#8F6573] font-bold mb-1">
                    {item.label}
                  </span>
                  <span className="text-xl font-light">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <TrendingUp size={24} className="text-[#8F6573]" />
              <h3 className="text-2xl font-bold">Strategy & Value Creation</h3>
            </div>
            <ul className="space-y-4">
              {project.strategy?.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-lg font-light text-gray-600"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#8F6573] mt-1 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* FINANCIAL SUMMARY */}
        <motion.section
          {...fadeInUp}
          className="bg-gray-50 px-6 py-8 md:p-10 mb-20 rounded-sm"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Coins size={28} className="text-[#8F6573]" />
            <h2 className="text-3xl font-bold">Financial Summary</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {project.financials?.map((item, i) => (
              <div
                key={i}
                className={`flex justify-between py-5 border-b border-gray-200 ${
                  item.highlight
                    ? "text-[#8F6573] font-bold text-2xl mt-4"
                    : "text-xl"
                }`}
              >
                <span className="font-normal">{item.label}</span>
                <span className="font-light">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* GALLERY */}
        <div className="flex flex-col gap-4 mb-20">
          <div className="flex flex-col gap-4">
            {fullWidthImages.map((img, index) => (
              <ImageLoader
                key={`full-${index}`}
                src={img}
                onClick={() => setSelectedImg(img)}
                className="w-full h-[600px] object-cover cursor-zoom-in hover:opacity-95 transition-opacity"
                alt={`Featured ${index}`}
                placeholder="color"
                placeholderColor="#e5e7eb"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {gridImages.map((img, index) => (
              <ImageLoader
                key={`grid-${index}`}
                src={img}
                onClick={() => setSelectedImg(img)}
                className="w-full h-[500px] object-cover cursor-zoom-in hover:opacity-95 transition-opacity"
                alt={`Detail ${index}`}
                placeholder="color"
                placeholderColor="#e5e7eb"
              />
            ))}
          </div>
        </div>

        {/* DESIGN & BUILD */}
        <section className="grid gap-0 items-center">
          <div className="flex items-center gap-3 mb-8">
            <Hammer size={24} className="text-[#8F6573]" />
            <h3 className="text-3xl font-bold">Design & Build</h3>
          </div>
          <ul className="space-y-6">
            {project.designBuild?.map((item, i) => (
              <li
                key={i}
                className="text-xl font-normal text-gray-600 border-l-2 border-[#8F6573] pl-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* PROJECT NAVIGATION */}
        <div className="mt-20 border-t border-gray-100 pt-16 flex justify-between items-center">
          <div className="flex-1">
            {prevProject ? (
              <Link
                to={`/developments/${prevProject.id}`}
                onClick={() => scrollTo(0, 0)}
                className="flex flex-col items-start gap-3"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#8F6573]">
                  Previous Project
                </span>
                <div className="flex items-center gap-4">
                  <ArrowLeft size={24} />
                  <span className="text-2xl font-light">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="invisible" />
            )}
          </div>

          <div className="flex-1 text-right">
            {nextProject ? (
              <Link
                to={`/developments/${nextProject.id}`}
                onClick={() => scrollTo(0, 0)}
                className="flex flex-col items-end gap-3"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#8F6573]">
                  Next Project
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-light">
                    {nextProject.title}
                  </span>
                  <ArrowRight size={24} />
                </div>
              </Link>
            ) : (
              <div className="invisible" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
