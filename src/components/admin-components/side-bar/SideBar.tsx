"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";

import { APP_CONST } from "@/commons";
import { Logo } from "@/components/header/logo";
import { apiService } from "@/services/api-service";
import { localStorageServices } from "@/services/local-storage";

const SideBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isUser, setUser] = useState(false);

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
    localStorageServices.clearLocal();
    apiService.setToken("");
    setUser(false);
  };

  useEffect(() => {
    const token: string | undefined = localStorageServices.getTokenFromLocal();

    if (token) {
      apiService.setToken(token);
      apiService
        .getRequest(APP_CONST.API_URL.USER)
        .then(() => {
          setUser(true);
          router.replace("/admin/all-news");
        })
        .catch(() => {
          setUser(false);
        });
    }
  }, [pathName]);

  return (
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
  );
};

export default SideBar;
