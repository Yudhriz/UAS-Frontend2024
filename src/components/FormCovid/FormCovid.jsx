import Alert from "../Alert/Alert";
import Button from "../ui/Button/Button";
import ImageForm from "./assets/img/undraw_doctors_p6aq.svg";
import { useState, useContext } from "react";
import StyledForm from "./FormCovid.styled";
import ProvinsiContext from "../context/ProvinsiContext";
import Heading from "../ui/Heading/Heading";

function FormCovid() {
  const { provinces, setProvinces } = useContext(ProvinsiContext);

  // Form data state
  const [formData, setFormData] = useState({
    provinsi: "",
    status: "",
    jumlah: "",
  });

  // Form error state
  const [formError, setFormError] = useState({
    provinsi: false,
    status: false,
    jumlah: false,
  });

  // Handle change event
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormError({
      ...formError,
      [name]: false,
    });
  }

  // Destructuring formData and formError
  const { provinsi, status, jumlah } = formData;
  const {
    provinsi: isProvinsiEmpty,
    status: isStatusEmpty,
    jumlah: isJumlahEmpty,
  } = formError;

  // Form validation
  function validateForm() {
    // Membuat object errors yang berisi key dan value
    const errors = {
      provinsi: provinsi === "",
      status: status === "",
      jumlah: jumlah === "" || isNaN(jumlah),
    };

    // Mengubah state formError dengan errors
    setFormError(errors);

    // mengembalikan nilai true jika tidak ada error
    return !Object.values(errors).includes(true);
  }

  // Handle submit event
  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const updatedProvinces = provinces.map((prov) => {
        if (prov.kota === provinsi) {
          return {
            ...prov,
            kasus:
              status === "kasus"
                ? parseInt(prov.kasus) + parseInt(jumlah)
                : prov.kasus,
            sembuh:
              status === "sembuh"
                ? parseInt(prov.sembuh) + parseInt(jumlah)
                : prov.sembuh,
            dirawat:
              status === "dirawat"
                ? parseInt(prov.dirawat) + parseInt(jumlah)
                : prov.dirawat,
            meninggal:
              status === "meninggal"
                ? parseInt(prov.meninggal) + parseInt(jumlah)
                : prov.meninggal,
          };
        }
        return prov;
      });

      setProvinces(updatedProvinces);
      resetForm();
    }
  }

  // Reset form
  function resetForm() {
    // Mengubah state formData dan formError menjadi default
    setFormData({
      provinsi: "",
      status: "",
      jumlah: "",
    });
    setFormError({
      provinsi: false,
      status: false,
      jumlah: false,
    });
  }

  return (
    <StyledForm>
      <section>
        <div className='form__left'>
          <img src={ImageForm} alt='placeholder' />
        </div>
        <div className='form__right'>
          <Heading as='h2'>Form Covid</Heading>
          <form onSubmit={handleSubmit}>
            <label htmlFor='provinsi'>Provinsi</label>
            <select
              className='form__input'
              name='provinsi'
              id='provinsi'
              value={provinsi}
              onChange={handleChange}
            >
              <option value='' hidden>
                Pilih Provinsi
              </option>
              {provinces.map((provinsi, index) => (
                <option key={index} value={provinsi.kota}>
                  {provinsi.kota}
                </option>
              ))}
            </select>
            {isProvinsiEmpty && <Alert>Provinsi Wajib Diisi</Alert>}
            <label htmlFor='status'>Status</label>
            <select
              className='form__input'
              name='status'
              id='status'
              value={status}
              onChange={handleChange}
            >
              <option value='' hidden>
                Pilih Status
              </option>
              <option value='kasus'>Positif</option>
              <option value='sembuh'>Sembuh</option>
              <option value='dirawat'>Dirawat</option>
              <option value='meninggal'>Meninggal</option>
            </select>
            {isStatusEmpty && <Alert>Status Wajib Diisi</Alert>}
            <label htmlFor='jumlah'>Jumlah</label>
            <input
              className='form__input'
              type='number'
              name='jumlah'
              id='jumlah'
              value={jumlah}
              onChange={handleChange}
            />
            {isJumlahEmpty && <Alert>Jumlah Wajib Diisi</Alert>}
            <Button type='submit'>Submit</Button>
          </form>
        </div>
      </section>
    </StyledForm>
  );
}

export default FormCovid;
