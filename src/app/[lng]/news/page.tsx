import React from "react";

import { useTranslation } from "@/app/i18n";
import { API_URL } from "@/commons/constants";
import { INews } from "@/commons/types";
import { SetTagColor } from "@/components/news-card/news-card";
import NewsList from "@/components/news-list/news-list";
import { Spiral } from "@/components/spiral/spiral";
import { apiService } from "@/services/api-service";

//change this - need 2 load real data
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
      const {
        data: { news },
      } // eslint-disable-next-line no-undef
      : { data: { news: INews[] } } = await apiService.getRequest(API_URL.NEWS);
  const { t } = await useTranslation(params.lng, "news");

  return (
    <main className="bg-white text-black ">
      <section className="py-8 px-4 md:py-16 md:px-8 flex content-center flex-col w-full max-w-desktop mx-auto">
        <div className="pb-8 md:pb-16 lg:pb-20 flex justify-center items-center flex-row">
          <Spiral className="stroke-water-blue w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
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
          <div className="md:hidden">{t("sort")}</div>
          <div className="hidden md:flex md:flex-col lg:flex-row lg:items-center md:items-end text-5">
            <div className="text-gray-400 lg:mr-6">{t("sort2")}</div>
            <select name="sort" id="sort">
              <option value="value1">датою (спочатку нові)</option>
              <option value="value2">датою (спочатку старі)</option>
            </select>
          </div>
        </div>
        <NewsList isMainPage={false} lng={params.lng} newsList={news} />
        <div className="hidden md:flex justify-center">
          <div className="py-2 px-4 mr-1">-</div>
          <div className="py-2 px-4 border rounded-large mr-1 bg-dark-blue text-white">
            1
          </div>
          <div className="py-2 px-4 border rounded-large mr-1">2</div>
          <div className="py-2 px-4 mr-1">.....</div>
          <div className="py-2 px-4 border rounded-large mr-1">5</div>
          <div className="py-2 px-4 mr-1">+</div>
        </div>
      </section>
    </main>
  );
};

export default News;
