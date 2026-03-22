import './App.css';
import MainChart from './components/MainChart/MainChart';
import NavMonth from './components/NavMonth/NavMonth';
import { StoreProvider } from './store/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <main className="main">
        <MainChart />
        <NavMonth />
      </main>
    </StoreProvider>
  );
}

export default App;
