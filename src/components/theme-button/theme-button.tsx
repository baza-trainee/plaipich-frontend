"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Avoid hydration mismatches by delaying rendering the UI
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return (
      <span className="bg-transparent flex justify-center items-center w-10 h-10" />
    );
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-white dark:text-white inline-block border-none px-1 py-0.5 w-10 h-10"
    >
      {resolvedTheme === "dark" ? (
        <PiSun className="text-white dark:text-white" fontSize={32} />
      ) : (
        <PiMoon className="text-white dark:text-white" fontSize={32} />
      )}
    </button>
  );
};
