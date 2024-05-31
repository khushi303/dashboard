import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Kunden from './pages/Kunden';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Routes>
        <Route path='/' exact element={<HomePage />}></Route>
        <Route path='/kunden' exact element={<Kunden />}></Route>
      </Routes>
    </div>
  );
}

export default App;
