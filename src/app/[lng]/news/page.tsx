import React from "react";

import { useTranslation } from "@/app/i18n";

import { Spiral } from "../../../components/news-list/spiral";
import NewsPageList from "./news-page-list";

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
      <div className="py-8 px-4 flex content-center flex-col w-full max-w-[1440px] mx-auto">
        <div className="pb-8 md:pb-16 lg:pb-20 flex justify-center items-center flex-row">
          <Spiral />
          <h1 className="h5 md:h1 lg:h1-bold">{t("title")}</h1>
        </div>
        <div className="flex flex-row justify-between">
          <div className="bg-red">bages</div>
          <div className="bg-light-blue">sort</div>
        </div>
        <NewsPageList lng={params.lng} />
        <div className="hidden md:flex justify-center">pagination</div>
      </div>
    </main>
  );
};

export default News;
