import { Routes, Route } from 'react-router-dom';
import { CountriesList } from '../src/Components/countriesList/index';
import countries from '../src/countries.json';
import { Navbar } from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Routes></Routes>
    </div>
  );
}
export default App;
