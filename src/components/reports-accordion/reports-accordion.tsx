"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const ReportsAccordion = ({ title, children }: AccordionProps) => {
  return (
    <Disclosure>
      {function ({ open }) {
        const titleConditionalClasses = open ? "border-b-transparent" : "border-b-gray-400";
        return (
          <>
            <Disclosure.Button
              className={`flex transition-none h6 mb-4 last:mb-0 rounded-none w-full normal-case items-center justify-between border border-l-transparent border-r-transparent ${titleConditionalClasses} pr-4 py-6 border-gray-400 hover:text-dark-blue focus:border-l-transparent focus-border-r-transparent focus:outline-orange`}
            >
              {title}
              <BsArrowDown
                size={24}
                className={
                  open
                    ? "transition-all rotate-180 transform fill-black"
                    : "fill-gray-400 transition-all hover:fill-black"
                }
              />
            </Disclosure.Button>

            <Disclosure.Panel className="py-4 transition-transform">{children}</Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};
