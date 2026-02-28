import {
  ArrowRight,
  ClipboardList,
  FileCheck,
  FileText,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: FileText,
    title: "Export Documentation",
    desc: "We prepare and coordinate the full export documentation package — Certificate of Origin, Bill of Lading, Packing List, and Commercial Invoice.",
  },
  {
    icon: ShieldCheck,
    title: "Phytosanitary & Health Certificates",
    desc: "Health and sanitary certificates can be arranged on request to meet destination country import requirements.",
  },
  {
    icon: ClipboardList,
    title: "Customs-Ready Paperwork",
    desc: "Documentation is prepared in line with standard customs clearance requirements to support smooth import processing.",
  },
  {
    icon: Globe2,
    title: "Destination Country Requirements",
    desc: "We work with buyers to understand and address documentation requirements applicable to their destination market.",
  },
  {
    icon: FileCheck,
    title: "Flexible Incoterms",
    desc: "We can accommodate various trade terms — FOB, CIF, CFR, EXW — as per buyer preference and agreed contract terms.",
  },
  {
    icon: Truck,
    title: "Freight Coordination",
    desc: "On buyer request, we can coordinate with freight forwarders to assist in arranging shipment logistics.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ImportFacilitationSection() {
  return (
    <section
      id="import-facilitation"
      className="py-20 lg:py-28 bg-charcoal section-grain"
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
            Buyer Support
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl title-bar mb-5">
                Import Facilitation Support
              </h2>
              <p className="font-body text-white/65 text-lg leading-relaxed max-w-2xl">
                We support our buyers through the import process — from
                documentation to destination.
              </p>
            </div>
            <motion.button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 bg-gold text-charcoal font-body font-bold text-sm px-6 py-3 rounded-xl shadow-gold hover:bg-gold-deep transition-colors shrink-0 self-start lg:self-auto"
            >
              Discuss Import Requirements
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </motion.button>
          </div>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-white text-base leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-white/35 text-xs text-center mt-10 max-w-xl mx-auto leading-relaxed"
        >
          Documentation and support services are subject to individual order
          terms. Contact us to discuss your specific import requirements.
        </motion.p>
      </div>
    </section>
  );
}
