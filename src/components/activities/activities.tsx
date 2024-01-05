import React from "react";

import { useTranslation } from "@/app/i18n";
import { Spiral } from "@/components/spiral/spiral";

interface Activity {
  id: number;
  count: string;
  text: string;
}
export const Activities = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "support-us");
  const activitiesData = t("activities-data", {
    returnObjects: true,
  }) as Activity[];
  return (
    <section className="pt-[78px] text-black">
      <div className="container max-w-desktop">
        <h2 className="h1 md:text-left text-center lg:mb-8 mb-12">{t("activities-title")}</h2>
      </div>
      <div className="w-full bg-link-water py-5 md:py-[60px] flex justify-center items-center">
        <ul className="md:w-[78%] mx-auto lg:px-0 flex flex-col md:flex-row justify-center md:items-start items-center relative w-full">
          {activitiesData?.map((activity) => (
            <li key={activity.id} className="flex md:flex-row flex-col md:items-start items-center [&>div]:last:hidden">
              <span className="flex flex-col items-center justify-normal lg:w-[230px] md:w-[180px] w-[230px]">
                <span className="leading-4 text-small-4xl lg:text-4xl font-bold relative">{activity.count}</span>
                <p className="text-2 md:text-left text-center">{activity.text}</p>
              </span>
              <div className="flex justify-center lg:items-start items-center lg:w-[226px] sm:w-24 w-full py-6">
                <Spiral className="w-[35px] h-[27px] stroke-red justify-self-center" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
