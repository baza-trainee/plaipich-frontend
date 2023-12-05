import React from "react";

export const AccordionArrow = ({ className }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.334 10L20.0007 3.33333L26.6673 10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20 36.667V3.33366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
