import './App.css';
import MainChart from './components/MainChart';
import { StoreProvider } from './store/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <MainChart />
    </StoreProvider>
  );
}

export default App;
