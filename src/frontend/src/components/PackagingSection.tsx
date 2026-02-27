import { motion } from "motion/react";
import { ShoppingBag, UtensilsCrossed, Factory } from "lucide-react";

const PACKAGING_TIERS = [
  {
    icon: ShoppingBag,
    title: "Retail & Consumer Packs",
    desc: "Perfect for supermarkets, grocers, and retail distribution",
    items: [
      "PET bottles — multiple sizes",
      "Small tins",
      "Jerry cans",
      "Customized retail packs",
    ],
    accent: "gold",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Service & Commercial Packs",
    desc: "Designed for professional kitchens and food service operators",
    items: ["Large tins", "Metal cans", "HDPE containers"],
    accent: "charcoal",
  },
  {
    icon: Factory,
    title: "Industrial & Bulk Packs",
    desc: "Large-volume formats for manufacturers and importers",
    items: [
      "Drums / barrels",
      "Tin barrels",
      "Flexi-tank shipments",
      "Tanker loading for large-volume buyers",
    ],
    accent: "charcoal",
  },
];

export function PackagingSection() {
  return (
    <section id="packaging" className="py-20 lg:py-28 bg-white">
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
            Flexible Solutions
          </p>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl title-bar mb-5">
            Packaging Options
          </h2>
          <p className="font-body text-charcoal-mid text-lg max-w-2xl leading-relaxed">
            Sunvia.Oil provides flexible packaging solutions for retail
            distribution, food service, and industrial buyers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGING_TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            const isFirst = idx === 0;
            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  isFirst
                    ? "bg-gold border-gold/30 shadow-gold"
                    : "bg-cream border-border shadow-card"
                }`}
              >
                {/* Top accent */}
                {!isFirst && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold/30" />
                )}
                <div className="p-7">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isFirst ? "bg-charcoal/15" : "bg-gold/12"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isFirst ? "text-charcoal" : "text-gold-deep"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3
                    className={`font-display font-bold text-xl mb-2 ${
                      isFirst ? "text-charcoal" : "text-charcoal"
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={`font-body text-sm leading-relaxed mb-6 ${
                      isFirst ? "text-charcoal/70" : "text-charcoal-mid"
                    }`}
                  >
                    {tier.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                            isFirst ? "bg-charcoal" : "bg-gold"
                          }`}
                        />
                        <span
                          className={`font-body text-sm leading-snug ${
                            isFirst ? "text-charcoal/85" : "text-charcoal-mid"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center font-body text-charcoal-mid text-sm italic"
        >
          Packaging can be customized according to buyer requirements and
          destination regulations.
        </motion.p>
      </div>
    </section>
  );
}
