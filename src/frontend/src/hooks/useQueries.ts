import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Inquiry } from "../backend.d";
import { useActor } from "./useActor";

export type { Inquiry };

export interface InquiryFormData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  message: string;
  packagingInterest: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitInquiry(
        data.name,
        data.company,
        data.country,
        data.email,
        data.phone,
        data.message,
        data.packagingInterest,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiryCount"] });
    },
  });
}

// ── Admin Queries ──────────────────────────────────────────────

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      try {
        return await actor.isCallerAdmin();
      } catch {
        // Not registered or not admin — treat as false
        return false;
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();
  return useQuery<Inquiry[]>({
    queryKey: ["allInquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetInquiryCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["inquiryCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getInquiryCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMarkInquiryRead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      await actor.markInquiryRead(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allInquiries"] });
      queryClient.invalidateQueries({ queryKey: ["inquiryCount"] });
    },
  });
}

export function useDeleteInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      await actor.deleteInquiry(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allInquiries"] });
      queryClient.invalidateQueries({ queryKey: ["inquiryCount"] });
    },
  });
}
