import React from "react";

import { useTranslation } from "@/app/i18n";
import { API_URL } from "@/commons/constants";
import { INews } from "@/commons/types";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
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
    <main className="bg-white text-black">
      <Breadcrumbs
        separator="/"
        containerClasses="hidden lg:flex gap-1 pt-4"
        activeClasses="text-dark-blue"
        lng={params.lng}
      />
      <section className="py-16 px-4 lg:pt-8 md:px-8 flex content-center flex-col w-full max-w-desktop mx-auto">
        <div className="pb-8 md:pb-16 flex justify-center items-center flex-row">
          <Spiral className="stroke-water-blue w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
          <h1 className="h5 md:h1 lg:h1-bold">{t("title")}</h1>
        </div>
        <NewsList lng={params.lng} newsList={news} />
      </section>
    </main>
  );
};

export default News;
