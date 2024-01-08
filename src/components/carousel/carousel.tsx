"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { API_URL, NAVIGATION } from "@/commons/constants";
import { useProjectsList } from "@/hooks";

import { Link } from "../link/link";

export const Slider = ({
  btnOneProject,
  btnAllProjects,
  lng,
}: {
  btnOneProject: string;
  btnAllProjects: string;
  lng: "en" | "uk";
}) => {
  const [slide, setSlide] = useState(1);
  const { data, isLoading } = useProjectsList(API_URL.PROJECTS);

  const onChange = (page: number) => {
    if (page === 0) {
      setSlide(1);
    } else {
      setSlide(1 + page);
    }
  };

  return (
    <section className="relative w-full" id="projects-slider">
      {isLoading && <div className="w-full h-[350px]">Loading...</div>}
      {!isLoading && data && (
        <>
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            interval={7000}
            onChange={onChange}
          >
            {data.projects.map((item) => (
              <div className="slide-box" key={item._id}>
                <div className="image-box">
                  <Image
                    src={item.poster}
                    alt={lng === "en" ? item.enTitle : item.title}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center lg:justify-start content-center px-4 md:px-0 md:w-[45%] lg:flex-row lg:flex-wrap">
                  <h1 className="h1 w-full mb-2 text-left text-link-water">
                    {lng === "en"
                      ? item.enTitle.toUpperCase()
                      : item.title.toUpperCase()}
                  </h1>
                  <p className="text-left w-full text-base mb-8 md:mb-5 md:text-md lg:text-lg font-sans font-regular  line-clamp-6">
                    {lng === "en" ? item.enDescription : item.description}
                  </p>
                  <Link
                    href={`${lng}/${NAVIGATION.project}${item._id}`}
                    appearance="linkButtonPrimary"
                    className="w-full max-w-[300px] mx-auto md:mx-0 mb-3 md:w-[230px] lg:mb-0 md:mr-3 lg:w-[48%]"
                  >
                    <p className="btn-text">{btnOneProject}</p>
                  </Link>
                  <Link
                    href={`${lng}/${NAVIGATION.projects}`}
                    appearance="linkButtonSecondary"
                    className="w-full max-w-[300px] mx-auto md:mx-0 md:w-[230px] lg:w-[48%]"
                  >
                    <p className="btn-text">{btnAllProjects}</p>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="control-box">
            <button className="border-none fill-gray-200">
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
            <p className="text-base lg:text-md text-center w-[75px] text-orange">
              {slide} / {data.results}
            </p>
            <button className="border-none fill-gray-200">
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
        </>
      )}
    </section>
  );
};
