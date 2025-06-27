import { createContext } from "react";

type CounterType = {
  counter: number;
  incrementCounter: () => void;
  decreaseCounter: () => void;
};

export const CounterContext = createContext<CounterType | 0>(0);
