import Image from "next/image";
import React from "react";

import { useTranslation } from "@/app/i18n";

import { DonatePanel } from "./donate-panel/donate-panel";

export const Support = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "support-us");
  return (
    <section className="pb-10 lg:pb-16">
      <div className="container max-w-desktop flex flex-col md:flex-row justify-stretch gap-x-3 gap-y-6 lg:gap-10">
        <div className="lg:w-[522px] lg:min-w-[522px] md:min-w-[278px] min-w-full lg:h-[757px] md:w-[278px] md:min-h-[474px] w-full h-[365px] relative self-start">
          <Image
            fill
            src="/support-us.jpg"
            className="object-cover object-center md:max-w-full max-w-[288px] !left-1/2 !-translate-x-1/2 md:left-auto md:translate-x-0"
            sizes="(max-width: 768px) 288w, (max-width: 1400px) 50vw, 33vw"
            priority
            alt="Chair"
          />
        </div>
        <div className="flex flex-col lg:gap-y-6 gap-y-3 justify-start items-center">
          <h2 className="h1 text-center uppercase lg:normal-case">{t("support-title")}</h2>
          <p className="text-2 text-center max-w-3xl">{t("support-text")}</p>
          <div className="w-full lg:p-14 md:p-4 p-2 border  flex flex-col items-center grow border-gray-300">
            <div className="md:max-w-lg grow flex flex-col justify-start items-center lg:max-w-full">
              <p className="leading-2 lg:text-lg font-semibold md:text-small-md text-center lg:pb-8 sm:pb-3 pb-0 inline-block">
                {t("support-payment-title")}
              </p>
              <DonatePanel lng={lng} />
              <span className="h7 text-lg font-semibold lg:mt-8 md:mt-2 mt-4 inline-block">{t("support-thanks")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
