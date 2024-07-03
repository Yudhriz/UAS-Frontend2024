import styles from "./Hero.module.css";
import HeroImage from "./assets/undraw_medical_care_movn.svg";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__subtitle}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            inventore non maxime sint eligendi totam esse aut officia quod
            eveniet nemo minus sapiente assumenda possimus vitae, nulla est!
            Quo, nihil.
          </p>
          <Button title='Vaccine' />
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={HeroImage}
            alt='placeholder'
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
