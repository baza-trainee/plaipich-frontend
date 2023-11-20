"use client";

import { useState } from "react";
import { TbAlignRight, TbSearch,TbX } from "react-icons/tb";

import { Link } from "../index";
import { LanguageSwitcher } from "./switchLangBtn";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (           
            <nav className="relative  lg:hidden">
                <button className="lg:hidden border-none p-0" onClick={toggleMenu}> 
                {isOpen ?  <TbX size="40px" color="white" /> : <TbAlignRight size="40px" color="white" /> }    
                                                    
                </button>

                <div className={`${isOpen ? "burger-menu relative opacity-1 translate-y-0" : "hidden"}`}>
                    <div className="burger-backdrop fixed inse bg-gray-500 opacity-25"></div>
                    <div className="translate-y-0 absolute top-[3px] right-0 md:left-0  w-80 px-5 pt-14 pb-8 bg-black text-center">
                    
                    <form className="mb-[68px]">   
                            
                            <div className="relative">
                                <button type="submit" className="text-white absolute start-0 top-0 px-2 py-2 border-none">
                                    <TbSearch size="24px" color="black"/>   
                                </button>
                                
                                <input type="search" id="search" className="block w-[277px]  ps-12 pe-2 text-md py-1  border rounded-lg text-gray-500" placeholder="Search" required/> 
                            </div>
                        </form>
                        
                        <ul className=" text-[18px]">
                            <li className="py-2 px-[53px]"><Link className="hover:text-lg" href='/'>Проєкти</Link></li>
                            <li className="py-2 px-[53px]"><Link className="hover:text-lg" href='/'>Про нас</Link></li>
                            <li className="py-2 px-[53px]"><Link className="hover:text-lg" href='/'>Новини</Link></li>
                            <li className="py-2 px-[53px]"><Link className="hover:text-lg" href='/'>Контакти</Link></li>
                        
                        </ul>
                    <Link href={"/"} appearance="linkButtonOrange"
                        className=" w-48 px-6 py-4 mb-14 md:hidden"
                    >
                        <p className="">Підтримати</p>
                    </Link> 
                    <LanguageSwitcher/>

                    </div>
                
                </div>
            </nav>
        
    )
}

// font-family: Fixel;
// font-size: 18px;
// font-style: normal;
// font-weight: 400;
// line-height: 120%; /* 21.6px */

// font-family: Fixel;
// font-size: 20px;
// font-style: normal;
// font-weight: 400;
// line-height: 130%; /* 26px */
