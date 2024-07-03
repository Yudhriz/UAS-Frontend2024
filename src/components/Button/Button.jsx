import styles from "./Button.module.css";

function Button(props) {
  const { title } = props;

  return <button className={styles.button}>{title}</button>;
}

export default Button;
