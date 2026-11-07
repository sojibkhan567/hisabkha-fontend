"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Change theme"
        className="p-2 rounded-lg"
      >
        <Monitor className="w-5 h-5" />
      </button>
    );
  }

  const Icon = theme === "system" ? Monitor : theme === "light" ? Sun : Moon;

  const nextTheme =
    theme === "dark" ? "system" : theme === "system" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Current theme: ${theme}. Switch to ${nextTheme}`}
      title={`Theme: ${theme}`}
      className="p-2 rounded-lg"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
