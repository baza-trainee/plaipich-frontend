import localFont from "next/font/local";
import React from "react";

import { Providers } from "@/components";

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
        <body className={`${fixel.variable} font-sans bg-black text-white`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
