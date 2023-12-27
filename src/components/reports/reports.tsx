import React from "react";

import { useTranslation } from "@/app/i18n";
import { Link } from "@/components/link/link";

import { ReportsAccordion } from "./reports-accordion/reports-accordion";

interface AccordionItem {
  title: string;
  content: {
    text: string;
    url: string;
  };
  id: string;
}

export const Reports = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "reports");
  const accordionData = t("accordion-data", {
    returnObjects: true,
  }) as AccordionItem[];

  return (
    <section id="reports" className="bg-white w-full text-black pb-16">
      <div className="max-w-desktop container w-full">
        <h2 className="h1 text-center normal-case mb-[90px]">
          {t("reports-title")}
        </h2>
        {accordionData?.map((item) => (
          <ReportsAccordion key={item.id} title={item.title}>
            <p className="text-2">
              <Link
                appearance="link"
                className="text-dark-blue hover:underline"
                href={item.content.url}
              >
                {item.content.text}
              </Link>
            </p>
          </ReportsAccordion>
        ))}
      </div>
    </section>
  );
};
