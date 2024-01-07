"use client";

import React, { useState } from "react";
import { TbAlignRight, TbX } from "react-icons/tb";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { INews, IProject } from "@/commons/types";
import { useNewsList, useProjectsList } from "@/hooks";
import { filterSearchList } from "@/utils";

import { Link } from "../index";
import { NavHeader } from "./header-nav";
import { SearchForm } from "./search-form";
import { LanguageSwitcher } from "./switchLangBtn";

export const BurgerMenu = ({
  lng,
  nav,
}: {
  nav: { [key: string]: string };
  lng: "en" | "uk";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState<Array<INews | IProject>>([]);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`${
          isOpen
            ? "absolute left-0 top-[105px] w-full min-h-[100vh] bg-black"
            : "hidden"
        }`}
      >
        <div className="container z-10 top-[3px] px-5 md:px-[204px] pt-14 md:pt-[76px] pb-8 text-center">
          <div className="block mx-auto mb-[68px] ">
            <SearchForm
              changeInput={changeInput}
              query={query}
              lng={lng}
              className="relative mx-auto"
              searchList={searchList}
            />
          </div>
          <NavHeader
            lng={lng}
            deviceLg={false}
            nav={nav}
            closeMenu={closeMenu}
          />
          <Link
            href={`/${lng}${NAVIGATION.support}`}
            appearance="linkButtonOrange"
            className=" w-48 px-6 py-4 mb-14 md:hidden flex justify-center items-center mx-auto"
            onClick={closeMenu}
          >
            {lng === "uk" ? "Підтримати" : "Donate"}
          </Link>
          <LanguageSwitcher lng={lng} />
        </div>
      </div>
      <button
        className={`lg:hidden border-none p-0 ${isOpen && "relative"}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <TbX size="40px" color="white" />
        ) : (
          <TbAlignRight size="40px" color="white" />
        )}
      </button>
    </div>
  );
};
