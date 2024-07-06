import StyledProvinsi from "./Provinsi.styled";
import { useContext } from "react";
import ProvinsiContext from "../context/ProvinsiContext";
import Heading from "../ui/Heading/Heading";

function Provinsi(props) {
  const { title = "Provinsi" } = props;
  const { provinces } = useContext(ProvinsiContext);

  // Function to format numbers
  function formatNumber(number) {
    return number.toLocaleString("id-ID");
  }

  return (
    <StyledProvinsi>
      <section>
        <div>
          <Heading as='h2'>{title}</Heading>
          <Heading as='h3'>Data Covid Berdasarkan Provinsi</Heading>
        </div>
        <div className='table__container'>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {provinces.map((provinsi, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{provinsi.name || provinsi.kota}</td>
                  <td>
                    {formatNumber(
                      provinsi.numbers?.confirmed || provinsi.kasus
                    )}
                  </td>
                  <td>
                    {formatNumber(
                      provinsi.numbers?.recovered || provinsi.sembuh
                    )}
                  </td>
                  <td>
                    {formatNumber(
                      provinsi.numbers?.treatment || provinsi.dirawat
                    )}
                  </td>
                  <td>
                    {formatNumber(
                      provinsi.numbers?.death || provinsi.meninggal
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </StyledProvinsi>
  );
}

export default Provinsi;
