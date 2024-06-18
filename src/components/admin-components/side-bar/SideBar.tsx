"use client";
import Link from "next/link";
import React from "react";
import { IoExitOutline } from "react-icons/io5";

// import { APP_CONST } from "@/commons";
import { Logo } from "@/components/header/logo";
import { apiService } from "@/services/api-service";
import { localStorageServices } from "@/services/local-storage";

const SideBar = ({
  children,
  isUser,
  logOutUser
}: {
  children: React.ReactNode;
  isUser: boolean;
  logOutUser: () => void;
}) => {
  const adminNavigation = [
    { text: "Новини", link: "/admin/all-news" },
    { text: "Додати новину", link: "/admin/add-new" },
    { text: "Проєкти", link: "/dataadmin/all-projects" },
    { text: "Додати проєкт", link: "/admin/add-project" },
    { text: "Про нас", link: "/" },
    { text: "Контакти", link: "/" },
    { text: "Звіти", link: "/" },
  ];

  const logOff = () => {
    logOutUser();
    localStorageServices.clearLocal();
    apiService.setToken("");
  };

  return (
    <>
      <header className="fixed top-0 left-0 h-screen w-1/4 bg-black text-base text-white flex justify-end py-8">
        <div className="w-[275px] px-4 flex flex-col gap-5">
          <Logo lng="uk" />
          {isUser && (
            <>
              <ul className="flex flex-col gap-4 mt-16 mb-auto">
                {adminNavigation.map(({ text, link }) => (
                  <li key={text} className="hover:text-horizon transition">
                    <Link href={link}>{text}</Link>
                  </li>
                ))}
              </ul>
              <button
                className="flex gap-2 w-fit px-4 text-base items-center justify-start border-none hover:text-horizon transition"
                onClick={logOff}
              >
                <IoExitOutline size={"2em"} />
                <span>Вихід</span>
              </button>
            </>
          )}
        </div>
      </header>
      <div className="w-3/4 min-h-screen ml-auto bg-gray-200 text-black flex flex-col justify-center items-center">
        <div className="max-w-[1150px] px-8">{children}</div>
      </div>
    </>
  );
};

export default SideBar;
