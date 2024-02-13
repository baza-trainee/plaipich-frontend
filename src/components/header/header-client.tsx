"use client";

import React, { useState } from "react";
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
  const [searchList, setSearchList] = useState<Array<INews | IProject>>([]);

  const changeInput = (newQuery: string) => {
    setQuery(newQuery);
    const result = filterSearchList({
      projects: projectsList,
      news: newsList,
      query: newQuery.trim(),
      lng,
    });
    result && setSearchList(result);
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
      <div className="hidden lg:flex items-center flex-1 relative">
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
