import styles from "./Provinsi.module.css";
// import data from "../../utils/constants/provinces";
// import { useState } from "react"; // Sudah tidak diperlukan

function Provinsi(props) {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section className={styles.provinsi}>
        <div>
          <h2 className={styles.provinsi__title}>Provinsi</h2>
          <h3 className={styles.provinsi__subtitle}>
            Data Covid Berdasarkan Provinsi
          </h3>
        </div>
        <div className={styles.table__container}>
          <table className={styles.table}>
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
                  <td>{provinsi.kota}</td>
                  <td>{provinsi.kasus}</td>
                  <td>{provinsi.sembuh}</td>
                  <td>{provinsi.dirawat}</td>
                  <td>{provinsi.meninggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Provinsi;
