import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: 0 0.2rem;

  text-align: center;
  text-transform: capitalize;
  line-height: 1.5rem;
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
