import { useState } from "react";
import type { ProviderProps } from "../../types/ProviderProps";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }: ProviderProps) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, incrementCounter, decreaseCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};
