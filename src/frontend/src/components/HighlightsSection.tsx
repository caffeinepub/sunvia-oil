import {
  Droplets,
  Flame,
  Heart,
  Package,
  Shield,
  Sparkles,
  Tag,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const HIGHLIGHTS = [
  {
    icon: Droplets,
    title: "Food-Grade Refined Sunflower Oil",
    desc: "Produced to the highest international food safety standards",
  },
  {
    icon: Flame,
    title: "Cooking, Frying & Food Processing",
    desc: "Optimal performance across all culinary and industrial applications",
  },
  {
    icon: Shield,
    title: "High Oxidative Stability",
    desc: "Extended shelf life with excellent resistance to oxidation",
  },
  {
    icon: Heart,
    title: "Low Saturated Fat Content",
    desc: "Healthier fat profile with high polyunsaturated fatty acids",
  },
  {
    icon: Sparkles,
    title: "Rich in Vitamin E",
    desc: "Natural antioxidant content supporting health and stability",
  },
  {
    icon: Truck,
    title: "Consistent Large-Volume Supply",
    desc: "Reliable capacity to meet bulk demand on schedule",
  },
  {
    icon: Package,
    title: "Export-Ready Packaging",
    desc: "All formats meet destination country regulatory requirements",
  },
  {
    icon: Tag,
    title: "Private Labeling Available",
    desc: "Full OEM services for distributors and brand owners",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HighlightsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream section-grain">
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
            Our Advantages
          </p>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl title-bar-center">
            Why Choose Sunvia.Oil
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gold/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold-deep" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal-mid/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
