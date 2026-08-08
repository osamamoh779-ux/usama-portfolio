/**
 * About Section - Gulf Elegance Design
 * Personal introduction with full-length photo and professional background
 */
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 relative">
      {/* Gold line divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo - Full length portrait */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative w-56 md:w-64 lg:w-72">
              {/* Glow behind image */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[oklch(0.72_0.16_200)]/20 to-[oklch(0.78_0.13_85)]/10 rounded-2xl blur-2xl" />
              {/* Image container - portrait shape */}
              <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.78_0.13_85)]/20">
                <img
                  src="/manus-storage/9A5DD3F0-538E-482C-877C-D891F2AFFEEA_a1e077ec.png"
                  alt="Usama Mohamed"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative gold corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[oklch(0.78_0.13_85)]/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[oklch(0.78_0.13_85)]/50 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:pt-8 min-w-0 w-full"
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
              in managing paid advertising campaigns across all major platforms. I specialize in
              analyzing performance, optimizing budgets, and writing persuasive ad copy.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              I work across Meta, TikTok, Snapchat, Google, X (Twitter), LinkedIn, and any platform
              that fits the campaign goals. My focus is on the Saudi and GCC markets, delivering
              measurable results regardless of the platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "50+", label: "Campaigns Managed" },
                { number: "3.2M+", label: "Impressions" },
                { number: "All Platforms", label: "Flexible" },
                ].map((stat, i) => (
                <motion.div
                  key={`${stat.label}-${i}`}
                  className="glass-card rounded-lg p-3 text-center min-w-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-xl md:text-2xl font-bold text-[oklch(0.72_0.16_200)] leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
