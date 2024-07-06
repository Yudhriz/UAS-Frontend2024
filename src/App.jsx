import HomePage from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import IndonesiaPage from "./pages/Indonesia/Indonesia";
import ProvinsiPage from "./pages/Provinsi/Provinsi";
import AboutPage from "./pages/About/About";
import { useState } from "react";
import ProvinsiContext from "./components/context/ProvinsiContext";
import data from "./utils/constants/provinces";

function App() {
  const [provinces, setProvinces] = useState(data.provinces);

  const contextValue = {
    provinces,
    setProvinces,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProvinsiContext.Provider value={contextValue}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/indonesia' element={<IndonesiaPage />} />
              <Route path='/provinsi' element={<ProvinsiPage />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </Layout>
        </ProvinsiContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
