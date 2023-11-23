import React from "react";

import { BurgerMenu } from "./burgerMenu";
import { HeaderClient } from "./header-client";
import { NavHeader } from "./header-nav";
import { Logo } from "./logo";

export const Header = ({ lng }: { lng: "en" | "uk" }) => {
  return (
    <header className="bg-black top-0 w-full flex text-white border-solid border-b border-white">
      <div className="w-full max-w-[1440px] mx-auto px-10 py-5 flex justify-between items-center md:flex-row-reverse">
        <HeaderClient lng={lng}>
          <NavHeader lng={lng} />
        </HeaderClient>
        <Logo lng={lng} />
        <BurgerMenu />
      </div>
    </header>
  );
};
