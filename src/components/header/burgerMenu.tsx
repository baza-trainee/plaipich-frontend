"use client";

import React, { useState } from "react";
import { TbAlignRight, TbSearch, TbX } from "react-icons/tb";

import {NAVIGATION} from "@/commons/constants";

import { Link } from "../index";
import { LanguageSwitcher } from "./switchLangBtn";

export const BurgerMenu = ({
  lng,
  children,
}: {
  children: React.ReactNode;
  lng: "en" | "uk";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`${
          isOpen
            ? "absolute left-0 top-0 w-full min-h-[100vh] bg-black border-white border-2"
            : "hidden"
        }`}
      >
        <div className="container z-10 top-[3px] px-5 md:px-[204px] pt-14 md:pt-[76px] pb-8 text-center">
          <div className="block mx-auto mb-[68px] ">
            <form className="">
              <div className="relative mx-auto">
                <button
                  type="submit"
                  className="text-white absolute start-0 top-0 px-2 py-2 border-none"
                >
                  <TbSearch size="24px" color="black" />
                </button>

                <input
                  type="search"
                  id="search"
                  className="block w-full  ps-12 pe-2 text-md py-1  border rounded-lg text-gray-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          {children}
          <Link
            href={`/${lng}${NAVIGATION.support}`}
            appearance="linkButtonOrange"
            className=" w-48 px-6 py-4 mb-14 md:hidden flex justify-center items-center mx-auto"
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
