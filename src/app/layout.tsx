import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import { Footer, Header } from "@/components";
import Providers from "@/components/providers";

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

export const metadata: Metadata = {
  title: "Plai",
  description: "Web-site for PLAI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fixel.variable} font-sans`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
