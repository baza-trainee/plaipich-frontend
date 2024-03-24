"use client";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

import { INews } from "@/commons/types";
import NewsCard, { SetTagColor } from "@/components/news-card/news-card";
import { useChangeList, useMediaRule } from "@/hooks";

import { Button } from "..";
import { CircularPagination } from "../pagination/pagination";

const NewsList = ({
  lng,
  isMainPage = false,
  newsList,
}: {
  lng: "en" | "uk";
  isMainPage?: boolean;
  newsList: INews[];
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [reverse, setReverse] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [newForShow, setShowNews] = useState<INews[]>([]);
  const pathName = usePathname();

  const badgesData = Array.from(
    new Set(newsList.map((item) => item.category[lng]))
  );

  const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const current = event.target.id;
    setCategoryList((prev) => {
      if (prev.includes(current)) {
        return prev.filter((item) => item !== current);
      }
      return [...prev, current];
    });
  };

  const closeCategory = () => {
    setShowCategory(false);
  };

  const openCategory = () => {
    setShowCategory(true);
  };

  const onChangeSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setReverse(event.target.value === "1");
  };

  useMediaRule({
    isMobile,
    isTablet,
    isDesktop,
    showCategory,
    setShowCategory,
    setLimit,
  });

  useChangeList({
    categoryList,
    reverse,
    setShowNews,
    newsList,
    lng,
  });

  return (
    <>
      {pathName === `/${lng}/news` && (
        <div className="flex flex-row justify-between items-center">
          {showCategory && (
            <div className="md:flex md:static fixed top-0 left-0 w-full md:w-1/2 bg-white h-full flex flex-col justify-center items-center">
              <button
                className="md:hidden border-none text-md fixed top-[120px] right-[20px]"
                onClick={closeCategory}
              >
                x
              </button>
              <fieldset className="md:flex w-full bg-white h-full flex flex-col md:flex-wrap md:flex-row justify-center lg:justify-start items-center gap-2">
                {badgesData.map((badge) => (
                  <label
                    key={badge}
                    htmlFor={badge}
                    className={`py-2 px-4 rounded-large mr-6 flex gap-2 items-center cursor-pointer
                    ${SetTagColor(badge)}
                ${categoryList.includes(badge) && "border-black border-2"}`}
                  >
                    {badge}
                    {categoryList.includes(badge) && <IoClose />}
                    <input
                      type="checkbox"
                      className="hidden"
                      id={badge}
                      name={badge}
                      onChange={changeFilter}
                    />
                  </label>
                ))}
              </fieldset>
            </div>
          )}
          <Button
            className="md:hidden py-2 px-4 text-black border-black  active:text-white active:bg-black"
            type={"button"}
            onClick={openCategory}
          >
            <p className="btn-text">{lng === "en" ? "Category ↓" : "Теми ↓"}</p>
          </Button>
          <div className="flex flex-col lg:flex-row lg:items-center md:items-end text-5">
            <p className="text-base lg:text-md text-gray-400 lg:mr-6 py-1 px-4">
              {lng === "en" ? "Sort by" : "Сортувати за"}
            </p>
            <select
              name="sort"
              id="sort"
              className="px-2 focus:outline-transparent"
              onChange={onChangeSort}
            >
              <option value={0}>
                {lng === "en" ? "new first" : "спочатку нові"}
              </option>
              <option value={1}>
                {lng === "en" ? "old first" : "спочатку старі"}
              </option>
            </select>
          </div>
        </div>
      )}
      {newForShow && (
        <div
          className="grid grid-cols-1 
                    lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10
                    md:grid-cols-2 md:my-8 md:gap-x-4"
        >
          {newForShow.slice(limit * (page - 1), limit * page).map((item) => (
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
      {newForShow && !isMainPage && (
        <CircularPagination
          pages={Math.ceil(newForShow.length / limit)}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default NewsList;
