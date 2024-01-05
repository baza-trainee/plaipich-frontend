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
              className={`group/accordion-btn flex transition-none h6 mb-4 last:mb-0 rounded-none w-full text-left normal-case items-center justify-between border border-l-transparent border-r-transparent ${titleConditionalClasses} pr-4 py-6 border-gray-400 hover:text-dark-blue focus:border-l-transparent focus-border-r-transparent focus:outline-orange`}
            >
              {title}
              <LuMoveDown
                size={40}
                strokeWidth="1"
                className={
                  open
                    ? "transition-all rotate-180 transform stroke-black"
                    : "stroke-gray-400 transition-all group-hover/accordion-btn:stroke-black"
                }
              />
            </Disclosure.Button>

            <Disclosure.Panel className="py-4 transition-transform">
              {children}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};
