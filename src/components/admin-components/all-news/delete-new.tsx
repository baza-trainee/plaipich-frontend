import React, { useState } from "react";
import { toast } from "react-toastify";

import { APP_CONST } from "@/commons";
import { Button } from "@/components/button/button";
import { apiService } from "@/services/api-service";

const DeleteModal = ({
  id,
  title,
  type,
  close,
}: {
  id: string;
  title: string;
  type: "news" | "projects";
  close: () => void;
}) => {
  const [deleted, setDeleted] = useState(false);
  const deleteNew = (id: string) => {
    if (!deleted) {
      apiService
        .deleteRequest(
          `${
            type === "news"
              ? APP_CONST.API_URL.NEWS
              : APP_CONST.API_URL.PROJECTS
          }/${id}`,
        )
        .then(() => {
          toast("Видалили!", { type: "success" });
          setDeleted(true);
          window.location.reload();
        })
        .catch(() => {
          toast("Щось пішло не так", { type: "error" });
        })
        .finally(() => {
          close();
        });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-background rounded-lg p-8 flex flex-col items-center gap-4">
        <h3 className="text-lg">{title}</h3>
        <p>
          Ви дійсно хочете видалити цю {type === "news" ? "новину?" : "проєкт?"}
        </p>
        <div className="flex gap-4">
          <Button
            type="button"
            className="btn-primary"
            onClick={() => {
              deleteNew(id);
            }}
          >
            <span>Видалити</span>
          </Button>
          <Button
            type="button"
            className="text-dark-blue border-dark-blue hover:text-white hover:bg-dark-blue"
            onClick={() => {
              close();
            }}
          >
            <span>Відміна</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
