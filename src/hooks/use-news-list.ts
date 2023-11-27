import { useQuery } from "@tanstack/react-query";

import { APP_CONST, APP_TYPES } from "@/commons";
import { apiService } from "@/services/api-service";

export const useNewsList = (url: string) =>
  useQuery<{ results: number; news: APP_TYPES.INews[] }>({
    queryKey: [APP_CONST.QUERY_KEY.NEWS],
    queryFn: async () => {
      const {
        results,
        data: { news },
      } = await apiService.getRequest(url);
      return { results, news };
    },
    refetchOnMount: true,
  });
