"use client";
import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";

import NAVIGATION from "@/commons/constants";

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
          <p className="btn-text">{lng === "uk" ? "Підтримати" : "Donate"}</p>
        </Link>
      )}

      <div className="hidden lg:flex items-center">
        {children}
        <form className={openSearch ? "flex bg-white" : "flex bg-black"}>
          <button
            type="submit"
            className={openSearch ? "border-none py-[8px] px-[5px]" : "border-none py-[8px] px-[35px]"}
            onClick={open}
          >
            <TbSearch size="24px" color={openSearch ? "black" : "white"} />
          </button>
          {openSearch && (
              <input className="w-[300px] h=[60px] " type="text" />
          )}
        </form>
        {!openSearch && <LanguageSwitcher lng={lng} />}
      </div>
    </>
  );
};
