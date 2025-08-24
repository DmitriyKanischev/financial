export type monthsType = {
  id: number;
  name: string;
  year: number;
  total: number;
  byCategory: Partial<Record<string, number>>; //Категории могут быть неполными
};
