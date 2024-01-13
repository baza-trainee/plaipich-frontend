"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { INews } from "@/commons/types";
import NewsCard from "@/components/news-card/news-card";

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

  if (isMobile) {
    newsList = newsList?.slice(0, 3);
  }

  if (!isDesktop && isTablet) {
    newsList = newsList?.slice(0, 4);
  }

  if (isDesktop) {
    newsList = newsList?.slice(0, 6);
  }

  return (
    <>
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
    </>
  );
};

export default NewsList;
