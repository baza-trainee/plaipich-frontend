import React from "react";

import { Activities } from "@/components/activities/activities";
import { PaymentDetailsSection } from "@/components/payment-details-section/payment-details-section";
import { Support } from "@/components/support/support";

const SupportUs = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return (
    <main className="bg-white text-black py-[116px]">
      <Support lng={params.lng} />
      <PaymentDetailsSection lng={params.lng} />
      <Activities lng={params.lng} />
    </main>
  );
};

export default SupportUs;
