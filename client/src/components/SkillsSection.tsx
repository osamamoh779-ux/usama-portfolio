/**
 * Skills Section - Gulf Elegance Design
 * Visual representation of professional skills
 */
import { motion } from "framer-motion";

const skills = [
  { name: "Facebook Ads Strategy", level: 5 },
  { name: "Audience Targeting", level: 5 },
  { name: "Campaign Optimization", level: 4.5 },
  { name: "A/B Testing", level: 4 },
  { name: "Funnels & Retargeting", level: 4 },
  { name: "Data Analysis", level: 3.5 },
  { name: "Ad Copywriting", level: 4 },
  { name: "Budget Scaling", level: 3.5 },
];

const platforms = [
  { name: "Meta (Facebook/Instagram)", color: "bg-[#1877F2]", icon: "M" },
  { name: "TikTok", color: "bg-black border border-gray-700", icon: "T" },
  { name: "Snapchat", color: "bg-[#FFFC00] text-black", icon: "S" },
  { name: "Google", color: "bg-[#4285F4]", icon: "G" },
];

export default function SkillsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Personal Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I focus on creating performance-driven campaigns through data analysis,
            structured planning, and continuous optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills bars */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-foreground">{skill.name}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div
                        key={j}
                        className={`w-3 h-3 rounded-full ${
                          j < Math.floor(skill.level)
                            ? "bg-[oklch(0.72_0.16_200)]"
                            : j < skill.level
                            ? "bg-[oklch(0.72_0.16_200)]/50"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Platforms */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[oklch(0.78_0.13_85)] text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Platforms I Master
            </p>
            <div className="space-y-4">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  className="glass-card rounded-lg p-4 flex items-center gap-4 hover:border-[oklch(0.72_0.16_200)]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${platform.color}`}>
                    {platform.icon}
                  </div>
                  <span className="text-foreground font-medium">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
