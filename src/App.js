import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Kunden from './pages/Kunden';
import { Route, Routes } from 'react-router-dom';
import Buchungen from './pages/Buchungen';
import Angebote from './pages/Angebote';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Routes>
        <Route path='/' exact element={<HomePage />}></Route>
        <Route path='/kunden' exact element={<Kunden />}></Route>
        <Route path='/Angebote' exact element={<Angebote />}></Route>
        <Route path='/Buchungen' exact element={<Buchungen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
