import { useQuery } from '@tanstack/react-query';

import { APP_CONST, APP_TYPES } from '@/commons';
import { apiService } from '@/services/api-service';

export const useProjectsList = (url: string) =>
  useQuery<{ results: number; data: {projects:APP_TYPES.IProject[] }}>({
    queryKey: [APP_CONST.QUERY_KEY.PROJECTS],
      queryFn: async() => {
          const {results, data} = await apiService.getRequest(url)
          return {results, data}
      },
    refetchOnMount: true
  });