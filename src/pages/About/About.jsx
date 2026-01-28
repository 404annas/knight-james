import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Target,
} from "lucide-react";
import ImageLoader from "../../components/ImageLoader";
import logo from "../../assets/logo2.png";
import SEO from "../../components/SEO";
import AdvisorCircle from "../../components/AdvisorCircle";

import salehaFounder from "../../assets/saleha.jfif";

const About = () => {
  // 🔹 Animations (SMOOTH & PREMIUM)
  const headingFromTop = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineReveal = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentFromBottom = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Team data
  const teamItems = [
    { icon: PenTool, text: "Architects and planning consultants" },
    { icon: Settings, text: "Structural engineers" },
    { icon: Scale, text: "Legal and conveyancing advisors" },
    { icon: HardHat, text: "Construction and project management" },
    { icon: Palette, text: "Interior designers and fit-out specialists" },
  ];

  const advisors = [
    {
      name: "Ashley Newman",
      title: "Architectural Services",
      image: "",
      description:
        "He has been a key member of our team since the company’s inception. He oversees the planning and structural aspects of our projects, ensuring all work follows the approved architectural and structural drawings. He also provides valuable support and guidance whenever challenges arise.",
    },
    {
      name: "Zaeem Khan",
      title: "Legal Advisor",
      image: "/picture-2.png",
      description:
        "He is our trusted legal advisor and has been closely involved with the company since its early days. He supports our real estate projects and developments by overseeing all legal aspects and ensuring compliance at every stage. His guidance plays a key role in helping projects move forward smoothly and securely.",
    },
    {
      name: "Muhammad Sufyan Moavia",
      title: "Chartered Accountant – FCCA, CTA, ACA",
      image: "/image.png",
      description:
        "He is our chartered accountant and has been an essential part of the company from the outset. He manages all financial and accounting matters while also supporting our clients with sound financial guidance. His strategic advice helps ensure projects are structured efficiently and delivered in a profitable and sustainable way.",
    },
    {
      name: "Khalil Ur Rahman",
      title: "RICS Registered Valuer",
      image: "/picture-1.png",
      description:
        "He is our chartered surveyor and a valued member of our professional team. He supports us in property selection and contributes to project management when required. With strong expertise in cost analysis, he helps ensure our projects are commercially sound and well-informed.",
    },
    {
      name: "Syed",
      title: "Digital & Technical Operations",
      image: "",
      description:
        "He supports our development team by managing all back-end development and technical aspects of the business. He is responsible for our website, graphics, and overall digital infrastructure. His expertise ensures our systems run smoothly and our online presence remains strong and up to date.",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#222222] relative">
      <SEO
        title="About Dwell Rich | Trusted UK Property Investment Advisors"
        description="Learn about Dwell Rich, a UK-based property investment advisory providing transparent, professional guidance to local and international property investors."
        keywords="Property developer London, women property developer UK, London real estate investment company, UK property specialists"
      />

      {/* FIXED LOGO */}
      <div className="fixed top-10 md:left-10 left-5 lg:left-14 z-50">
        <Link to="/">
          <ImageLoader
            src={logo}
            alt="Dwell Rich Ltd - Property Developer London Logo"
            className="w-16 md:w-24"
            priority
          />
        </Link>
      </div>

      <main className="max-w-5xl mx-auto pt-44 pb-20 px-6">
        {/* PAGE TITLE */}
        {/* <motion.div
                    variants={headingFromTop}
                    initial="hidden"
                    animate="visible"
                    className="mb-20"
                >
                    <h2 className="sr-only">
                        London real estate investment company and UK property specialists
                    </h2>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 tracking-tight text-[#222222]">
                        About
                    </h1>

                    <motion.div
                        variants={lineReveal}
                        initial="hidden"
                        animate="visible"
                        className="h-[2px] bg-[#8F6573] w-full origin-left"
                    />
                </motion.div> */}

        {/* ABOUT HEADLINE */}
        <motion.section
          variants={contentFromBottom}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mb-20"
        >
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-600">
            Dwell Rich Ltd is a privately owned property development and
            investment company built on discipline, selectivity, and execution
            excellence.
          </p>
        </motion.section>

        {/* FOUNDER SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-20"
        >
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <h2 className="sr-only">
              Leading women property developer UK - Saleha Ali Khan
            </h2>

            <h2 className="text-3xl font-bold mb-1 text-[#8F6573]">
              Saleha Ali Khan
            </h2>

            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-8">
              Founder
            </h3>

            <div className="space-y-6 text-base sm:text-lg font-light leading-relaxed text-gray-600">
              <p>
                Dwell Rich Ltd is founded by Saleha Ali Khan. The founder brings
                hands-on experience across construction, interior design, and
                property investment in London.
              </p>
              <p>
                This practical background enables a deep understanding of
                buildability, cost control, and design efficiency, ensuring that
                projects remain commercially viable throughout the development
                lifecycle.
              </p>
              <p>
                Our strategy is centred on planning-led and design-driven value
                creation. Rather than relying solely on market appreciation, we
                actively seek opportunities where value can be unlocked through
                planning permissions, layout optimisation, or change of use.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="bg-gray-50 rounded-full shadow-sm">
              <img
                loading="lazy"
                src={salehaFounder}
                alt="Saleha Ali Khan - Women property developer London"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.section>

        {/* OUR TEAM */}
        <motion.section
          variants={contentFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl"
        >
          <h2 className="sr-only">
            Our professional team of UK property specialists
          </h2>
          <AdvisorCircle advisors={advisors} />
        </motion.section>
      </main>
    </div>
  );
};

export default About;
