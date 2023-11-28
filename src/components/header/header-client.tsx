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
  const [openSearch, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const changeInput = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    console.log(input.value);

    setQuery(input.value);
  };

  const open = (event: any) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <>
      {!openSearch && (
        <Link
          href={`/${lng}${NAVIGATION.support}`}
          appearance="linkButtonOrange"
          className="hidden md:flex "
        >
          {lng === "uk" ? "Підтримати" : "Donate"}
        </Link>
      )}
      <div className="hidden lg:flex items-center">
        {children}
        <button
          type="button"
          className={openSearch ? "hidden" : "border-none py-[8px] px-[35px]"}
          onClick={open}
        >
          <TbSearch size="24px" color="white" />
        </button>
        {openSearch && (
          <div className="relative ml-[50px] w-[380px]">
            <button
              type="submit"
              className="text-white absolute start-0 top-0 px-2 py-2 border-none"
              onClick={() => {
                setOpen(false);
              }}
            >
              <TbSearch size="24px" color="black" />
            </button>

            <input
              type="text"
              className="block w-full  ps-12 pe-2 text-md py-1  border rounded-lg text-gray-500"
              placeholder={lng === "uk" ? "Пошук" : "Search"}
              value={query}
              name="query"
              onChange={changeInput}
              autoFocus={openSearch}
              required
            />
          </div>
        )}
        {!openSearch && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};
