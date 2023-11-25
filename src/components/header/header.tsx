
import NavLink from "next/link";
import { TbSearch } from "react-icons/tb";

import { useTranslation } from "@/app/i18n/index";
import NAVIGATION from "@/commons/constants";

import { Link } from "../index";
import { BurgerMenu } from "./burgerMenu";
import { Logo } from "./logo";
// import { SearchForm } from "./searchForm";
import { LanguageSwitcher } from "./switchLangBtn";

export const Header = async ({lng}:{lng:string}) => {
  const { t } = await useTranslation(lng, 'header');
  
  return (
    <header className=" relative z-10 bg-black top-0 w-[100%] flex text-white border-solid border-b border-white">
      <div className="container py-5 flex justify-between items-center md:flex-row-reverse">
        <Link
          href={"/"}
          appearance="linkButtonOrange"
          className="w-[194px] h-[60px] hidden md:flex justify-center items-center px-6 py-4 "
        >
          <p className="btn-text">{ t('support')}</p>
        </Link>

        <div className="hidden lg:flex items-center gap-3">
          <nav className="flex items-center">
            <ul className="ml-[40px] gap-x-3 text-md hidden lg:flex">
              
              <li className="py-[8px] px-[30px] w-40 text-center scale-100 transition-all hover:scale-125">
                <NavLink href={NAVIGATION.about}>
                 {t('nav-about-us')}
                </NavLink>
              </li>
              <li className="py-[8px] px-[30px] w-40 text-center scale-100 transition-all hover:scale-125">
                <NavLink href={NAVIGATION.projects}>
                 {t('nav-projects')}
                </NavLink>
              </li>
              <li className="py-[8px] px-[30px] w-40 text-center scale-100 transition-all hover:scale-125">
                <NavLink href={NAVIGATION.news}>
                  {t('nav-news')}
                </NavLink>
              </li>
              <li className="py-[8px] px-[30px] w-40 text-center scale-100 transition-all hover:scale-125">
                <NavLink  href="#">
                 {t('nav-contacts')}
                </NavLink>
              </li>
            </ul>
          </nav>
                <div className="">
                    <button type="submit" className="text-white px-6 py-2 border-none">
                        <TbSearch size="24px" color="white"/>   
                    </button>
                    
          <input type="search" id="search" className=" hidden w-[277px]  ps-12 pe-2 text-md py-1  border rounded-lg text-gray-500" placeholder="Search" required/> 
                </div>

          <LanguageSwitcher lng={lng} />
        </div>
        <Logo lng={lng} />
        <BurgerMenu lng={lng } />
      </div>
    </header>
  );
};

