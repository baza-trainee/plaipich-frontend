"use client";

import Image from "next/image";
import React, { useState } from "react";
import { TbMapPin, TbX } from "react-icons/tb";

import cat from "../../../public/cat.svg";
import { Loader } from "../loader/loader";

export const Location = ({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(true);
    console.log("open map modal");
  };
  const closeModal = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <section className="relative">
      <div className="bg-light-blue w-full  text-black ">
        <div className=" md:flex gap-[35px] px-4 md:px-8 lg:px-16 py-8 lg:py-9 lg:max-w-[1440px] mx-auto">
          <div className="lg:pt-[50px] lg:pb-[100px] w-full max-w-[866px]">
            <h1 className="text-2xl md:text-[36px] lg:text-4xl leading-2 lg:leading-1 font-bold mb-6">
              {title}
            </h1>
            <p className=" text-[18px] leading-2 lg:text-xl lg:leading-4 font-normal">
              {text}
            </p>

            <button
              onClick={openModal}
              className="flex items-center p-2 gap-2 text-lg font-bold leading-2 text-dark-blue border-none mt-[22px] lg:mt-16 lg:font-semibold lg:text-xl"
            >
              <TbMapPin size="32px" color="#0A4B70" />
              {link}
            </button>
          </div>
          <Image
            onClick={closeModal}
            className="w-auto h-[150px] md:w-[198px] md:h-[185px] lg:w-[415px] lg:h-[388px]  mx-auto"
            src={cat}
            width="340"
            height="317"
            alt="cat_svg"
          />
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "absolute top-0 w-[100vw] min-h-[100vh] bg-black text-white"
            : "hidden"
        }`}
      >
        {(
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1RFqrYFHoN-NYpBHcaiKh9q2y1hn7MbE&ehbc=2E312F"
            className="w-[100vw] h-[100vh]"
          ></iframe>
        ) || <Loader />}
        <button
          onClick={closeModal}
          className="text-md top-2 right-2 absolute opacity-50 p-1  transition hover:opacity-100 hover:animate-bounce text-white bg-water-blue"
        >
          <TbX size="40px" color="white" />
        </button>
      </div>
    </section>
  );
};
