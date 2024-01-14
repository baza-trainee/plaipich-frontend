"use client";
import React from "react";

import { INews } from "@/commons/types";

import NewsCard from "../news-card/news-card";

const NewsList = ({
  lng,
  dateClassName,
  newsList,
}: {
  lng: "en" | "uk";
  dateClassName: string;
  newsList?: INews[];
}) => {
  // додаси логіку відображення залежно від розміру екрану

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
              dateClassName={dateClassName}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NewsList;
