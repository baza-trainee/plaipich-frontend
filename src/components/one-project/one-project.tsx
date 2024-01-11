"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import { useOneProject } from "@/hooks/use-one-project";

import { Description } from "./description-project";
import { Details } from "./details-project";
import { Gallery } from "./gallery-project";
import { Location } from "./location-project";
import { PartnersProject } from "./partners-project";
import { Poster } from "./poster-project";
import { Program } from "./program-project";
import { SupportProject } from "./support-project";

export const OneProject = ({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: "en" | "uk";
}) => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const { data, isLoading } = useOneProject(`${API_URL.PROJECTS}/${projectId}`);
  console.dir(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <p>{lng==='en'? data?.enTitle: data?.title}</p>
          <Poster />
          <Description />
          <Details />
          {children}
          <SupportProject />
          <Program />
          <Gallery />
          <Location />
          <PartnersProject />
        </>
      )}
    </div>
  );
};
