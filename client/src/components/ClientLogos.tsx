/**
 * Client Logos Section - Gulf Elegance Design
 * Showcases brand names/clients worked with
 */
import { motion } from "framer-motion";

const clients = [
  { name: "صيف المرح", nameEn: "Summer Fun", category: "Entertainment & Tourism" },
  { name: "HOMZ Events", nameEn: "HOMZ", category: "Events Management" },
  { name: "Noir Abaya", nameEn: "Noir", category: "Fashion & Abayas" },
  { name: "Glowy Skin", nameEn: "Glowy", category: "Beauty & Skincare" },
  { name: "Azzrk Digital", nameEn: "Azzrk", category: "Digital Marketing Agency" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gold line divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Clients & Brands
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Trusted by diverse brands across entertainment, fashion, beauty, and e-commerce in the Saudi & GCC markets.
          </p>
        </motion.div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="glass-card rounded-xl p-5 text-center hover:border-[oklch(0.72_0.16_200)]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Brand initial circle */}
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-[oklch(0.72_0.16_200)]/20 to-[oklch(0.78_0.13_85)]/10 flex items-center justify-center border border-[oklch(0.78_0.13_85)]/20 group-hover:border-[oklch(0.72_0.16_200)]/40 transition-colors">
                <span className="text-[oklch(0.72_0.16_200)] text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {client.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">{client.name}</h3>
              <p className="text-muted-foreground text-xs">{client.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
