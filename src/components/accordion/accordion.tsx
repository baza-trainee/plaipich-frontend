"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { LuMoveDown } from "react-icons/lu";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <Disclosure>
      {function ({ open }) {
        const titleConditionalClasses = open
          ? "border-b-transparent"
          : "border-b-gray-400";
        return (
          <>
            <Disclosure.Button
              className={`group/accordion-btn flex transition-none lg:font-medium lg:text-3xl lg:leading-2 md:leading-4 md:text-lg md:font-normal leading-2 text-small-md mb-4 last:mb-0 rounded-none w-full text-left normal-case items-center justify-between border border-l-transparent border-r-transparent ${titleConditionalClasses} pr-4 py-6 border-gray-400 hover:text-dark-blue focus:border-l-transparent focus-border-r-transparent focus:outline-orange`}
            >
              {title}
              <LuMoveDown
                className={
                  open
                    ? "transition-all stroke-2 lg:stroke-1 w-6 h-6 lg:w-10 lg:h-10 rotate-180 transform stroke-black"
                    : "stroke-gray-400 transition-all stroke-2 lg:w-10 lg:h-10 lg:stroke-1 w-6 h-6 group-hover/accordion-btn:stroke-black"
                }
              />
            </Disclosure.Button>

            <Disclosure.Panel className="py-4 transition-transform last:border-b-gray-400 last:border-transparent last:border">
              {children}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};
