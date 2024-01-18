import Image from "next/image";
import React from "react";

import { Button } from "..";

export const Poster = ({
  title,
  poster,
  status,
}: {
  title: string;
  poster: string;
  status: boolean;
}) => {
  return (
    <section
      id="poster"
      className="bg-black text-white flex flex-row-reverse py-8"
    >
      <div className="w-full md:w-[640px] md:h-[640px] overflow-hidden">
        <Image
          src={poster}
          alt={title}
          width={1000}
          height={800}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start p-12 gap-16">
        <h1 className="h1 max-w-[300px]">{title}</h1>
        {status && (
          <Button type="button" className="btn-orange min-w-[250px]">
            <p>Підтримати проект</p>
          </Button>
        )}
      </div>
    </section>
  );
};
