import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/WorldWise">
      {/* <img src="/logo.png" alt="WorldWise logo" className={styles.logo} /> */}
      <img
        className={styles.logo}
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
