import "./plai-about.css";

import Image from "next/image";
import React from "react";

import bgPlai from "/public/images/bg-plai.jpg";
import plai1 from "/public/images/plai-1.jpg";
import plai2 from "/public/images/plai-2.jpg";
import plai3 from "/public/images/plai-3.jpg";

import { Link } from "../link/link";

export const PlaiAbout = () => {
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
          Головна / <span className="text-light-blue">Про нас</span>
        </p>
        <h1 className="hidden mb-[150px] lg:mb-[120px] text-small-4xl leading-2 md:block lg:text-4xl lg:leading-4  text-white w-full max-w-[1440px] mx-auto px-8">
          Про Plai
        </h1>
        <nav className="w-full m-0 max-w-[1440px] mx-auto md:px-8 flex flex-col justify-center">
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center md:justify-start items-center">
            <li>
              <Link
                href={"#"}
                appearance="linkButtonPrimary"
                className="flex py-3 lg:py-4"
              >
                <p className="btn-text">Місія Plai</p>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                appearance="linkButtonSecondary"
                className="flex py-3 lg:py-4"
              >
                <p className="btn-text">Наша команда</p>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                appearance="linkButtonSecondary"
                className="flex py-3 lg:py-4"
              >
                <p className="btn-text">Партнери</p>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                appearance="linkButtonSecondary"
                className="flex py-3 lg:py-4"
              >
                <p className="btn-text">Звіти</p>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                appearance="linkButtonSecondary"
                className="flex py-3 lg:py-4"
              >
                <p className="btn-text">Контакти</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid-box">
        <p className="text-first font-normal text-3 md:text-small-md lg:text-md lg:leading-3">
          <span className="mr-2 font-bold h9 lg:text-xl">Plai</span>
          громадська організація, яка має найвищу мету сприяти розвитку митців і
          художників, а також впливати на формування відповідального та
          культурного суспільства через благодійні заходи та реалізацію
          різноманітних проектів.
        </p>
        <Image
          src={plai1}
          alt="Plai"
          width={700}
          height={500}
          className="image-first"
        />
        <p className="text-3 font-normal md:text-small-md lg:text-md lg:leading-3 text-second">
          Ми створюємо умови для об&apos;єднання митців і художників, надаючи їм
          можливість спілкуватися, обмінюватися ідеями та спільно вдосконалювати
          своє мистецтво.
        </p>
        <Image
          src={plai3}
          alt="Plai"
          width={700}
          height={500}
          className="image-second"
        />
        <p className="text-3 font-normal md:text-small-md lg:text-md lg:leading-3 text-third">
          Ми надаємо доступ до ресурсів, які допомагають розвивати їхню
          творчість. Ми ініціюємо та підтримуємо різноманітні проекти,
          спрямовані на популяризацію мистецтва, культурної спадщини та творчого
          розвитку. Ці проекти створюють можливості для митців та художників
          реалізувати свої ідеї та подарувати суспільству нові враження.
        </p>
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
