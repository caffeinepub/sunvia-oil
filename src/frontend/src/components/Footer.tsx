import { Sun, Mail, Phone, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Sunvia.Oil", href: "#about" },
  { label: "Product Specifications", href: "#products" },
  { label: "Packaging Options", href: "#packaging" },
  { label: "Private Label / OEM", href: "#private-label" },
  { label: "Applications", href: "#applications" },
  { label: "Contact Us", href: "#contact" },
];

function handleScroll(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer className="bg-[oklch(0.12_0.015_60)] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                <Sun className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Sunvia<span className="text-gold">.Oil</span>
                </span>
              </div>
            </div>
            <p className="font-body font-semibold text-gold text-xs uppercase tracking-widest mb-3">
              Farms to Markets, Worldwide
            </p>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Premium refined sunflower oil for bulk export. Consistent
              quality, flexible packaging, and private labeling for global
              importers and distributors.
            </p>
            <p className="font-body text-white/30 text-xs">
              Operated by SBZ Enterprises
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleScroll(link.href)}
                    className="font-body text-white/55 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:sbzintl@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="font-body text-white/55 text-sm group-hover:text-gold transition-colors">
                    sbzintl@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919400051881"
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="font-body text-white/55 text-sm group-hover:text-gold transition-colors">
                    +91 94000 51881
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                <span className="font-body text-white/55 text-sm">
                  Pirayiri, Palakkad,
                  <br />
                  Kerala, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            &copy; {year} SBZ Enterprises. All Rights Reserved. | Sunvia.Oil
          </p>
          <p className="font-body text-white/20 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
