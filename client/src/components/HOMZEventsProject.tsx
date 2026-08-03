/**
 * HOMZ Events — Amr Hassan Concert Case Study
 * Pages 6-15 from old portfolio PDF
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ViewType = "all" | "results" | "creative";

const screenshots: { id: number; type: ViewType; label: string }[] = [
  { id: 1, type: "results", label: "Campaign Strategy Overview" },
  { id: 2, type: "results", label: "Role & Funnel Strategy" },
  { id: 3, type: "results", label: "Funnel Automation Setup" },
  { id: 4, type: "results", label: "Messaging Conversations Results" },
  { id: 5, type: "results", label: "Daily Performance Breakdown" },
  { id: 6, type: "results", label: "Meta Performance Metrics" },
  { id: 7, type: "results", label: "70% Lower Cost Than Peers" },
  { id: 8, type: "results", label: "Daily Results — Conversations" },
  { id: 9, type: "results", label: "CTR & Engagement Metrics" },
  { id: 10, type: "creative", label: "Creative Strategy" },
  { id: 11, type: "creative", label: "Arabic Ad Creatives" },
  { id: 12, type: "creative", label: "Ad Creative Examples" },
  { id: 13, type: "creative", label: "Campaign Creatives" },
  { id: 14, type: "creative", label: "More Ad Creatives" },
  { id: 15, type: "results", label: "Saudi Market Performance" },
];

const screenshotUrls: Record<number, string> = {
  1: "/manus-storage/page_06_2761f22b.png",
  2: "/manus-storage/page_07_02e25476.png",
  3: "/manus-storage/page_08_94c4f13f.png",
  4: "/manus-storage/page_09_d16eeb08.png",
  5: "/manus-storage/page_10_0ae9174a.png",
  6: "/manus-storage/page_11_9c1b4b12.png",
  7: "/manus-storage/page_12_a7137486.png",
  8: "/manus-storage/page_13_b62da520.png",
  9: "/manus-storage/page_14_a42e2c15.png",
  10: "/manus-storage/page_15_015e690a.png",
  11: "/manus-storage/page_16_503d74fc.png",
  12: "/manus-storage/page_17_1ed420b5.png",
  13: "/manus-storage/page_18_79ed1013.png",
  14: "/manus-storage/page_19_bb4e44f3.png",
  15: "/manus-storage/page_20_120e38ec.png",
};

const metrics = [
  { value: "1,344", label: "Eligible Booked Conversations" },
  { value: "EGP 1.39", label: "Cost Per Conversation" },
  { value: "5.43%", label: "CTR" },
  { value: "70%", label: "Lower Cost Than Peers" },
  { value: "21,627", label: "Post Engagements" },
  { value: "EGP 0.14", label: "CPC" },
];

const viewTabs: { id: ViewType; label: string }[] = [
  { id: "all", label: "All Screenshots" },
  { id: "results", label: "Performance Results" },
  { id: "creative", label: "Ad Creatives" },
];

export default function HOMZEventsProject() {
  const [activeView, setActiveView] = useState<ViewType>("all");
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

  const filteredScreenshots = activeView === "all"
    ? screenshots
    : screenshots.filter(s => s.type === activeView);

  return (
    <div className="py-20 relative">
      {/* Project Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 rounded-full glass-card mb-6">
          <span className="text-[oklch(0.72_0.16_200)] text-sm font-medium tracking-wide">
            CASE STUDY — EVENTS & BOOKING FUNNEL
          </span>
        </div>
        <h3
          className="text-3xl md:text-4xl text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Amr Hassan Concert — <span className="text-[oklch(0.85_0.12_85)]">HOMZ Events</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Media Buyer & Full-Funnel Automation Specialist — Complete ticket-selling campaign
          via Messenger conversations with chatbot qualification for a major concert in Mansoura, Egypt.
        </p>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {metrics.map((metric, i) => (
          <motion.div
            key={`${metric.label}-${i}`}
            className="glass-card rounded-xl p-3 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {metric.value}
            </div>
            <div className="text-[10px] text-[oklch(0.72_0.16_200)] mt-0.5">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* View Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {viewTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              activeView === tab.id
                ? "bg-[oklch(0.72_0.16_200)]/20 border border-[oklch(0.72_0.16_200)]/50 text-[oklch(0.72_0.16_200)]"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredScreenshots.map((screenshot, i) => (
            <motion.div
              key={screenshot.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedScreenshot(screenshot.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={screenshotUrls[screenshot.id]}
                  alt={screenshot.label}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{screenshot.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={screenshotUrls[selectedScreenshot]}
                alt={screenshots.find(s => s.id === selectedScreenshot)?.label}
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
