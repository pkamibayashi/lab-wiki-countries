import { Routes, Route } from 'react-router-dom';
import { CountriesList } from '../src/Components/countriesList/index';

import { Navbar } from './Components/navbar';
import { CountryDetails } from './Components/countryDatails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails />}></Route>
      </Routes>
    </div>
  );
}
export default App;
