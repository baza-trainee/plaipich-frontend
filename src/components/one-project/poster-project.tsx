import Image from "next/image";
import React from "react";

import { Button } from "..";

export const Poster = ({
  title,
  poster,
  status,
  lng,
}: {
  title: string;
  poster: string;
  status: boolean;
  lng: "en" | "uk";
}) => {
  return (
    <section
      id="poster"
      className="max-w-[1440px] mx-auto text-white md:flex md:flex-row-reverse p-4 md:p-8"
    >
      <div className="w-full md:w-1/2 h-[400px] lg:w-[640px] lg:h-[640px] overflow-hidden">
        <Image
          src={poster}
          alt={title}
          width={1000}
          height={800}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start pt-4 md:p-12 gap-16">
        <h1 className="text-small-3xl text-center md:text-left lg:text-4xl lg:leading-4 font-bold max-w-[450px] uppercase">
          {title}
        </h1>
        {!status && (
          <Button
            type="button"
            className="hidden md:block btn-orange min-w-[250px]"
          >
            <p className="btn-text">
              {lng === "en" ? "Support project" : "Підтримати проект"}
            </p>
          </Button>
        )}
      </div>
    </section>
  );
};
