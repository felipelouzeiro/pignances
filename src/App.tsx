import { useEffect, useState } from 'react';
import * as C from './App.styled';
import { Dashboard } from './components/dashboard';
import { TableContent } from './components/TableContent';
import { categories } from './data/categories';
import { items } from './data/items';
import {
  filterListByMonth,
  getCurrentMonth,
} from './services/helpers/dateFilter';
import { Item } from './types';

function App() {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let index in filteredList) {
      if (categories[filteredList[index].category].expense) {
        expenseCount += filteredList[index].value;
      } else {
        incomeCount += filteredList[index].value;
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Felinance</C.HeaderTitle>
      </C.Header>
      <C.Body>
        <Dashboard
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <TableContent list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
