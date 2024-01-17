import React from "react";

import { Activities } from "@/components/activities/activities";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
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
    <main className="bg-white text-black lg:pb-[116px] md:pt-8 md:pb-[102px] pt-10 pb-14">
      <Breadcrumbs
        containerClasses="hidden container md:block"
        lng={params.lng}
        separator={
          <span className="text-gray-400 translate-y-0.5 inline-block px-1">
            /
          </span>
        }
        listClasses="text-breadcrumb inline-block hover:text-dark-blue transition-colors"
        activeClasses="text-dark-blue"
      />
      <Support lng={params.lng} />
      <PaymentDetailsSection lng={params.lng} />
      <Activities lng={params.lng} />
    </main>
  );
};

export default SupportUs;
