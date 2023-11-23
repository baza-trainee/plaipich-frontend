import "./join-us.css";

import Link from "next/link";
import React from "react";

import { useTranslation } from "@/app/i18n";

interface JoinUsProps {
  backgroundColor: string;
  lng: "en" | "uk";
}

export const JoinUs: React.FC<JoinUsProps> = async ({
  backgroundColor,
  lng,
}) => {
  const { t } = await useTranslation(lng, "join-us-main");
  return (
    <section className={`w-full text-black ` + backgroundColor}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[3.875rem] lg:py-20 py-[3.75rem]">
        <div className="mb-8">
          <h2 className="h1 pb-[1.375rem] uppercase md:normal-case">
            {t("title")}
          </h2>
          <p className="text-md md:text-xl leading-4">{t("text")}</p>
        </div>
        <ul className="flex items-center gap-6 flex-col lg:flex-row justify-center lg:justify-start">
          <li className="listItemStyles">
            <Link href="/" className="linkBaseStyles ">
              {t("partner")}
            </Link>
          </li>
          <li className="listItemStyles">
            <Link href="/" className="linkBaseStyles">
              {t("member")}
            </Link>
          </li>
          <li className="listItemStyles">
            <Link href="/" className="linkBaseStyles">
              {t("artist")}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
