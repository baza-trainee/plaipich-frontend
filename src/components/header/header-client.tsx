"use client";

import React, { ChangeEvent, useState } from "react";
import { TbSearch } from "react-icons/tb";

import { NAVIGATION } from "@/commons/constants";

import { Link } from "../link/link";
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

  const changeInput = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setQuery(input.value);
  };

  const open = () => {
    setOpenSearch(true);
  };

  const close = () => {
    setOpenSearch(false);
  };

  const findResult = (event: any) => {
    event.preventDefault();
    console.log(query);
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
          <div
            className="relative ml-6 w-[400px] transition-all justify-center"
            onMouseLeave={close}
          >
            <button
              type="submit"
              className="text-white absolute left-0 top-1 px-[10px] py-2 border-none"
              onClick={findResult}
            >
              <TbSearch size="24px" color="black" />
            </button>

            <input
              type="text"
              className="block w-full  ps-12 pe-2 text-md py-2 border rounded-lg text-gray-500 focus:outline-[blue]"
              placeholder={lng === "uk" ? "Пошук" : "Search"}
              value={query}
              name="query"
              onChange={changeInput}
              autoFocus={openSearch}
              required
              autoComplete="on"
            />
            {/* <ul className=" absolute left-0 top-12 w-full bg-white text-black">
              {query && openAutocomplete ? (
                <li
                  className="p-2 text-sm font-bold hover:bg-light-blue hover:transition-all hover:cursor-pointer"
                  onClick={itemClickHandler}
                >
                  {query}
                </li>
              ) : null}
            </ul> */}
          </div>
        )}
        {!openSearch && query === "" && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};
