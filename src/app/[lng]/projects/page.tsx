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
      return params.lng === "en" ? "  funded" : "  профінансовано";
    }
    return params.lng === "en" ? "  needs support" : "  потребує підтримки";
  };

  const setColorForTitle = () => {
    const colors = ["text-honey-flower", "text-wine-berry", "text-dark-blue"];
    const randomColor = Math.ceil(Math.random() * colors.length) - 1;
    return colors[randomColor];
  };

  return (
    <main className="bg-white text-black py-[32px] mt-[100px] md:mt-0">
      <Breadcrumbs
        separator="/"
        lng={params.lng}
        containerClasses="hidden md:flex gap-1 px-16"
        activeClasses="text-dark-blue"
      />
      <h1 className="text-center md:mb-[30px] lg:mb-[80px] font-bold text-2xl md:text-small-3xl lg:text-4xl leading-2 lg:leading-4 max-w-[1440px] text-black">
        {t("title")}
      </h1>
      <ul className="max-w-[1440px] m-auto flex flex-wrap gap-4 px-4 gap-4 md:px-8 md:gap-8 lg:gap-12 lg:justify-between">
        {projects.map((item) => (
          <li
            key={item._id}
            className="flex flex-col items-center w-full lg:w-[645px] gap-4"
          >
            <div className="w-full lg:h-[415px] overflow-hidden">
              <Image
                src={item.poster}
                alt={item.enTitle}
                width={1400}
                height={800}
                className="w-full object-cover object-center"
              />
            </div>
            <div className="w-full flex flex-col gap-4 items-center">
              <h3
                className={`w-full text-left text-lg md:text-xl lg:text-3xl leading-3 line-clamp-1 font-bold ${setColorForTitle()}`}
              >
                {params.lng === "en"
                  ? item.enTitle.toUpperCase()
                  : item.title.toUpperCase()}
              </h3>
              <p className="text-small-md md:text-md lg:text-lg leading-2 lg:leading-4 line-clamp-8">
                {params.lng === "en"
                  ? item.enDescription.replace("**", "")
                  : item.description.replace("**", "")}
              </p>
              <div className="w-full flex flex-wrap items-center justify-center md:justify-between gap-4">
                <p className="w-full text-center text-lg font-bold leading-2 md:w-[300px] md:text-left">
                  <Spiral
                    className={
                      item.status
                        ? "stroke-green w-[40px] h-[40px] inline"
                        : "stroke-red w-[40px] h-[40px] inline"
                    }
                  />
                  {setStatus(item.status)}
                </p>
                <Link
                  className="link-button-black min-w-[280px]"
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
