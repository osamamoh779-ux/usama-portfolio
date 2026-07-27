/**
 * Footer - Gulf Elegance Design
 */
export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container text-center">
        <img
          src="/manus-storage/logo-um_dee3d394.png"
          alt="UM"
          className="w-12 h-12 mx-auto mb-4 opacity-60"
        />
        <p className="text-muted-foreground text-sm">
          Usama Mohamed — Media Buyer & Digital Marketing Specialist
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Focused on Saudi & GCC Markets
        </p>
        <div className="mt-6 flex justify-center gap-4">
          {["Meta", "TikTok", "Snapchat", "Google"].map((platform) => (
            <span
              key={platform}
              className="text-xs text-muted-foreground/60 hover:text-[oklch(0.72_0.16_200)] transition-colors cursor-default"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
