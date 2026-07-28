/**
 * WhatsApp Floating Button - Gulf Elegance Design
 * Circular WhatsApp icon with pulse animation
 */
import { motion } from "framer-motion";

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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      style={{ backgroundColor: "#25D366" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
      aria-label="تواصل عبر واتساب"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white relative z-10"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.816 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-3.572-1.756-3.671-1.756zm1.78-13.66C17.868 3.52 14.324 3.492 11.29 5.19c-2.988 1.668-4.87 4.86-4.827 8.318.043 2.192.76 4.24 1.99 6.03l-1.387 4.957 5.084-1.33c1.625 1.074 3.47 1.64 5.36 1.64.014 0 .014 0 .029 0 2.944 0 5.648-1.146 7.71-3.223 2.062-2.077 3.194-4.84 3.18-7.783-.015-5.96-4.856-10.77-10.828-10.77zm0 18.69c-1.59 0-3.092-.43-4.398-1.245l-.315-.2-.33.086-2.83.745.76-2.758.086-.287-.2-.33c-.974-1.548-1.49-3.34-1.49-5.174 0-4.727 3.854-8.582 8.596-8.582 2.306 0 4.47.888 6.09 2.508 1.62 1.62 2.508 3.798 2.508 6.09 0 4.727-3.84 8.567-8.467 8.567z" />
      </svg>
    </motion.a>
  );
}
