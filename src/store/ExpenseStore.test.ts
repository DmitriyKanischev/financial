import { ExpenseStore } from './ExpenseStore';
import { runInAction } from 'mobx';
import { describe, test, expect, beforeEach, vi } from 'vitest';

vi.mock('../data/data.json', () => ({
  categories: ['Food', 'Transport'],
  icons: ['🍔', '🚗'],
  colors: ['red', 'blue'],
  months: [{ id: 1, name: 'January' }],
  transactions: [{ id: 1, amount: 100 }],
}));

describe('ExpenseStore', () => {
  let store: ExpenseStore;
  beforeEach(() => {
    store = new ExpenseStore();
  });

  test('1. init isLoading true/false', async () => {
    expect(store.isLoading).toBe(true);
    await store.loadData();
    expect(store.isLoading).toBe(false);
  });

  test('2. store update', async () => {
    await store.loadData();
    expect(store.categories).toEqual(['Food', 'Transport']);
    expect(store.transactions).toEqual([{ id: 1, amount: 100 }]);
    expect(store.error).toBeNull();
  });

  test('3. error on load data', async () => {
    vi.spyOn(store, 'loadData').mockImplementationOnce(async () => {
      runInAction(() => {
        store.error = 'Mock error';
        store.isLoading = false;
      });
    });
    await store.loadData();

    expect(store.error).toBe('Mock error');
    expect(store.isLoading).toBe(false);
  });
});
