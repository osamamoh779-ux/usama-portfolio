/**
 * Footer - Gulf Elegance Design
 * Same color palette only: teal, gold, white/gray on dark
 * LinkedIn + WhatsApp contact links added
 */
import { Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container text-center">
        <img
          src="/manus-storage/logo-um_dee3d394.png"
          alt="UM"
          className="w-12 h-12 mx-auto mb-6 opacity-60"
        />
        <p className="text-muted-foreground text-sm mb-2">
          Usama Mohamed — Media Buyer & Digital Marketing Specialist
        </p>
        <p className="text-muted-foreground text-xs mb-8">
          Focused on Saudi & GCC Markets
        </p>

        {/* Contact links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/usama-mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-lg px-5 py-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-[oklch(0.72_0.16_200)] hover:border-[oklch(0.72_0.16_200)]/30 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-lg px-5 py-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-[oklch(0.78_0.13_85)] hover:border-[oklch(0.78_0.13_85)]/30 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Platforms */}
        <div className="flex justify-center gap-6">
          {["Meta", "TikTok", "Snapchat", "Google"].map((platform) => (
            <span
              key={platform}
              className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
