"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const LanguageSwitcher = ({ lng }: { lng: string }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link href={`/${lng === "uk" ? "en" : "uk"}/${pathName.slice(4)}`}>
        <p className="py-[8px] px-[35px] text-md scale-100 transition-all hover:scale-125 border-none">
          {lng === "en" ? "UA" : "EN"}
        </p>
      </Link>
    </div>
  );
};
