import React from "react";

import { Contacts, JoinUs, Mission, Partners, PlaiAbout, Reports, Team } from "@/components";

const About = ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PlaiAbout />
      <Mission />
      <Team />
      <Partners />
      <Reports lng={params.lng} />
      <JoinUs backgroundColor="bg-light-blue" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default About;
