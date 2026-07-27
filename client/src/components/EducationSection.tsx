/**
 * Education Section - Gulf Elegance Design
 */
import { motion } from "framer-motion";

const education = [
  {
    institution: "Mansoura University",
    period: "2020 - 2021",
    degree: "Bachelor of Science — Chemistry",
    faculty: "Faculty of Science",
  },
  {
    institution: "Mansoura University",
    period: "2023 - 2024",
    degree: "Postgraduate Diploma in Biochemistry",
    faculty: "Faculty of Science",
  },
];

export default function EducationSection() {
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
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.period}
              className="glass-card rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[oklch(0.78_0.13_85)]/10 to-transparent" />

              <div className="relative">
                <div className="inline-block px-3 py-1 rounded-full bg-[oklch(0.72_0.16_200)]/10 text-[oklch(0.72_0.16_200)] text-sm mb-4">
                  {edu.period}
                </div>
                <h3
                  className="text-xl text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {edu.institution}
                </h3>
                <p className="text-foreground font-medium">{edu.degree}</p>
                <p className="text-muted-foreground text-sm mt-1">{edu.faculty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
