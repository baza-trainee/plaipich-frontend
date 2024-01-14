import Image from "next/image";
import Link from "next/link";

import footerSvg from "@/../public/logo.svg";
import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <footer className="bg-black text-white">
      <div className="w-[320px] mx-auto md:w-[768px] lg:w-[1440px] py-[19px] md:px-[32px] lg:px-[62px] lg:pt-[40px] lg:pb-[17px]">
        <div className="lg:flex gap-[160px]">
          <Image
            src={footerSvg}
            alt="Логотип ГО Plai"
            width={674}
            height={280}
            priority
            className="w-[165px] h-[90px] md:w-[230px] md:h-[130px] lg:w-[270px] lg:h-[150px] mb-[36px] md:mb-[58px] lg:mb-0 mx-auto lg:ml-0"
          />
          <div className="md:flex md:justify-between lg:gap-[133px]">
            <nav>
              <ul className="md:flex flex-wrap md:w-[340px] text-center md:text-left md:justify-between text-[18px] lg:text-md leading-2 lg:leading-1 lg:font-medium">
                <li className="md:w-[96px] md:mr-[140px] mb-[24px] md:mb-[30px] hover:text-light-blue">
                  <Link href={`/${lng}/${NAVIGATION.about}`}>
                    {t("nav-about-us")}
                  </Link>
                </li>
                <li className="mb-[24px] md:mb-[30px] md:w-[96px] hover:text-light-blue">
                  <Link href={`/${lng}/${NAVIGATION.news}`}>
                    {t("nav-news")}
                  </Link>
                </li>
                <li className="md:w-[96px] md:mr-[140px] mb-[24px] md:mb-[30px] hover:text-light-blue">
                  <Link href={`/${lng}/${NAVIGATION.projects}`}>
                    {t("nav-projects")}
                  </Link>
                </li>
                <li className="mb-[24px] md:mb-[30px] md:w-[96px] hover:text-light-blue">
                  <Link href={`/${lng}/${NAVIGATION.reports}`}>
                    {t("nav-reporting")}
                  </Link>
                </li>
                <li className="mb-[24px] md:mb-0 hover:text-light-blue">
                  <Link href={`/${lng}/${NAVIGATION.contacts}`}>
                    {t("nav-contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
            <ul className="text-center md:text-start text-[18px] lg:text-md leading-3">
              <li className="underline mb-[24px] md:mb-[22px] hover:text-light-blue">
                <Link href="#">{t("privacy-policy")}</Link>
              </li>
              <li className="underline mb-[24px] md:mb-0 hover:text-light-blue">
                <Link href="#">{t("terms-of-use")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="lg:mx-[12px] mt-[52px] lg:mt-[26px] text-center lg:text-start text-base leading-3">
          {t("footer-baza-trainee")}
        </p>
      </div>
    </footer>
  );
};
