/**
 * About Section - Gulf Elegance Design
 * Personal introduction with photo and professional background
 */
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 relative">
      {/* Gold line divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative w-72 h-72 mx-auto lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.72_0.16_200)] to-[oklch(0.78_0.13_85)] opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[oklch(0.78_0.13_85)]/30 teal-glow">
                <img
                  src="/manus-storage/profile_photo_resized_4e886022.png"
                  alt="Usama Mohamed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About Me
            </h2>
            <p className="text-[oklch(0.72_0.16_200)] text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Media Buyer & Digital Marketing Specialist
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              I'm Usama Mohamed, a Digital Marketing Specialist & Media Buyer with hands-on experience
              in managing paid advertising campaigns on Meta platforms. I specialize in analyzing
              performance, optimizing budgets, and writing persuasive ad copy.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              I started my career in medical sales (Medical Representative), which provided me with
              strong communication, negotiation, and customer behavior understanding before shifting
              into digital marketing. My focus is on the Saudi and GCC markets, delivering results
              across Meta, TikTok, Snapchat, and Google platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "25+", label: "Campaigns" },
                { number: "3.2M+", label: "Impressions" },
                { number: "4 Platforms", label: "Managed" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-[oklch(0.72_0.16_200)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
