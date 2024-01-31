"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { TbArrowLeft } from "react-icons/tb";

import { API_URL,NAVIGATION  } from "@/commons/constants";
import { useOneNew } from "@/hooks/use-one-new";
import { formatDate } from "@/utils";

import { Link } from "../index";
import { SetTagColor } from "../news-card/news-card";
import Gallery from "./one-news-gallery";

const OneNews = ({ lng }: { lng: "en" | "uk" }) => {
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");
  const { data, isLoading } = useOneNew(`${API_URL.NEWS}/${newId}`);
   
  return (
    <section className="container py-8">
      {isLoading ? (
        <div>Loading.......</div>
      ) : (
          <>        
            <ul className="flex gap-1 text-sm leading-4 mb-9 md:mb-10 lg:mb-16 w-full max-w-[1440px]">
              <li className=" inline-block">
                <Link href={`/${lng}/${NAVIGATION.main}`}>{lng === "en" ? "Home" : "Головна"}  </Link>
              </li>
              <li>/</li>
              <li className=" inline-block">
                <Link href={`/${lng}/${NAVIGATION.news}`}>  {lng === "en" ? "News" : "Новини"}</Link>
              </li>
              <li>/</li>
              <li className=" inline-block">
                <Link href={`/${lng}/${NAVIGATION.oneNew}`} className=" text-dark-blue">  {lng === "en" ? data?.enTitle : data?.title}</Link>
              </li>
            
            </ul>
             <p
              className={`inline-block py-[10px] px-4 rounded-medium mb-5 h-[40px] text-base text-center leading-4
                ${SetTagColor(data?.category.en)}`}
              >
                {lng === "en" ? data?.category.en : data?.category.uk}
              </p>
          <div className="lg:flex flex-row-reverse gap-8 lg:h-[640px] lg:overflow-clip mb-10 lg:mb-16">
            <div className="w-[288px] h-[287px] md:w-[704px] md:h-[702px] lg:w-[640px] lg:h-auto bg-link-water relative mb-5">
              <Image
                src={data.mainPhoto}
                alt="title"
                fill
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="lg:w-[640px] lg:overflow-y-scroll font-normal">
             
              <h2 className=" font-bold text-xl leading-2 md:text-3xl mb-2 w-72 md:w-full">
                {lng === "en" ? data?.enTitle : data?.title}
              </h2>
                <p className=" text-gray-500 text-base leading-2 md:text-md font-normal mb-5">
                  {formatDate(data.date, lng)}
              </p>

              <p className=" text-base leading-4 first-line:font-semibold font-normal mb-8 md:mb-5 lg:pr-5">
                  {lng === "en" ? data?.enDescription : data?.description}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis sequi molestias, quas a ducimus aut asperiores. In, quae veritatis incidunt architecto, eveniet voluptatem facere atque natus explicabo sunt aperiam?
                  Officia debitis rem ex quis nobis accusantium expedita, veritatis nisi similique provident vitae aliquam quisquam nulla quos voluptate aperiam blanditiis, quasi alias, ut corrupti maxime dolore! Id, distinctio eius! Maxime.
                  Incidunt voluptate dicta non impedit omnis! Quo quasi repudiandae qui ea nobis nesciunt, tempore fugit distinctio consequuntur nulla. Similique eos aliquid omnis laudantium dolore id officiis consequatur reprehenderit temporibus quos.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit modi eius quia. Incidunt nostrum ducimus officia perspiciatis accusamus quo cupiditate sequi numquam eligendi doloremque exercitationem aliquam ratione, beatae facere?
                  Omnis qui quidem vitae quam modi est error, labore cum officia mollitia sed dignissimos excepturi necessitatibus sequi laudantium ex, maiores eum explicabo dicta a. Repellendus quos hic temporibus incidunt nemo.
                  Voluptates voluptatibus dolor maxime mollitia, omnis nisi sapiente deleniti autem consectetur ab iure nemo voluptatem quae minima consequatur vel pariatur deserunt doloribus cumque, dicta consequuntur odio? Ut, reprehenderit quidem? Qui?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum odit molestias veniam aliquid provident suscipit nam vero repellat at repellendus natus cum sed blanditiis, corrupti accusantium! Illo, alias aspernatur.
                  Odit delectus excepturi quam, dignissimos et distinctio minima. Dolorem modi id itaque a expedita, temporibus et dolor nam recusandae odio, aut obcaecati numquam neque assumenda fuga sequi fugit! Totam, rerum.
                  Magnam voluptatem repudiandae error vero nesciunt, cum aspernatur iure. Quidem voluptatibus officia perspiciatis beatae reprehenderit necessitatibus aut id, ducimus hic minus dolore esse, asperiores laudantium inventore, voluptatem incidunt vel explicabo.
              </p>
            </div>
          </div>
            {data?.photos.length!=0 && <div className=" mb-10">
              <Gallery images={data?.photos} />
            </div>}
          <Link href={`/${lng}/${NAVIGATION.news}`} className="inline-flex gap-2 px-6 py-4 md:text-md">
            <TbArrowLeft size="24px" color="black" />
            {lng === "en" ? "back" : "назад"}
          </Link>
        </>
      )}
    </section>
  );
};

export default OneNews;
