import { useQuery } from "@tanstack/react-query";

import { APP_CONST, APP_TYPES } from "@/commons";
import { apiService } from "@/services/api-service";

export const useOneProject = (url: string) =>
  useQuery<APP_TYPES.IProject>({
    queryKey: [APP_CONST.QUERY_KEY.ONE_PROJECT],
    queryFn: async () => {
      const project = await apiService.getRequest(url);
      return project;
    },
    refetchOnMount: true,
  });
