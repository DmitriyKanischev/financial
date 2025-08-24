import React from "react";
import { expenseStore } from "./ExpenseStore";
import { StoreContext } from "./StoreContext";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StoreContext.Provider value={{ expenseStore }}>
      {children}
    </StoreContext.Provider>
  );
};
