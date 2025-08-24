import { createContext } from "react";
import { expenseStore } from "./ExpenseStore";

interface IStore {
  expenseStore: typeof expenseStore;
}

export const StoreContext = createContext<IStore | null>(null);
