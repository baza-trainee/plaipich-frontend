import Image from "next/image";
import { HiArrowLongLeft } from "react-icons/hi2";

import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";

import error404 from "../../../public/images/not-found/error404.svg"
import { Link } from "../link/link"

export const NotFound = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "not-found");
  return (
    <section
      className="w-full border-solid border-b border-white bg-gradient-radial from-white/5 to-transparent to-60% bg-[length:745px] bg-no-repeat bg-[center_bottom_3rem]"
      id="not-found">
      <div className="max-w-[1440px] m-auto ">
        <div className="flex items-center justify-center flex-col py-10 md:py-20 gap-10 md:gap-[3.75rem] px-4 md:px-8 ">
          <Image src={error404} alt={"error404"} />
          <p className="text-[1.175rem] md:text-lg leading-2 md:leading-4">
            {t("text")}
          </p>
          <Link href={NAVIGATION.main} appearance="linkButtonSecondary">
            <span className="flex flex-row gap-2 items-center leading-2">
              <HiArrowLongLeft size="24px" /> {t("link")}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
