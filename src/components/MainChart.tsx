import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

const MainChart: React.FC = observer(() => {
  const {expenseStore} = useStore();
  console.log(expenseStore.categories)
  return <div>MainChart</div>;
});

export default MainChart;
