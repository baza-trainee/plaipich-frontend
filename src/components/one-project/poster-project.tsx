import Image from "next/image";
import React from "react";

import { NAVIGATION } from "@/commons/constants";

import { Button } from "..";

export const Poster = ({
  title,
  poster,
  status,
  lng,
  openModal,
}: {
  title: string;
  poster: string;
  status: boolean;
  lng: "en" | "uk";
  openModal: Function;
}) => {
  const onClickDonateBtn = () => {
    openModal();
  };

  return (
    <section
      id="poster"
      className="max-w-[1440px] mx-auto text-white md:flex md:flex-row-reverse p-4 md:p-8 lg:px-16"
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
      <div className="flex-1 flex flex-col justify-center items-start pt-4 md:py-12 gap-16 lg:pb-16 lg:pt-0 lg:flex-1">
        <ul className="hidden lg:flex text-sm gap-2">
          <li>
            <a href={`/${lng}${NAVIGATION.main}`}>
              {lng === "en" ? "Main / " : "Головна / "}
            </a>
          </li>
          <li>
            <a href={`/${lng}${NAVIGATION.projects}`}>
              {lng === "en" ? "Projects / " : "Проєкти / "}
            </a>
          </li>
          <li className="text-light-blue text-sm cursor-pointer">{title}</li>
        </ul>
        <h1 className="flex-1 items-center flex text-small-3xl text-link-water text-center md:text-left lg:text-4xl lg:leading-4 font-bold max-w-[450px] uppercase">
          {title}
        </h1>
        {!status && (
          <Button
            type="button"
            className="hidden md:block btn-orange min-w-[250px]"
            onClick={onClickDonateBtn}
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
