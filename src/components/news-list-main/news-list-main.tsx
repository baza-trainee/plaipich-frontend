"use client";
import React from "react";

import { NAVIGATION } from "@/commons/constants";

import { Link } from "../link/link";
import NewsList from "../news-list/news-list";
import { Spiral } from "../spiral/spiral";

export const NewsListMain = ({
  title,
  btnText,
  lng,
}: {
  title: string;
  btnText: string;
  lng: "en" | "uk";
}) => {
  return (
    <section className="lg:p-16 md:px-8 md:py-16 p-7">
      <div className="flex content-center justify-center">
        <Spiral className="stroke-link-water w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
        <h2 className="lg:h1 h2">{title}</h2>
      </div>
      <NewsList lng={lng} dateClassName="text-gray-300" />
      <div className="flex justify-center">
        <Link appearance="linkButtonPrimary" href={NAVIGATION.news}>
          <p className="btn-text">{btnText}</p>
        </Link>
      </div>
    </section>
  );
};
