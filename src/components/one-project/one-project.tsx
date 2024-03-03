"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import { useOneProject } from "@/hooks/use-one-project";

import { Loader } from "../loader/loader";
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
      {!isLoading && data ? (
        <>
          <Poster
            title={lng === "en" ? data.enTitle : data.title}
            poster={data.poster}
            status={data.status}
            lng={lng}
          />
          <Description
            description={lng === "en" ? data.enDescription : data.description}
          />
          {data.detailDesc && <Details lng={lng} details={data.detailDesc} />}
          {data.mission?.image && (
            <Mission lng={lng} missionData={data.mission} />
          )}
          {data.projectProgram?.title && (
            <Program program={data.projectProgram} lng={lng} />
          )}
          {data.location && (
            <Location
              title={lng === "en" ? data.location.enTitle : data.location.title}
              text={lng === "en" ? data.location.enText : data.location.text}
              link={lng === "en" ? "Find us on the map" : "Знайди нас на карті"}
            />
          )}
          {data.partners && data.partners.length > 0 && (
            <PartnersProject partners={data.partners} lng={lng} />
          )}
          {data.support && (
            <SupportProject
              title={lng === "en" ? "Support us" : "Підтримай нас"}
              text={lng === "en" ? data.support.enText : data.support.text}
              buttonText={
                lng === "en" ? "Support project" : "Підтримати проект"
              }
              logo={data.support.logo}
            />
          )}
          {data.photos && data.photos.length > 0 && <Gallery />}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
