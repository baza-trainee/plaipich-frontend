import Image from "next/image";
import React from "react";

export interface NewsItem {
  id: number;
  tag: string;
  type: string;
  title: string;
  content: string;
  date: string;
  image: {
    url: string;
    alt: string;
  };
}

interface NewsCardProps {
  newsItem: NewsItem;
  className?: string;
}

function SetTagColor(type: string) {
  const tagsColors: Record<string, string> = {
    FST: "bg-pink-pearl",
    PJT: "bg-yellow-green",
    CNST: "bg-volt",
  };
  return tagsColors[type] ?? "bg-transparent";
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem, className }) => {
  const { tag, title, content, type, date, image } = newsItem;
  return (
    <article className={`flex flex-col justify-between ${className ?? ""}`}>
      {/* fix: need change h-[416px] */}
      <div className="h-[416px] relative">
        <Image
          src={image?.url}
          alt={image?.alt}
          fill
          className="h-full w-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <hr className="border-white mt-7 mb-5" />
      <div>
        <div className="flex mb-5">
          <span className={`text-black py-2 px-4 rounded-large ${SetTagColor(type)}`}>{tag}</span>
        </div>
        <h3 className="h2 normal-case lg:line-clamp-2 md:line-clamp-1">{title}</h3>
        <p className="py-3 lg:text-md md:line-clamp-2">{content}</p>
        <p className="text-gray-500 pb-[13px] lg:text-md">{date}</p>
      </div>
      <hr className="border-white mt-5" />
    </article>
  );
};

export default NewsCard;
