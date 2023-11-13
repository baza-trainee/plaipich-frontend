"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import hiro from "../../../public/hiro.png";
import { Link } from "../link/link";

export const Slider = () => {
  const carouselList = [1, 2, 3];

  return (
    <section className="w-full py-2" id="projects-slider">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={7000}
      >
        {carouselList.map((item) => (
          <div
            className="w-full pb-[50px] md:flex md:justify-center md:px-4.5 md:flex-row-reverse md:gap-10"
            key={item}
          >
            <div className="bg-black w-full h-[350px] mb-5 md:w-1/2 md:h-[650px]">
              <Image
                src={hiro}
                alt={"logo"}
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center content-center px-4 md:w-[45%] md:flex-row md:flex-wrap">
              <h1 className="h1 w-full text-left text-orange dark:text-pink-pearl">
                BOOST FOR CULTURE
              </h1>
              <p className="text-left w-full text-black text-base md:text-lg font-sans font-regular mb-5 dark:text-white">
                Проект, який дає змогу вчитися на реальних кейсах, отримувати
                досвід від експертів, розвивати себе, свою мистецьку спільноту
                та навіть запустити власний культурний продукт, експереминтуючи
                в напрямках
              </p>
              <Link
                href={"/"}
                appearance="linkButtonPrimary"
                className="w-full mb-3 md:mb-0 md:mr-3 md:w-[48%]"
              >
                <p className="btn-text">Дізнатися більше</p>
              </Link>
              <Link
                href={"/"}
                appearance="linkButtonSecondary"
                className="w-full md:w-[48%]"
              >
                <p className="btn-text">Всі проєкти</p>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
