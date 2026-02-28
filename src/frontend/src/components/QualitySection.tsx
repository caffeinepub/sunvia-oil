import { FlaskConical, Globe, PackageCheck, Settings } from "lucide-react";
import { motion } from "motion/react";

const QA_POINTS = [
  {
    icon: FlaskConical,
    title: "Tested for Food-Grade Compliance",
    desc: "Each production run undergoes quality checks to verify compliance with food safety and quality parameters before dispatch.",
  },
  {
    icon: Settings,
    title: "Controlled Refining Process",
    desc: "Precision-controlled neutralization, bleaching, deodorization, and winterization ensures consistent product quality.",
  },
  {
    icon: PackageCheck,
    title: "Hygienic Handling & Packaging",
    desc: "Production handled with strict hygiene protocols at every stage of handling and packaging.",
  },
  {
    icon: Globe,
    title: "Export-Quality Standards Maintained",
    desc: "Packaged and documented in line with standard export requirements.",
  },
];

export function QualitySection() {
  return (
    <section className="py-20 lg:py-28 bg-cream-warm section-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Our Standards
          </p>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl title-bar-center">
            Quality Assurance
          </h2>
          <p className="font-body text-charcoal-mid text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Each batch undergoes strict quality control to ensure purity,
            consistency, and safety.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QA_POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon
                      className="w-6 h-6 text-gold-deep"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="font-display font-bold text-4xl text-gold/15 leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base leading-snug mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-charcoal-mid text-sm leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
