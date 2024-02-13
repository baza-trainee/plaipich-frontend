import React from "react";

export const Description = ({ description }: { description: string }) => {
  const sideText = description.split("**")[0];
  const mainText = description.split("**")[1];
  return (
    <section className="w-full bg-link-water text-black px-4 py-6 md:px-8 md:py-14 lg:p-16">
      <p className="max-w-[1440px] mx-auto flex flex-col justify-between text-base gap-4 md:flex-row md:text-small-md lg:text-xl md:items-center">
        <span className="flex-1 font-bold text-2xl md:text-small-3xl lg:text-4xl">
          {sideText}
        </span>
        <span className="w-full md:w-2/3 lg:w-[1025px]">{mainText}</span>
      </p>
    </section>
  );
};
