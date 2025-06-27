import { Router } from "wouter";
import type { ProviderProps } from "../types/ProviderProps";
import { CounterProvider } from "./Counter/CounterProvider";
import { ThemeProvider } from "./Theme";

export const AppProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider>
      <CounterProvider>
        <Router>{children}</Router>
      </CounterProvider>
    </ThemeProvider>
  );
};
