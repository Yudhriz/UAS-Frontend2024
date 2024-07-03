import styles from "./Menu.module.css";

function Menu() {
  return (
    <div>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>Global</li>
        <li className={styles.menu__item}>Indonesia</li>
        <li className={styles.menu__item}>Provinsi</li>
        <li className={styles.menu__item}>About</li>
      </ul>
    </div>
  );
}

export default Menu;
