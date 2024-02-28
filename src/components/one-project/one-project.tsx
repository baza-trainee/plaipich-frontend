"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { API_URL } from "@/commons/constants";
import { useOneProject } from "@/hooks/use-one-project";

import { Loader } from "../loader/loader";
import { Mission } from "../mission/mission";
import { Description } from "./description-project";
import { Details } from "./details-project";
import { DonateModal } from "./donate-modal";
import { Gallery } from "./gallery-project";
import { Location } from "./location-project";
import { PartnersProject } from "./partners-project";
import { Poster } from "./poster-project";
import { Program } from "./program-project";
import { SupportProject } from "./support-project";

export const OneProject = ({ lng }: { lng: "en" | "uk" }) => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const [openDonateModal, setOpenModal] = useState(false);
  const { data, isLoading } = useOneProject(`${API_URL.PROJECTS}/${projectId}`);

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {!isLoading && data ? (
        <>
          {data.support?.text && openDonateModal && (
            <DonateModal
              text={lng === "en" ? data.support.enText : data.support.text}
              lng={lng}
              closeModal={closeModal}
              title={data.enTitle}
            />
          )}

          {!openDonateModal && (
            <>
              <Poster
                title={lng === "en" ? data.enTitle : data.title}
                poster={data.poster}
                status={data.status}
                lng={lng}
                openModal={openModal}
              />
              <Description
                description={
                  lng === "en" ? data.enDescription : data.description
                }
              />
              {data.detailDesc && (
                <Details lng={lng} details={data.detailDesc} />
              )}
              {data.mission?.image && (
                <Mission lng={lng} missionData={data.mission} />
              )}
              {data.projectProgram?.title && (
                <Program program={data.projectProgram} lng={lng} />
              )}
              {data.locationsCount && <Location />}
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
                  openModal={openModal}
                />
              )}
              {data.photos && data.photos.length > 0 && <Gallery />}
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
