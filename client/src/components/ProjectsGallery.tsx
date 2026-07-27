/**
 * Projects Gallery — All Projects Showcase
 * Gulf Elegance Design: Dark luxury with teal/gold accents
 * Shows all 4 project categories with screenshots
 */
import { useState } from "react";
import { motion } from "framer-motion";
import SummerFunProject from "./SummerFunProject";
import HOMZEventsProject from "./HOMZEventsProject";
import FashionCampaigns from "./FashionCampaigns";
import BeautyEcommerce from "./BeautyEcommerce";

type ProjectTab = "summer" | "homz" | "fashion" | "beauty";

const projectTabs: { id: ProjectTab; label: string; sublabel: string }[] = [
  { id: "summer", label: "صيف المرح", sublabel: "Summer Fun — Entertainment" },
  { id: "homz", label: "HOMZ Events", sublabel: "Amr Hassan Concert" },
  { id: "fashion", label: "Fashion", sublabel: "Noir Abaya & Accessories" },
  { id: "beauty", label: "Beauty & E-commerce", sublabel: "Saudi Market Campaigns" },
];

export default function ProjectsGallery() {
  const [activeProject, setActiveProject] = useState<ProjectTab>("summer");

  return (
    <section className="py-24 relative" id="projects">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full glass-card mb-6">
            <span className="text-[oklch(0.72_0.16_200)] text-sm font-medium tracking-wide">
              SELECTED CASE STUDIES
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Projects &{" "}
            <span className="text-[oklch(0.85_0.12_85)]">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            A curated selection of paid media campaigns across entertainment, events,
            fashion, beauty, and e-commerce — focused on Saudi & GCC markets.
          </p>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveProject(tab.id)}
              className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeProject === tab.id
                  ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40"
                  : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"
              }`}
            >
              <div className={activeProject === tab.id ? "text-[oklch(0.72_0.16_200)]" : "text-foreground"}>
                {tab.label}
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{tab.sublabel}</div>
            </button>
          ))}
        </div>

        {/* Project Content */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeProject === "summer" && <SummerFunProject />}
          {activeProject === "homz" && <HOMZEventsProject />}
          {activeProject === "fashion" && <FashionCampaigns />}
          {activeProject === "beauty" && <BeautyEcommerce />}
        </motion.div>
      </div>
    </section>
  );
}
