import Image from "next/image"
import React from "react"

import OleksandraV from "/public/about-us/our-team/OleksandraV.png"
import { useTranslation } from "@/app/i18n"

interface OurTeamCard {
  name: string
  content: {
    title: string
    cardText: string
    imageUrl: string
  }
  id: string
}

export const OurTeam = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "our-team")
  const ourTeamCardsData = t("cards-data", {
    returnObjects: true,
  }) as OurTeamCard[]

  return (
    <section className="w-full" id="our-team">
      <div className="mx-auto max-w-[1440px] px-4 lg:p-[3.875rem] flex flex-col items-center">
        <h2 className="h1 capitalize text-white pb-9">{t("team-title")}</h2>
        <div className="flex flex-col lg:flex-row items-center gap-y-6 md:gap-y-8 lg:gap-x-8">
          {ourTeamCardsData?.map((card) => (
            <div className="flex flex-col gap-y-2" key={card.id}>
              <a
                href=""
                className="relative opacity-100 group inline-block max-w-[417px] h-[480px] overflow-hidden">
                <Image
                  src={OleksandraV}
                  alt={card.name}
                  width={0}
                  height={0}
                  className="w-full h-full object-cover object-center"
                  priority
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-all bg-dark-blue group-hover:opacity-60">
                  <p className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[80%] text-sm md:text-lg leading-2 md:leading-4 text-white">
                    {card.content.cardText}
                  </p>
                </div>
              </a>
              <a href="">
                <span className="text-lg md:text-xl md:font-semibold font-bold leading-2 text-light-blue whitespace-pre-wrap">
                  {card.name}
                </span>
              </a>
              <p className="text-base leading-2 whitespace-pre-wrap">
                {card.content.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
