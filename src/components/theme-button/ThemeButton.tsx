"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Avoid hydration mismatches by delaying rendering the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-black dark:text-white border-none"
    >
      {resolvedTheme === "dark" ? (
        <Icon icon="ph:sun-bold" width="24" height="24" />
      ) : (
        <Icon icon="ph:moon-bold" width="24" height="24" />
      )}
    </button>
  );
};

export default ThemeButton;
