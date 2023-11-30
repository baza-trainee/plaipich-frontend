import { useQuery } from "@tanstack/react-query";

import { APP_CONST, APP_TYPES } from "@/commons";
import { apiService } from "@/services/api-service";

export const useProjectsList = (url: string) =>
  useQuery<{ results: number; projects: APP_TYPES.IProject[] }>({
    queryKey: [APP_CONST.QUERY_KEY.PROJECTS],
    queryFn: async () => {
      const {
        results,
        data: { projects },
      } = await apiService.getRequest(url);
      return { results, projects };
    },
    refetchOnMount: true,
  });
