import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

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
