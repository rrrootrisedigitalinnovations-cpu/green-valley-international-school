import { useEffect, useState } from "react";

const STORAGE_KEY = "gvis-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return stored === "dark";
  } catch {
    // localStorage unavailable (privacy mode, etc.) — fall back to system preference
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    try {
      window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
      // ignore write failures
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
