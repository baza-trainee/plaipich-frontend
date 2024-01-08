import Image from "next/image";
import React from "react";

import { useTranslation } from "@/app/i18n";

import { DonatePanel } from "./donate-panel/donate-panel";

export const Support = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "support-us");
  return (
    <section className="pb-10 lg:pb-16">
      <div className="container max-w-desktop grid grid-cols-1 lg:grid-cols-[522px,auto] md:grid-cols-[278px,auto] grid-rows-none lg:grid-rows-[80px,auto] md:grid-rows-[36px,auto] gap-x-3 gap-y-2 lg:gap-10 ">
        <h2 className="h1 text-center md:col-start-2 md:col-end-3 uppercase lg:normal-case mb-4.5 md:mb-0">
          {t("support-title")}
        </h2>
        <div className="lg:w-[522px] md:row-start-1 md:row-end-3 lg:min-w-[522px] md:min-w-[278px] min-w-full lg:h-[757px] md:w-[278px] md:min-h-[474px] w-full h-[365px] relative self-start">
          <Image
            fill
            src="/support-us.jpg"
            className="object-cover object-center md:max-w-full max-w-[288px] !left-1/2 !-translate-x-1/2 md:left-auto md:translate-x-0"
            sizes="(max-width: 768px) 288w, (max-width: 1400px) 50vw, 33vw"
            priority
            alt="Chair"
          />
        </div>
        <div className="md:col-start-2 md:col-end-3 flex flex-col lg:gap-y-6 gap-y-3 justify-start items-center">
          <p className="text-2 text-center md:max-w-3xl max-w-md md:mt-2 md:mb-0 my-9">
            {t("support-text")}
          </p>
          <div className="w-full lg:p-14 md:p-4 p-2 border  flex flex-col items-center grow border-gray-300">
            <div className="max-w-lg md:max-w-xl grow flex flex-col justify-start items-center lg:max-w-full">
              <p className="leading-2 lg:text-lg font-semibold md:text-small-md text-center lg:pb-8 sm:pb-3 pb-0 inline-block">
                {t("support-payment-title")}
              </p>
              <DonatePanel lng={lng} />
              <span className="h7 text-lg font-semibold lg:mt-8 md:mt-2 mt-4 inline-block">
                {t("support-thanks")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
