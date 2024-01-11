
import React from "react";

import { NAVIGATION } from "@/commons/constants";

import { Link } from "../link/link";
import { Spiral } from "../spiral/spiral";

export const NewsListMain = ({
  title,
  btnText,
  children,
}: {
  title: string;
  btnText: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="max-w-desktop lg:p-16 md:px-8 md:py-16 p-7 w-full">
      <div className="flex content-center justify-center">
        <Spiral className="stroke-link-water w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
        <h2 className="lg:h1 h2">{title}</h2>
      </div>
      {children}
      <div className="flex justify-center">
        <Link appearance="linkButtonPrimary" href={NAVIGATION.news}>
          <p className="btn-text">{btnText}</p>
        </Link>
      </div>
    </section>
  );
};
