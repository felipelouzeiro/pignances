import { formatDate } from '../../services/helpers/dateFilter';
import { Item } from '../../types';
import * as C from './styles';

type TableItemProps = {
  item: Item;
};

export const TableItem = ({ item }: TableItemProps) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableLine>
  );
};
