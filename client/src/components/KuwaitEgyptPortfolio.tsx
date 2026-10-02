import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CaseId =
  | "glow"
  | "asmaa"
  | "nova"
  | "lama"
  | "ibrahim"
  | "alqibla"
  | "signature"
  | "houssam"
  | "artwooden";
type Market = "Kuwait" | "Egypt";
type Metric = { value: string; label: string; sublabel: string };
type ClientCase = {
  id: CaseId;
  market: Market;
  name: string;
  category: string;
  scope: string;
  platforms: string;
  metrics: Metric[];
  evidenceCount: number;
  prefix: string;
  logo?: string;
  extension?: string;
  period?: string;
  summary?: string;
  evidenceLabels?: string[];
};

const cases: ClientCase[] = [
  {
    id: "houssam",
    market: "Kuwait",
    name: "Dr Houssam Badawi",
    category: "Doctor / Plastic Surgery",
    scope:
      "Meta awareness, engagement, video-view campaigns and creative testing",
    platforms: "Meta Ads",
    period: "Selected 8 Meta campaigns · Instagram insights: Sep 3–30, 2026",
    summary:
      "The selected Meta campaigns generated 195,311 impressions and 176,836 video plays from $457.66 in spend. Instagram account insights recorded 205.9K views, with approximately 163.8K from ads. Account insights and campaign-level results are shown separately.",
    metrics: [
      {
        value: "195,311",
        label: "Meta impressions",
        sublabel: "Selected 8 campaigns",
      },
      {
        value: "176,836",
        label: "Meta video plays",
        sublabel: "$457.66 campaign spend",
      },
      {
        value: "205.9K",
        label: "Instagram account views",
        sublabel: "Sep 3–30 · paid + organic",
      },
    ],
    evidenceCount: 4,
    prefix: "houssam",
    extension: "webp",
    evidenceLabels: [
      "Meta paid media snapshot",
      "Winning campaign comparison",
      "Instagram account insights",
      "Ads Manager screenshots",
    ],
  },
  {
    id: "artwooden",
    market: "Kuwait",
    name: "Artwooden Villa",
    category: "Contracting / Villa Construction",
    scope: "Meta messaging, creative testing and TikTok visibility campaigns",
    platforms: "Meta Ads + TikTok Ads",
    period:
      "Report through Oct 1, 2026 · Instagram: Sep 3–30 · TikTok: Sep 6–Oct 1",
    summary:
      "Meta generated 126 messaging conversations from $1,277.53 in spend, across the four selected campaigns. The control creative produced 30 conversations at $3.81 each. TikTok generated 157 paid follows from $60 in spend, supporting visibility and community growth.",
    metrics: [
      {
        value: "126",
        label: "Meta conversations",
        sublabel: "$1,277.53 Meta spend",
      },
      {
        value: "$3.81",
        label: "Control ad cost / conversation",
        sublabel: "30 conversations · ad-level result",
      },
      {
        value: "157",
        label: "TikTok paid follows",
        sublabel: "$60 TikTok spend",
      },
    ],
    evidenceCount: 3,
    prefix: "artwooden",
    extension: "webp",
    evidenceLabels: [
      "Meta campaign and creative evidence",
      "Instagram and TikTok insights",
      "Performance summary",
    ],
  },
  {
    id: "alqibla",
    market: "Kuwait",
    name: "Alqibla Clinic 8",
    category: "Clinic / Aesthetic Services",
    scope:
      "Meta messaging campaigns, creative testing and TikTok community growth",
    platforms: "Meta Ads + TikTok Ads",
    logo: "alqibla-logo.webp",
    period: "September 2026 · Instagram: Sep 3–30 · TikTok: Sep 6–Oct 1",
    summary:
      "Meta generated 153 messaging conversations from $878.97 in spend. The XERF control creative delivered 24 conversations at $3.13 each. TikTok generated 230 paid follows from $120 in spend. Messaging results represent conversations, with bookings tracked separately.",
    metrics: [
      {
        value: "153",
        label: "Meta conversations",
        sublabel: "$5.74 average cost per conversation",
      },
      {
        value: "230",
        label: "TikTok paid follows",
        sublabel: "$120 TikTok spend",
      },
      {
        value: "$3.13",
        label: "XERF cost / conversation",
        sublabel: "24 conversations · ad-level result",
      },
    ],
    evidenceCount: 4,
    prefix: "alqibla",
    extension: "webp",
    evidenceLabels: [
      "Meta campaign results",
      "XERF creative results",
      "Instagram account growth",
      "TikTok campaign results",
    ],
  },
  {
    id: "signature",
    market: "Kuwait",
    name: "Signature Clinic",
    category: "Clinic / Aesthetic Services",
    scope:
      "Meta messaging, broad vs. interest testing, creative optimization and TikTok community growth",
    platforms: "Meta Ads + TikTok Ads",
    logo: "signature-logo.webp",
    period: "Meta: Sep 1–Oct 1, 2026 · TikTok: Sep 6–Oct 1, 2026",
    summary:
      "Meta delivered 573 messaging conversations from $1,019.78 in spend. The Broad & Interest campaign contributed 357 conversations at $1.63 each. TikTok added 143 paid follows and 156 paid profile visits from $70.10 in spend. The creative comparison shown below covers a separate Aug 16–Sep 16 reporting window.",
    metrics: [
      {
        value: "573",
        label: "Meta conversations",
        sublabel: "$1.78 average cost per conversation",
      },
      {
        value: "$1,019.78",
        label: "Meta spend",
        sublabel: "Sep 1–Oct 1, 2026",
      },
      {
        value: "143",
        label: "TikTok paid follows",
        sublabel: "156 paid profile visits",
      },
    ],
    evidenceCount: 4,
    prefix: "signature",
    extension: "webp",
    evidenceLabels: [
      "Meta campaign results",
      "Creative comparison · Aug 16–Sep 16",
      "TikTok campaign results",
      "Performance summary",
    ],
  },
  {
    id: "glow",
    market: "Kuwait",
    name: "To Glow Clinic",
    category: "Clinic / Aesthetic Services",
    scope:
      "Media buying, campaign management, creative testing and performance tracking",
    platforms: "Meta Ads + TikTok Ads",
    logo: "to-glow-logo.webp",
    period: "Latest supplied Meta + TikTok report · through October 1, 2026",
    summary:
      "Meta generated 276 messaging conversations from $1,846.16 in spend, at $6.69 per conversation. TikTok supported visibility and community growth with 164,141 impressions, 115,408 reach and 457 paid follows from $115 in spend. Platform metrics are reported separately to reflect their different objectives.",
    metrics: [
      {
        value: "276",
        label: "Meta conversations",
        sublabel: "$6.69 average cost per conversation",
      },
      {
        value: "164,141",
        label: "TikTok impressions",
        sublabel: "115,408 reach",
      },
      {
        value: "457",
        label: "TikTok paid follows",
        sublabel: "$115 TikTok spend",
      },
    ],
    evidenceCount: 6,
    prefix: "to-glow-current",
    extension: "webp",
    evidenceLabels: [
      "Meta campaign performance",
      "Meta ad-set testing",
      "Meta creative results",
      "TikTok campaign performance",
      "TikTok audience and video results",
      "Campaign analysis",
    ],
  },
  {
    id: "asmaa",
    market: "Kuwait",
    name: "Dr Asmaa",
    category: "Doctor / Medical Brand",
    scope: "Messaging, lead, awareness and profile-growth campaign management",
    platforms: "Meta Ads",
    metrics: [
      { value: "88.9K", label: "Impressions", sublabel: "Selected signal" },
      { value: "41.5K", label: "Reach", sublabel: "Selected signal" },
      {
        value: "294",
        label: "Messaging conversations",
        sublabel: "Selected signal",
      },
    ],
    evidenceCount: 9,
    prefix: "dr-asmaa",
  },
  {
    id: "nova",
    market: "Kuwait",
    name: "Nova Med",
    category: "Healthcare / Medical Brand",
    scope: "Traffic, messaging and profile-growth campaign management",
    platforms: "Meta Ads",
    metrics: [
      { value: "34.1K", label: "Impressions", sublabel: "Selected signal" },
      { value: "18.4K", label: "Reach", sublabel: "Selected signal" },
      {
        value: "1,352",
        label: "Profile-growth results",
        sublabel: "Selected signal",
      },
    ],
    evidenceCount: 3,
    prefix: "nova-med",
  },
  {
    id: "lama",
    market: "Kuwait",
    name: "Dr Lama",
    category: "Doctor / Medical Brand",
    scope: "Messaging, engagement, awareness and traffic campaign management",
    platforms: "Meta Ads",
    metrics: [
      { value: "54.3K", label: "Impressions", sublabel: "Selected signal" },
      { value: "28.9K", label: "Reach", sublabel: "Selected signal" },
      {
        value: "116",
        label: "Messaging conversations",
        sublabel: "Selected signal",
      },
    ],
    evidenceCount: 7,
    prefix: "dr-lama",
  },
  {
    id: "ibrahim",
    market: "Egypt",
    name: "Ibrahim Hammad Butchery",
    category: "Food Retail / Butchery",
    scope:
      "Messaging, engagement, follower-growth and traffic campaign management",
    platforms: "Meta Ads",
    metrics: [
      { value: "6", label: "Campaigns shown", sublabel: "Selected evidence" },
      { value: "Meta", label: "Ads Manager", sublabel: "Campaign platform" },
      { value: "Egypt", label: "Market", sublabel: "Campaign location" },
    ],
    evidenceCount: 3,
    prefix: "ibrahim-hammad",
  },
];

const asset = (name: string) =>
  `${import.meta.env.BASE_URL}assets/kuwait-egypt/${name}`;

export default function KuwaitEgyptPortfolio({ market }: { market: Market }) {
  const marketCases = cases.filter(item => item.market === market);
  const [activeCaseId, setActiveCaseId] = useState<CaseId>(marketCases[0].id);
  const [selectedEvidence, setSelectedEvidence] = useState<number | null>(null);
  const activeCase =
    marketCases.find(item => item.id === activeCaseId) ?? marketCases[0];

  useEffect(() => {
    if (selectedEvidence === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedEvidence(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedEvidence]);

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block px-4 py-1 rounded-full glass-card mb-6">
            <span className="text-[oklch(0.72_0.16_200)] text-sm font-medium tracking-wide">
              CASE STUDIES — {market.toUpperCase()} MARKET
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {market} <span className="text-[oklch(0.85_0.12_85)]">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Campaign results across healthcare and service brands, supported by
            account screenshots and performance reports.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {marketCases.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseId(item.id);
                setSelectedEvidence(null);
              }}
              className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeCase.id === item.id ? "bg-[oklch(0.72_0.16_200)]/15 border border-[oklch(0.72_0.16_200)]/40" : "glass-card border border-transparent hover:border-[oklch(0.72_0.16_200)]/20"}`}
            >
              <div
                className={
                  activeCase.id === item.id
                    ? "text-[oklch(0.72_0.16_200)]"
                    : "text-foreground"
                }
              >
                {item.name}
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                {item.category}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 mb-10">
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 mb-8">
                <div>
                  {activeCase.logo && (
                    <img
                      src={asset(activeCase.logo)}
                      alt={`${activeCase.name} logo`}
                      className="w-24 h-24 object-contain rounded-xl bg-white p-2 mb-4"
                    />
                  )}
                  <p className="text-xs tracking-widest text-[oklch(0.72_0.16_200)] uppercase mb-2">
                    {activeCase.market} Market
                  </p>
                  <h3
                    className="text-3xl text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {activeCase.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {activeCase.category}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">
                      Platforms
                    </span>
                    <span className="text-foreground">
                      {activeCase.platforms}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">
                      Scope
                    </span>
                    <span className="text-foreground">{activeCase.scope}</span>
                  </div>
                </div>
              </div>
              {activeCase.period && (
                <p className="text-xs text-muted-foreground mb-4">
                  Reporting period: {activeCase.period}
                </p>
              )}
              {activeCase.summary && (
                <p className="text-sm text-foreground leading-relaxed mb-6 max-w-4xl">
                  {activeCase.summary}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {activeCase.metrics.map(metric => (
                  <div
                    key={metric.label}
                    className="glass-card rounded-xl p-5 text-center teal-glow"
                  >
                    <div
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-[oklch(0.72_0.16_200)] mt-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.sublabel}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from(
                  { length: activeCase.evidenceCount },
                  (_, index) => {
                    const evidenceNumber = index + 1;
                    const fileName = `${activeCase.prefix}-${evidenceNumber}.${activeCase.extension ?? "png"}`;
                    return (
                      <motion.button
                        key={fileName}
                        type="button"
                        aria-label={`Open ${activeCase.name} ${activeCase.evidenceLabels?.[index] ?? `evidence ${evidenceNumber}`}`}
                        className="glass-card rounded-xl overflow-hidden group text-left"
                        onClick={() => setSelectedEvidence(evidenceNumber)}
                        whileHover={{ y: -3 }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={asset(fileName)}
                            loading="lazy"
                            alt={`${activeCase.name}: ${activeCase.evidenceLabels?.[index] ?? `campaign evidence ${evidenceNumber}`}`}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {activeCase.evidenceLabels?.[index] ??
                              `View evidence ${evidenceNumber}`}
                          </span>
                        </div>
                      </motion.button>
                    );
                  }
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedEvidence && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCase.name} campaign evidence`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvidence(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={event => event.stopPropagation()}
            >
              <img
                src={asset(
                  `${activeCase.prefix}-${selectedEvidence}.${activeCase.extension ?? "png"}`
                )}
                alt={`${activeCase.name} campaign evidence ${selectedEvidence}`}
                className="w-full h-auto"
              />
              <button
                type="button"
                aria-label="Close evidence"
                onClick={() => setSelectedEvidence(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white text-xl hover:bg-black"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
