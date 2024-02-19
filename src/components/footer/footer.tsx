import Image from "next/image";
import Link from "next/link";

import footerSvg from "@/../public/logo.svg";
import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer className="w-full max-w-[1440px] py-[19px] md:px-[32px] lg:px-[62px] lg:pt-[40px] lg:pb-[17px]">
      <div className="w-full flex flex-col flex-wrap md:flex-row items-center justify-center md:items-start lg:flex-nowrap lg:justify-between">
        <div className="w-full flex justify-center lg:w-[300px] px-4">
          <Image
            src={footerSvg}
            alt="Логотип ГО Plai"
            width={674}
            height={280}
            priority
            className="w-[165px] h-[90px] md:w-[230px] md:h-[130px] lg:w-[270px] lg:h-[150px] mb-[36px] md:mb-[58px] lg:mb-0"
          />
        </div>
        <nav className="md:w-[280px] lg:w-[350px]">
          <ul className="w-full flex flex-col flex-wrap gap-y-[20px] md:flex-row md:gap-y-[30px] md:justify-stretch md:gap-x-[80px] text-center md:text-left md:justify-between text-[18px] lg:text-md leading-2 lg:leading-1 lg:font-medium">
            <li className="w-[96px] hover:text-light-blue">
              <Link href={`/${lng}/${NAVIGATION.about}`}>
                {t("nav-about-us")}
              </Link>
            </li>
            <li className="w-[96px] hover:text-light-blue lg:ml-auto">
              <Link href={`/${lng}/${NAVIGATION.news}`}>{t("nav-news")}</Link>
            </li>
            <li className="w-[96px] hover:text-light-blue">
              <Link href={`/${lng}/${NAVIGATION.projects}`}>
                {t("nav-projects")}
              </Link>
            </li>
            <li className="w-[96px] hover:text-light-blue lg:ml-auto">
              <Link href={`/${lng}/${NAVIGATION.reports}`}>
                {t("nav-reporting")}
              </Link>
            </li>
            <li className="w-[96px] hover:text-light-blue">
              <Link href={`/${lng}/${NAVIGATION.contacts}`}>
                {t("nav-contacts")}
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="text-center mt-[30px] md:mt-0 md:ml-auto lg:m-0 md:text-start text-[18px] lg:text-md leading-3">
          <li className="underline mb-[24px] md:mb-[22px] hover:text-light-blue">
            <Link target="_blank" href="/Police_Plai.pdf">
              {t("privacy-policy")}
            </Link>
          </li>
          <li className="underline mb-[24px] md:mb-0 hover:text-light-blue">
            <Link target="_blank" href="/Rules_Plai.pdf">
              {t("terms-of-use")}
            </Link>
          </li>
        </ul>
      </div>
      <a href="https://baza-trainee.tech/ua" target="_blank">
        <p className="mt-[50px] lg:mt-[26px] text-center lg:text-start text-base leading-3">
          {t("footer-baza-trainee")}
        </p>
      </a>
    </footer>
  );
};
