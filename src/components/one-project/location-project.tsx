import Image from "next/image";
import React from "react";
import { TbMapPin } from "react-icons/tb";

import cat from "../../../public/cat.svg";

export const Location = ({
  title,
  text,
  btnText,
  link,
}: {
  title: string;
  text: string;
  btnText: string;
  link: string;
}) => {
  return (
    <section className="bg-light-blue w-full max-w-[1440px] mx-auto  text-black">
      <div className=" md:flex gap-[35px] px-4 md:px-8 lg:px-16 py-8 lg:py-9 lg:max-w-[1440px] mx-auto">
        <div className="lg:pt-[50px] lg:pb-[100px] w-full max-w-[866px]">
          <h1 className="text-2xl md:text-[36px] lg:text-4xl leading-2 lg:leading-1 font-bold mb-6">
            {title}
          </h1>
          <p className=" text-[18px] leading-2 lg:text-xl lg:leading-4 font-normal">
            {text}
          </p>

          <a
            href={link}
            target="_blank"
            className="flex items-end lg:items-start p-2 gap-2 text-dark-blue mt-[22px] lg:mt-16 hover:underline"
          >
            <TbMapPin size="32px" />
            <p className="text-lg font-bold lg:font-semibold leading-2 lg:text-xl">
              {btnText}
            </p>
          </a>
        </div>
        <Image
          className="w-auto h-[150px] md:w-[198px] md:h-[185px] lg:w-[415px] lg:h-[388px]  mx-auto"
          src={cat}
          width="340"
          height="317"
          alt="cat_svg"
        />
      </div>
    </section>
  );
};
