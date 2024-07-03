import styles from "./Card.module.css";

function Card(props) {
  const { title, value } = props;

  const formatValue = (value) => {
    // Check if the value is a number or can be converted to a number
    const num = Number(value);
    if (!isNaN(num)) {
      return num.toLocaleString("id-ID"); // 'id-ID' uses dot (.) as thousands separator
    }
    return value; // Return the original value if it's not a number
  };

  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <div className={styles.card__body}>
          <h2 className={styles.card__title}>{title}</h2>
          <p className={styles.card__value}>{formatValue(value)}</p>
        </div>
      </section>
    </div>
  );
}

export default Card;
