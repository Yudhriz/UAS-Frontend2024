import Hero from "../../components/Hero/Hero";
import Provinsi from "../../components/Provinsi/Provinsi";
import { useContext, useEffect } from "react";
import ProvinsiContext from "../../components/context/ProvinsiContext";
import data from "../../utils/constants/provinces";
import FormCovid from "../../components/FormCovid/FormCovid";

function ProvinsiPage() {
  const { setProvinces } = useContext(ProvinsiContext);

  useEffect(() => {
    setProvinces(data.provinces);
  }, [setProvinces]);

  return (
    <>
      <Hero />
      <Provinsi />
      <FormCovid />
    </>
  );
}

export default ProvinsiPage;
