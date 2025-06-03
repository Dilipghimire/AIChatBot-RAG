import { useMutation } from "@tanstack/react-query";

type MutationInput = {
  askQuestion: string;
};

export const userRetrieveAnswer = () => {
  return useMutation({
    mutationFn: async ({ askQuestion }: MutationInput) => {
      const response = await fetch("https://rag-be-python.vercel.app/aks-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          askQuestion: askQuestion,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch videoTranscript");
      }

      return response.json();
    },
  });
};
