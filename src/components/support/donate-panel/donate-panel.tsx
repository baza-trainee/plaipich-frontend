"use client";

import "./donate-panel.css";

import React, { useRef, useState } from "react";

import { Link } from "@/components/link/link";

export const DonatePanel = ({ lng }: { lng: "en" | "uk" }) => {
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"monthly" | "one-time">("monthly");
  const donateInputRef = useRef<HTMLInputElement>(null);

  const donationAmounts = [50, 200, 500];
  const MAX_DONATION = 1000000;
  const MIN_DONATION = 10;
  const INVALID_SUM = amount <= 0 || amount > MAX_DONATION;
  const formatNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isNumKey = ["e", "E", ".", "+", "-"].includes(e.key || "");
    isNumKey && e.preventDefault();
  };

  return (
    <div className="w-full lg:gap-y-4 gap-y-3 flex flex-col justify-start items-center h15">
      <div className="flex w-full">
        <button
          onClick={() => setType("monthly")}
          className={`text-center border-l-0 border-r-0 border-t-0 border-b-2 rounded-none w-full text-md lg:py-3 py-1 transition-colors ${
            type === "monthly" ? "border-dark-blue text-dark-blue" : "border-black text-black"
          }`}
        >
          {lng === "en" ? "Monthly" : "Щомісячно"}
        </button>
        <button
          onClick={() => setType("one-time")}
          className={`text-center border-l-0 border-r-0 border-t-0 border-b-2 rounded-none w-full text-md lg:py-3 pb-1 transition-colors ${
            type === "one-time" ? "border-dark-blue text-dark-blue" : "border-black text-black"
          }`}
        >
          {lng === "en" ? "One-time" : "Разово"}
        </button>
      </div>
      <div className="flex md:gap-4 gap-1 w-full">
        {donationAmounts.map((donateValue) => {
          const conditionalStyle = amount === donateValue ? "bg-dark-blue text-white" : "text-black bg-transparent";
          return (
            <button
              key={donateValue}
              onClick={() => {
                setAmount(donateValue);
                if (donateInputRef.current) {
                  donateInputRef.current.value = "";
                }
              }}
              className={`text-center rounded-large font-normal md:text-md text-base lg:font-semibold w-full border-black lg:py-3 py-2 transition-colors ${conditionalStyle}`}
            >{`${donateValue} UAH`}</button>
          );
        })}
      </div>
      <div className="w-full">
        <input
          type="number"
          name="donate-amount"
          id="donate-amount"
          ref={donateInputRef}
          onChange={(e) => setAmount(Number(e.target.value))}
          onKeyDown={formatNumberInput}
          min={MIN_DONATION}
          max={MAX_DONATION}
          placeholder={lng === "en" ? "Other amount, UAH" : "Iнша сума, UAH"}
          className="w-full block border border-black font-normal lg:font-semibold text-center p-2 text-md transition-colors placeholder:text-black cursor-pointer rounded-large relative"
        />
      </div>
      <Link
        href={`/donate?amount=${amount}&type=${type}`}
        className={`w-full bg-dark-orange transition-colors relative hover:bg-orange text-white text-base md:text-md py-3 rounded-large text-center ${
          INVALID_SUM
            ? "cursor-not-allowed pointer-events-none bg-gray-300"
            : "cursor-pointer pointer-events-auto bg-dark-orange"
        }`}
        tabIndex={INVALID_SUM ? -1 : 0}
      >
        {lng === "en" ? "Support" : "Підтримати"}
      </Link>
    </div>
  );
};
