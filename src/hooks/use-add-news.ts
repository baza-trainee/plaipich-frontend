import { useMutation } from "@tanstack/react-query";

import { APP_CONST } from "@/commons";
import { apiService } from "@/services/api-service";

export const useAddNews = () => {
  return useMutation({
    mutationKey: [APP_CONST.QUERY_KEY.ADD_NEWS],
    mutationFn: ({ body }: { body: any }) => {
      return apiService.postRequest({ url: APP_CONST.API_URL.ADD_NEWS, body });
    },
  });
};
