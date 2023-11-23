"use client";
import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";

import NAVIGATION from "@/commons/constants";

import { Link } from "../link/link";
import { LanguageSwitcher } from "./switchLangBtn";

export const HeaderClient = ({ lng, children }: {children: React.ReactNode; lng: "en" | "uk" }) => {
  const [openSearch, setOpen] = useState(false);
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
          <p className="btn-text">{ lng==='uk'? 'Підтримати': 'Donate' }</p>
        </Link>
      )}

      <div className="hidden lg:flex items-center">
        {children}
        <form className="">
          <button
            type="submit"
            className="border-none py-[8px] px-[35px]"
            onClick={open}
          >
            <TbSearch size="24px" color="white" />
          </button>
          {openSearch && (
            <div className="flex-1 bg-orange">
              <input className="w-[200px] h=[60px] " type="text" />
            </div>
          )}
        </form>
        {!openSearch && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};
