"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { INews } from "@/commons/types";
import NewsCard, { SetTagColor } from "@/components/news-card/news-card";

const NewsList = ({
  lng,
  isMainPage,
  newsList,
}: {
  lng: "en" | "uk";
  isMainPage?: boolean;
  newsList?: INews[];
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  let badgesData = [...new Set(newsList?.map((item) => item.category[lng]))];
  
  if (isMobile) {
    newsList = newsList?.slice(0, 3);
  }

  if (!isDesktop && isTablet) {
    newsList = newsList?.slice(0, 4);
  }

  if (isDesktop) {
    newsList = newsList?.slice(0, 6);
  }
const { t } =  useTranslation(lng, "news");

  return (
    <>
      {!isMainPage && (
        <div className="flex flex-row justify-between items-center">
          <div className="md:flex hidden">
            {badgesData.map((badge) => (
              <span
                key={badge}
                className={`py-2 px-4 rounded-large mr-6
                ${SetTagColor(badge)}`}
              >
                {badge}
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
      )}

      {newsList && (
        <div
          className="grid grid-cols-1 
                    lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]
                    md:grid-cols-2 md:my-16 md:gap-x-4"
        >
          {newsList.map((item) => (
            <NewsCard
              key={item._id}
              newsItem={item}
              lng={lng}
              className="lg:m-0 mb-10"
              isMain={isMainPage}
            />
          ))}
        </div>
      )}

      {!isMainPage && (
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
      )}
    </>
  );
};

export default NewsList;
