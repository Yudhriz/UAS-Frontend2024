import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import styles from "./FormCovid.module.css";
// import data from "../../utils/constants/provinces"; // Sudah tidak diperlukan
import ImageForm from "./assets/img/undraw_doctors_p6aq.svg";
import { useState } from "react";

function FormCovid(props) {
  const { provinces, setProvinces } = props;

  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isProvinsiEmpty, setIsProvinsiEmpty] = useState(false);
  const [isStatusEmpty, setIsStatusEmpty] = useState(false);
  const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);

  function handleProvinsi(e) {
    setProvinsi(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const provinsiIsEmpty = provinsi === "";
    const statusIsEmpty = status === "";
    const jumlahIsEmpty = jumlah === "";

    setIsProvinsiEmpty(provinsiIsEmpty);
    setIsStatusEmpty(statusIsEmpty);
    setIsJumlahEmpty(jumlahIsEmpty);

    if (!provinsiIsEmpty && !statusIsEmpty && !jumlahIsEmpty) {
      const province = provinces.map((prov) => {
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
      setProvinces(province);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src={ImageForm}
            alt='placeholder'
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit} className={styles.form__container}>
            <label className={styles.form__label} htmlFor='provinsi'>
              Provinsi
            </label>
            <select
              className={styles.form__input}
              name='provinsi'
              id='provinsi'
              value={provinsi}
              onChange={handleProvinsi}
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
            <label className={styles.form__label} htmlFor='status'>
              Status
            </label>
            <select
              value={status}
              onChange={handleStatus}
              className={styles.form__input}
              name='status'
              id='status'
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
            <label className={styles.form__label} htmlFor='jumlah'>
              Jumlah
            </label>
            <input
              className={styles.form__input}
              value={jumlah}
              onChange={handleJumlah}
              type='number'
            />
            {isJumlahEmpty && <Alert>Jumlah Wajib Diisi</Alert>}
            <Button title='Submit' />
          </form>
        </div>
      </section>
    </div>
  );
}
export default FormCovid;
