import Image from "next/image";
import React from "react";

import { formatText } from "@/utils";

export const Program = ({
  program,
  lng,
}: {
  program: {
    title: string;
    enTitle: string;
    list: string[];
    enList: string[];
    image: string;
  };
  lng: "en" | "uk";
}) => {
  const { title, enTitle, list, enList, image } = program;
  return (
    <section className="lg:items-center hidden md:flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-between w-full max-w-[1440px] mx-auto p-8 lg:py-16 mt-8 text-small-md lg:text-lg">
      <div className="lg:w-[570px] flex-1">
        <h4 className="font-bold text-small-3xl mb-6 lg:text-4xl">
          {lng === "en" ? enTitle : title}
        </h4>
        {list[0] && (
          <p className="flex flex-col gap-2">
            {formatText(lng === "en" ? enList[0] : list[0]).map(
              (item: string) => (
                <span key={item.slice(0, 10)}>{item}</span>
              ),
            )}
          </p>
        )}
      </div>
      {image && (
        <div className="w-full h-[370px] lg:w-[615px] lg:h-[600px]">
          <Image
            src={image}
            alt="program"
            width={500}
            height={700}
            className="block w-full h-full object-cover"
          />
        </div>
      )}
      {list[1] && (
        <p className="w-full flex flex-col gap-2">
          {formatText(lng === "en" ? enList[1] : list[1]).map(
            (item: string) => (
              <span key={item.slice(0, 10)}>{item}</span>
            ),
          )}
        </p>
      )}
    </section>
  );
};
