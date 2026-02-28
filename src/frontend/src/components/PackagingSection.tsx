import { Factory, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import bulkImg from "/assets/generated/packaging-bulk-sunflower-oil.dim_600x400.jpg";
import retailImg from "/assets/generated/packaging-retail-sunflower-oil.dim_600x400.jpg";

const PACKAGING_TIERS = [
  {
    icon: ShoppingBag,
    title: "Retail Packaging",
    desc: "Standard consumer-ready formats for supermarkets, grocers, and retail chains",
    image: retailImg,
    imageAlt: "Retail sunflower oil packaging — PET bottle and tin can",
    items: [
      "500ml & 1L PET bottles",
      "2L & 5L PET bottles",
      "1L, 5L tin cans",
      "Jerry cans (5L, 10L)",
      "Custom label / private brand packs",
    ],
    accent: "gold",
  },
  {
    icon: Factory,
    title: "Bulk & Industrial Packaging",
    desc: "Large-volume export formats for manufacturers, importers, and distributors",
    image: bulkImg,
    imageAlt: "Bulk sunflower oil packaging — drums and barrels",
    items: [
      "25L & 50L HDPE jerry cans",
      "200L metal / plastic drums",
      "Steel tin barrels",
      "IBC totes (1000L)",
      "Flexi-tank shipments",
      "Tanker loading (large-volume)",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PACKAGING_TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            const isFirst = idx === 0;
            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  isFirst
                    ? "bg-gold border-gold/30 shadow-gold"
                    : "bg-cream border-border shadow-card"
                }`}
              >
                {/* Product image */}
                <div className="w-full h-52 overflow-hidden bg-white">
                  <img
                    src={tier.image}
                    alt={tier.imageAlt}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Top accent for non-gold card */}
                {!isFirst && (
                  <div className="absolute top-52 left-0 right-0 h-1 bg-gold/30" />
                )}

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isFirst ? "bg-charcoal/15" : "bg-gold/12"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${isFirst ? "text-charcoal" : "text-gold-deep"}`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3
                      className={`font-display font-bold text-xl ${
                        isFirst ? "text-charcoal" : "text-charcoal"
                      }`}
                    >
                      {tier.title}
                    </h3>
                  </div>
                  <p
                    className={`font-body text-sm leading-relaxed mb-5 ${
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
