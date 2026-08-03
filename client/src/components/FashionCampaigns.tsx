/**
 * Fashion & Accessories Campaigns
 * Pages 19-20, 23, 30 from old portfolio PDF
 * Brands: Noir Abaya, POMA Shoes, CHANNEL BAG, VALE SHOES, Valentino
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screenshots: { id: number; label: string }[] = [
  { id: 1, label: "TikTok Ads — Abaya Campaigns (Noir Abaya)" },
  { id: 2, label: "TikTok Ads — Fashion Products Overview" },
  { id: 3, label: "TikTok Performance — CTR & Conversions" },
  { id: 4, label: "TikTok Noir Abaya — Full Results" },
  { id: 5, label: "TikTok Fashion — Detailed Metrics" },
  { id: 6, label: "TikTok Fashion — Additional Screens" },
  { id: 7, label: "TikTok Noir Abaya — Extended Results" },
  { id: 8, label: "TikTok Fashion — Campaign Details" },
  { id: 9, label: "TikTok Noir Abaya — Complete Overview" },
  { id: 10, label: "TikTok Noir Abaya — Final Metrics" },
];

const screenshotUrls: Record<number, string> = {
  1: "/manus-storage/page_19_bb4e44f3.png",
  2: "/manus-storage/page_20_120e38ec.png",
  3: "/manus-storage/page_21_ba493dc7.png",
  4: "/manus-storage/page_22_63dcf866.png",
  5: "/manus-storage/page_23_68917874.png",
  6: "/manus-storage/page_24_b3588974.png",
  7: "/manus-storage/page_25_d1c065b4.png",
  8: "/manus-storage/page_26_2538802a.png",
  9: "/manus-storage/page_27_99e17d5d.png",
  10: "/manus-storage/page_30_bbf87b8f.png",
};

const metrics = [
  { value: "306,744", label: "Impressions", sub: "Noir Abaya" },
  { value: "975", label: "Conversions (Noir)", sub: "Noir Abaya" },
  { value: "1.22 SAR", label: "Cost/Conversion", sub: "Noir Abaya" },
  { value: "0.95%", label: "CTR", sub: "Noir Abaya" },
  { value: "1.08 SAR", label: "CPC", sub: "Fashion" },
  { value: "22", label: "Conversions (Fashion)", sub: "Fashion Brands" },
];

export default function FashionCampaigns() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

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
            SAUDI FASHION & ACCESSORIES
          </span>
        </div>
        <h3
          className="text-3xl md:text-4xl text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Fashion Campaigns — <span className="text-[oklch(0.85_0.12_85)]">Noir Abaya & More</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Multi-brand TikTok performance campaigns for Saudi fashion stores — abayas, shoes,
          bags, and accessories. Targeting Saudi women with conversion-optimized ad sets.
        </p>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
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
            <div className="text-[9px] text-muted-foreground">{metric.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {screenshots.map((screenshot, i) => (
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
