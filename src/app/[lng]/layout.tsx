import "./globals.css";

import { dir } from "i18next";
import localFont from "next/font/local";
import React from "react";

import { Footer, Header, Providers } from "@/components";

import { useTranslation } from "../i18n";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const fixel = localFont({
  src: [
    {
      path: "./fonts/FixelDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FixelDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FixelDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fixel",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: "en" | "uk";
  };
}) {
  const { t } = await useTranslation(params.lng);

  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
        <link rel="alternate" hrefLang="uk" href="http://localhost:3000/uk" />
        <link rel="alternate" hrefLang="en" href="http://localhost:3000/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="http://localhost:3000/uk"
        />
      </head>
      <Providers>
        <body className={`${fixel.variable} font-sans bg-black text-white`}>
          <Header lng={params.lng} />
          {children}
          <Footer lng={params.lng} />
        </body>
      </Providers>
    </html>
  );
}
