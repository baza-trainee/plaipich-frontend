"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import left from "../../../public/button-arrows/left.svg";
import right from "../../../public/button-arrows/right.svg";
import hiro from "../../../public/hiro.png";
import { Link } from "../link/link";

export const Slider = () => {
  const [slide, setSlide] = useState(1);
  const carouselList = [1, 2, 3, 4, 5];

  const onChange = (page:number) => {
    if (page === 0) {
      setSlide(1);
    } else {
      setSlide(1 + page);
    }
  };

  return (
    <section className="relative w-full py-2 bg-white" id="projects-slider">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={7000}
        onChange={onChange}
      >
        {carouselList.map((item) => (
          <div
            className="w-full pb-12 md:flex md:justify-center md:px-4.5 md:flex-row-reverse md:gap-10"
            key={item}
          >
            <div className="w-full h-[350px] mb-5 md:w-1/2 md:h-[650px]">
              <Image
                src={hiro}
                alt={"logo"}
                width={0}
                height={0}
                className="w-full h-full object-cover"
                priority
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
      <div className="absolute bottom-2.5 right-1/3 w-1/3 text-dark-blue flex justify-center items-center">
        <button className="w-20 border-none">
          <Image
            src={left}
            alt={"prev"}
            width={0}
            height={0}
            className="w-full object-contain"
          />
        </button>
        <p className="font-semibold text-center w-20">
          {slide} / {carouselList.length}
        </p>
        <button className="w-20 border-none">
          <Image
            src={right}
            alt={"next"}
            width={0}
            height={0}
            className="w-full object-contain"
          />
        </button>
      </div>
    </section>
  );
};
