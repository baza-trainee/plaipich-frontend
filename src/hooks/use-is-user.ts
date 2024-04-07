import { APP_CONST } from "@/commons";
import { apiService } from "@/services/api-service";

export const useIsUser = (token: string) => {
  apiService.setToken(token);
  const user = { token: "" };
  if (token) {
    apiService
      .getRequest(APP_CONST.API_URL.USER)
      .then((data: { email: string; password: string; token: string }) => {
        user.token = data?.token || "";
      });
  }
  const isUser = Boolean(user?.token || token);
  return { isUser };
};
