import React from "react";

import { Contacts, JoinUs, OneProject } from "@/components";

const Project = ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return (
    <main>
      <OneProject lng={params.lng}/>
      <JoinUs backgroundColor="bg-light-blue" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default Project;
