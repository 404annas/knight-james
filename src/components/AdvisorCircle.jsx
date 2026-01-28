import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AdvisorCircle({ advisors = [] }) {
  const data =
    advisors.length > 0
      ? advisors
      : [
        {
          name: "Sarah Jenkins",
          title: "Head of Planning",
          credentials: ["MRIBA", "BSc Hons"],
          description:
            "Expert in urban regeneration with 15 years in UK planning law.",
        },
        {
          name: "David Chen",
          title: "Senior Legal Counsel",
          credentials: ["LLM", "Solicitor"],
          description:
            "Specializing in property acquisitions and complex commercial structures.",
        },
      ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D1AAAC]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-[#8F6573] font-semibold tracking-widest uppercase text-xs mb-3 block">
              Our Expertise
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-[#222222] leading-tight">
              The <span className="font-bold">Advisory</span> Circle
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
              A tightly curated team ensuring every project is supported across
              planning, legal, and technical fronts. We add layers of certainty
              to execute with confidence.
            </p>
          </div>

          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-12 mb-2" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:gap-10"
        >
          {data.map((advisor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8F6573]/10 hover:border-[#8F6573]/30"
            >
              <div className="flex justify-between items-start mb-6">
                {/* Image Placeholder: Increased size to h-32 w-32 */}
                <div className="relative h-32 w-32 shrink-0 rounded-full overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
                  {advisor.image ? (
                    <img
                      loading="lazy"
                      src={advisor.image}
                      alt={advisor.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-full"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#8F6573]/10 to-[#D1AAAC]/10">
                      <span className="text-[#8F6573] font-bold text-4xl">
                        {advisor.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#8F6573] transition-colors">
                    {advisor.name}
                  </h3>
                  {/* Removed the 'Advisor' pill tag here */}
                </div>

                <p className="text-sm font-medium text-[#8F6573]">
                  {advisor.title}
                </p>

                {advisor.credentials && advisor.credentials.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {advisor.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="text-xs text-gray-400 font-mono"
                      >
                        {cred} •
                      </span>
                    ))}
                  </div>
                )}

                <div className="h-px w-full bg-gray-50 my-4" />

                <p className="text-sm leading-relaxed text-gray-500">
                  {advisor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
