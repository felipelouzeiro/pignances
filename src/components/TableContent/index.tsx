import { Item } from '../../types';
import { TableItem } from '../TableItem';
import * as C from './styles';

type TableContentProps = {
  list: Item[];
};

export const TableContent = ({ list }: TableContentProps) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={120}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Titulo</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
