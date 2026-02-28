import { Button } from "@/components/ui/button";
import { Loader2, LogIn, Shield } from "lucide-react";
import { motion } from "motion/react";
import mascotImg from "/assets/generated/sunvia-mascot-nobg-transparent.dim_600x600.png";
import sbzLogo from "/assets/uploads/IMG-20260226-WA0022-2.jpg";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const MASCOT_SRC = mascotImg;
const SBZ_LOGO_SRC = sbzLogo;

export function AdminLogin() {
  const { login, isLoggingIn, isInitializing } = useInternetIdentity();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "oklch(0.97 0.012 88)" }}
    >
      {/* Background subtle grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div
          className="rounded-2xl border p-8 sm:p-10"
          style={{
            background: "oklch(1 0 0)",
            borderColor: "oklch(0.9 0.018 80)",
            boxShadow:
              "0 4px 32px 0 rgba(60,40,10,0.10), 0 1px 4px 0 rgba(60,40,10,0.05)",
          }}
        >
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={MASCOT_SRC}
                alt="Sunvia.Oil"
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="font-display font-bold text-2xl text-charcoal leading-tight">
                  Sunvia<span className="text-gold">.Oil</span>
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-deep">
                  Admin Panel
                </p>
              </div>
            </div>

            {/* SBZ separator */}
            <div
              className="flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full border"
              style={{
                borderColor: "oklch(0.9 0.018 80)",
                background: "oklch(0.97 0.012 88)",
              }}
            >
              <img
                src={SBZ_LOGO_SRC}
                alt="SBZ Enterprises"
                className="w-5 h-5 rounded object-cover opacity-80"
              />
              <span
                className="font-body text-xs uppercase tracking-widest font-semibold"
                style={{ color: "oklch(0.45 0.02 60)" }}
              >
                SBZ Enterprises
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t mb-7"
            style={{ borderColor: "oklch(0.92 0.015 80)" }}
          />

          {/* Login prompt */}
          <div className="text-center mb-6">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
              style={{ background: "oklch(0.97 0.04 75)" }}
            >
              <Shield
                className="w-5 h-5"
                style={{ color: "oklch(0.65 0.16 72)" }}
              />
            </div>
            <h1 className="font-display font-bold text-xl text-charcoal mb-2">
              Secure Admin Access
            </h1>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "oklch(0.52 0.025 70)" }}
            >
              Sign in with Internet Identity to access the inquiry management
              dashboard.
            </p>
          </div>

          {/* Login button */}
          <Button
            onClick={login}
            disabled={isLoggingIn || isInitializing}
            className="w-full h-11 font-body font-semibold text-sm gap-2"
            style={{
              background: "oklch(0.78 0.175 75)",
              color: "oklch(0.15 0.02 50)",
              border: "none",
            }}
          >
            {isLoggingIn || isInitializing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {isInitializing ? "Initializing..." : "Signing in..."}
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Sign in with Internet Identity
              </>
            )}
          </Button>

          <p
            className="font-body text-xs text-center mt-4"
            style={{ color: "oklch(0.65 0.02 70)" }}
          >
            Access is restricted to authorized administrators only.
          </p>
        </div>

        {/* Back to site link */}
        <div className="text-center mt-4">
          <a
            href="/"
            className="font-body text-sm transition-colors"
            style={{ color: "oklch(0.52 0.025 70)" }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                "oklch(0.78 0.175 75)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                "oklch(0.52 0.025 70)";
            }}
          >
            ← Back to Sunvia.Oil website
          </a>
        </div>
      </motion.div>
    </div>
  );
}
