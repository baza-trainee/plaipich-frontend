"use client";

import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { useNewsList, useProjectsList } from "@/hooks";
import { filterSearchList } from "@/utils";

import { Link } from "../link/link";
import { SearchForm } from "./search-form";
import { LanguageSwitcher } from "./switchLangBtn";

export const HeaderClient = ({
  lng,
  children,
}: {
  children: React.ReactNode;
  lng: "en" | "uk";
}) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchList, setSearchList]: [any, any] = useState([]);

  const { data: projectsList } = useProjectsList(API_URL.PROJECTS);
  const { data: newsList } = useNewsList(API_URL.NEWS);

  const changeInput = (newQuery: string) => {
    setQuery(newQuery);
    if (projectsList && newsList) {
      const result = filterSearchList({
        projects: projectsList.projects,
        news: newsList.news,
        query: newQuery,
      });
      result && setSearchList(result);
  }
  };

  const open = () => {
    setOpenSearch(true);
  };

  const close = () => {
    setOpenSearch(false);
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
            changeInput={changeInput}
            query={query}
            lng={lng}
            searchList={searchList}
          />
        )}
        {!openSearch && query === "" && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};