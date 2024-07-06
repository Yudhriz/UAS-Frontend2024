import { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Indonesia from "../../components/Indonesia/Indonesia";
import Provinsi from "../../components/Provinsi/Provinsi";
import ProvinsiContext from "../../components/context/ProvinsiContext";
import axios from "axios";
import endpoint from "../../utils/constants/endpoint";

function IndonesiaPage() {
  const { setProvinces } = useContext(ProvinsiContext);

  useEffect(() => {
    async function fetchDataCovidProvinsi() {
      const URL = endpoint.indonesia;
      const response = await axios(URL);
      const data = response.data.regions;

      setProvinces(data);
    }
    fetchDataCovidProvinsi();
  }, []);

  return (
    <>
      <Hero />
      <Indonesia />
      <Provinsi title='Situation by Provinces' />
    </>
  );
}

export default IndonesiaPage;
