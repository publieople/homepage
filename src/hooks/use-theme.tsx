"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "stripe" | "linear" | "vercel" | "notion";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  availableThemes: { id: Theme; label: string }[];
}

const STORAGE_KEY = "publieople-theme";
const DEFAULT_THEME: Theme = "stripe";

const availableThemes: { id: Theme; label: string }[] = [
  { id: "stripe", label: "Stripe" },
  // Future: { id: "linear", label: "Linear" },
  // Future: { id: "vercel", label: "Vercel" },
  // Future: { id: "notion", label: "Notion" },
];

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  availableThemes,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored && availableThemes.some((t) => t.id === stored)) {
      setThemeState(stored);
      document.documentElement.dataset.theme = stored;
    } else {
      document.documentElement.dataset.theme = DEFAULT_THEME;
    }
    setMounted(true);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.dataset.theme = t;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
