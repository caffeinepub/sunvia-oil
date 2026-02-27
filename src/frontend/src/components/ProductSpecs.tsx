import { motion } from "motion/react";
import { CheckCircle2, FlaskConical } from "lucide-react";

const SPECS = [
  { label: "Origin", value: "High-quality sunflower seed oil" },
  { label: "Grade", value: "Food Grade" },
  { label: "Appearance", value: "Clear, light golden liquid" },
  { label: "Odor", value: "Neutral" },
  { label: "Shelf Life", value: "Long shelf stability under proper storage" },
  { label: "Compliance", value: "Meets international food safety standards" },
];

const QUALITY_PARAMS = [
  "Low moisture and impurities",
  "Controlled peroxide value",
  "Stable acidity levels",
  "High Vitamin E content",
  "Free from foreign matter",
];

export function ProductSpecs() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-charcoal section-grain">
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
            Technical Data
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl title-bar-center">
            Product Specifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Spec Table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-white/10">
              <h3 className="font-display font-semibold text-white text-xl">
                Product Profile
              </h3>
            </div>
            <div className="divide-y divide-white/8">
              {SPECS.map((spec, idx) => (
                <div
                  key={spec.label}
                  className={`flex items-start px-6 py-4 gap-4 ${idx % 2 === 0 ? "bg-white/2" : ""}`}
                >
                  <span className="font-body text-white/50 text-sm w-28 shrink-0 pt-0.5 font-medium uppercase tracking-wide">
                    {spec.label}
                  </span>
                  <span className="font-body text-white text-sm flex-1 leading-snug">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quality Params */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-white text-xl">
                  Typical Quality Parameters
                </h3>
              </div>
              <ul className="space-y-4">
                {QUALITY_PARAMS.map((param) => (
                  <li key={param} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
                      strokeWidth={2}
                    />
                    <span className="font-body text-white/85 text-base leading-snug">
                      {param}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gold rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-bold text-charcoal text-xl mb-2">
                Need Full Technical Data Sheet?
              </h3>
              <p className="font-body text-charcoal/75 text-sm mb-5 leading-relaxed">
                Contact us to receive complete laboratory analysis reports and
                export documentation for your compliance requirements.
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
                Request Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
