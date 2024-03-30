import "../[lng]/globals.css";

import localFont from "next/font/local";
import React from "react";

import { Providers } from "@/components";
import SideBar from "@/components/admin-components/side-bar/SideBar";

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
          <header className="fixed top-0 left-0 h-screen w-1/4 bg-black text-base text-white flex justify-end py-8">
            <SideBar />
          </header>
          <div className="w-3/4 ml-auto bg-gray-200 text-black py-8">
            <div className="max-w-[1150px] px-8">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
