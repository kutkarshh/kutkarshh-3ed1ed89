import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Mode = "recruiter" | "engineer";
type Theme = "dark" | "light";

interface AppContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isEngineerMode: boolean;
  isDarkTheme: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<Mode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-mode") as Mode) || "recruiter";
    }
    return "recruiter";
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme") as Theme) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-mode", mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const setMode = (newMode: Mode) => setModeState(newMode);
  const toggleMode = () => setModeState((prev) => (prev === "recruiter" ? "engineer" : "recruiter"));
  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        theme,
        setTheme,
        toggleTheme,
        isEngineerMode: mode === "engineer",
        isDarkTheme: theme === "dark",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
