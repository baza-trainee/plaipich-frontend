"use client";

import Image from "next/image";
import React from "react";
import { TbArrowLeft } from "react-icons/tb";

import { INews } from "@/commons/types";
import { SetTagColor } from "@/components/news-card/news-card";
import Gallery from "@/components/one-news/one-news-gallery";
import { formatDate, formatText } from "@/utils";

const PreviewNews = ({
  data,
  close,
}: {
  data: INews | null;
  close: () => void;
}) => {
  if (!data) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-auto bg-white text-black">
      <section className="pt-[31px] pb-11 md:pt-[39px] md:pb-8 lg:pb-[62px] lg:pt-8 container">
        <p
          className={`inline-block py-2 px-4 rounded-medium mb-5 h-[40px] text-base text-center leading-4
                ${SetTagColor(data.category.en)}`}
        >
          {data.category.uk}
        </p>
        <div className="lg:flex flex-row-reverse gap-8 lg:h-[640px] lg:overflow-clip mb-10 lg:mb-16">
          <div className="w-[288px] h-[287px] md:w-[704px] md:h-[702px] lg:w-[640px] lg:h-auto bg-link-water relative mb-5">
            <Image
              src={data.mainPhoto}
              alt="title"
              fill
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="lg:w-[640px] lg:overflow-y-scroll font-normal">
            <h2 className=" font-bold text-xl leading-2 md:text-3xl mb-2 w-72 md:w-full">
              {data.title}
            </h2>
            <p className=" text-gray-500 text-base leading-2 md:text-md font-normal mb-5">
              {formatDate({ date: data.date, lng: "uk" })}
            </p>

            <div>
              {formatText(data.description).map((str, ind) => (
                <p
                  className={`text-base leading-4 mb-8 md:mb-5 lg:pr-5 ${
                    ind === 0 ? "font-semibold" : "font-normal"
                  }`}
                  key={ind + str[0]}
                >
                  {str}
                </p>
              ))}
            </div>
          </div>
        </div>
        {data.photos.length != 0 && (
          <div className=" mb-10">
            <Gallery images={data.photos} />
          </div>
        )}
        <button
          className="inline-flex gap-2 px-6 py-4 md:text-md"
          onClick={close}
        >
          <TbArrowLeft size="24px" color="black" />
          <span>назад</span>
        </button>
      </section>
    </div>
  );
};

export default PreviewNews;
