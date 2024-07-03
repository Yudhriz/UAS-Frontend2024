import styles from "../FormCovid/FormCovid.module.css";

function Alert(props) {
  return (
    <div>
      <p className={styles.form__error}>{props.children}</p>
    </div>
  );
}

export default Alert;
