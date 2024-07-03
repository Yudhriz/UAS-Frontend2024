import Menu from "../Menu/Menu";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
