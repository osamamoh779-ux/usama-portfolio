/**
 * WhatsApp Floating Button - Gulf Elegance Design
 * Persistent floating CTA for direct WhatsApp contact
 */
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "201013535608";
  const message = encodeURIComponent(
    "مرحباً أستاذ أسامة، أنا مهتم بخدماتك كـ Media Buyer. ممكن نتكلم؟"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.23, 1, 0.32, 1] }}
      aria-label="تواصل عبر واتساب"
    >
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm font-medium hidden sm:inline">
          تواصل عبر واتساب
        </span>
      </motion.div>

      {/* Pulse animation ring */}
      <motion.div
        className="absolute -inset-1 rounded-full bg-[#25D366]/30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.a>
  );
}
