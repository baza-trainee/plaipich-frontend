import Image from "next/image";
import NextLink from "next/link";

import logoSvg from "@/../public/logo.svg";
import { NAVIGATION } from "@/commons/constants";

export const Logo = ({ lng }: { lng: string }) => {
  return (
    <NextLink
      className="w-[178px] flex gap-2 items-end"
      href={`/${lng}${NAVIGATION.main}`}
    >
      <Image className="w-[125px] h-[75px]" src={logoSvg} alt="Logo" />
    </NextLink>
  );
};
