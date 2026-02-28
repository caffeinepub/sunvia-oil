import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  Inbox,
  Loader2,
  LogOut,
  Mail,
  MessageSquare,
  Package,
  Phone,
  RefreshCw,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import mascotImg from "../../public/assets/generated/sunvia-mascot-nobg-transparent.dim_600x600.png";
import sbzLogo from "../../public/assets/uploads/IMG-20260226-WA0022-2.jpg";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  type Inquiry,
  useDeleteInquiry,
  useGetAllInquiries,
  useGetInquiryCount,
  useMarkInquiryRead,
} from "../hooks/useQueries";

const MASCOT_SRC = mascotImg;
const SBZ_LOGO_SRC = sbzLogo;

function formatTimestamp(nanoseconds: bigint): string {
  const ms = Number(nanoseconds / BigInt(1_000_000));
  const date = new Date(ms);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function InquiryCard({
  inquiry,
  onMarkRead,
  onDelete,
}: {
  inquiry: Inquiry;
  onMarkRead: (id: bigint) => void;
  onDelete: (id: bigint) => void;
}) {
  const markRead = useMarkInquiryRead();
  const deleteInquiry = useDeleteInquiry();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleMarkRead = async () => {
    try {
      await markRead.mutateAsync(inquiry.id);
      onMarkRead(inquiry.id);
      toast.success("Marked as read");
    } catch {
      toast.error("Failed to mark as read");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteInquiry.mutateAsync(inquiry.id);
      onDelete(inquiry.id);
      setDeleteDialogOpen(false);
      toast.success("Inquiry deleted");
    } catch {
      toast.error("Failed to delete inquiry");
    }
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="rounded-xl border overflow-hidden"
        style={{
          background: inquiry.isRead ? "oklch(1 0 0)" : "oklch(0.995 0.018 88)",
          borderColor: inquiry.isRead
            ? "oklch(0.92 0.015 80)"
            : "oklch(0.82 0.12 75)",
          borderLeftWidth: inquiry.isRead ? "1px" : "4px",
          borderLeftColor: inquiry.isRead
            ? "oklch(0.92 0.015 80)"
            : "oklch(0.78 0.175 75)",
          boxShadow: inquiry.isRead
            ? "0 1px 4px rgba(60,40,10,0.05)"
            : "0 2px 12px rgba(200,150,0,0.08)",
        }}
      >
        <div className="p-4 sm:p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-2 min-w-0">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display font-semibold text-charcoal text-base truncate">
                    {inquiry.name}
                  </span>
                  {!inquiry.isRead && (
                    <Badge
                      className="text-xs font-body font-semibold shrink-0"
                      style={{
                        background: "oklch(0.78 0.175 75)",
                        color: "oklch(0.15 0.02 50)",
                        border: "none",
                      }}
                    >
                      New
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Building2
                    className="w-3 h-3 shrink-0"
                    style={{ color: "oklch(0.65 0.16 72)" }}
                  />
                  <span
                    className="font-body text-xs truncate"
                    style={{ color: "oklch(0.45 0.025 70)" }}
                  >
                    {inquiry.company}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              {!inquiry.isRead && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleMarkRead}
                  disabled={markRead.isPending}
                  className="h-8 px-2.5 text-xs font-body gap-1.5"
                  style={{ color: "oklch(0.52 0.025 70)" }}
                  title="Mark as read"
                >
                  {markRead.isPending ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  )}
                  <span className="hidden sm:inline">Read</span>
                </Button>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setDeleteDialogOpen(true)}
                disabled={deleteInquiry.isPending}
                className="h-8 px-2.5 text-xs font-body gap-1.5"
                style={{ color: "oklch(0.577 0.245 27.325)" }}
                title="Delete inquiry"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Delete</span>
              </Button>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
            <InfoRow icon={Globe} label="Country" value={inquiry.country} />
            <InfoRow icon={Mail} label="Email" value={inquiry.email} />
            <InfoRow icon={Phone} label="Phone" value={inquiry.phone} />
            <InfoRow
              icon={Package}
              label="Packaging"
              value={inquiry.packagingInterest}
            />
          </div>

          {/* Message */}
          {inquiry.message && (
            <div
              className="rounded-lg p-3 mb-3"
              style={{ background: "oklch(0.97 0.01 85)" }}
            >
              <div className="flex items-start gap-2">
                <MessageSquare
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.65 0.16 72)" }}
                />
                <p
                  className="font-body text-xs leading-relaxed"
                  style={{ color: "oklch(0.38 0.02 60)" }}
                >
                  {inquiry.message}
                </p>
              </div>
            </div>
          )}

          {/* Timestamp */}
          <div className="flex items-center gap-1.5">
            <Clock
              className="w-3 h-3"
              style={{ color: "oklch(0.65 0.02 70)" }}
            />
            <span
              className="font-body text-xs"
              style={{ color: "oklch(0.65 0.02 70)" }}
            >
              {formatTimestamp(inquiry.timestamp)}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Delete confirmation dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm font-body">
          <DialogHeader>
            <DialogTitle className="font-display text-charcoal">
              Delete Inquiry
            </DialogTitle>
            <DialogDescription
              className="font-body text-sm"
              style={{ color: "oklch(0.52 0.025 70)" }}
            >
              Are you sure you want to delete the inquiry from{" "}
              <strong className="text-charcoal">{inquiry.name}</strong> (
              {inquiry.company})? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              className="font-body font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              disabled={deleteInquiry.isPending}
              className="font-body font-medium gap-2"
              style={{
                background: "oklch(0.577 0.245 27.325)",
                color: "white",
                border: "none",
              }}
            >
              {deleteInquiry.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Trash2 className="w-4 h-4" />
              )}
              {deleteInquiry.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-1.5">
      <Icon
        className="w-3.5 h-3.5 mt-0.5 shrink-0"
        style={{ color: "oklch(0.65 0.16 72)" }}
      />
      <div className="min-w-0">
        <span
          className="font-body text-xs font-semibold uppercase tracking-wide block"
          style={{ color: "oklch(0.65 0.02 70)" }}
        >
          {label}
        </span>
        <span
          className="font-body text-xs truncate block"
          style={{ color: "oklch(0.32 0.02 60)" }}
        >
          {value || "—"}
        </span>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-xl border p-5"
          style={{
            background: "oklch(1 0 0)",
            borderColor: "oklch(0.92 0.015 80)",
          }}
        >
          <div className="flex justify-between mb-3">
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
          <Skeleton className="h-12 w-full" />
        </div>
      ))}
    </div>
  );
}

export function AdminDashboard() {
  const { clear } = useInternetIdentity();
  const {
    data: inquiries,
    isLoading,
    refetch,
    isRefetching,
  } = useGetAllInquiries();
  const { data: count } = useGetInquiryCount();

  const sortedInquiries = [...(inquiries ?? [])].sort((a, b) => {
    // Unread first, then newest
    if (!a.isRead && b.isRead) return -1;
    if (a.isRead && !b.isRead) return 1;
    return Number(b.timestamp - a.timestamp);
  });

  const unreadCount = (inquiries ?? []).filter((i) => !i.isRead).length;

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.97 0.012 88)" }}
    >
      {/* Admin Header */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: "oklch(1 0 0)",
          borderColor: "oklch(0.92 0.015 80)",
          boxShadow: "0 1px 8px rgba(60,40,10,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src={MASCOT_SRC}
              alt="Sunvia.Oil"
              className="w-8 h-8 object-contain"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-lg text-charcoal leading-none">
                Sunvia<span className="text-gold">.Oil</span>
              </span>
              <span
                className="font-body text-xs font-semibold uppercase tracking-widest hidden sm:block"
                style={{ color: "oklch(0.65 0.02 70)" }}
              >
                / Admin Panel
              </span>
            </div>
          </div>

          {/* SBZ + Actions */}
          <div className="flex items-center gap-2">
            <img
              src={SBZ_LOGO_SRC}
              alt="SBZ Enterprises"
              className="w-6 h-6 rounded object-cover opacity-60 hidden sm:block"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => refetch()}
              disabled={isRefetching}
              className="h-8 px-2.5 gap-1.5 font-body text-xs"
              style={{ color: "oklch(0.52 0.025 70)" }}
              title="Refresh"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isRefetching ? "animate-spin" : ""}`}
              />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={clear}
              className="h-8 px-2.5 gap-1.5 font-body text-xs"
              style={{ color: "oklch(0.52 0.025 70)" }}
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <StatCard
            label="Total Inquiries"
            value={count !== undefined ? Number(count).toString() : "—"}
            icon={Inbox}
            accent={false}
          />
          <StatCard
            label="Unread"
            value={unreadCount.toString()}
            icon={AlertCircle}
            accent={unreadCount > 0}
          />
          <StatCard
            label="Read"
            value={
              count !== undefined
                ? (Number(count) - unreadCount).toString()
                : "—"
            }
            icon={CheckCircle2}
            accent={false}
            className="col-span-2 sm:col-span-1"
          />
        </div>

        {/* Section header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-bold text-lg text-charcoal leading-tight">
              Buyer Inquiries
            </h2>
            <p
              className="font-body text-xs mt-0.5"
              style={{ color: "oklch(0.52 0.025 70)" }}
            >
              All submitted inquiries — newest first
            </p>
          </div>
        </div>

        {/* Inquiry list */}
        {isLoading ? (
          <DashboardSkeleton />
        ) : sortedInquiries.length === 0 ? (
          <EmptyState />
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="space-y-3">
              {sortedInquiries.map((inquiry) => (
                <InquiryCard
                  key={inquiry.id.toString()}
                  inquiry={inquiry}
                  onMarkRead={() => {}}
                  onDelete={() => {}}
                />
              ))}
            </div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
  className = "",
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  accent: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${className}`}
      style={{
        background: accent ? "oklch(0.99 0.03 80)" : "oklch(1 0 0)",
        borderColor: accent ? "oklch(0.82 0.12 75)" : "oklch(0.92 0.015 80)",
        boxShadow: "0 1px 4px rgba(60,40,10,0.05)",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p
            className="font-body text-xs font-semibold uppercase tracking-wide"
            style={{
              color: accent ? "oklch(0.65 0.16 72)" : "oklch(0.52 0.025 70)",
            }}
          >
            {label}
          </p>
          <p
            className="font-display font-bold text-2xl mt-1 leading-none"
            style={{
              color: accent ? "oklch(0.55 0.16 72)" : "oklch(0.18 0.02 60)",
            }}
          >
            {value}
          </p>
        </div>
        <Icon
          className="w-5 h-5 mt-0.5 shrink-0"
          style={{
            color: accent ? "oklch(0.78 0.175 75)" : "oklch(0.72 0.02 70)",
          }}
        />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border py-16 px-6 text-center"
      style={{
        background: "oklch(1 0 0)",
        borderColor: "oklch(0.92 0.015 80)",
        borderStyle: "dashed",
      }}
    >
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
        style={{ background: "oklch(0.97 0.04 75)" }}
      >
        <Inbox className="w-6 h-6" style={{ color: "oklch(0.78 0.175 75)" }} />
      </div>
      <p className="font-display font-semibold text-charcoal text-lg mb-1">
        No inquiries yet
      </p>
      <p
        className="font-body text-sm"
        style={{ color: "oklch(0.52 0.025 70)" }}
      >
        Buyer inquiries submitted through the contact form will appear here.
      </p>
    </motion.div>
  );
}
