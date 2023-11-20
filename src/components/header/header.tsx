import { TbSearch } from "react-icons/tb";

import { Link } from "../index";
import { BurgerMenu } from "./burgerMenu";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./switchLangBtn";
// import Link from 'next/link';

export const Header = () => {
    
    return (
        <header className="bg-black top-0 w-full flex text-white border-solid border-b border-white">
            <div className="container py-5 flex justify-between items-center md:flex-row-reverse">
                <Link href={"/"} appearance="linkButtonOrange"
                        className="hidden md:flex "
                    >
                        <p className="btn-text">Підтримати</p>
                </Link>
               
                <div className="hidden lg:flex items-center">
                    <nav className="flex items-center">
                    
                    <ul className="ml-[40px] gap-x-3 text-md hidden lg:flex">
                        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125"><Link href='/'>Проєкти</Link></li>
                        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125"><Link href='/'>Про нас</Link></li>
                        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125"><Link href='/'>Новини</Link></li>
                        <li className="py-[8px] px-[30px] scale-100 transition-all hover:scale-125"><Link href='/'>Контакти</Link></li>
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
