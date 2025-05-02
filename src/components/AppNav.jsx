import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/WorldWise/app/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/WorldWise/app/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
