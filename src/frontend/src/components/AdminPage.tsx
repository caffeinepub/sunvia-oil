import { Button } from "@/components/ui/button";
import { KeyRound, Loader2, LogOut, ShieldCheck, ShieldX } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import mascotImg from "../../public/assets/generated/sunvia-mascot-nobg-transparent.dim_600x600.png";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useIsCallerAdmin } from "../hooks/useQueries";
import { AdminDashboard } from "./AdminDashboard";
import { AdminLogin } from "./AdminLogin";

const MASCOT_SRC = mascotImg;

export function AdminPage() {
  const { identity, isInitializing } = useInternetIdentity();
  // isLoginSuccess is only true after a fresh login in this session.
  // On page reload the stored identity is restored with status "idle",
  // so we treat any non-anonymous identity as authenticated.
  const isAuthenticated = !!identity && !isInitializing;

  const {
    data: isAdmin,
    isLoading: isCheckingAdmin,
    refetch,
  } = useIsCallerAdmin();

  // Still initializing — show loading
  if (isInitializing) {
    return <AdminLoadingScreen />;
  }

  // Not authenticated — show login
  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  // Checking admin status
  if (isCheckingAdmin) {
    return <AdminLoadingScreen />;
  }

  // Not admin — show access denied / first-time setup
  if (!isAdmin) {
    return <AccessDenied onActivated={() => refetch()} />;
  }

  // Admin — show dashboard
  return <AdminDashboard />;
}

function AdminLoadingScreen() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "oklch(0.97 0.012 88)" }}
    >
      <div className="text-center">
        <img
          src={MASCOT_SRC}
          alt="Sunvia.Oil"
          className="w-16 h-16 object-contain mx-auto mb-4 opacity-60"
        />
        <div className="flex items-center justify-center gap-2">
          <Loader2
            className="w-4 h-4 animate-spin"
            style={{ color: "oklch(0.78 0.175 75)" }}
          />
          <span
            className="font-body text-sm"
            style={{ color: "oklch(0.52 0.025 70)" }}
          >
            Verifying access...
          </span>
        </div>
      </div>
    </div>
  );
}

function AccessDenied({ onActivated }: { onActivated: () => void }) {
  const { clear } = useInternetIdentity();
  const { actor } = useActor();
  const [activating, setActivating] = useState(false);
  const [done, setDone] = useState(false);
  const [alreadySet, setAlreadySet] = useState(false);

  const handleActivateAdmin = async () => {
    if (!actor) return;
    setActivating(true);
    try {
      await (actor as any)._initializeAccessControlWithSecret("sunvia2024");
      setDone(true);
      toast.success("Admin access granted! Loading dashboard...");
      setTimeout(() => onActivated(), 1200);
    } catch (e: any) {
      const msg = e?.message ?? String(e);
      if (
        msg.includes("already initialized") ||
        msg.includes("already assigned")
      ) {
        setAlreadySet(true);
        toast.error(
          "Admin is already set up. Please sign in with the correct Internet Identity account.",
        );
      } else {
        toast.error(`Setup failed: ${msg}`);
      }
    } finally {
      setActivating(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "oklch(0.97 0.012 88)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div
          className="rounded-2xl border p-8 text-center"
          style={{
            background: "oklch(1 0 0)",
            borderColor: alreadySet
              ? "oklch(0.82 0.12 27)"
              : "oklch(0.88 0.05 30)",
            boxShadow: "0 4px 24px rgba(60,10,10,0.08)",
          }}
        >
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
            style={{
              background: alreadySet
                ? "oklch(0.97 0.03 27)"
                : "oklch(0.97 0.04 75)",
            }}
          >
            <ShieldX
              className="w-6 h-6"
              style={{
                color: alreadySet
                  ? "oklch(0.577 0.245 27.325)"
                  : "oklch(0.65 0.16 72)",
              }}
            />
          </div>

          {alreadySet ? (
            <>
              <h1 className="font-display font-bold text-xl text-charcoal mb-2">
                Wrong Account
              </h1>
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{ color: "oklch(0.52 0.025 70)" }}
              >
                Admin access has already been set up for a different Internet
                Identity account. Please sign out and sign in with the correct
                admin account.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display font-bold text-xl text-charcoal mb-2">
                First-Time Setup
              </h1>
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{ color: "oklch(0.52 0.025 70)" }}
              >
                Tap below to activate admin access for this Internet Identity
                account.
              </p>
              <Button
                onClick={handleActivateAdmin}
                disabled={activating || done}
                className="w-full font-body font-semibold gap-2 mb-3"
                style={{
                  background: done
                    ? "oklch(0.6 0.15 145)"
                    : "oklch(0.78 0.175 75)",
                  color: "oklch(0.15 0.02 50)",
                  border: "none",
                }}
              >
                {activating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Activating...
                  </>
                ) : done ? (
                  <>
                    <ShieldCheck className="w-4 h-4" /> Activated! Loading...
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" /> Activate Admin Access
                  </>
                )}
              </Button>
            </>
          )}

          <div className="flex flex-col gap-2">
            <Button
              onClick={clear}
              variant="outline"
              className="w-full font-body font-medium gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign out &amp; switch account
            </Button>
            <a
              href="/"
              className="font-body text-sm transition-colors text-center py-2"
              style={{ color: "oklch(0.52 0.025 70)" }}
            >
              ← Back to website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
