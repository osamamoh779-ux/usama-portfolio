/**
 * Hero Section - Gulf Elegance Design
 * Dark background with teal/gold accents, premium media buyer portfolio
 */
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_3836471f.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[oklch(0.12_0.01_260)]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.13_85)] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.16_200)] to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Logo */}
          <img
            src="/manus-storage/logo-um_dee3d394.png"
            alt="UM Logo"
            className="w-20 h-20 mx-auto mb-6 opacity-90"
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-4 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Portfolio
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[oklch(0.78_0.13_85)] mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          Usama Mohamed
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Media Buyer | Digital Marketing Specialist
          <br />
          <span className="text-[oklch(0.72_0.16_200)]">
            Saudi & GCC Market Expert
          </span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-[oklch(0.78_0.13_85)] to-transparent" />
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
