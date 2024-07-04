"use client";
import "../[lng]/globals.css";

import localFont from "next/font/local";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Providers } from "@/components";
import SideBar from "@/components/admin-components/side-bar/SideBar";
import { localStorageServices } from "@/services/local-storage";

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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const [isUser, setIsUser] = useState(false);

  const lodOut = () => {
    setIsUser(false);
    router.push("/admin");
  };

  useEffect(() => {
    const newToken = localStorageServices.getTokenFromLocal();

    if (newToken) {
      setIsUser(true);
      router.push("/admin/all-news");
    } else {
      router.push("/admin");
    }
  }, []);

  return (
    <html lang="uk">
      <head>
        <title>Plai Admin</title>
        <meta name="description" content="Admin panel for Plai" />
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
      </head>
      <Providers>
        <body className={`${fixel.variable} font-sans admin`}>
          <SideBar isUser={isUser || pathName !== "/admin"} logOutUser={lodOut}>
            {children}
          </SideBar>
        </body>
      </Providers>
    </html>
  );
}
