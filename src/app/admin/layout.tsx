import "../[lng]/globals.css";

import localFont from "next/font/local";
import React from "react";

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

export default async function RootLayout({
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
        <body
          className={`${fixel.variable} font-sans bg-black text-white flex admin`}
        >
          <header className="w-1/4 min-h-screen flex justify-end py-8">
            <div className="w-[275px] px-4 flex flex-col gap-5">
              <Logo lng="uk" />
              <ul className="mb-auto">
                <li>h</li>
                <li>h</li>
                <li>h</li>
                <li>h</li>
                <li>h</li>
                <li>h</li>
              </ul>
              <button className="">Вихід</button>
            </div>
          </header>
          <div className="w-3/4 bg-gray-200 text-black py-8">
            <div className="max-w-[1150px] px-8">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
