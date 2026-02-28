import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import sunflowerProductImg from "/assets/generated/sunflower-oil-product.dim_600x600.png";
import mascotUpload from "/assets/uploads/IMG-20260224-WA0011-1.jpg";

const MASCOT_SRC = mascotUpload;
const PRODUCT_IMG = sunflowerProductImg;

const BENEFITS = [
  "Low in saturated fats",
  "High levels of polyunsaturated and monounsaturated fatty acids",
  "Light taste and neutral odor",
  "Excellent frying performance",
  "Long shelf stability",
  "Suitable for continuous commercial use",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
              About the Product
            </p>
            <h2 className="font-display font-bold text-charcoal text-3xl sm:text-4xl lg:text-[2.65rem] leading-tight title-bar mb-7">
              About Sunvia.Oil
            </h2>
            <p className="font-body text-charcoal-mid text-base sm:text-lg leading-relaxed mb-5">
              Sunvia.Oil refined sunflower oil is produced through advanced
              refining processes including{" "}
              <span className="font-semibold text-charcoal">
                neutralization, bleaching, deodorization, and winterization
              </span>{" "}
              to ensure purity, clarity, and stability.
            </p>
            <p className="font-body text-charcoal-mid text-base sm:text-lg leading-relaxed mb-9">
              The oil is produced to international food-grade standards and is
              intended for human consumption as well as large-scale industrial
              food applications.
            </p>

            <h3 className="font-display font-semibold text-charcoal text-xl mb-5">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-gold mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-charcoal-mid text-base leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-4 rounded-3xl bg-gold/8 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-gold/12 -z-10 blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(60,40,10,0.15)]">
              <img
                src={PRODUCT_IMG}
                alt="Sunvia.Oil Premium Refined Sunflower Oil"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-card">
                  <p className="font-body font-semibold text-charcoal text-sm">
                    Sunvia.Oil — Premium Refined
                  </p>
                  <p className="font-body text-gold-deep text-xs font-medium mt-0.5">
                    International Food Grade Standard
                  </p>
                </div>
              </div>
            </div>

            {/* Mascot — floating at bottom-right corner */}
            <motion.div
              className="absolute -bottom-10 -right-8 w-36 lg:w-44 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.img
                src={MASCOT_SRC}
                alt="Sunvia.Oil Mascot — Sunshine-Fresh Every Day"
                className="w-full object-contain drop-shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
