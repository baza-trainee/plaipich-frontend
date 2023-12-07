import React from "react";
import { LuMoveRight } from "react-icons/lu";

import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";
import { Link } from "@/components/link/link";

export const AboutMain = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "about-main");

  return (
    <section className="py-[72px] text-black bg-white w-full">
      <div className="w-full mx-auto max-w-desktop px-4 flex justify-normal flex-col">
        <div className="flex lg:flex-row flex-col justify-between items-center pb-7 md:pb-10 lg:pb-14">
          <h2 className="h1 uppercase lg:normal-case mr-5 lg:mb-0 mb-10 lg:self-auto self-start">
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
