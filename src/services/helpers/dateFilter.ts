import { Item } from '../../types';

/**
 * Retorna o mês atual
 * @returns string
 */
export const getCurrentMonth = () => {
  let now = new Date();

  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

/**
 * Filtra a lista recebida com base na data recebida
 * @param list
 * @param date
 * @returns lista
 */
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

/**
 * Formata a data recebida para um formato padrão
 * @param date
 * @returns string
 */
export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

/**
 * Função auxiliar que adiciona o '0' entes dos números menores que dez
 * @param n
 * @returns string
 */
const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

/**
 * Formata a data para recebida para um formato estabelecido
 * @param currentMonth
 * @returns string
 */
export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return `${months[parseInt(month) - 1]} de ${year}`;
};
