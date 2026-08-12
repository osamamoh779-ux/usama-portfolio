/**
 * Summer Fun Brand Case Study - Gulf Elegance Design
 * Multi-platform Saudi market campaign showcase
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoogleAdsChart from "./GoogleAdsChart";

type Platform = "all" | "meta" | "tiktok" | "snapchat" | "google" | "business";

const platformTabs: { id: Platform; label: string; color: string }[] = [
  { id: "all", label: "All Platforms", color: "text-[oklch(0.72_0.16_200)]" },
  { id: "meta", label: "Meta Ads", color: "text-[#1877F2]" },
  { id: "tiktok", label: "TikTok Ads", color: "text-[#FF0050]" },
  { id: "snapchat", label: "Snapchat Ads", color: "text-[#FFFC00]" },
  { id: "google", label: "Google Ads", color: "text-[#4285F4]" },
  { id: "business", label: "Google Business", color: "text-[#34A853]" },
];

const screenshots: { id: number; platform: Exclude<Platform, "all">; label: string }[] = [
  { id: 1, platform: "meta", label: "Meta Campaigns Overview" },
  { id: 2, platform: "meta", label: "Meta Performance Metrics" },
  { id: 3, platform: "tiktok", label: "TikTok Campaigns List" },
  { id: 4, platform: "business", label: "Google Business Profile" },
  { id: 5, platform: "business", label: "Summer Fun - Google Maps" },
  { id: 6, platform: "business", label: "Google Reviews - 4.3 Rating" },
  { id: 7, platform: "business", label: "Customer Reviews Detail" },
  { id: 8, platform: "meta", label: "Meta Campaigns - Extended" },
  { id: 9, platform: "meta", label: "Meta Campaigns - Extended 2" },
  { id: 10, platform: "meta", label: "Meta Performance Extended" },
  { id: 11, platform: "snapchat", label: "Snapchat Spend Overview" },
  { id: 12, platform: "snapchat", label: "Snapchat Campaigns Detail" },
  { id: 13, platform: "tiktok", label: "TikTok Video Performance" },
  { id: 14, platform: "tiktok", label: "TikTok Engagement Metrics" },
  { id: 15, platform: "tiktok", label: "TikTok Impressions Data" },
  { id: 16, platform: "google", label: "Google Ads — Campaign Results" },
  { id: 17, platform: "google", label: "Google Ads — Performance Chart" },
  { id: 18, platform: "google", label: "Google Ads — Account Overview" },
];

const screenshotUrls: Record<number, string> = {
  1: import.meta.env.BASE_URL + "assets/screenshot_01_5707affe.png",
  2: import.meta.env.BASE_URL + "assets/screenshot_02_91d59ae6.png",
  3: import.meta.env.BASE_URL + "assets/screenshot_03_61834636.png",
  4: import.meta.env.BASE_URL + "assets/screenshot_04_207da0e1.png",
  5: import.meta.env.BASE_URL + "assets/screenshot_05_97a223b0.png",
  6: import.meta.env.BASE_URL + "assets/screenshot_06_ae383216.png",
  7: import.meta.env.BASE_URL + "assets/screenshot_07_bcdeca9f.png",
  8: import.meta.env.BASE_URL + "assets/screenshot_08_47bdee40.png",
  9: import.meta.env.BASE_URL + "assets/screenshot_09_30fef6fc.png",
  10: import.meta.env.BASE_URL + "assets/screenshot_10_0b6c178c.png",
  11: import.meta.env.BASE_URL + "assets/screenshot_11_5f151c11.png",
  12: import.meta.env.BASE_URL + "assets/screenshot_12_7561cd3a.png",
  13: import.meta.env.BASE_URL + "assets/screenshot_13_3172aded.png",
  14: import.meta.env.BASE_URL + "assets/screenshot_14_cba66e02.png",
  15: import.meta.env.BASE_URL + "assets/screenshot_15_080680fe.png",
  16: import.meta.env.BASE_URL + "assets/google_ads_page-3_e3184a7d.png",
  17: import.meta.env.BASE_URL + "assets/google_ads_page-4_de594f42.png",
  18: import.meta.env.BASE_URL + "assets/google_ads_page-5_34217fd9.png",
};

const metrics = [
  { value: "3,175 SAR", label: "Total Meta Spend", sublabel: "25 Campaigns" },
  { value: "177,541", label: "Meta Reach", sublabel: "Unique Users" },
  { value: "4,042 SAR", label: "TikTok Spend", sublabel: "33 Campaigns" },
  { value: "1.85M+", label: "TikTok Impressions", sublabel: "Total Views" },
  { value: "1,524 SAR", label: "Snapchat Spend", sublabel: "Multi-Campaign" },
  { value: "649", label: "Google Reviews", sublabel: "4.3 ★ Rating" },
  { value: "2.2K", label: "Google Ads Clicks", sublabel: "5.89% CTR" },
  { value: "884 SAR", label: "Google Ads Cost", sublabel: "Riyal 0.40 Avg. CPC" },
];

export default function SummerFunProject() {
  const [activePlatform, setActivePlatform] = useState<Platform>("all");
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

  const filteredScreenshots = activePlatform === "all"
    ? screenshots
    : screenshots.filter(s => s.platform === activePlatform);

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        {/* Project Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full glass-card mb-6">
            <span className="text-[oklch(0.72_0.16_200)] text-sm font-medium tracking-wide">
              CASE STUDY — SAUDI MARKET
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            صيف المرح{" "}
            <span className="text-[oklch(0.72_0.16_200)]">Summer Fun</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            A complete multi-platform paid media execution for a Saudi entertainment brand,
            managing campaigns across Meta, TikTok, Snapchat, and Google to drive awareness,
            engagement, messaging conversions, and local digital reputation.
          </p>
        </motion.div>

        {/* Project Banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-12 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={import.meta.env.BASE_URL + "assets/project-summer-fun_65707aae.png"}
            alt="Summer Fun Brand"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3
              className="text-2xl md:text-3xl text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Summer Fun Brand — Jeddah, Saudi Arabia
            </h3>
            <p className="text-[oklch(0.78_0.13_85)] mt-2">
              Multi-Platform Digital Marketing | Entertainment & Family Destination
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={`${metric.label}-${i}`}
              className="glass-card rounded-xl p-4 text-center teal-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {metric.value}
              </div>
              <div className="text-xs text-[oklch(0.72_0.16_200)] mt-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Platform Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {platformTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePlatform(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePlatform === tab.id
                  ? "bg-[oklch(0.72_0.16_200)]/20 border border-[oklch(0.72_0.16_200)]/50 text-[oklch(0.72_0.16_200)]"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Google Ads Interactive Chart — shown only with Google Ads filter or All */}
        <AnimatePresence>
          {(activePlatform === "all" || activePlatform === "google") && (
            <motion.div
              key="google-chart"
              className="mb-12"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.4 }}
            >
          <GoogleAdsChart
            title="Google Ads — Local Acquisition Campaign"
            subtitle="Saudi Arabia · Jul 1 – Aug 10, 2026 · Performance Max"
            data={[
              { label: "Jul 1-10", clicks: 120, conversions: 58 },
              { label: "Jul 11-20", clicks: 210, conversions: 102 },
              { label: "Jul 21-27", clicks: 380, conversions: 185 },
              { label: "Jul 28-31", clicks: 620, conversions: 302 },
              { label: "Aug 1-3", clicks: 2124, conversions: 1050 },
              { label: "Aug 4-10", clicks: 746, conversions: 353 },
            ]}
            metricName1="Clicks"
            metricName2="Local Actions (Directions)"
          />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredScreenshots.map((screenshot, i) => (
              <motion.div
                key={screenshot.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedScreenshot(screenshot.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={screenshotUrls[screenshot.id]}
                    alt={screenshot.label}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{screenshot.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
    </section>
  );
}
