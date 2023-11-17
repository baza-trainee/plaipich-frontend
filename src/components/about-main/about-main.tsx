import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "@/components";

export const AboutMain = () => {
  return (
    <section className="py-[72px] text-black bg-pink-pearl w-full">
      <div className="w-full mx-auto max-w-[1440px] px-4 flex justify-normal flex-col">
        <div className="flex lg:flex-row flex-col justify-between items-center pb-7 md:pb-10 lg:pb-14">
          <h2 className="h1 mr-5 lg:mb-0 mb-10 lg:self-auto self-start">Привіт!</h2>
          <p className="leading-2 md:max-w-[950px] self-start md:text-md lg:text-xl">
            Ми Plai – громадська організація, мистецьке об’єднання, що створює культутні, освітні проєкти, об’єднує
            митців та підприємців Вінниці. ГО заснована в 2019 році в Вінниці{" "}
          </p>
        </div>

        <Link
          className="link-text self-end px-6 py-4.5 hover:no-underline transition-colors border border-transparent focus:border-black focus:outline-none hover:text-pink-pearl active:text-white rounded-large hover:bg-black"
          href={"/about-us"}
        >
          Більше про нас <FaArrowRightLong className="inline-block ml-2 align-middle" />
        </Link>
      </div>
    </section>
  );
};
