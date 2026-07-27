/**
 * Experience Section - Gulf Elegance Design
 * Same color palette: teal (#0EA5E9 range), gold (#D4A843 range), dark background
 * No new colors added
 */
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Media Buyer — Azzrk Digital Marketing Agency",
    period: "2023 - 2025",
    company: "Azzrk Digital Marketing Agency",
    description: "Managed large-scale paid advertising budgets for diverse client portfolios across multiple sectors.",
    details: [
      "Managed large-scale paid advertising budgets for diverse client portfolios across multiple sectors.",
      "Developed and implemented comprehensive media plans tailored to specific regional markets, with a primary focus on Saudi Arabia and the UAE.",
      "Collaborated with creative teams to produce high-performing ad content optimized for regional cultural trends and consumer behavior.",
      "Monitored and analyzed performance metrics (CTR, CPC, CPA, ROAS) to provide actionable insights and ensure high campaign profitability.",
    ],
    icon: Briefcase,
  },
  {
    role: "Media Buyer & Digital Marketing Specialist",
    period: "Current",
    company: "Freelance / Agency",
    description: "Managing paid advertising campaigns on Meta, TikTok, Snapchat, and Google for Saudi and GCC market clients. Focus on performance-driven strategies with continuous optimization.",
    details: [
      "Managing paid advertising campaigns on Meta, TikTok, Snapchat, and Google for Saudi and GCC market clients.",
      "Focus on performance-driven strategies with continuous optimization.",
    ],
    icon: Briefcase,
  },
  {
    role: "Medical Representative",
    period: "Previous",
    company: "Healthcare Industry",
    description: "Built strong foundations in communication, negotiation, and customer behavior understanding. This experience directly translated into effective ad copywriting and audience targeting skills.",
    details: [
      "Built strong foundations in communication, negotiation, and customer behavior understanding.",
      "This experience directly translated into effective ad copywriting and audience targeting skills.",
    ],
    icon: Briefcase,
  },
  {
    role: "Postgraduate Diploma in Biochemistry",
    period: "2023 - 2024",
    company: "Mansoura University",
    description: "Advanced scientific education that enhances analytical thinking and data-driven decision making — directly applicable to campaign analysis and optimization.",
    details: [
      "Advanced scientific education that enhances analytical thinking and data-driven decision making.",
      "Directly applicable to campaign analysis and optimization.",
    ],
    icon: GraduationCap,
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From scientific analysis to digital marketing performance — a unique professional journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.role}
                className="glass-card rounded-xl p-6 relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.72_0.16_200)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[oklch(0.72_0.16_200)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg text-white font-medium">
                        {exp.role}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[oklch(0.78_0.13_85)]/10 text-[oklch(0.78_0.13_85)] text-xs">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[oklch(0.72_0.16_200)] text-sm mb-3">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.16_200)] mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
