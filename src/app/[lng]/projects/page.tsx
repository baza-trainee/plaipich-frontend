import Image from "next/image";
import React from "react";
import { LuMoveRight } from "react-icons/lu";

import { useTranslation } from "@/app/i18n";
import { API_URL, NAVIGATION } from "@/commons/constants";
import { IProject } from "@/commons/types";
import { Link } from "@/components";
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

  const setStatus = (status: boolean) => {
    if (status) {
      return params.lng === "en" ? "  funded" : "  профінансований";
    }
    return params.lng === "en" ? "  needs support" : "  потребує підтримки";
  };

  const setColorForTitle = () => {
    const colors = ["text-honey-flower", "text-wine-berry", "text-dark-blue"];
    const randomColor = Math.round(Math.random() * colors.length);
    return colors[randomColor];
  };

  return (
    <main className="bg-white text-black py-[32px]">
      <Breadcrumbs
        separator="/"
        lng={params.lng}
        containerClasses="flex gap-1 container"
        activeClasses="text-dark-blue"
      />
      <h1 className="text-center lg:mb-[50px] text-small-4xl leading-2 lg:text-4xl lg:leading-4 max-w-[1440px] text-black">
        {t("title")}
      </h1>
      <ul className="flex flex-wrap">
        {projects.map((item) => (
          <li
            key={item._id}
            className="flex flex-col items-center w-full lg:w-1/2 gap-6 p-6"
          >
            <div className="w-full lg:w-[640px] lg:h-[415px] overflow-hidden">
              <Image
                src={item.poster}
                alt={item.enTitle}
                width={1400}
                height={800}
                className="w-full object-cover object-center"
              />
            </div>
            <div className="w-full lg:w-[640px] flex flex-col gap-2  items-center">
              <h3 className={`w-full text-left h3 ${setColorForTitle()}`}>
                {params.lng === "en" ? item.enTitle : item.title}
              </h3>
              <p>
                {params.lng === "en"
                  ? item.enDescription.replace("**", "")
                  : item.description.replace("**", "")}
              </p>
              <div className="w-full flex flex-wrap items-center justify-center md:justify-between gap-3">
                <p className="w-full text-center md:w-[300px] md:text-left">
                  <Spiral
                    className={
                      item.status
                        ? "stroke-green w-[30px] h-[30px] inline"
                        : "stroke-red w-[30px] h-[30px] inline"
                    }
                  />
                  {setStatus(item.status)}
                </p>
                <Link
                  className="link-button-black"
                  href={`/${params.lng}${NAVIGATION.project}${item._id}`}
                >
                  {params.lng === "en" ? "Learn more" : "Дізнатись більше"}
                  <LuMoveRight className="inline-block ml-2 align-middle" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;
