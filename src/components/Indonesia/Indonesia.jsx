import Card from "../Card/Card";
import styles from "./Indonesia.module.css";
import data from "../../utils/constants/indonesia";

function Indonesia() {
  const { indonesia } = data;

  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <div>
          <h2 className={styles.indonesia__title}>Indonesia</h2>
          <h3 className={styles.indonesia__subtitle}>
            Data Covid Berdasarkan Indonesia
          </h3>
        </div>
        <div className={styles.card__container}>
          {indonesia.map((indonesian) => {
            return <Card key={indonesian.status} title={indonesian.status} value={indonesian.total} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Indonesia;
