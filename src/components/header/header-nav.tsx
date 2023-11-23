import React from "react";

import { useTranslation } from "@/app/i18n";
import NAVIGATION from "@/commons/constants";

import { Link } from "../link/link";

export const NavHeader = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, 'header');

  return (
    <nav className="flex items-center">
      <ul className="ml-[40px] gap-x-3 text-md hidden lg:flex">
        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125">
                  <Link href={`/${lng}${NAVIGATION.projects}`}>{t('projects') }</Link>
        </li>
        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.about}`}>{t('about') }</Link>
        </li>
        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.news}`}>Новини</Link>
        </li>
        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125">
          <Link href={`/${lng}${NAVIGATION.contacts}`}>Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};
