import * as C from './styles';

type ResumeItemProps = {
  title: string;
  value: number;
};

export const ResumeItem = ({ title, value }: ResumeItemProps) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info>R$ {value.toFixed(2)}</C.Info>
    </C.Container>
  );
};
