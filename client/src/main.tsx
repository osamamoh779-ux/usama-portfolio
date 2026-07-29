import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Hide Manus branding banner after it loads
const hideManusBranding = () => {
  const interval = setInterval(() => {
    // Try multiple selectors to find and remove the Manus badge
    const badges = document.querySelectorAll('[class*="manus"], [class*="made-with"], [data-manus]');
    badges.forEach(el => {
      const text = el.textContent || '';
      if (text.includes('Made with') || text.includes('Manus')) {
        (el as HTMLElement).style.display = 'none';
        (el as HTMLElement).style.visibility = 'hidden';
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.pointerEvents = 'none';
        (el as HTMLElement).style.height = '0';
        (el as HTMLElement).style.overflow = 'hidden';
      }
    });

    // Also try to find by specific pattern
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      const computedStyle = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      if (
        rect.width > 100 && rect.width < 300 &&
        rect.height > 20 && rect.height < 50 &&
        rect.bottom > window.innerHeight - 100 &&
        rect.right < window.innerWidth - 60
      ) {
        if (el.textContent?.includes('Made with')) {
          (el as HTMLElement).style.display = 'none';
        }
      }
    });
  }, 500);

  // Stop after 10 seconds
  setTimeout(() => clearInterval(interval), 10000);
};

createRoot(document.getElementById("root")!).render(<App />);

// Run after page load
if (document.readyState === "complete") {
  hideManusBranding();
} else {
  window.addEventListener("load", hideManusBranding);
}
