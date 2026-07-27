/**
 * Contact Section - Gulf Elegance Design
 * Same palette: teal + gold on dark. No new colors.
 */
import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full glass-card mb-6">
            <span className="text-[oklch(0.78_0.13_85)] text-sm font-medium tracking-wide">
              LET&apos;S WORK TOGETHER
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Scale Your Campaigns?
          </h2>
          <p className="text-muted-foreground mb-10">
            I turn every Saudi Riyal into measurable results. Let&apos;s discuss
            your next campaign.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/usama-mohamed"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg px-8 py-4 flex items-center gap-3 text-white font-medium hover:border-[oklch(0.72_0.16_200)]/50 transition-all duration-300 teal-glow"
            >
              <Linkedin className="w-5 h-5 text-[oklch(0.72_0.16_200)]" />
              Connect on LinkedIn
            </a>
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-lg px-8 py-4 flex items-center gap-3 text-white font-medium hover:border-[oklch(0.78_0.13_85)]/50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-[oklch(0.78_0.13_85)]" />
              WhatsApp
            </a>
            <a
              href="mailto:usama@example.com"
              className="glass-card rounded-lg px-8 py-4 flex items-center gap-3 text-white font-medium hover:border-[oklch(0.72_0.16_200)]/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground" />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
