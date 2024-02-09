"use client";
import React, { useEffect, useState } from "react";
import { LuChevronUp } from "react-icons/lu";

export const ScrollUp = () => {
  const isBrowser = () => typeof window !== "undefined";

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.document.documentElement.clientHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  });

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`opacity-50 p-1 text-2xl md:text-[60px] transition hover:opacity-100 hover:animate-bounce text-white bg-new fixed bottom-3 right-5 ${
        showButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <LuChevronUp />
    </button>
  );
};
