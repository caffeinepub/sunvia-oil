import { Mail, MapPin, Phone } from "lucide-react";
import type React from "react";
import mascotImg from "/assets/generated/sunvia-mascot-nobg-transparent.dim_600x600.png";
import sbzLogo from "/assets/uploads/IMG-20260226-WA0022-2.jpg";

const SBZ_LOGO_SRC = sbzLogo;
const MASCOT_SRC = mascotImg;

const QUICK_LINKS = [
  { label: "About Sunvia.Oil", href: "#about" },
  { label: "Product Specifications", href: "#products" },
  { label: "Packaging Options", href: "#packaging" },
  { label: "Private Label / OEM", href: "#private-label" },
  { label: "Import Facilitation", href: "#import-facilitation" },
  { label: "Applications", href: "#applications" },
  { label: "Contact Us", href: "#contact" },
];

function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
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
            {/* Sunvia.Oil brand — mascot as logo */}
            <div className="flex items-center gap-2.5 mb-1">
              <img
                src={MASCOT_SRC}
                alt="Sunvia.Oil"
                className="w-11 h-11 object-contain shrink-0"
              />
              <span className="font-display font-bold text-2xl text-white">
                Sunvia<span className="text-gold">.Oil</span>
              </span>
            </div>
            <p className="font-body font-semibold text-gold text-xs uppercase tracking-widest mb-4">
              Farms to Markets, Worldwide
            </p>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Premium refined sunflower oil for bulk export. Consistent quality,
              flexible packaging, and private labeling for global importers and
              distributors.
            </p>
            {/* SBZ Enterprises — separate branding */}
            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
              <img
                src={SBZ_LOGO_SRC}
                alt="SBZ Enterprises"
                className="w-7 h-7 rounded-md object-cover shrink-0 opacity-80"
              />
              <span className="font-body text-white/40 text-xs uppercase tracking-widest font-semibold">
                SBZ Enterprises
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="font-body text-white/55 text-sm hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
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
                  <Mail
                    className="w-4 h-4 text-gold mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-white/55 text-sm group-hover:text-gold transition-colors">
                    sbzintl@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919400051880"
                  className="flex items-start gap-3 group"
                >
                  <Phone
                    className="w-4 h-4 text-gold mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-white/55 text-sm group-hover:text-gold transition-colors">
                    +91 94000 51880
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  strokeWidth={2}
                />
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
          <div className="flex items-center gap-4">
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
            <a
              href="/admin"
              className="font-body text-white/15 text-xs hover:text-white/35 transition-colors"
              title="Admin"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
