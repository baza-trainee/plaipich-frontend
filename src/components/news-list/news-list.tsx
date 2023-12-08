"use client";
import { API_URL } from "@/commons/constants";
import { useNewsList } from "@/hooks";

import NewsCard from "../news-card/news-card";

const NewsList = ({ lng }: { lng: "en" | "uk" }) => {
  const { data, isLoading } = useNewsList(API_URL.NEWS);

  return (
    <>
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
    </>
  );
};

export default NewsList;
