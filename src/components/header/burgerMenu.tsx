"use client";

import NextLink from "next/link";
import { useState } from "react";
import { TbAlignRight, TbSearch, TbX } from "react-icons/tb";

import NAVIGATION from "@/commons/constants";

import { Link } from "../index";
import { LanguageSwitcher } from "./switchLangBtn";

export const BurgerMenu = ({ lng }: { lng: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:hidden">
      <button className="lg:hidden border-none p-0" onClick={toggleMenu}>
        {isOpen ? (
          <TbX size="40px" color="white" />
        ) : (
          <TbAlignRight size="40px" color="white" />
        )}
      </button>

      <div
        className={`${
          isOpen
            ? "absolute left-0 top-[90px] md:top-[101px] w-full bg-black border-white border-2"
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

          <ul className=" text-small-md mb-14">
            <li className="py-2 px-[53px] h-10">
              <NextLink className="hover:text-md transition-all" href={NAVIGATION.projects}>
               Проєкти
              </NextLink>
            </li>
            <li className="py-2 px-[53px] h-10">
              <NextLink className="hover:text-md transition-all" href={NAVIGATION.about}>
               Про нас
              </NextLink>
            </li>
            <li className="py-2 px-[53px] h-10">
              <NextLink className="hover:text-md transition-all" href={NAVIGATION.news}>
                 Новини
              </NextLink>
            </li>
            <li className="py-2 px-[53px] h-10">
              <NextLink className="hover:text-md transition-all" href={NAVIGATION}>
               Контакти
              </NextLink>
            </li>
          </ul>
          <Link
            href={"/"}
            appearance="linkButtonOrange"
            className=" w-48 px-6 py-4 mb-14 md:hidden flex justify-center items-center mx-auto"
          >
            <p className="btn-text">Підтримати</p>
          </Link>

          <LanguageSwitcher lng={lng} />
        </div>
      </div>
    </nav>
  );
};
