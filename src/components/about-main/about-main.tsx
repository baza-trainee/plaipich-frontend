import React from "react";
import { LuMoveRight } from "react-icons/lu";

import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";
import { Link } from "@/components/link/link";

export const AboutMain = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "about-main");

  return (
    <section className="lg:py-11 md:pt-7 md:pb-3.5 py-8 text-black bg-white w-full">
      <div className="container max-w-desktop flex justify-normal flex-col">
        <div className="flex lg:flex-row flex-col justify-between items-center pb-4 lg:pb-10">
          <h2 className="h1 lg:text-4xl mr-5 text-xl lg:mb-0 mb-10 lg:self-auto self-start">
            {t("greeting")}
          </h2>
          <p className="leading-2 md:max-w-[950px] self-start md:text-md lg:text-xl">
            {t("text")}
          </p>
        </div>

        <Link
          className="link-text self-end px-6 py-4.5 hover:no-underline transition-colors border border-transparent focus:outline-black active:bg-gray-200 rounded-large hover:bg-gray-100"
          href={NAVIGATION.about}
        >
          {t("link")}
          <LuMoveRight className="inline-block ml-2 align-middle" />
        </Link>
      </div>
    </section>
  );
};
