import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        {" "}
        <img src={country.emoji} alt="flag" />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
