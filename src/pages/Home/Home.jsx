import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Indonesia from "../../components/Indonesia/Indonesia";
import Provinsi from "../../components/Provinsi/Provinsi";
import FormCovid from "../../components/FormCovid/FormCovid";
import data from "../../utils/constants/provinces";

function HomePage() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <div>
      <Hero />
      <Indonesia />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <FormCovid provinces={provinces} setProvinces={setProvinces} />
    </div>
  );
}

export default HomePage;
