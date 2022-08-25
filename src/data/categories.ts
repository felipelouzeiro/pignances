import { Category } from '../types';

const colors = {
  pinkP: '#e77a77',
  blueP: '#96bda8',
  greenP: '#a6c88c',
  yellowP: '#fcc755',
  browP: '#d8a878',
  grayP: '#c3b199',
  redP: '#fb6a3d',
};

export const categories: Category = {
  food: { title: 'Alimentação', color: colors.yellowP, expense: true },
  rent: { title: 'Aluguel', color: colors.browP, expense: true },
  leisure: { title: 'Lazer', color: colors.pinkP, expense: true },
  salary: { title: 'Salário', color: colors.greenP, expense: false },
  education: { title: 'Formação', color: colors.blueP, expense: false },
  emergency: { title: 'Emergência', color: colors.redP, expense: false },
  others: { title: 'Extra', color: colors.grayP, expense: true },
};
