"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
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
  const [page, setPage] = useState(0);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected);
  };

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
          {newsList
            .slice(countNew * page, countNew * (page + 1))
            .map((item) => (
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
      {newsList && newsList.length > countNew && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(newsList.length / countNew)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex w-full justify-center items-center gap-[20px] text-md font-medium"
          pageLinkClassName ="w-[52px] h-[52px] flex justify-center items-center rounded-full border border-horizon"
          activeLinkClassName="bg-horizon text-white"
          disabledClassName="opacity-40"
        />
      )}
    </>
  );
};

export default NewsList;
