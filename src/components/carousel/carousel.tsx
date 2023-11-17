"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import hiro from "../../../public/hiro.png";
import { Link } from "../link/link";

export const Slider = () => {
  const [slide, setSlide] = useState(1);
  const carouselList = [1, 2, 3, 4, 5];

  const onChange = (page: number) => {
    if (page === 0) {
      setSlide(1);
    } else {
      setSlide(1 + page);
    }
  };

  return (
    <section className="relative w-full py-10" id="projects-slider">
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
            className="w-full max-w-[1440px] m-auto pb-12 md:flex md:justify-center md:px-4.5 md:flex-row-reverse md:gap-10"
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
              <h1 className="h1 w-full text-left text-pink-pearl">
                BOOST FOR CULTURE
              </h1>
              <p className="text-left w-full text-base md:text-lg font-sans font-regular mb-5">
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
      <div className="flex absolute bottom-[45px] right-1/3 w-1/3 text-amber justify-center items-center">
        <button className="hidden md:flex border-none fill-gray-200">
          <svg
            width="77"
            height="16"
            viewBox="0 0 77 16"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="inherit"
              d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8.00001L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928938C7.68054 0.538414 7.04738 0.538414 6.65685 0.928938L0.292893 7.2929ZM77 7L1 7.00001L1 9.00001L77 9L77 7Z"
            />
          </svg>
        </button>
        <p className="text-md text-center w-20">
          {slide} / {carouselList.length}
        </p>
        <button className="hidden md:flex border-none fill-gray-200">
          <svg
            width="77"
            height="16"
            viewBox="0 0 77 16"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M76.7071 8.7071C77.0976 8.31658 77.0976 7.68341 76.7071 7.29289L70.3431 0.928926C69.9526 0.538402 69.3195 0.538402 68.9289 0.928926C68.5384 1.31945 68.5384 1.95262 68.9289 2.34314L74.5858 7.99999L68.9289 13.6568C68.5384 14.0474 68.5384 14.6805 68.9289 15.0711C69.3195 15.4616 69.9526 15.4616 70.3431 15.0711L76.7071 8.7071ZM8.74228e-08 9L76 8.99999L76 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
              fill="inherit"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
