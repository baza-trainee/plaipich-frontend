import Image from "next/image";
import React from "react";

import playMissionImg from "../../../public/images/play-mission.jpg";
import missionData from "./mission-data";

export const Mission = () => {
  return (
    <section className="overflow-hidden">
      <div
        className="uppercase leading-3 font-bold mt-8 lg:mt-16 text-lg md:text-2xl lg:text-4xl 
      lg:-mr-56 md:-mr-40 -mr-80 -ml-1"
      >
        <span className="text-gray-400">Культура</span>{" "}
        <span className="text-gray-100">Об’єднанняЯ</span>{" "}
        <span className="text-gray-400">Мистецтво</span>
        <span className="text-gray-100"> Виставки </span>
        <span className="text-gray-100">Творчість </span>
        <span className="text-pink-pearl">Місія PLAI </span>
        <span className="text-gray-100">Ревіталізація</span>
        <span className="text-gray-400"> Кіно </span>
        <span className="text-gray-100">Музика</span>
      </div>
      <div
        className="px-4 py-8 md:p-8 lg:p-16
      lg:gap-8 lg:grid lg:grid-rows-none lg:grid-cols-2 lg:row-start-2"
      >
        <div className="md:pb-8">
          <h2 className="md:w-3/4 lg:h1 h2 normal-case">
            Наша місія сформульована наступним чином
          </h2>
          <div>
            {missionData.map((mission) => (
              <div
                key={mission.id}
                className="border-t mt-6 md:grid md:grid-cols-[2fr,3fr]"
              >
                <div className="text-xl font-medium mt-4 md:m-0 md:flex md:items-center ">
                  {mission.id}
                </div>
                <div>
                  <h3 className="text-6 md:text-5 normal-case text-light-blue mt-2">
                    {mission.title}
                  </h3>
                  <p className="mt-1 text-3 md:text-2 lg:text-4">{mission.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={playMissionImg}
          alt="Our mission picture"
          className="mx-auto lg:order-first md:block hidden"
        />
      </div>
    </section>
  );
};
