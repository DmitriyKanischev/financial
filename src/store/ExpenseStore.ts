import { makeAutoObservable, runInAction } from "mobx";
import type {
  categoriesType,
  iconsType,
  colorsType,
  monthsType,
} from "../types/index";

export class ExpenseStore {
  categories: categoriesType = [];
  icons: iconsType = [];
  colors: colorsType = [];
  months: monthsType[] = [];
  transactions = [];
  error: string | null = null;
  isLoading = false;

  selectedMonthId: number | null = new Date().getMonth(); //Current month

  constructor() {
    makeAutoObservable(this);
    this.loadData();
  }

  async loadData() {
    this.isLoading = true;

    try {
      const data = await import("../data/data.json");

      runInAction(() => {
        this.categories = data.categories;
        this.icons = data.icons;
        this.colors = data.colors;
        this.months = data.months;
        this.transactions = data.transactions;

        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : "Unknown error";
        this.isLoading = false;
      });
    }
  }

  setSelectedMonth(id: number | null) {
    this.selectedMonthId = id;
  }
}

export const expenseStore = new ExpenseStore();
export default ExpenseStore;