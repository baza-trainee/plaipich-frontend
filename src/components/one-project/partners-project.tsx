import Image from "next/image";
import React from "react";

import { InfiniteLooper } from "../partners/infinite-looper/infinite-looper";

export const PartnersProject = ({
  partners,
  lng,
}: {
  partners: { name: string; logo: string }[];
  lng: "en" | "uk";
}) => {
  return (
    <section className="w-full bg-white text-black py-8 lg:py-16">
      <div className="container max-w-desktop flex flex-col gap-4 lg:gap-6">
        <h2 className="font-bold text-2xl md:text-small-3xl lg:text-4xl lg:leading-4">
          {lng === "en"
            ? "The project received financial support"
            : "Проєкт отримав фінансову підтримку"}
        </h2>
        <p className="text-base md:text-small-md lg:text-xl">
          {lng === "en"
            ? "Implementation of this project was made possible thanks to cooperation with:"
            : "Здійснення цього проекту стало можливим завдяки співпраці з:"}
        </p>
        <InfiniteLooper direction="right" speed={10}>
          {partners.map((partner, ind) => (
            <div
              key={partner.name + ind}
              className="grid place-items-center w-36 md:w-full"
            >
              <Image
                src={"https://i.gyazo.com/3dcdba95540551f1a3e4674d1b3715c7.png"}
                alt={partner.name}
                className="object-contain max-w-full"
                width={300}
                height={140}
              />
            </div>
          ))}
        </InfiniteLooper>
      </div>
    </section>
  );
};
