import { useState, useEffect } from "react";
import Card from "../Card/Card";
import StyledIndonesia from "./Indonesia.styled";
import axios from "axios";
import Heading from "../ui/Heading/Heading";

function Indonesia() {
  const [indonesia, setIndonesia] = useState([]);

  useEffect(() => {
    async function fetchDataCovidIndonesia() {
      const URL = "https://covid-fe-2023.vercel.app/api/indonesia.json";
      const response = await axios(URL);
      const data = response.data.indonesia;

      setIndonesia(data);
    }
    fetchDataCovidIndonesia();
  }, []);

  return (
    <StyledIndonesia>
      <section>
        <div>
          <Heading as='h2'>Indonesia Situation</Heading>
          <Heading as='h3'>Data Covid Berdasarkan Indonesia</Heading>
        </div>
        <div className='card__container'>
          {indonesia.map((indonesian) => (
            <Card
              key={indonesian.status}
              title={indonesian.status}
              value={indonesian.total}
            />
          ))}
        </div>
      </section>
    </StyledIndonesia>
  );
}

export default Indonesia;
