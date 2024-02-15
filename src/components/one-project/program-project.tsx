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
  };
  lng: "en" | "uk";
}) => {
  const { title, enTitle, list, enList, image } = program;
  console.log(program);

  return (
    <section className="hidden md:flex flex-col w-full max-w-[1440px] mx-auto">
      <h4>{lng === "en" ? enTitle : title}</h4>
      {list[0] && (
        <p>
          {formatText(lng === "en" ? enList[0] : list[0]).map((item) => (
            <span key={item.slice(0, 10)}>{item}</span>
          ))}
        </p>
      )}
      {image && (
        <div className="w-[400px] h-[400px]">
          <Image
            src={image}
            alt="program"
            width={500}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {list[1] && (
        <p>
          {formatText(lng === "en" ? enList[1] : list[1]).map((item) => (
            <span key={item.slice(0, 10)}>{item}</span>
          ))}
        </p>
      )}
    </section>
  );
};
