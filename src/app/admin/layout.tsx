import "../[lng]/globals.css";

import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import { IoExitOutline } from "react-icons/io5";

import { Providers } from "@/components";
import { Logo } from "@/components/header/logo";

const fixel = localFont({
  src: [
    {
      path: "../fonts/FixelDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FixelDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/FixelDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fixel",
});

const adminNavigation = [
  { text: "Новини", link: "admin/add-new" },
  { text: "Проєкти", link: "admin/add-project" },
  { text: "Про нас", link: "/" },
  { text: "Контакти", link: "/" },
  { text: "Звіти", link: "/" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <title>Plai Admin</title>
        <meta name="description" content="Admin panel for Plai" />
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
      </head>
      <Providers>
        <body className={`${fixel.variable} font-sans admin`}>
          <header className="fixed top-0 left-0 h-screen w-1/4 bg-black text-white flex justify-end py-8">
            <div className="w-[275px] px-4 flex flex-col gap-5">
              <Logo lng="uk" />
              <ul className="flex flex-col gap-4 mt-16 mb-auto">
                {adminNavigation.map(({ text, link }) => (
                  <li key={text} className="hover:text-horizon transition">
                    <Link href={link}>{text}</Link>
                  </li>
                ))}
              </ul>
              <button className="flex gap-2 w-fit px-4 text-base items-center justify-start border-none hover:text-horizon transition">
                <IoExitOutline size={"2em"} />
                <span>Вихід</span>
              </button>
            </div>
          </header>
          <div className="w-3/4 ml-auto bg-gray-200 text-black py-8">
            <div className="max-w-[1150px] px-8">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
