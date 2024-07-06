import { useState, useEffect } from "react";
import Card from "../Card/Card";
import StyledGlobal from "./Global.styled";
import axios from "axios";
import Heading from "../ui/Heading/Heading";

function Global() {
  const [global, setGlobal] = useState([]);

  useEffect(() => {
    async function fetchDataCovidGlobal() {
      const URL = "https://covid-fe-2023.vercel.app/api/global.json";
      const response = await axios(URL);
      const data = response.data.global;

      setGlobal(data);
    }
    fetchDataCovidGlobal();
  }, []);

  return (
    <StyledGlobal>
      <section>
        <div>
          <Heading as='h2'>Global Situation</Heading>
          <Heading as='h3'>Data Covid Berdasarkan Global</Heading>
        </div>
        <div className='card__container'>
          {global.map((globals) => (
            <Card
              key={globals.status}
              title={globals.status}
              value={globals.total}
            />
          ))}
        </div>
      </section>
    </StyledGlobal>
  );
}

export default Global;
