import Image from "next/image";
import React from "react";

const TextWithImage = ({
  text,
  image,
  title,
}: {
  text: string;
  image: string;
  title?: string;
}) => {
  return (
    <div
      className={`block lg:flex lg:gap-8 justify-between items-center lg:mb-4 ${
        !title && "flex-row-reverse"
      }`}
    >
      <p className="py-4 lg:py-0 lg:w-[755px] lg:text-justify">
        {title && <span className="hidden lg:block h1">{title}</span>}
        {text}
      </p>
      <div className="w-full lg:w-[530px] lg:h-[370px]">
        <Image
          width={700}
          height={700}
          src={image}
          alt={"project"}
          className="block w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export const Details = ({
  details,
  lng,
}: {
  lng: "en" | "uk";
  details: {
    start: string;
    enStart: string;
    text: string[];
    enText: string[];
    image: string[];
  };
}) => {
  const { start, enStart, image, text, enText } = details;

  const enLng = lng === "en";
  const textWithoutImage = () => {
    const exist = !(image.length === text.length);
    if (exist) {
      return enLng ? enText[image.length] : text[image.length];
    }
  };

  const setTitleForDesc = (ind: number) => {
    if (ind === 0) {
      return enLng ? enStart : start;
    }
  };

  return (
    <section className="bg-white w-full text-base md:text-small-md lg:text-lg lg:leading-4 font-normal text-black">
      <div className="max-w-[1440px] mx-auto px-4 py-8 md:px-8">
        <h2 className="font-bold text-2xl md:text-small-3xl leading-2 lg:hidden">
          {enLng ? enStart : start}
        </h2>
        {image.length > 0 &&
          image.map((item, ind) => (
            <TextWithImage
              key={ind + item[0]}
              text={enLng ? enText[ind] : text[ind]}
              image={item}
              title={setTitleForDesc(ind)}
            />
          ))}
        {textWithoutImage() && (
          <p className="text-justify mt-4 lg:mt-0">{textWithoutImage()}</p>
        )}
      </div>
    </section>
  );
};
