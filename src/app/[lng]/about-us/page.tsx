import React from 'react'

import { Contacts, JoinUs, Mission, Reports, Team } from '@/components';

const About = ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Mission/>
      <Team />
      <Reports />
      <JoinUs backgroundColor="white" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default About