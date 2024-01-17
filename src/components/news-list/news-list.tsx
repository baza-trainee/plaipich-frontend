"use client";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";

import { INews } from "@/commons/types";
import NewsCard, { SetTagColor } from "@/components/news-card/news-card";

import { Button } from "..";

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
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const [countNew, setCount] = useState(6);
  const [page, setPage] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [showCategory, setShowCategory] = useState(true);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [newForShow, setShow] = useState<INews[]>([]);
  const pathName = usePathname();

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected);
  };
  const badgesData = Array.from(
    new Set(newsList.map((item) => item.category[lng]))
  );

  const changeSort = (event: ChangeEvent<HTMLInputElement>) => {
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
  }

  const openCategory = () => {
    setShowCategory(true);
  }

  const onChangeSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setReverse(!event.target.value)
  }

  useEffect(() => {
    if (isMobile) {
      setCount(3);
      showCategory && setShowCategory(false);
    }
    if (isTablet) {
      setCount(4);
      setShowCategory(true);
    }
    if (isDesktop) {
      setCount(6);
      setShowCategory(true);
    }
    if (categoryList.length === 0) {
      setShow(newsList);
    }
    if (categoryList.length > 0) {
      setShow(
        newsList.filter((item) => categoryList.includes(item.category[lng]))
      );
      if (reverse) {
        setShow(prev=>prev.reverse())
      }
    }
  }, [isMobile, isTablet, isDesktop, categoryList.length, reverse]);

  return (
    <>
      {pathName === `/${lng}/news` && (
        <div className="flex flex-row justify-between items-center">
          {showCategory && (
            <div className="md:flex md:static fixed top-0 left-0 w-full md:w-1/2 bg-white h-full flex flex-col justify-center items-center">
                <button className="md:hidden border-none text-md fixed top-[100px] right-[20px]" onClick={closeCategory}>
                  x
                </button>
              <fieldset className="md:flex w-full bg-white h-full flex flex-col md:flex-wrap md:flex-row justify-center lg:justify-start items-center gap-3">
                {badgesData.map((badge) => (
                  <label
                    key={badge}
                    htmlFor={badge}
                    className={`py-2 px-4 rounded-large mr-6 cursor-pointer
                ${SetTagColor(badge)}`}
                  >
                    {badge}
                    <input
                      type="checkbox"
                      className="hidden"
                      id={badge}
                      name={badge}
                      onChange={changeSort}
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
          <button type="button" className="md:hidden border-none btn-text">{lng === "en" ? "Category ↓" : "Сортувати"}</button>
          <div className="hidden md:flex md:flex-col lg:flex-row lg:items-center md:items-end text-5">
            <div className="text-gray-400 lg:mr-6">{lng === "en" ? "Category ↓" : "Сортувати"}</div>
            <select name="sort" id="sort" onChange={onChangeSort}>
              <option value={0}>{lng === "en" ? "Category ↓" : "New"}</option>
              <option value={1}>{lng === "en" ? "Category ↓" : "Old"}</option>
            </select>
          </div>
        </div>
      )}
      {newForShow && (
        <div
          className="grid grid-cols-1 
                    lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]
                    md:grid-cols-2 md:my-16 md:gap-x-4"
        >
          {newForShow
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
      {newForShow && newForShow.length > countNew && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(newForShow.length / countNew)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex w-full justify-center items-center gap-[20px] text-md font-medium"
          pageLinkClassName="w-[52px] h-[52px] flex justify-center items-center rounded-full border border-horizon"
          activeLinkClassName="bg-horizon text-white"
          disabledClassName="opacity-40"
        />
      )}
    </>
  );
};

export default NewsList;
