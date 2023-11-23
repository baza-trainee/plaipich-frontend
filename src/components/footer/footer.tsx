import Image from "next/image";
import Link from "next/link";

import { useTranslation } from '@/app/i18n'
import NAVIGATION from '@/commons/constants';

import footerLogo from "../../../public/footer.svg";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'footer')
  return (
    <footer>
      <div className="w-[320px] mx-auto lg:w-[1440px] py-[19px] lg:px-[62px] lg:pt-[40px] lg:pb-[17px]">
        <div className="lg:flex gap-[160px]">
          <Image
            src={footerLogo}
            alt="Логотип ГО Plai Pich"
            width={674}
            height={280}
            priority
            className="w-[265px] h-[110px] lg:w-[337px] lg:h-[140px] mb-[36px] lg:mb-0 mx-auto lg:ml-0"
          />
          <nav>
            <ul className="lg:flex flex-wrap lg:w-[340px] text-center lg:justify-between text-[18px] lg:text-md leading-2 lg:leading-1 lg:font-medium">
              <li className="lg:mr-[160px] mb-[24px] lg:mb-[30px]">
                <Link href={`/${lng}${NAVIGATION.about}`}>{t('nav-about-us')}</Link>
              </li>
              <li className="mb-[24px] lg:mb-[30px] lg:mr-[9px]">
                <Link href={NAVIGATION.news}>Новини</Link>
              </li>
              <li className="lg:mr-[160px] mb-[24px] lg:mb-[30px]">
                <Link href={NAVIGATION.projects}>Проекти</Link>
              </li>
              <li className="mb-[24px] lg:mb-[30px]">
                <Link href="#">Звітність</Link>
              </li>
              <li className="mb-[24px] lg:mb-0">
                <Link href="#">Контакти</Link>
              </li>
            </ul>
          </nav>
          <ul className="text-center lg:text-start text-[18px] lg:text-md leading-3">
            <li className="underline mb-[24px] lg:mb-[22px]">
              <Link href="#">Політика конфіденційності</Link>
            </li>
            <li className="underline mb-[24px] lg:mb-0">
              <Link href="#">Правила користування сайтом</Link>
            </li>
          </ul>
        </div>
        <p className="lg:mx-[12px] mt-[52px] lg:mt-[26px] text-center lg:text-start text-base leading-3">
          Розробка Baza Trainee Ukraine 2023 © Усі права захищені
        </p>
      </div>
    </footer>
  );
};
