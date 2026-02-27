import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Packaging", href: "#packaging" },
  { label: "Private Label", href: "#private-label" },
  { label: "Applications", href: "#applications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(60,40,10,0.1)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo / Wordmark */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-gold shrink-0">
                <Sun className="w-4.5 h-4.5 text-charcoal" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-charcoal tracking-tight group-hover:text-gold transition-colors">
                  Sunvia
                  <span className="text-gold">.Oil</span>
                </span>
                <span className="text-[10px] font-body font-semibold text-charcoal-mid tracking-widest uppercase opacity-70">
                  by SBZ Enterprises
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3.5 py-2 text-sm font-body font-medium text-charcoal-mid hover:text-gold transition-colors rounded-md hover:bg-gold/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="bg-gold text-charcoal hover:bg-gold-deep font-body font-semibold text-sm px-5 shadow-gold hover:shadow-lg transition-all"
              >
                Request Quote
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-charcoal hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-xl border-b border-border"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-body font-medium text-charcoal hover:bg-gold/8 hover:text-gold rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-border">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-gold text-charcoal hover:bg-gold-deep font-body font-semibold"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
