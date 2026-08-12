/**
 * HOMZ Events — Amr Hassan Concert Case Study
 * Platform-based filter: All, Meta, Creative
 * Contains ONLY HOMZ-related screenshots (no Fashion pages, no duplicates)
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Platform = "all" | "meta" | "creative";

const platformTabs: { id: Platform; label: string; color: string }[] = [
  { id: "all", label: "All Screenshots", color: "text-[oklch(0.72_0.16_200)]" },
  { id: "meta", label: "Meta Ads", color: "text-[#1877F2]" },
  { id: "creative", label: "Ad Creatives", color: "text-[#FF0050]" },
];

const screenshots: { id: number; platform: Exclude<Platform, "all">; label: string }[] = [
  { id: 1, platform: "meta", label: "Project Overview — Amr Hassan Concert" },
  { id: 2, platform: "meta", label: "Hard Results — 1,344 Conversations & CPA 1.39 EGP" },
  { id: 3, platform: "meta", label: "Ads Manager Results — Messaging Conversations" },
  { id: 4, platform: "meta", label: "Daily Performance — Conversations & Cost" },
  { id: 5, platform: "meta", label: "Meta Performance Metrics — Engagement & CTR" },
  { id: 6, platform: "meta", label: "70% Lower Cost Than Peers" },
  { id: 7, platform: "meta", label: "Daily Results Breakdown" },
];

const screenshotUrls: Record<number, string> = {
  1: import.meta.env.BASE_URL + "assets/page_07_02e25476.png",
  2: import.meta.env.BASE_URL + "assets/page_09_d16eeb08.png",
  3: import.meta.env.BASE_URL + "assets/page_10_0ae9174a.png",
  4: import.meta.env.BASE_URL + "assets/page_11_9c1b4b12.png",
  5: import.meta.env.BASE_URL + "assets/page_12_a7137486.png",
  6: import.meta.env.BASE_URL + "assets/page_13_b62da520.png",
  7: import.meta.env.BASE_URL + "assets/page_14_a42e2c15.png",
};

const metrics = [
  { value: "1,344", label: "Eligible Booked Conversations" },
  { value: "EGP 1.39", label: "Cost Per Conversation" },
  { value: "5.43%", label: "CTR" },
  { value: "70%", label: "Lower Cost Than Peers" },
  { value: "21,627", label: "Post Engagements" },
  { value: "EGP 0.14", label: "CPC" },
];

export default function HOMZEventsProject() {
  const [activePlatform, setActivePlatform] = useState<Platform>("all");
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

  const filteredScreenshots = activePlatform === "all"
    ? screenshots
    : screenshots.filter(s => s.platform === activePlatform);

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

      {/* Platform Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {platformTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePlatform(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activePlatform === tab.id
                ? `${tab.color} border border-current bg-white/5`
                : "text-muted-foreground hover:text-white border border-transparent hover:border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredScreenshots.map((screenshot, i) => (
          <motion.div
            key={screenshot.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group cursor-pointer"
            onClick={() => setSelectedScreenshot(screenshot.id)}
          >
            <div className="relative overflow-hidden rounded-xl border border-white/5 glass-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={screenshotUrls[screenshot.id]}
                  alt={screenshot.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{screenshot.label}</p>
                <p className="text-[oklch(0.72_0.16_200)] text-[10px] mt-0.5 uppercase tracking-wider">
                  {screenshot.platform === "meta" ? "Meta Ads" : "Ad Creative"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm flex items-center gap-2"
              >
                ✕ Close
              </button>
              <img
                src={screenshotUrls[selectedScreenshot]}
                alt={screenshots.find(s => s.id === selectedScreenshot)?.label}
                className="w-full rounded-xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-sm">
                {screenshots.find(s => s.id === selectedScreenshot)?.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
