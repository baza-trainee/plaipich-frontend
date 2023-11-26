import Image from "next/image";
import React from "react";

import bgPlai from "/public/images/bg-plai.png";

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
      <div className="mx-auto max-w-[1440px] px-4 lg:p-[3.875rem] flex flex-col items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          molestias excepturi, est porro earum unde, praesentium repudiandae
          esse sunt perspiciatis corrupti asperiores nam animi consequatur.
          Magni sequi cumque error consequuntur.
        </p>
        <Image
          src={bgPlai}
          alt="Plai"
          width={0}
          height={0}
          className="w-full h-[200px] object-center"
        />
                <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          molestias excepturi, est porro earum unde, praesentium repudiandae
          esse sunt perspiciatis corrupti asperiores nam animi consequatur.
          Magni sequi cumque error consequuntur.
        </p>
        <Image
          src={bgPlai}
          alt="Plai"
          width={0}
          height={0}
          className="w-full h-[200px] object-center"
        />
                <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          molestias excepturi, est porro earum unde, praesentium repudiandae
          esse sunt perspiciatis corrupti asperiores nam animi consequatur.
          Magni sequi cumque error consequuntur.
        </p>
        <Image
          src={bgPlai}
          alt="Plai"
          width={0}
          height={0}
          className="w-full h-[200px] object-center"
        />
      </div>
    </section>
  );
};
