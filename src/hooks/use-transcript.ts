import { useQuery } from '@tanstack/react-query';

export const useTranscript = (videoId: string) => {
  return useQuery({
    queryKey: ['transcript', videoId],
    queryFn: async () => {
      const response = await fetch(`https://rag-be-python.vercel.app/transcript/${videoId}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    enabled: !!videoId,
  });
};