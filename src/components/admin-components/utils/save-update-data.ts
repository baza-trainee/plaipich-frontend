import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

import { apiService } from "@/services/api-service";

export const saveOrUpdateData = <Type>({
  data,
  url,
  id,
  setPreview,
}: {
  data: Type;
  url: string;
  id?: string;
  setPreview: Dispatch<SetStateAction<Type | null>>;
}) => {
  if (IDBCursorWithValue) {
    apiService
      .patchRequest({
        url: `${url}/${id}`,
        body: data,
      })
      .then((newData) => {
        toast("Збережено!", { type: "success" });
        setPreview(newData);
      })
      .catch(() => {
        toast("Не вдалося зберегти! Перевірте дані!", { type: "error" });
      });
  } else {
    apiService
      .postRequest({
        url,
        body: data,
      })
      .then((newData) => {
        toast("Збережено!", { type: "success" });
        setPreview(newData);
      })
      .catch(() => {
        toast("Не вдалося зберегти! Перевірте дані!", { type: "error" });
      });
  }
};
