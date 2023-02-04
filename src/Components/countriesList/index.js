import { Link } from 'react-router-dom';
import countries from '../../countries.json';

export function CountriesList() {
  return countries.map((country) => {
    return (
      <div key={country.alpha3Code} className="row">
        <Link
          className="list-group-item list-group-item-action"
          to={`/${country.alpha3Code}`}
        >
          {country.alpha2Code} {country.name.common}
        </Link>
      </div>
    );
  });
}
