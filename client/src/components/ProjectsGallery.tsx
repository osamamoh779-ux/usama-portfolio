/**
 * Projects Gallery — All Projects Showcase
 * Existing website cases remain under Saudi Market; PDF cases are grouped by their source market.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SummerFunProject from "./SummerFunProject";
import HOMZEventsProject from "./HOMZEventsProject";
import FashionCampaigns from "./FashionCampaigns";
import BeautyEcommerce from "./BeautyEcommerce";
import KuwaitEgyptPortfolio from "./KuwaitEgyptPortfolio";

type Market = "saudi" | "kuwait" | "egypt";
type ProjectTab = "summer" | "homz" | "fashion" | "beauty";

const marketTabs: { id: Market; label: string; sublabel: string }[] = [
  { id: "saudi", label: "Saudi Market", sublabel: "Website Cases" },
  { id: "kuwait", label: "Kuwait Market", sublabel: "Kuwait Clients" },
  { id: "egypt", label: "Egypt Market", sublabel: "HOMZ + Ibrahim Hammad" },
];

const projectTabs: Record<Market, { id: ProjectTab; label: string; sublabel: string }[]> = {
  saudi: [
    { id: "summer", label: "صيف المرح", sublabel: "Summer Fun — Entertainment" },
    { id: "fashion", label: "Fashion", sublabel: "Noir Abaya & Accessories" },
    { id: "beauty", label: "Beauty & E-commerce", sublabel: "Saudi Market Campaigns" },
  ],
  kuwait: [],
  egypt: [],
};

export default function ProjectsGallery() {
  const [activeMarket, setActiveMarket] = useState<Market>("saudi");
  const [activeProject, setActiveProject] = useState<ProjectTab>("summer");
  const [activeEgyptCase, setActiveEgyptCase] = useState<"homz" | "ibrahim">("homz");

  useEffect(() => {
    setActiveProject(projectTabs[activeMarket][0]?.id ?? "summer");
  }, [activeMarket]);

  return (
    <section className="py-24 relative" id="projects">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-block px-4 py-1 rounded-full glass-card mb-6"><span className="text-[oklch(0.72_0.16_200)] text-sm font-medium tracking-wide">SELECTED CASE STUDIES</span></div>
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Projects & <span className="text-[oklch(0.85_0.12_85)]">Results</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">A curated selection of paid media campaigns across Saudi Arabia, Kuwait, Egypt, and the wider GCC market.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {marketTabs.map((tab) => <button key={tab.id} onClick={() => setActiveMarket(tab.id)} className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeMarket === tab.id ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40" : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"}`}><div className={activeMarket === tab.id ? "text-[oklch(0.72_0.16_200)]" : "text-foreground"}>{tab.label}</div><div className="text-[10px] text-muted-foreground mt-0.5">{tab.sublabel}</div></button>)}
        </div>

        {activeMarket === "kuwait" && <KuwaitEgyptPortfolio market="Kuwait" />}

        {activeMarket === "egypt" && <>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button onClick={() => setActiveEgyptCase("homz")} className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeEgyptCase === "homz" ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40" : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"}`}><div className={activeEgyptCase === "homz" ? "text-[oklch(0.72_0.16_200)]" : "text-foreground"}>HOMZ Events</div><div className="text-[10px] text-muted-foreground mt-0.5">Amr Hassan Concert</div></button>
            <button onClick={() => setActiveEgyptCase("ibrahim")} className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeEgyptCase === "ibrahim" ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40" : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"}`}><div className={activeEgyptCase === "ibrahim" ? "text-[oklch(0.72_0.16_200)]" : "text-foreground"}>Ibrahim Hammad</div><div className="text-[10px] text-muted-foreground mt-0.5">Butchery — Meta Ads</div></button>
          </div>
          {activeEgyptCase === "homz" ? <HOMZEventsProject /> : <KuwaitEgyptPortfolio market="Egypt" />}
        </>}

        {activeMarket === "saudi" && <>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectTabs.saudi.map((tab) => <button key={tab.id} onClick={() => setActiveProject(tab.id)} className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeProject === tab.id ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40" : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"}`}><div className={activeProject === tab.id ? "text-[oklch(0.72_0.16_200)]" : "text-foreground"}>{tab.label}</div><div className="text-[10px] text-muted-foreground mt-0.5">{tab.sublabel}</div></button>)}
          </div>
          <motion.div key={activeProject} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            {activeProject === "summer" && <SummerFunProject />}
            {activeProject === "fashion" && <FashionCampaigns />}
            {activeProject === "beauty" && <BeautyEcommerce />}
          </motion.div>
        </>}
      </div>
    </section>
  );
}
