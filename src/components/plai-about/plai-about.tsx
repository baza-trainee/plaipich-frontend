import "./plai-about.css";

import Image from "next/image";
import React from "react";

import bgPlai from "/public/images/bg-plai.png";
import plai1 from "/public/images/plai-1.jpg";
import plai2 from "/public/images/plai-2.jpg";
import plai3 from "/public/images/plai-3.jpg";

import { Link } from "../link/link";

export const PlaiAbout = () => {
  return (
    <section id="about" className="w-full relative overflow-hidden bg-white">
      <div className="w-[1000px] h-[450px] md:w-full relative left-[-200px] md:left-0">
        <Image
          src={bgPlai}
          alt="Plai"
          width={700}
          height={500}
          className="w-[1600px] h-full object-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[450px] py-8">
        <p className="text-6 mb-12 md:mb-[100px] w-full max-w-[1440px] mx-auto px-4 md:px-8">
          Головна / <span className="text-light-blue">Про нас</span>
        </p>
        <h1 className="hidden mb-[150px] h2 md:block lg:h1  text-white w-full max-w-[1440px] mx-auto px-8">
          Про Plai
        </h1>
        <nav className="md:px-4 w-full max-w-[1440px] mx-auto px-8 flex flex-col justify-center">
          <ul className="flex flex-col md:flex-row gap-10 md:gap-6 justify-center md:justify-start items-center">
            <li>
              <Link href={"#"} appearance="linkButtonPrimary">
                Місія Plai
              </Link>
            </li>
            <li>
              <Link href={"#"} appearance="linkButtonSecondary">
                Наша команда
              </Link>
            </li>
            <li>
              <Link href={"#"} appearance="linkButtonSecondary">
                Партнери
              </Link>
            </li>
            <li>
              <Link href={"#"} appearance="linkButtonSecondary">
                Звіти
              </Link>
            </li>
            <li>
              <Link href={"#"} appearance="linkButtonSecondary">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid-box">
        <p className="text-first text-3 md:text-2 lg:text-4">
          <span className="mr-2 h9 lg:text-">Plai</span>
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
        <p className="text-3 md:text-2 text-second">
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
        <p className="text-3 md:text-2 text-third">
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
