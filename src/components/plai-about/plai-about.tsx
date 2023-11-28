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
      <div className="w-[1000px] h-[450px] relative left-[-200px]">
        <Image
          src={bgPlai}
          alt="Plai"
          width={0}
          height={0}
          className="w-[1600px] h-full object-center"
        />
      </div>
      <h1 className="hidden absolute top-0 left-0 text-orange">Про Plai</h1>
      <p className="absolute text-6 top-0 left-0 pl-5 pt-10">
        Головна / <span className="text-light-blue">Про нас</span>
      </p>
      <nav className="absolute top-5 left-0 w-full h-[430px] flex flex-col justify-center">
        <ul className="flex flex-col gap-10 justify-center items-center">
          <li>
            <Link href={"#"} appearance="linkButtonPrimary">
              Місія Plai
            </Link>
          </li>
          <li>
            <Link href={"#"} appearance="linkButtonSecondary">
              Місія Plai
            </Link>
          </li>
          <li>
            <Link href={"#"} appearance="linkButtonSecondary">
              Місія Plai
            </Link>
          </li>
          <li>
            <Link href={"#"} appearance="linkButtonSecondary">
              Місія Plai
            </Link>
          </li>
          <li>
            <Link href={"#"} appearance="linkButtonSecondary">
              Місія Plai
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:p-[3.875rem] flex flex-col items-center bg-white text-black">
        <p className="text-3 mb-4">
          <span className="mr-2 h9">Plai</span>
          громадська організація, яка має найвищу мету сприяти розвитку митців і
          художників, а також впливати на формування відповідального та
          культурного суспільства через благодійні заходи та реалізацію
          різноманітних проектів.
        </p>
        <Image
          src={plai1}
          alt="Plai"
          width={0}
          height={0}
          className="w-full min-h-[200px] object-center"
        />
        <p className="text-3 my-4">
          Ми створюємо умови для об&apos;єднання митців і художників, надаючи їм
          можливість спілкуватися, обмінюватися ідеями та спільно вдосконалювати
          своє мистецтво.
          </p>
          <Image
            src={plai3}
            alt="Plai"
            width={0}
            height={0}
            className="w-full min-h-[200px] object-center"
          />
          <p className="text-3  my-4">
            Ми надаємо доступ до ресурсів, які допомагають розвивати їхню
            творчість. Ми ініціюємо та підтримуємо різноманітні проекти,
            спрямовані на популяризацію мистецтва, культурної спадщини та
            творчого розвитку. Ці проекти створюють можливості для митців та
            художників реалізувати свої ідеї та подарувати суспільству нові
            враження.
          </p>
        <Image
          src={plai2}
          alt="Plai"
          width={0}
          height={0}
          className="w-full min-h-[200px] object-center"
        />
      </div>
    </section>
  );
};
