"use client";
import React from "react";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { useNewsList } from "@/hooks";

import { Link } from "../link/link";
import NewsCard from "./news-card/news-card";
import { Spiral } from "./spiral";

export const NewsList = ({
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
        <Spiral />
        <h2 className="lg:h1 h2">{title}</h2>
      </div>
      {isLoading && <div className="w-full h-[350px]">Loading...</div>}
      {!isLoading && data && (
        <div
          className="grid grid-cols-1 
            lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]
            md:grid-cols-2 md:my-16 md:gap-x-4"
        >
          {data.news.map((news) => (
            <NewsCard
              key={news._id}
              newsItem={news}
              lng={lng}
              className="lg:m-0 mb-10 hover:text-light-blue"
            />
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <Link appearance="linkButtonPrimary" href={NAVIGATION.news}>
          <p className="btn-text">{btnText}</p>
        </Link>
      </div>
    </section>
  );
};
