import Image from "next/image";
import React from "react";

// import { useTranslation } from "@/app/i18n";
import { Spiral } from "@/components/spiral/spiral";

// import playMissionImg from "../../../public/images/play-mission.jpg";

interface MissionItem {
  bigTitle: string;
  title: string;
  list: [string];
  enBigTitle: string;
  enTitle: string;
  enList: [string];
  image: string;
}

export const Mission = ({
  lng,
  missionData,
}: {
  lng: "en" | "uk";
  missionData: MissionItem;
}) => {
  // const { t } = await useTranslation(lng, "plai-mission");
  // const missionData = t("mission-data", {
  //   returnObjects: true,
  // }) as MissionItem[];

  const missionList = lng === 'en' ? missionData.enList : missionData.list;

  return (
    <section id="mission" className="py-8 md:py-16 md:pb-0 max-w-[1440px]">
      <div className="flex justify-center items-center flex-row">
        <Spiral className="stroke-link-water w-[26px] h-[21px] md:w-[32px] md:h-[26px] lg:w-[76px] lg:h-[61px] mr-4 md:mr-6" />
        <h2 className="h1">{lng==='en'? missionData.enBigTitle: missionData.bigTitle}</h2>
      </div>
      <div
        className="px-4 py-8 md:p-8 lg:p-16
      lg:gap-8 lg:grid lg:grid-rows-none lg:grid-cols-2 lg:row-start-2"
      >
        <div className="md:pb-8 lg:pb-0">
          <h2 className="md:w-3/4 lg:h1 h2 normal-case">{lng==='en'? missionData.enTitle: missionData.title}</h2>
          <div>
            {missionList.map((text: string, index: number) => (
              <div
                key={`0${1 + index}`}
                className="border-t mt-6 pt-4 md:grid md:grid-cols-[2fr,3fr]"
              >
                <div className="text-xl font-medium  md:flex md:items-center">
                  {`0${1 + index}`}
                </div>
                <div>
                  <p className="mt-1 text-3 md:text-2 lg:text-4">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={missionData.image}
          width={700}
          height={1000}
          alt="Our mission picture"
          loading="lazy"
          className="mx-auto lg:order-first md:block hidden"
        />
      </div>
    </section>
  );
};
