
import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Chart } from './pages/Chart';
import { Index } from './pages/Index';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </>
  );
}

export default App;
