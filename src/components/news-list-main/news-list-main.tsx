"use client";
import React from "react";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { useNewsList } from "@/hooks";

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
  const { data, isLoading } = useNewsList(API_URL.NEWS);

  return (
    <section className="lg:p-16 md:px-8 md:py-16 p-7">
      <div className="flex content-center justify-center">
        <Spiral className="stroke-[#D6E7EE] w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
        <h2 className="lg:h1 h2">{title}</h2>
      </div>

      {isLoading && <div className="w-full h-[350px]">Loading...</div>}
      {!isLoading && data && <NewsList lng={lng} />}
      <div className="flex justify-center">
        <Link appearance="linkButtonPrimary" href={NAVIGATION.news}>
          <p className="btn-text">{btnText}</p>
        </Link>
      </div>
    </section>
  );
};
