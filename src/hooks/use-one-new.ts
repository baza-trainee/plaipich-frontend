import { useQuery } from "@tanstack/react-query";

import { APP_CONST, APP_TYPES } from "@/commons";
import { apiService } from "@/services/api-service";

export const useOneNew = (url: string) =>
  useQuery<APP_TYPES.INews>({
    queryKey: [APP_CONST.QUERY_KEY.NEWS],
    queryFn: async () => {
      const result = await apiService.getRequest(url);
      return result;
    },
    refetchOnMount: true,
  });