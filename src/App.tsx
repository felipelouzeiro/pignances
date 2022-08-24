import { useEffect, useState } from 'react';
import * as C from './App.styled';
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
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Felinance</C.HeaderTitle>
      </C.Header>
      <C.Body>
        {/* Exibição de dados */}

        {/* Inserção de dados */}

        {/* Tabela de informações */}
      </C.Body>
    </C.Container>
  );
}

export default App;
