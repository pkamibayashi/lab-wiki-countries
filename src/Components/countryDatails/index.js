import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import countries from '../../countries.json';

export function CountryDetails() {
  const params = useParams();

  const pais = countries.filter((country) => {
    return country.alpha3Code === params.alpha3Code;
  })[0];

  const paisArray = [pais];

  const divisadePais = paisArray.map((capital) => {
    return capital.borders;
  })[0];

  console.log(`EU sou uma abreviação ----> ${divisadePais}`);

  const resultado = countries.filter((pais) => {
    let paisCompleto = [];
    for (let i = 0; i < divisadePais.length; i++) {
      if (pais.alpha3Code === divisadePais[i]) {
        paisCompleto.push(pais.name.common);
      }
    }
    return paisCompleto;
  });

  console.log(`Eu sou o pais completo ---> ${resultado}`);

  return (
    <>
      <div className="col-7">
        <h1>{pais.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{pais.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {pais.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{/* AQUI os LI */}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
