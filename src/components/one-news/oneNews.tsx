"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { TbArrowLeft } from "react-icons/tb";

import { API_URL,NAVIGATION  } from "@/commons/constants";
import { useOneNew } from "@/hooks/use-one-new";
import { formatDate } from "@/utils";

// import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { Link } from "../index";
import { SetTagColor } from "../news-card/news-card";
import Gallery from "./one-news-gallery";

const OneNews = ({ lng }: { lng: "en" | "uk" }) => {
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");
  const {data, isLoading } = useOneNew(`${API_URL.NEWS}/${newId}`);
   
  return (
    <section className="container py-8">
      {isLoading ? (
        <div>Loading.......</div>
      ) : (
          <>
            {/* <Breadcrumbs
          separator="/"
          containerClasses="flex gap-1 m-0 p-0"
          activeClasses="text-dark-blue"
          lng={lng}
        /> */}
          <p className=" text-sm leading-4 mb-9 md:mb-10 lg:mb-16 w-full max-w-[1440px]">
            Головна / Новини /
            <span className=" text-dark-blue">
              {lng === "en" ? data?.enTitle : data?.title}
            </span>
            </p>
             <p
              className={`inline-block py-2 px-4 rounded-medium mb-5 h-[40px] text-base text-center leading-4
                ${SetTagColor(data?.category.en)}`}
              >
                {lng === "en" ? data?.category.en : data?.category.uk}
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
                {lng === "en" ? data?.enTitle : data?.title}
              </h2>
              <p className=" text-gray-500 text-base leading-2 md:text-md font-normal mb-5">
                {formatDate(data?.date, lng)}
              </p>

              <p className=" text-base leading-4  lg:font-medium mb-8 md:mb-5">
                {data?.description}
              </p>
            </div>
          </div>
            {data?.photos.length!=0 && <div className=" mb-10">
              <Gallery images={data?.photos} />
            </div>}
          <Link href={`/${lng}/${NAVIGATION.news}`} className="inline-flex gap-2 px-6 py-4 md:text-md">
            <TbArrowLeft size="24px" color="black" />
            назад
          </Link>
        </>
      )}
    </section>
  );
};

export default OneNews;
