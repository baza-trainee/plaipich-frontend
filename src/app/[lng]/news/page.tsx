import React from "react";

import { useTranslation } from "@/app/i18n";
import { SetTagColor } from "@/components/news-card/news-card";

import NewsList from "../../../components/news-list/news-list";
import { Spiral } from "../../../components/spiral/spiral";

const badgesData = [
  {
    id: "01",
    title: "Фестивалі",
  },
  {
    id: "02",
    title: "Проекти",
  },
  {
    id: "03",
    title: "Конкурси",
  },
  {
    id: "04",
    title: "Виставки",
  },
];

const News = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  const { t } = await useTranslation(params.lng, "news");

  return (
    <main className="bg-white text-black ">
      <section className="py-8 px-4 flex content-center flex-col w-full max-w-[1440px] mx-auto">
        <div className="pb-8 md:pb-16 lg:pb-20 flex justify-center items-center flex-row">
          <Spiral className="stroke-[#018ABE] w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
          <h1 className="h5 md:h1 lg:h1-bold">{t("title")}</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="md:flex hidden">
            {badgesData.map((badge) => (
              <span
                key={badge.id}
                className={`py-2 px-4 rounded-large mr-6
                ${SetTagColor(badge.title)}`}
              >
                {badge.title}
              </span>
            ))}
          </div>
          <div className="md:hidden py-2 px-4 rounded-large mr-6 border border-black">
            {t("themes")} ↓
          </div>
          <div className="">{t("sort")}</div>
        </div>
        <NewsList lng={params.lng} />
        <div className="hidden md:flex justify-center">pagination</div>
      </section>
    </main>
  );
};

export default News;
