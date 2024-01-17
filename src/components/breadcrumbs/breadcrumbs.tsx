"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

import { BREADCRUMBS_NAV } from "@/commons/constants";
import { Link } from "@/components";

interface BreadcrumbProps {
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  lng: "en" | "uk";
}

export const Breadcrumbs = ({
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  lng,
}: BreadcrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").slice(2);
  const mainPage = BREADCRUMBS_NAV.find((link) => link.href === "/");
  const lastPath = `/${pathNames[pathNames.length - 1]}`;

  const findBreadcrumb = (path: string) => {
    return (
      BREADCRUMBS_NAV.find((breadcrumb) => breadcrumb.href === path) || null
    );
  };

  const renderLink = (link: string, index: number) => {
    const href = `/${pathNames.slice(0, index + 1).join("/")}`;
    const breadcrumb = findBreadcrumb(href);
    const itemClasses =
      lastPath === href ? `${listClasses} ${activeClasses}` : listClasses;
    const isLastPath = pathNames.length !== index + 1;

    return (
      <React.Fragment key={index}>
        <li className={itemClasses}>
          <Link href={href}>
            {breadcrumb
              ? lng === "en"
                ? breadcrumb.enText
                : breadcrumb.text
              : link}
          </Link>
        </li>
        {isLastPath && separator}
      </React.Fragment>
    );
  };

  return (
    <div className="w-full max-w-desktop">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={mainPage?.href || "/"}>
            {lng === "en" ? mainPage?.enText : mainPage?.text}
          </Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map(renderLink)}
      </ul>
    </div>
  );
};
