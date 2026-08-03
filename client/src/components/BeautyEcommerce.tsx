/**
 * Beauty & E-commerce Campaigns
 * Pages 16-18, 28-29 from old portfolio PDF
 * Brands: Glowy Skin, melectricksa, Beauty Product Store
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Brand = "all" | "glowyskin" | "ecommerce" | "beauty";

const brandTabs: { id: Brand; label: string }[] = [
  { id: "all", label: "All Campaigns" },
  { id: "glowyskin", label: "Glowy Skin" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "beauty", label: "Beauty Products" },
];

const screenshots: { id: number; brand: Exclude<Brand, "all">; label: string }[] = [
  { id: 1, brand: "glowyskin", label: "TikTok — Glowy Skin Campaigns" },
  { id: 2, brand: "glowyskin", label: "TikTok — Glowy Skin Full Results" },
  { id: 3, brand: "glowyskin", label: "TikTok — Glowy Skin Detailed Metrics" },
  { id: 4, brand: "ecommerce", label: "Cart Recovery — Abandoned Carts" },
  { id: 5, brand: "beauty", label: "Meta Ads — Beauty Conversion Funnel" },
  { id: 6, brand: "beauty", label: "Meta Ads — Checkout & Payment Flow" },
];

const screenshotUrls: Record<number, string> = {
  1: "/manus-storage/page_17_1ed420b5.png",
  2: "/manus-storage/page_28_c7ea5883.png",
  3: "/manus-storage/page_29_8de02829.png",
  4: "/manus-storage/page_16_503d74fc.png",
  5: "/manus-storage/page_18_79ed1013.png",
  6: "/manus-storage/page_26_2538802a.png",
};

const metrics = [
  { value: "541,425", label: "Impressions", sub: "Glowy Skin" },
  { value: "6,054", label: "Clicks", sub: "Glowy Skin" },
  { value: "0.38 SAR", label: "CPC", sub: "Glowy Skin" },
  { value: "1.12%", label: "CTR", sub: "Glowy Skin" },
  { value: "2,286 SAR", label: "Total Spend", sub: "Glowy Skin" },
  { value: "1,086", label: "Landing Views", sub: "Beauty" },
];

export default function BeautyEcommerce() {
  const [activeBrand, setActiveBrand] = useState<Brand>("all");
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

  const filteredScreenshots = activeBrand === "all"
    ? screenshots
    : screenshots.filter(s => s.brand === activeBrand);

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
            BEAUTY & E-COMMERCE — SAUDI MARKET
          </span>
        </div>
        <h3
          className="text-3xl md:text-4xl text-white mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Beauty & E-commerce — <span className="text-[oklch(0.85_0.12_85)]">Saudi Campaigns</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          TikTok and Meta performance campaigns for beauty brands and e-commerce stores in Saudi Arabia.
          Focus on conversion funnels, cart recovery, and scalable ad spend.
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
            <div className="text-[9px] text-muted-foreground">{metric.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {brandTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveBrand(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              activeBrand === tab.id
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
