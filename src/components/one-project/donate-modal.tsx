import React from "react";
import { IoClose } from "react-icons/io5";

import { DonatePanel } from "../support/donate-panel/donate-panel";

export const DonateModal = ({
  text,
  lng,
  closeModal,
}: {
  text: string;
  lng: "en" | "uk";
  closeModal: Function;
}) => {
  const onClose = () => {
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black flex justify-center items-center">
      <div className="relative bg-white p-16 max-w-[280px] md:max-w-[600px] text-black gap-4 flex flex-col items-center">
        <button
          type="button"
          className="absolute top-2 right-4 p-2 border-none text-black"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <h4 className="font-bold text-md uppercase">
          {lng === "en" ? "Support us!" : "Підтримай нас!"}
        </h4>
        <p className="text-center text-base md:text-small-md lg:leading-4">
          {text}
        </p>
        <DonatePanel lng={lng} />
        <p className="font-bold text-md mt-4">
          {lng === "en" ? "Thank you!" : "Дякуємо!"}
        </p>
      </div>
    </div>
  );
};
