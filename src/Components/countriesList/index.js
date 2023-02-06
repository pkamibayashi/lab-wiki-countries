import { Link } from 'react-router-dom';
import countries from '../../countries.json';
import style from '../countriesList/style.module.css';

export function CountriesList() {
  return (
    <div id={style.countryList} className="row">
      {countries.map((country) => (
        <div key={country.alpha3Code} className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                {country.alpha2Code} {country.name.common}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
