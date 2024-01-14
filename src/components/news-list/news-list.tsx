"use client";
import React, { useEffect, useState } from "react";
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
  const [countNew, setCount] = useState(6);

  useEffect(() => {
    if (isMobile) {
      setCount(3);
    }

    if (isTablet) {
      setCount(4);
    }

    if (isDesktop) {
      setCount(6);
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <>
      {newsList && (
        <div
          className="grid grid-cols-1 
                    lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]
                    md:grid-cols-2 md:my-16 md:gap-x-4"
        >
          {newsList.slice(0, countNew).map((item) => (
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
