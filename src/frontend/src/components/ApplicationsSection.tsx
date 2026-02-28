import {
  Cake,
  Cog,
  Factory,
  Flame,
  Home,
  Hotel,
  Sandwich,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

const APPLICATIONS = [
  {
    icon: Home,
    title: "Household Cooking",
    desc: "Versatile oil for everyday home cooking needs",
  },
  {
    icon: Flame,
    title: "Deep Frying",
    desc: "High smoke point, ideal for deep and shallow frying",
  },
  {
    icon: Factory,
    title: "Food Processing Industries",
    desc: "Consistent quality for large-scale food manufacturing",
  },
  {
    icon: Cake,
    title: "Bakery & Confectionery",
    desc: "Neutral flavor complements baked goods and confections",
  },
  {
    icon: Hotel,
    title: "Hotels, Restaurants & Catering",
    desc: "HoReCa-grade supply for professional kitchens",
  },
  {
    icon: UtensilsCrossed,
    title: "Ready-to-Eat Food Production",
    desc: "Suitable for ready-to-eat food applications",
  },
  {
    icon: Sandwich,
    title: "Snack Manufacturing",
    desc: "Optimal for crisps, chips, and extruded snacks",
  },
  {
    icon: Cog,
    title: "Industrial Food Applications",
    desc: "Large-volume continuous processing capability",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export function ApplicationsSection() {
  return (
    <section id="applications" className="py-20 lg:py-28 bg-white">
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
            Where It's Used
          </p>
          <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-5xl title-bar-center">
            Applications
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {APPLICATIONS.map((app) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.title}
                variants={itemVariants}
                className="group relative bg-cream rounded-2xl p-6 text-center border border-border hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative dot */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />

                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold-deep" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base leading-tight mb-2">
                  {app.title}
                </h3>
                <p className="font-body text-xs text-charcoal-mid leading-relaxed">
                  {app.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
