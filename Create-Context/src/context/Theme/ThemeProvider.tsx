import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ProviderProps } from "../../types/ProviderProps";

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
