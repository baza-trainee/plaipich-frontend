import React from "react";

import { useTranslation } from "@/app/i18n";
import { API_URL } from "@/commons/constants";
import { IProject } from "@/commons/types";
import { Contacts, ProjectsList } from "@/components";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { Spiral } from "@/components/spiral/spiral";
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
    <main className="w-full mx-auto text-black bg-white pt-[32px]">
      <Breadcrumbs
        separator="/"
        lng={params.lng}
        containerClasses="hidden md:flex gap-1 px-16 lg:px-8"
        activeClasses="text-dark-blue"
      />
      <div className="flex justify-center items-center">
        <Spiral className="stroke-water-blue w-[26px] h-[26px] md:w-[35px] md:h-[35px] lg:w-[76px] lg:h-[76px] mr-3 lg:mr-4" />
        <h1 className="text-2xl md:text-small-3xl leading-2 lg:text-4xl lg:leading-4 font-bold">
          {t("title")}
        </h1>
      </div>
      <ProjectsList projects={projects} lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default Projects;
