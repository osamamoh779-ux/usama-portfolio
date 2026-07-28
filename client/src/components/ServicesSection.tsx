/**
 * Services Section - Gulf Elegance Design
 * Detailed services offered as Media Buyer & Digital Marketing Specialist
 */
import { motion } from "framer-motion";
import {
  Target,
  BarChart3,
  PenTool,
  Users,
  TrendingUp,
  Megaphone,
  Filter,
  RefreshCcw,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "إدارة الحملات الإعلانية",
    titleEn: "Paid Campaign Management",
    description:
      "تخطيط وتنفيذ حملات إعلانية مدروسة على جميع المنصات — Meta, TikTok, Snapchat, Google, X — مع استهداف دقيق للجمهور السعودي والخليجي لضمان أعلى عائد على الإنفاق.",
    features: ["خطة إعلان شاملة", "استهداف ديموغرافي وجغرافي", "اختبار audiences متعددة", "تقارير أداء دورية"],
  },
  {
    icon: BarChart3,
    title: "تحليل البيانات والأداء",
    titleEn: "Performance Analytics",
    description:
      "تحليل شامل لبيانات الحملات لاستخلاص رؤى actionable — من CTR و CPC و CPA إلى ROAS — مع توصيات واضحة لتحسين الأداء وزيادة الربحية.",
    features: ["تتبع KPIs الأساسية", "تحليل funnel الأداء", "مقارنات بين المنصات", "توصيات تحسين"],
  },
  {
    icon: PenTool,
    title: "كتابة الإعلانات الموجهة",
    titleEn: "Ad Copywriting",
    description:
      "كتابة نصوص إعلانية مقنعة باللهجة المحلية تناسب ثقافة السوق السعودي والخليجي — من headlines جذابة إلى CTAs قوية تحفز التحويل.",
    features: ["نسخة عربية محلّية", "A/B testing للنصوص", "Headlines + CTAs", "محتوى إبداعي"],
  },
  {
    icon: Users,
    title: "استهداف الجمهور",
    titleEn: "Audience Targeting",
    description:
      "بناء شرائح جمهور مخصصة بناءً على السلوك والاهتمامات والموقع — مع استهداف lookalike audiences وcustom audiences لتحقيق أعلى دقة.",
    features: ["Lookalike Audiences", "Custom Audiences", "Lookalike + Retargeting", "Geographic Targeting"],
  },
  {
    icon: TrendingUp,
    title: "تكبير الميزانية",
    titleEn: "Budget Scaling",
    description:
      "استراتيجية ممنهجة لزيادة الميزانية بشكل آمن — identification of winning campaigns + gradual scaling — لضمان الحفاظ على ROAS أثناء النمو.",
    features: ["تحديد الحملات الرابحة", "Scaling تدريجي آمن", "مراقبة CPA أثناء الزيادة", "تحسين مستمر"],
  },
  {
    icon: Megaphone,
    title: "استراتيجية المنصات المتعددة",
    titleEn: "Multi-Platform Strategy",
    description:
      "توزيع ذكي للميزانية بين Meta, TikTok, Snapchat, Google — حسب قوة كل منصة في تحقيق الأهداف المطلوبة — مع تكامل كامل بين المنصات.",
    features: ["Cross-platform planning", "Budget allocation", "Platform-specific creatives", "Unified reporting"],
  },
  {
    icon: Filter,
    title: "بناء الفانلز والـ Retargeting",
    titleEn: "Funnel Building & Retargeting",
    description:
      "تصميم مسارات تحويل متكاملة — من awareness إلى conversion — مع حملات retargeting مخصصة لكل مرحلة من funnel لضمان أعلى معدل تحويل.",
    features: ["Top-funnel awareness", "Mid-funnel consideration", "Bottom-funnel conversion", "Dynamic retargeting"],
  },
  {
    icon: RefreshCcw,
    title: "تحسين الحملات المستمر",
    titleEn: "Continuous Optimization",
    description:
      "مراقبة يومية + تحسين مستمر — تعديل targeting, bid strategies, creatives, و placements بناءً على البيانات — لضمان أداء متفوق على مدار الحملة.",
    features: ["Daily monitoring", "Bid strategy optimization", "Creative refresh", "Placement testing"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gold line divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 gold-line" />

      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Services
          </h2>
          <p className="text-[oklch(0.72_0.16_200)] text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            End-to-End Media Buying Solutions
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From campaign strategy to performance optimization — I deliver comprehensive paid media solutions tailored for the Saudi & GCC markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-xl p-6 hover:border-[oklch(0.72_0.16_200)]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[oklch(0.72_0.16_200)]/20 to-[oklch(0.78_0.13_85)]/10 flex items-center justify-center border border-[oklch(0.78_0.13_85)]/20 group-hover:border-[oklch(0.72_0.16_200)]/40 transition-colors">
                  <service.icon className="w-5 h-5 text-[oklch(0.72_0.16_200)]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-0.5">{service.title}</h3>
                  <p className="text-[oklch(0.72_0.16_200)]/80 text-xs mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {service.titleEn}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-md bg-[oklch(0.72_0.16_200)]/10 text-[oklch(0.72_0.16_200)]/80 border border-[oklch(0.72_0.16_200)]/15"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm mb-4">
            Need a custom solution for your business? Let's discuss your goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[oklch(0.72_0.16_200)] to-[oklch(0.78_0.13_85)] text-[oklch(0.14_0.05_250)] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
