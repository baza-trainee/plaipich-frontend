import Image from "next/image";
import Link from "next/link";
import React from "react";

import { NAVIGATION } from "@/commons/constants";
import { INews } from "@/commons/types";
import { formatDate } from "@/utils";

interface NewsCardProps {
  newsItem: INews;
  className?: string;
  isMain?: boolean;
  lng: "en" | "uk";
}

export function SetTagColor(tag: string) {
  const tagsColors: Record<string, string> = {
    Статті: "bg-link-water",
    Articles: "bg-link-water",
    Анонси: "bg-pale-cerulean",
    Announcements: "bg-pale-cerulean",
    Events: "bg-water-blue",
    Події: "bg-water-blue",
    Проекти: "bg-horizon",
    Projects: "bg-horizon",
    Персоналії: "bg-dark-blue/70",
    Personnel: "bg-dark-blue/70",
  };
  return tagsColors[tag] ?? "bg-link-water";
}

const NewsCard: React.FC<NewsCardProps> = ({
  newsItem,
  className,
  lng,
  isMain,
}) => {
  const {
    _id,
    description,
    title,
    enTitle,
    enDescription,
    category,
    date,
    mainPhoto,
  } = newsItem;
  return (
    <div className={`flex flex-col justify-between ${className ?? ""}`}>
      <Link
        href={`/${lng}/${NAVIGATION.oneNew}${_id}`}
        className={`${
          isMain ? "hover:text-light-blue" : "hover:text-dark-blue"
        }`}
      >
        <div className="h-[416px]">
          <Image
            src={mainPhoto}
            alt={lng === "en" ? enTitle : title}
            width={500}
            height={600}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <hr className={`mt-7 mb-5 border`} />
        <div>
          <div className="flex mb-5">
            <span
              className={`text-black py-2 px-4 rounded-large 
            ${SetTagColor(category.uk)}`}
            >
              {lng === "en" ? category.en : category.uk}
            </span>
          </div>
          <h3 className="h14 normal-case h-[64px]">
            {lng === "en" ? enTitle : title}
          </h3>
          <p className="text-4 my-3 line-clamp-2">
            {lng === "en" ? enDescription : description}
          </p>
          <p
            className={`pb-[13px] text-4 ${
              isMain ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {formatDate({ date, lng })}
          </p>
        </div>
        <hr className="border-white mt-5" />
      </Link>
    </div>
  );
};

export default NewsCard;
