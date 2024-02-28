"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuMoveRight } from "react-icons/lu";

import { NAVIGATION } from "@/commons/constants";
import { IProject } from "@/commons/types";

import { CircularPagination } from "../pagination/pagination";
import { Spiral } from "../spiral/spiral";

export const ProjectsList = ({
  projects,
  lng,
}: {
  projects: IProject[];
  lng: "en" | "uk";
}) => {
  const [page, setPage] = useState(1);
  const limit = 4;

  const setStatus = (status: boolean) => {
    if (status) {
      return lng === "en" ? "  Funded" : "  Профінансовано";
    }
    return lng === "en" ? "  Needs support" : "  Потребує підтримки";
  };

  return (
    <div className="w-full max-w-[1440px] m-auto p-4 md:p-8 lg:p-16">
      <ul className="w-full flex flex-wrap gap-4 gap-4 md:gap-8 lg:gap-0 lg:justify-between mb-4">
        {projects.slice(limit * (page - 1), limit * page).map((item, ind) => (
          <li
            key={item._id}
            className={`w-full text-wine-berry hover:text-honey-flower lg:w-1/2 lg:pb-8 ${
              ind % 2 === 0 ? "lg:pr-6" : "lg:pl-6"
            }`}
          >
            <Image
              alt={lng === "en" ? item.enTitle : item.title}
              src={item.poster}
              width={704}
              height={411}
              className="h-[411px] object-cover mb-[16px] lg:mb-[20px]"
            />
            <h2
              className={`mb-4 w-full text-left text-lg md:text-xl lg:text-3xl leading-3 transition line-clamp-1 font-bold`}
            >
              {lng === "en" ? item.enTitle : item.title}
            </h2>
            <p className="mb-[16px] lg:mb-[20px] lg:min-h-[135px] overflow-hidden text-black line-clamp-4">
              {lng === "en"
                ? item.enDescription.replace("**", "")
                : item.description.replace("**", "")}
            </p>

            <div className="w-full flex flex-wrap items-center text-black justify-center md:justify-between gap-4">
              <p className="w-full text-center text-lg font-bold leading-2 md:max-w-[300px] md:text-left">
                <Spiral
                  className={
                    item.status
                      ? "stroke-green w-[40px] h-[40px] inline"
                      : "stroke-red w-[40px] h-[40px] inline"
                  }
                />
                {setStatus(item.status)}
              </p>
              <Link
                className="link-button-black"
                href={`/${lng}${NAVIGATION.project}${item._id}`}
              >
                {lng === "en" ? "Learn more" : "Дізнатись більше"}
                <LuMoveRight className="inline-block ml-2 align-middle" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {projects.length > limit && (
        <CircularPagination
          pages={Math.ceil(projects.length / limit)}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};
