import StyledRegion from "./Region.styled";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaVirus, FaHeartbeat, FaSkullCrossbones } from "react-icons/fa";
import Heading from "../ui/Heading/Heading";

function Region() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    async function fetchDataCovidRegion() {
      const URL = "https://covid-fe-2023.vercel.app/api/global.json";
      const response = await axios(URL);
      const data = response.data.regions;

      setRegions(data);
    }
    fetchDataCovidRegion();
  }, []);

  const formatValue = (value) => {
    const num = Number(value);
    if (!isNaN(num)) {
      return num.toLocaleString("id-ID");
    }
    return value;
  };

  return (
    <StyledRegion>
      <section>
        <div>
          <Heading as='h2'>Situation by Regions</Heading>
          <Heading as='h3'>Bacaan Pilihan Covid</Heading>
        </div>
        <div className='card__container'>
          {regions.map((region) => (
            <div key={region.name} className='card'>
              <div className='card__body'>
                <h2 className='card__title'>{region.name}</h2>
                <div className='card__description confirmed'>
                  <span className='card__value'>
                    Confirmed : {formatValue(region.numbers.confirmed)}
                  </span>
                  <FaVirus className='icon confirmed' />
                </div>
                <div className='card__description recovered'>
                  <span className='card__value'>
                    Recovered : {formatValue(region.numbers.recovered)}
                  </span>
                  <FaHeartbeat className='icon recovered' />
                </div>
                <div className='card__description death'>
                  <span className='card__value'>
                    Death : {formatValue(region.numbers.death)}
                  </span>
                  <FaSkullCrossbones className='icon death' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </StyledRegion>
  );
}

export default Region;
