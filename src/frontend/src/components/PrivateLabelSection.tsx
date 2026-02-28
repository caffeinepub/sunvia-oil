import { CheckCircle2, Store } from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  "Custom brand packaging",
  "Label design assistance",
  "Regulatory-compliant labeling",
  "Flexible pack sizes",
  "Export documentation support",
  "Bulk supply under buyer's brand",
];

export function PrivateLabelSection() {
  return (
    <section
      id="private-label"
      className="py-20 lg:py-28 bg-cream-warm section-grain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
            OEM Solutions
          </p>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl title-bar">
            Private Label &amp; OEM Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-body text-charcoal-mid text-lg leading-relaxed mb-8">
              Sunvia.Oil offers full private labeling solutions for distributors
              and brand owners. Launch your brand backed by our premium refined
              sunflower oil.
            </p>
            <ul className="space-y-4">
              {SERVICES.map((service, idx) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-xs border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <CheckCircle2
                      className="w-4.5 h-4.5 text-gold-deep"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="font-body font-medium text-charcoal text-base">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Main callout box */}
            <div className="bg-charcoal rounded-2xl p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-gold" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-snug mb-4">
                Launch Your Own Sunflower Oil Brand
              </h3>
              <p className="font-body text-white/70 text-base leading-relaxed mb-8">
                We handle production, packaging, and labeling. You focus on
                sales and distribution. Full white-label partnership from order
                to delivery.
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-body font-semibold text-gold text-sm uppercase tracking-widest mb-3">
                  Ideal for
                </p>
                <ul className="space-y-2">
                  {[
                    "Importers & distributors",
                    "Supermarket chains",
                    "National wholesalers",
                    "Regional distributors",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="font-body text-white/80 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA box */}
            <div className="bg-gold rounded-2xl p-6">
              <p className="font-display font-bold text-charcoal text-lg mb-2">
                Ideal for importers, supermarket chains, wholesalers, and
                national distributors.
              </p>
              <p className="font-body text-charcoal/70 text-sm mb-4">
                Minimum order quantities apply. Contact us to discuss your
                specific requirements.
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 bg-charcoal text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-charcoal-mid transition-colors"
              >
                Discuss Private Label Options
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
