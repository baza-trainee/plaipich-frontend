"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import { useOneProject } from "@/hooks/use-one-project";

import { Mission } from "../mission/mission";
import { Description } from "./description-project";
import { Details } from "./details-project";
import { Gallery } from "./gallery-project";
import { Location } from "./location-project";
import { PartnersProject } from "./partners-project";
import { Poster } from "./poster-project";
import { Program } from "./program-project";
import { SupportProject } from "./support-project";

export const OneProject = ({ lng }: { lng: "en" | "uk" }) => {
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
          <p>{lng === "en" ? data?.enTitle : data?.title}</p>
          <Poster />
          <Description />
          {data?.detailDesc && <Details />}
          {data?.mission && <Mission lng={lng} missionData={data.mission} />}
          {data?.support && <SupportProject />}
          {data?.projectProgram && <Program />}
          {data?.photos && data.photos.length > 0 && <Gallery />}
          {data?.locationsCount && <Location />}
          {data?.partners && <PartnersProject />}
        </>
      )}
    </div>
  );
};
