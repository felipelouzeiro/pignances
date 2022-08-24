import { useEffect, useState } from 'react';
import * as C from './App.styled';
import { Dashboard } from './components/dashboard';
import { TableContent } from './components/TableContent';
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

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
    console.log('list', list);
    console.log('listFill', filteredList);
    console.log('month', currentMonth);
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Felinance</C.HeaderTitle>
      </C.Header>
      <C.Body>
        {/* Exibição de dados */}
        <Dashboard
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        {/* Inserção de dados */}

        <TableContent list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
