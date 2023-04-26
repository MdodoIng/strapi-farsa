"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

type stateContextType = {
  isSelectedCategory: string;
  setIsSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const stateContextDefaultValues: stateContextType = {
  isSelectedCategory: "",
  setIsSelectedCategory: function (
    value: React.SetStateAction<string>
  ): void {},
};

const StateContext = createContext<stateContextType>(stateContextDefaultValues);

export function useStatesContext() {
  return useContext(StateContext);
}

export function StateProvider({ children }: { children: ReactNode }) {
  const [isSelectedCategory, setIsSelectedCategory] = useState<string>("");

  const value = {
    isSelectedCategory,
    setIsSelectedCategory,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
