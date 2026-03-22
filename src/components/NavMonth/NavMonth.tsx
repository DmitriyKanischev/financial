import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import styles from './NavMonth.module.scss';
import { useState } from 'react';

const NavMonth = observer(() => {
  const { expenseStore } = useStore();
  const [currentMonth, setCurrentMonth] = useState(expenseStore.selectedMonthId);
  const handleSetMonth = (monthId: number) => {
    expenseStore.setSelectedMonth(monthId);
    setCurrentMonth(monthId);
  };
  return (
    <ul className={styles.NavMonth}>
      {expenseStore.months.map((month) => (
        <li
          key={month.id}
          className={`${styles.NavMonth_li} ${month.id === currentMonth ? styles.NavMonth_li_active : ''}`}
          onClick={() => handleSetMonth(month.id)}
        >
          {month.id}
        </li>
      ))}
    </ul>
  );
});

export default NavMonth;
