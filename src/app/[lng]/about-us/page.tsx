import React from "react";

import { Contacts, JoinUs, Mission, OurTeam, Partners, PlaiAbout, Reports } from "@/components";

const About = ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PlaiAbout lng={params.lng}/>
      <Mission />
      <OurTeam lng={params.lng} />
      <Partners lng={params.lng} />
      <Reports lng={params.lng} />
      <JoinUs backgroundColor="bg-light-blue" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default About;
