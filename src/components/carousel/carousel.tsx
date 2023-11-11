"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import logo from "../../../public/logo.svg";
import { Link } from "../link/link";

export const Slider = () => {
  const carouselList = [1, 2, 3];

  return (
    <section className="w-full py-2" id="projects-slider">
      <Carousel showThumbs={false}>
        {carouselList.map((item) => (
          <div className="w-full pb-[50px]" key={item}>
            <div className="bg-black w-full h-[350px] mb-5">
              <Image src={logo} alt={"logo"} objectFit="contain" />
            </div>
            <div className="flex flex-col justify-center items-center px-4">
              <h1 className="h1 text-left text-orange">BOOST FOR CULTURE</h1>
              <p className="text-left text-black text-base font-sans leading-2 font-semibold mb-5">
                Проект, який дає змогу вчитися на реальних кейсах, отримувати
                досвід від експертів, розвивати себе, свою мистецьку спільноту
                та навіть запустити власний культурний продукт, експереминтуючи
                в напрямках
              </p>
              <Link href={"/"} className="btn btn-primary w-full mb-3">
                <p className="btn-text">Дізнатися більше</p>
              </Link>
              <Link href={"/"} className="btn btn-secondary w-full">
                <p className="btn-text">Всі проєкти</p>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
