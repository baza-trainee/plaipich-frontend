import React from "react";

import { useTranslation } from "@/app/i18n";
import { API_URL } from "@/commons/constants";
import { INews } from "@/commons/types";
import NewsList from "@/components/news-list/news-list";
import { Spiral } from "@/components/spiral/spiral";
import { apiService } from "@/services/api-service";

const News = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  const {
    data: { news }, // eslint-disable-next-line no-undef
  }: { data: { news: INews[] } } = await apiService.getRequest(API_URL.NEWS);

  const { t } = await useTranslation(params.lng, "news");

  return (
    <main className="bg-white text-black ">
      <section className="py-8 px-4 mt-[100px] md:mt-0 lg:mt-0 md:py-16 md:px-8 flex content-center flex-col w-full max-w-desktop mx-auto">
        <div className="pb-8 md:pb-16 lg:pb-20 flex justify-center items-center flex-row">
          <Spiral className="stroke-water-blue w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
          <h1 className="h5 md:h1 lg:h1-bold">{t("title")}</h1>
        </div>
        <NewsList lng={params.lng} newsList={news} />
      </section>
    </main>
  );
};

export default News;
