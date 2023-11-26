import { BurgerMenu } from "./burgerMenu";
import { HeaderClient } from "./header-client";
import { NavHeader } from "./header-nav";
import { Logo } from "./logo";

export const Header = ({ lng }: { lng: "en" | "uk" }) => {
  return (
    <header className="h-[105px] relative z-10 bg-black top-0 w-[100%] flex text-white border-solid border-b border-white">
      <div className="w-full max-w-[1440px] mx-auto px-10 py-5 flex justify-between items-center md:flex-row-reverse">
        <HeaderClient lng={lng}>
          <NavHeader lng={lng} deviceLg={true} />
        </HeaderClient>
        <Logo lng={lng} />
        <BurgerMenu lng={lng}>
          <NavHeader lng={lng} deviceLg={false} />
        </BurgerMenu>
      </div>
    </header>
  );
};
