import React from "react";
import { LuMoveRight } from "react-icons/lu";

import { useTranslation } from "@/app/i18n";
import { NAVIGATION } from "@/commons/constants";
import { Accordion, Link } from "@/components";

interface BankTransferAccordionItem {
  id: number;
  title: string;
  details: {
    name: string;
    value: string;
  }[];
}

export const PaymentDetailsSection = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "support-us");
  const paymentAccordionData = t("payment-details-accordion-data", {
    returnObjects: true,
  }) as BankTransferAccordionItem[];
  return (
    <section className="w-full lg:pb-16">
      <div className="container max-w-desktop">
        <Link
          className="link-text self-end px-6 py-4.5 inline-block hover:no-underline transition-colors border border-black focus:outline-dark-blue active:bg-gray-200 rounded-large hover:bg-link-water"
          href={NAVIGATION.reports}
        >
          {t("all-reports-btn")}
          <LuMoveRight className="inline-block ml-2 align-middle" />
        </Link>
        <h2 className="h2 mb-14 mt-16 text-left">
          {t("payment-details-title")}
        </h2>
        {paymentAccordionData?.map(({ id, title, details }) => (
          <Accordion key={id} title={title}>
            <ul className="text-2 text-dark-blue flex flex-col justify-normal gap-y-4">
              {details?.map((detail) => (
                <li key={detail.name}>
                  <span className="font-semibold">{detail.name}</span>:{" "}
                  {detail.value}
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
