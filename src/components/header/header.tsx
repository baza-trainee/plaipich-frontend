
import { TbSearch } from "react-icons/tb";

import { Link } from "../index";
import { BurgerMenu } from "./burgerMenu";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./switchLangBtn";
// import Link from 'next/link';

export const Header = () => {
    
    return (
        <header className="fixed z-10 bg-black top-0 w-full flex text-white border-solid border-b border-white">
            <div className="container py-5 flex justify-between items-center md:flex-row-reverse">
                <Link href={"/"} appearance="linkButtonOrange"
                        className="w-[194px] h-[60px] text-center px-6 py-4 ml-16 hidden md:block "
                    >
                        <p className="btn-text">Підтримати</p>
                </Link>
               
                <div className="hidden lg:flex items-center">
                    <nav className="flex items-center">
                    
                    <ul className="ml-[40px] gap-x-3 text-md hidden lg:flex">
                        <li><Link className="py-[8px] px-[30px] hover:text-lg" href='/'>Проєкти</Link></li>
                        <li><Link className="py-[8px] px-[30px] hover:text-lg" href='/'>Про нас</Link></li>
                        <li><Link className="py-[8px] px-[30px] hover:text-lg" href='/'>Новини</Link></li>
                        <li><Link className="py-[8px] px-[30px] hover:text-lg" href='/'>Контакти</Link></li>
                    </ul>                 
                    </nav>
                
                    <form className="">
                        <button type="submit" className="border-none py-[8px] px-[35px]">
                            <TbSearch size="24px" color="white"/>
                        </button>                      
                        <input className="hidden hover:block" type="text" />
                    </form>    
                    
                    <LanguageSwitcher/> 
                </div>
            <Logo />
                <BurgerMenu /> 
            </div>
        </header>
    )
}
