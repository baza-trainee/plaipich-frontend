"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { TbArrowLeft } from "react-icons/tb";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { useOneNew } from "@/hooks/use-one-new";
import { formatDate, formatText } from "@/utils";

import { Link } from "../index";
import { SetTagColor } from "../news-card/news-card";
import Gallery from "./one-news-gallery";

const OneNews = ({ lng }: { lng: "en" | "uk" }) => {
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");
  const { data, isLoading } = useOneNew(`${API_URL.NEWS}/${newId}`);

  return (
    <section className="container pt-[31px] pb-11 md:pt-[39px] md:pb-8 lg:pb-[62px] lg:pt-8">
      {isLoading ? (
        <div>Loading.......</div>
      ) : (
        <>
          {data && (
            <>
              <ul className="hidden lg:flex gap-1 text-sm leading-4 mb-10 w-full max-w-[1440px]">
                <li className=" inline-block">
                  <Link href={`/${lng}/${NAVIGATION.main}`}>
                    {lng === "en" ? "Home" : "Головна"}{" "}
                  </Link>
                </li>
                <li>/</li>
                <li className=" inline-block">
                  <Link href={`/${lng}/${NAVIGATION.news}`}>
                    {" "}
                    {lng === "en" ? "News" : "Новини"}
                  </Link>
                </li>
                <li>/</li>
                <li className=" inline-block">
                  <Link
                    href={`/${lng}/${NAVIGATION.oneNew}`}
                    className=" text-dark-blue"
                  >
                    {lng === "en" ? data.enTitle : data.title}
                  </Link>
                </li>
              </ul>

              <p
                className={`inline-block py-2 px-4 rounded-medium mb-5 h-[40px] text-base text-center leading-4
                ${SetTagColor(data.category.en)}`}
              >
                {lng === "en" ? data.category.en : data.category.uk}
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
                    {lng === "en" ? data.enTitle : data.title}
                  </h2>
                  <p className=" text-gray-500 text-base leading-2 md:text-md font-normal mb-5">
                    {formatDate({ date: data.date, lng })}
                  </p>

                  <div>
                    {formatText(
                      lng === "en" ? data.enDescription : data.description
                    ).map((str, ind) => (
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
              <Link
                href={`/${lng}/${NAVIGATION.news}`}
                className="inline-flex gap-2 px-6 py-4 md:text-md"
              >
                <TbArrowLeft size="24px" color="black" />
                {lng === "en" ? "back" : "назад"}
              </Link>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default OneNews;
