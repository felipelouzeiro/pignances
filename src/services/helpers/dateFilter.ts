import { Item } from '../../types';

export const getCurrentMonth = () => {
  let now = new Date();

  return `${now.getFullYear()}-$${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for (let index in list) {
    if (
      list[index].date.getFullYear() === parseInt(year) &&
      list[index].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[index]);
    }
  }

  return newList;
};
