import Image from "next/image";
import React from "react";

import bgPlai from "/public/images/bg-plai.png";
import plai1 from "/public/images/plai-1.jpg";
import plai2 from "/public/images/plai-2.jpg";
import plai3 from "/public/images/plai-3.jpg";

import { Link } from "../link/link";

export const PlaiAbout = () => {
  return (
    <section id="about" className="w-full relative overflow-hidden">
      <div className="w-[1000px] h-[450px] md:w-full relative left-[-200px] md:left-0">
        <Image
          src={bgPlai}
          alt="Plai"
          width={700}
          height={500}
          className="w-[1600px] h-full object-center"
        />
      </div>
      <h1 className="hidden h2 md:block absolute top-[150px] left-4 text-white">
        Про Plai
      </h1>
      <p className="absolute text-6 top-0 left-0 pl-5 pt-10">
        Головна / <span className="text-light-blue">Про нас</span>
      </p>
      <nav className="absolute top-5 left-0 md:top-[350px] md:px-4 w-full h-[430px] md:h-[50px] flex flex-col justify-center">
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
      <div className="mx-auto md:grid md:grid-cols-6 md:auto-rows-auto max-w-[1440px] px-4 md:px-8 py-8 lg:p-[3.875rem] flex flex-col items-center bg-white text-black">
        <p className="text-3 md:text-2 mb-4 md:p-4 md:mb-0 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
          <span className="mr-2 h9">Plai</span>
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
          className="w-full min-h-[200px] md:mb-8 md:h-[340px] object-center md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-6"
        />
        <p className="text-3 md:text-2 my-4 md:px-4 md:my-4 md:col-start-3 md:col-end-7 md:row-start-4 md:row-end-5">
          Ми створюємо умови для об&apos;єднання митців і художників, надаючи їм
          можливість спілкуватися, обмінюватися ідеями та спільно вдосконалювати
          своє мистецтво.
        </p>
        <Image
          src={plai3}
          alt="Plai"
          width={700}
          height={500}
          className="w-full min-h-[200px] md:min-h-[250px] max-h-[300px] object-center md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-4"
        />
        <p className="text-3 md:text-2 my-4 md:my-0 md:mb-8 md:px-4 md:col-start-3 md:col-end-7 md:row-start-5 md:row-end-6">
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
          className="w-full min-h-[200px] object-center md:col-start-1 md:col-end-7 md:row-start-6 md:row-end-7"
        />
      </div>
    </section>
  );
};
