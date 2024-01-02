"use client";

import React, { ChangeEvent, useState } from "react";
import { TbSearch } from "react-icons/tb";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { useNewsList, useProjectsList } from "@/hooks";

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
  const [searchList, setSearchList] = useState([]);

  const { data: projects } = useProjectsList(API_URL.PROJECTS);
  const { data: news } = useNewsList(API_URL.NEWS);

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
    const projectsList = projects?.projects.filter(
      (item) =>
        item.title.toLowerCase().search(query) !== -1 ||
        item.enTitle.toLowerCase().search(query) !== -1 ||
        item.description.toLowerCase().search(query) !== -1 ||
        item.enDescription.toLowerCase().search(query) !== -1
    );

    const newsList = news?.news.filter(
      (item) =>
        item.title.toLowerCase().search(query) !== -1 ||
        item.enTitle.toLowerCase().search(query) !== -1 ||
        item.description.toLowerCase().search(query) !== -1 ||
        item.enDescription.toLowerCase().search(query) !== -1
    );
    setSearchList([...projectsList, ...newsList]);
    console.log(projectsList);
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
      <div className="hidden lg:flex items-center">
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
          />
        )}
        {query && searchList.length > 0 && <div>
        List
        </div>}
        {!openSearch && query === "" && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};
