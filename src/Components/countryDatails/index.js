import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import countries from '../../countries.json';

export function CountryDetails() {
  const params = useParams();
  // console.log(params.alpha3Code);

  const pais = countries.filter((country) => {
    return country.alpha3Code === params.alpha3Code;
  })[0];

  const paisArray = [pais];

  const divisadePais = paisArray.map((capital) => {
    const bordas = capital.borders;
    for (let i = 0; i < bordas.length; i++) {
      const alpha3CodeToName = bordas[i];
    }
    return alpha3CodeToName;
  });

  console.log(divisadePais);

  // const divisa = countries.filter((country) => {
  //   country.alpha3Code === alpha3CodeToName;
  // });

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
