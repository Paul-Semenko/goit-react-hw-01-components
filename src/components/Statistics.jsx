import PropTypes from "prop-types";
import styles from "./statistics.module.css";
export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title && "Upload stats"}</h2>

      <ul className={styles.stats}>
        {stats.map((el) => {
          return (
            <li className={styles.item} key={el.id}>
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.number,
};
