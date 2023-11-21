import React from "react";

import { Link } from "@/components/link/link";
import { accordionMockData } from "@/components/reports-accordion/accordion-data";
import { ReportsAccordion } from "@/components/reports-accordion/reports-accordion";

export const ReportsAbout = () => {
  return (
    <section className="bg-white w-full text-black pb-16">
      <div className="max-w-desktop container w-full">
        <h2 className="h1 text-center normal-case mb-[90px]">Звіти про діяльність</h2>
        {accordionMockData?.map((item) => (
          <ReportsAccordion key={item.key} title={item.title}>
            <p className="text-2">
              <Link appearance="link" className="text-dark-blue hover:underline" href={item.content.url}>
                {item.content.text}
              </Link>
            </p>
          </ReportsAccordion>
        ))}
      </div>
    </section>
  );
};
