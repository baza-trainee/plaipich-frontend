import React from "react";

import { useTranslation } from "@/app/i18n";
import { API_URL } from "@/commons/constants";
import { IProject } from "@/commons/types";
import { apiService } from "@/services/api-service";

const Projects = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  const { t } = await useTranslation(params.lng, "projects");
  const {
    data: { projects },
  }: { data: { projects: IProject[] } } = await apiService.getRequest(
    API_URL.PROJECTS,
  );

  return (
    <main>
      <p className="mt-[32px] text-6 mb-12 md:mb-[100px] w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {t("main")} <span className="text-light-blue">{t("projects")}</span>
      </p>
      <h1 className="text-center lg:mb-[120px] text-small-4xl leading-2 lg:text-4xl lg:leading-4 max-w-[1440px] text-white">
        {t("title")}
      </h1>
      {projects.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </main>
  );
};

export default Projects;
