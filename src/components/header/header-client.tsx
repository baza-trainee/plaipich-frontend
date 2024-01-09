"use client";

import React, { ChangeEvent, useState } from "react";
import { TbSearch } from "react-icons/tb";

import { NAVIGATION } from "@/commons/constants";
import { INews, IProject } from "@/commons/types";
import { filterSearchList } from "@/utils";

import { Link } from "../link/link";
import { SearchForm } from "./search-form";
import { LanguageSwitcher } from "./switchLangBtn";

export const HeaderClient = ({
  lng,
  projectsList,
  newsList,
  children,
}: {
  children: React.ReactNode;
  projectsList: IProject[];
  newsList: INews[];
  lng: "en" | "uk";
}) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchList, setSearchList]: [any, any] = useState([]);

  const changeInput = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setQuery(input.value.toLowerCase());
  };

  const open = () => {
    setOpenSearch(true);
  };

  const close = () => {
    setOpenSearch(false);
  };

  const findResult = (event: any) => {
    event.preventDefault();
    if (projectsList && newsList) {
      const result = filterSearchList({
        projects: projectsList,
        news: newsList,
        query,
      });
      result && setSearchList(result);
    }
  };

  return (
    <>
      {!openSearch && query === "" && (
        <Link
          href={`/${lng}${NAVIGATION.support}`}
          appearance="linkButtonOrange"
          className="hidden w-[198px] md:w-[180px] lg:w-[194px] md:flex justify-center "
        >
          {lng === "uk" ? "Підтримати" : "Donate"}
        </Link>
      )}
      <div className="hidden lg:flex items-center relative">
        {children}
        {!openSearch && query === "" && (
          <button
            type="button"
            className="border-none py-2 px-[10px] ml-11"
            onClick={open}
            onMouseEnter={open}
          >
            <TbSearch size="24px" color="white" />
          </button>
        )}
        {(openSearch || query !== "") && (
          <SearchForm
            className="relative ml-6 w-[400px] transition-all justify-center"
            close={close}
            findResult={findResult}
            changeInput={changeInput}
            query={query}
            lng={lng}
            searchList={searchList}
          />
        )}
        {/* {query && searchList.length > 0 && (
          <div className="absolute flex flex-col max-w-[400px] gap-1 top-12 right-0 bg-white text-black text-5">
            {searchList.map((item: any) => {
              if (item.status) {
                return (
                  <Link
                    key={item._id}
                    href={`${lng}/${NAVIGATION.project}${item._id}`}
                    className="text-sm p-2 font-bold hover:bg-light-blue hover:cursor-pointer transition"
                  >
                    {item.title}
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={item._id}
                    href={`${lng}/${NAVIGATION.oneNew}${item._id}`}
                    className="text-sm p-2 font-bold hover:bg-light-blue hover:cursor-pointer transition"
                  >
                    {item.title}
                  </Link>
                );
              }
            })}
          </div>
        )} */}
        {!openSearch && query === "" && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};
