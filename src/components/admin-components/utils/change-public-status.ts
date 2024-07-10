import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

import { apiService } from "@/services/api-service";

export const changePublicStatus = <Type>({
  preview,
  url,
  setPreview,
  publicStatus,
}: {
  preview: Type | null;
  url: string;
  setPreview: Dispatch<SetStateAction<Type | null>>;
  publicStatus: boolean;
}) => {
  if (preview) {
    apiService
      .patchRequest({
        url,
        body: { ...preview, publicStatus },
      })
      .then((data) => {
        setPreview(data);
        toast(publicStatus ? "Опубліковано!" : "Знято з публікації!", {
          type: "success",
        });
      })
      .catch(() => {
        toast("Не вдалося опублікувати! Спробуйте пізніше!", {
          type: "error",
        });
      });
  }
};
