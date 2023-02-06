import { Routes, Route } from 'react-router-dom';
import { CountriesList } from '../src/Components/countriesList/index';
import './cssGeral.css';
import { Navbar } from './Components/navbar';
import { CountryDetails } from './Components/countryDatails';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
        <div className="allContainer">
          <CountriesList />

          <Routes>
            <Route
              path="/:alpha3Code"
              element={
                <div className="datails">
                  <CountryDetails />
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
