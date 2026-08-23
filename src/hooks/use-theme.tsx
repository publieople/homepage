"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "linear" | "stripe";
type Mode = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  mode: Mode;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
  availableThemes: { id: Theme; label: string }[];
}

const THEME_KEY = "publieople-theme";
const MODE_KEY = "publieople-mode";
const DEFAULT_THEME: Theme = "linear";

const availableThemes: { id: Theme; label: string }[] = [
  { id: "linear", label: "Linear" },
  { id: "stripe", label: "Stripe" },
];

function getSystemMode(theme: Theme = DEFAULT_THEME): Mode {
  if (typeof window === "undefined") return theme === "linear" ? "dark" : "light";
  // Linear is dark-native: default dark unless user/system prefers otherwise
  if (theme === "linear") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  mode: "light",
  setMode: () => {},
  toggleMode: () => {},
  availableThemes,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mode, setModeState] = useState<Mode>("light");
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    // Theme
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const resolvedTheme = storedTheme && availableThemes.some((t) => t.id === storedTheme)
      ? storedTheme
      : DEFAULT_THEME;
    setThemeState(resolvedTheme);
    document.documentElement.dataset.theme = resolvedTheme;

    // Mode
    const storedMode = localStorage.getItem(MODE_KEY) as Mode | null;
    const resolvedMode = storedMode ?? getSystemMode(resolvedTheme);
    setModeState(resolvedMode);
    document.documentElement.dataset.mode = resolvedMode;

    setMounted(true);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't explicitly set a preference
      if (!localStorage.getItem(MODE_KEY)) {
        const newMode: Mode = e.matches ? "dark" : "light";
        setModeState(newMode);
        document.documentElement.dataset.mode = newMode;
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(THEME_KEY, t);
    document.documentElement.dataset.theme = t;
  }, []);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    localStorage.setItem(MODE_KEY, m);
    document.documentElement.dataset.mode = m;
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode, toggleMode, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}