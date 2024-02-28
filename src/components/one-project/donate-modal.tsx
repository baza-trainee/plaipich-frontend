"use client";
import React, { ChangeEvent, useState } from "react";

import { DonateAction } from "../donate-action/donate-action";

export const DonateModal = ({
  text,
  lng,
  closeModal,
  title,
}: {
  text: string;
  lng: "en" | "uk";
  closeModal: Function;
  title: string;
}) => {
  const [amount, setAmount] = useState(10);

  const onClickBack = () => {
    closeModal();
  };

  const onChangeInput = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement;
    if (element.value !== "0" && element.value.startsWith("0")) {
      const newAmount = element.value.slice(1);
      setAmount(+newAmount);
    } else {
      setAmount(+element.value);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black flex justify-center items-center">
      <div className="bg-white p-16 max-w-[280px] md:max-w-[600px] text-black gap-4 flex flex-col items-center">
        <h4 className="font-bold text-md">
          {lng === "en" ? "Hello!" : "Вітаємо!"}
        </h4>
        <p className="text-center text-base md:text-small-md lg:leading-4">
          {text}
        </p>
        <label htmlFor="amount" className="text-center">
          {lng === "en" ? "Enter amount here" : "Введіть суму"}
          <input
            className="text-black text-right w-[150px] block ps-12 pe-2 text-md py-2 border rounded-lg text-gray-500 focus:outline-dark-blue"
            type="number"
            id="amount"
            name="amount"
            min={10}
            max={10000}
            value={amount.toString()}
            onChange={onChangeInput}
          />
        </label>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onClickBack}
            className="btn-primary text-black text-base p-4"
          >
            {lng === "en" ? "Back" : "Повернутися до проєкту"}
          </button>
          <DonateAction amount={`${amount}`} title={title}>
            <button
              type="submit"
              className="btn-orange block text-base p-4"
              disabled={amount < 10 || amount > 10000}
            >
              {lng === "en" ? "Support project" : "Підтримати проект"}
            </button>
          </DonateAction>
        </div>
      </div>
    </div>
  );
};
