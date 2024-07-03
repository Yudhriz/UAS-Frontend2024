import Menu from "../Menu/Menu";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h2 className={styles.footer__title}>Covid ID</h2>
          <p className={styles.footer__author}>
            Developed by Yudha Rizky Alvingky
          </p>
        </div>
        <div>
          <Menu />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
