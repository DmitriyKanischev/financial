import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks/useStore';
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainChart: React.FC = observer(() => {
  const { expenseStore } = useStore();
  const [amounts, setAmounts] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const currentMonth = expenseStore.selectedMonthId;
  const isLoading = expenseStore.isLoading;
  console.log(currentMonth);
  useEffect(() => {
    if (isLoading) return; //Wait fetch data

    const selectedMonth = expenseStore.months.find((month) => month.id === currentMonth);

    if (selectedMonth) {
      const categoriesArray = Object.keys(selectedMonth.byCategory);
      const amountsArray = Object.values(selectedMonth.byCategory) as number[];

      setCategories(categoriesArray);
      setAmounts(amountsArray);
    }
  }, [expenseStore, currentMonth, isLoading]);

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Main chart',
        data: amounts,
        backgroundColor: expenseStore.colors,
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    cutout: '50%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div style={{ width: '400px', height: '400px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
});

export default MainChart;
