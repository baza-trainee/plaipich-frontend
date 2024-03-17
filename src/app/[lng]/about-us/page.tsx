import React from "react";

import { getMissionData } from "@/../database/db";
import {
  Contacts,
  JoinUs,
  Mission,
  OurTeam,
  Partners,
  PlaiAbout,
  Reports,
} from "@/components";

const About = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  const missionData = await getMissionData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PlaiAbout lng={params.lng} />
      <Mission lng={params.lng} missionData={missionData} />
      <OurTeam lng={params.lng} />
      <Partners lng={params.lng} />
      <Reports lng={params.lng} />
      <JoinUs backgroundColor="bg-light-blue" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default About;
