/**
 * Message Floating Button - Gulf Elegance Design
 * Circular message icon with pulse animation - links to WhatsApp
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
      className="fixed z-[9999] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      style={{
        backgroundColor: "oklch(0.72 0.16 200)",
        bottom: "1.5rem",
        right: "1.5rem",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
      aria-label="تواصل معنا"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "oklch(0.72 0.16 200)" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Message Icon */}
      <MessageCircle className="w-6 h-6 text-white relative z-10 fill-white" />
    </motion.a>
  );
}
