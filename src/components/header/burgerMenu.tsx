"use client";

import React, { useState } from "react";
import { TbAlignRight, TbSearch,TbX } from "react-icons/tb";

import { NAVIGATION } from "@/commons/constants";
import { INews, IProject } from "@/commons/types";
import { filterSearchList } from "@/utils";

import { Link } from "../index";
import { NavHeader } from "./header-nav";
import { SearchForm } from "./search-form";
import { LanguageSwitcher } from "./switchLangBtn";

export const BurgerMenu = ({
  lng,
  nav,
  projectsList,
  newsList,
}: {
  projectsList: IProject[];
  newsList: INews[];
  nav: { [key: string]: string };
  lng: "en" | "uk";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const open = () => {
    setOpenSearch(true);
  };

  const close = () => {
    setOpenSearch(false);
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
          <div className="hidden md:block mx-auto mb-[68px] ">
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

          <div className=" flex items-center flex-1  justify-center md:hidden">
            {!openSearch && query === "" && (
              <button
                type="button"
                className="border-none py-2 px-[35px]"
                onClick={open}
                onMouseEnter={open}
              >
                <TbSearch size="24px" color="white" />
              </button>
            )}
            {(openSearch || query !== "") && (
              <SearchForm
                className="relative w-full transition-all justify-center"
                close={close}
                changeInput={changeInput}
                query={query}
                lng={lng}
                searchList={searchList}
              />
            )}
            {!openSearch && query === "" && <LanguageSwitcher lng={lng} />}
          </div>
          <div className="hidden md:block mt-[62px]">
            <LanguageSwitcher lng={lng} />
          </div>
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
