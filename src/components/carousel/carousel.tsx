"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import logo from "../../../public/logo.svg";
import { Link } from "../link/Link";

export const Slider = () => {
  const carouselList = [1, 2, 3];

  return (
    <section className="w-full py-2" id="projects-slider">
      <Carousel showThumbs={false}>
        {carouselList.map((item) => (
          <div
            className="w-full flex flex-col gap-2.5 justify-center items-center pb-[50px]"
            key={item}
          >
            <div className="bg-white w-full h-[350px]">
              <Image src={logo} alt={"logo"} objectFit="contain" />
            </div>
            <h1 className="h1 text-left text-orange">BOOST FOR CULTURE</h1>
            <p className="text-left text-black text-base font-sans leading-2 font-semibold">
              Проект, який дає змогу вчитися на реальних кейсах, отримувати
              досвід від експертів, розвивати себе, свою мистецьку спільноту та
              навіть запустити власний культурний продукт, експереминтуючи в
              напрямках
            </p>
            <Link href={"/"} className="btn btn-primary">
              <p className="btn-text">Дізнатися більше</p>
            </Link>
            <Link href={"/"} className="btn btn-transparent">
              <p className="btn-text">Всі проєкти</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
