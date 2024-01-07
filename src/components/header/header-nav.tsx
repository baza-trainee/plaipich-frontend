import React, { MouseEventHandler } from "react";

import { NAVIGATION } from "@/commons/constants";

import { Link } from "../link/link";

export const NavHeader = ({
  lng,
  deviceLg,
  nav,
  closeMenu,
}: {
  lng: "en" | "uk";
  deviceLg: boolean;
  nav: { [key: string]: string };
  closeMenu?: MouseEventHandler;
}) => {
  return (
    <nav className="flex items-center mb-10 lg:mb-0">
      <ul
        className={`w-full lg:gap-x-3 flex flex-col items-center text-small-md lg:text-md ${
          deviceLg && "hidden"
        } lg:flex lg:flex-row`}
        onClick={closeMenu}
      >
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.about}`}>{nav["about-us"]}</Link>
        </li>
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.projects}`}>{nav["projects"]}</Link>
        </li>
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.news}`}>{nav["news"]}</Link>
        </li>
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.contacts}`}>{nav["contacts"]}</Link>
        </li>
      </ul>
    </nav>
  );
};
