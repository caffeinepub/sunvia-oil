import { Button } from "@/components/ui/button";
import { ArrowDown, Award, Globe, Package, Tag } from "lucide-react";
import { motion } from "motion/react";
import heroBg from "/assets/generated/hero-sunflower-field.dim_1600x700.jpg";
import mascotImg from "/assets/generated/sunvia-mascot-nobg-transparent.dim_600x600.png";

const MASCOT_SRC = mascotImg;
const HERO_BG = heroBg;

const TRUST_BADGES = [
  { icon: Award, label: "Export-Ready" },
  { icon: Award, label: "Food Grade" },
  { icon: Tag, label: "Private Label" },
  { icon: Package, label: "Bulk Supply" },
  { icon: Globe, label: "Worldwide Shipping" },
];

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
      />
      {/* Heavy solid base overlay — guarantees text legibility regardless of image brightness */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,8,4,0.82)" }}
      />
      {/* Left gradient: text side nearly opaque, image partially visible on right only on large screens */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(10,8,4,0.30) 0%, rgba(10,8,4,0.10) 55%, rgba(10,8,4,0.00) 100%)",
        }}
      />
      {/* Top vignette for navbar readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,8,4,0.50) 0%, transparent 25%, rgba(10,8,4,0.45) 90%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="flex items-center justify-between gap-8">
          {/* Left: Text */}
          <div className="max-w-2xl flex-1">
            {/* Pre-heading badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span
                className="text-gold text-xs font-body font-semibold uppercase tracking-widest"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
              >
                Premium B2B Export Supply
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6"
              style={{
                textShadow:
                  "0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)",
              }}
            >
              Premium Refined
              <br />
              <span
                className="text-gold"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
              >
                Sunflower Oil
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                Bulk Supply Worldwide
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white text-lg sm:text-xl font-body leading-relaxed mb-10 max-w-xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            >
              High-quality food-grade sunflower oil for retail, commercial, and
              industrial applications. Consistent supply, flexible packaging,
              private labeling available.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                type="button"
                onClick={scrollToContact}
                size="lg"
                className="bg-gold text-charcoal hover:bg-gold-deep font-body font-bold text-base px-8 py-6 h-auto shadow-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Request Bulk Quote
              </Button>
              <Button
                type="button"
                onClick={scrollToProducts}
                variant="outline"
                size="lg"
                className="border-white/60 text-white bg-white/10 hover:bg-white/20 hover:border-white font-body font-semibold text-base px-8 py-6 h-auto backdrop-blur-sm transition-all duration-300"
              >
                View Specifications
              </Button>
            </motion.div>
          </div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex items-end justify-center shrink-0 self-end pb-4"
          >
            <motion.img
              src={MASCOT_SRC}
              alt="Sunvia.Oil Mascot — Sunshine-Fresh Every Day"
              className="w-80 lg:w-96 object-contain drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 border-t border-white/20 backdrop-blur-md"
        style={{ background: "rgba(10,8,4,0.88)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-white text-sm font-body font-semibold uppercase tracking-wider">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-20 right-8 hidden lg:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs font-body tracking-widest uppercase rotate-90 origin-center mb-2">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
