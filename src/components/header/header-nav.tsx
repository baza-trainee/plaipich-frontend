import React from "react";

import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";

import { Link } from "../link/link";

export const NavHeader = async ({
  lng,
  deviceLg,
}: {
  lng: "en" | "uk";
  deviceLg: boolean;
}) => {
  const { t } = await useTranslation(lng, "header");

  return (
    <nav className="flex items-center mb-10 lg:mb-0">
      <ul
        className={`w-full lg:gap-x-3 flex flex-col items-center text-small-md lg:text-md ${
          deviceLg && "hidden"
        } lg:flex lg:flex-row`}
      >
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.about}`}>{t("nav-about-us")}</Link>
        </li>
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.projects}`}>
            {t("nav-projects")}
          </Link>
        </li>
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.news}`}>{t("nav-news")}</Link>
        </li>
        <li className="py-2 px-[53px] lg:px-[30px] w-full lg:w-40 text-center scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.contacts}`}>
            {t("nav-contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
