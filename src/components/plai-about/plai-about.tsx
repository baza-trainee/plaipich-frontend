import "./plai-about.css";

import Image from "next/image";
import React from "react";

import bgPlai from "/public/images/bg-plai.jpg";
import plai1 from "/public/images/plai-1.jpg";
import plai2 from "/public/images/plai-2.jpg";
import plai3 from "/public/images/plai-3.jpg";
import { useTranslation } from "@/app/i18n";

import { Link } from "../link/link";

export const PlaiAbout = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "plai-about");
  const navigation = t("navigation", {
    returnObjects: true,
  }) as { title: string; link: string }[];
  const list = t("list", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="about" className="w-full relative bg-white">
      <div className="w-full h-[500px] md:h-[450px] overflow-hidden relative">
        <Image
          src={bgPlai}
          alt="Plai"
          width={1440}
          height={500}
          className="bg-plai"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[450px] py-8">
        <p className="text-6 mb-12 md:mb-[100px] w-full max-w-[1440px] mx-auto px-4 md:px-8">
          {t("main")} <span className="text-light-blue">{t("about")}</span>
        </p>
        <h1 className="hidden mb-[150px] lg:mb-[120px] text-small-4xl leading-2 md:block lg:text-4xl lg:leading-4  text-white w-full max-w-[1440px] mx-auto px-8">
          {t("title")}
        </h1>
        <nav className="w-full m-0 max-w-[1440px] mx-auto md:px-8 flex flex-col justify-center">
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center md:justify-start items-center">
            {navigation.map((item, i) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  appearance={
                    i === 0 ? "linkButtonPrimary" : "linkButtonSecondary"
                  }
                  className="flex py-3 lg:py-4"
                >
                  <p className="btn-text">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="grid-box md:grid-cols-md md:grid-rows-md lg:grid-rows-lg lg:grid-cols-lg">
        <p className="text-first text-base font-normal leading-2 md:text-small-md lg:leading-4 lg:text-md ">
          <span className="uppercase mr-2 font-bold text-lg lg:text-xl lg:normal-case">
            Plai
          </span>
          {t("text-first")}
        </p>
        <Image
          src={plai1}
          alt="Plai"
          width={700}
          height={500}
          className="image-first"
        />
        <p className="text-second text-base font-normal leading-2 md:text-small-md lg:leading-4 lg:text-md">
          {t("text-second")}
        </p>
        <Image
          src={plai3}
          alt="Plai"
          width={700}
          height={500}
          className="image-second"
        />
        <div className="text-third">
          <h5 className="text-base font-medium leading-2 mb-3 md:text-small-md md:font-semibold lg:leading-4 lg:text-md">
            {" "}
            {t("title-for-list")}
          </h5>
          <ul className="flex flex-col gap-1">
            {list.map((item) => (
              <li key={item} className="item-plai-enemy">
                <p className="inline-block w-[85%] text-base font-normal leading-2 md:text-small-md lg:leading-4 lg:text-md">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={plai2}
          alt="Plai"
          width={700}
          height={500}
          className="image-third"
        />
      </div>
    </section>
  );
};
