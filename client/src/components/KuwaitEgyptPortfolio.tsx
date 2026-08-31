import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CaseId = "glow" | "asmaa" | "nova" | "lama" | "ibrahim";
type Market = "Kuwait" | "Egypt";
type Metric = { value: string; label: string; sublabel: string };
type ClientCase = { id: CaseId; market: Market; name: string; category: string; scope: string; platforms: string; metrics: Metric[]; evidenceCount: number; prefix: string };

const cases: ClientCase[] = [
  { id: "glow", market: "Kuwait", name: "To Glow Clinic", category: "Clinic / Aesthetic Services", scope: "Media buying, campaign management, optimization and performance tracking", platforms: "Meta Ads + TikTok Ads", metrics: [{ value: "160K+", label: "TikTok impressions", sublabel: "Selected signal" }, { value: "113.5K", label: "TikTok reach", sublabel: "Selected signal" }, { value: "435", label: "Paid follows", sublabel: "Selected signal" }], evidenceCount: 6, prefix: "to-glow" },
  { id: "asmaa", market: "Kuwait", name: "Dr Asmaa", category: "Doctor / Medical Brand", scope: "Messaging, lead, awareness and profile-growth campaign management", platforms: "Meta Ads", metrics: [{ value: "88.9K", label: "Impressions", sublabel: "Selected signal" }, { value: "41.5K", label: "Reach", sublabel: "Selected signal" }, { value: "294", label: "Messaging conversations", sublabel: "Selected signal" }], evidenceCount: 9, prefix: "dr-asmaa" },
  { id: "nova", market: "Kuwait", name: "Nova Med", category: "Healthcare / Medical Brand", scope: "Traffic, messaging and profile-growth campaign management", platforms: "Meta Ads", metrics: [{ value: "34.1K", label: "Impressions", sublabel: "Selected signal" }, { value: "18.4K", label: "Reach", sublabel: "Selected signal" }, { value: "1,352", label: "Profile-growth results", sublabel: "Selected signal" }], evidenceCount: 3, prefix: "nova-med" },
  { id: "lama", market: "Kuwait", name: "Dr Lama", category: "Doctor / Medical Brand", scope: "Messaging, engagement, awareness and traffic campaign management", platforms: "Meta Ads", metrics: [{ value: "54.3K", label: "Impressions", sublabel: "Selected signal" }, { value: "28.9K", label: "Reach", sublabel: "Selected signal" }, { value: "116", label: "Messaging conversations", sublabel: "Selected signal" }], evidenceCount: 7, prefix: "dr-lama" },
  { id: "ibrahim", market: "Egypt", name: "Ibrahim Hammad Butchery", category: "Food Retail / Butchery", scope: "Messaging, engagement, follower-growth and traffic campaign management", platforms: "Meta Ads", metrics: [{ value: "6", label: "Campaigns shown", sublabel: "Selected evidence" }, { value: "Meta", label: "Ads Manager", sublabel: "Campaign platform" }, { value: "Egypt", label: "Market", sublabel: "Campaign location" }], evidenceCount: 3, prefix: "ibrahim-hammad" },
];

const asset = (name: string) => `/usama-portfolio/assets/kuwait-egypt/${name}`;

export default function KuwaitEgyptPortfolio({ market }: { market: Market }) {
  const marketCases = cases.filter((item) => item.market === market);
  const [activeCaseId, setActiveCaseId] = useState<CaseId>(marketCases[0].id);
  const [selectedEvidence, setSelectedEvidence] = useState<number | null>(null);
  const activeCase = marketCases.find((item) => item.id === activeCaseId) ?? marketCases[0];

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-block px-4 py-1 rounded-full glass-card mb-6"><span className="text-[oklch(0.72_0.16_200)] text-sm font-medium tracking-wide">CASE STUDIES — {market.toUpperCase()} MARKET</span></div>
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{market} <span className="text-[oklch(0.85_0.12_85)]">Clients</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">Selected paid media campaign evidence, preserved from the supplied account screenshots.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {marketCases.map((item) => <button key={item.id} onClick={() => { setActiveCaseId(item.id); setSelectedEvidence(null); }} className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeCase.id === item.id ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40" : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"}`}><div className={activeCase.id === item.id ? "text-[oklch(0.72_0.16_200)]" : "text-foreground"}>{item.name}</div><div className="text-[10px] text-muted-foreground mt-0.5">{item.category}</div></button>)}
        </div>

        <AnimatePresence mode="wait"><motion.div key={activeCase.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-[1fr_2fr] gap-6 mb-8"><div><p className="text-xs tracking-widest text-[oklch(0.72_0.16_200)] uppercase mb-2">{activeCase.market} Market</p><h3 className="text-3xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{activeCase.name}</h3><p className="text-muted-foreground mt-2">{activeCase.category}</p></div><div className="grid sm:grid-cols-2 gap-4 text-sm"><div><span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Platforms</span><span className="text-foreground">{activeCase.platforms}</span></div><div><span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Scope</span><span className="text-foreground">{activeCase.scope}</span></div></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">{activeCase.metrics.map((metric) => <div key={metric.label} className="glass-card rounded-xl p-5 text-center teal-glow"><div className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{metric.value}</div><div className="text-xs text-[oklch(0.72_0.16_200)] mt-1">{metric.label}</div><div className="text-xs text-muted-foreground">{metric.sublabel}</div></div>)}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{Array.from({ length: activeCase.evidenceCount }, (_, index) => { const evidenceNumber = index + 1; const fileName = `${activeCase.prefix}-${evidenceNumber}.png`; return <motion.button key={fileName} type="button" className="glass-card rounded-xl overflow-hidden group text-left" onClick={() => setSelectedEvidence(evidenceNumber)} whileHover={{ y: -3 }}><div className="relative overflow-hidden"><img src={asset(fileName)} alt={`${activeCase.name} campaign evidence ${evidenceNumber}`} className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">View evidence {evidenceNumber}</span></div></motion.button>; })}</div>
          </div>
        </motion.div></AnimatePresence>
      </div>

      <AnimatePresence>{selectedEvidence && <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEvidence(null)}><motion.div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(event) => event.stopPropagation()}><img src={asset(`${activeCase.prefix}-${selectedEvidence}.png`)} alt={`${activeCase.name} campaign evidence ${selectedEvidence}`} className="w-full h-auto" /><button type="button" onClick={() => setSelectedEvidence(null)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white text-xl hover:bg-black">×</button></motion.div></motion.div>}</AnimatePresence>
    </section>
  );
}
