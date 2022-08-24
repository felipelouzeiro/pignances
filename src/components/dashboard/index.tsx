import * as C from './styles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { formatCurrentMonth } from '../../services/helpers/dateFilter';

type DashboardProps = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};

export const Dashboard = ({ currentMonth, onMonthChange }: DashboardProps) => {
  const handlePreviewMonth = () => {
    let [year, month] = currentMonth.split('-');

    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');

    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthContent>
        <C.MonthArrow onClick={handlePreviewMonth}>
          <FaArrowLeft />
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <FaArrowRight />
        </C.MonthArrow>
      </C.MonthContent>

      <C.ResumeContent>...</C.ResumeContent>
    </C.Container>
  );
};
