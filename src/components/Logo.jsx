import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import AppLogo from "/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={AppLogo} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
