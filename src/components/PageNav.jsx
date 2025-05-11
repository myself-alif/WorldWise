import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/WorldWise/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/WorldWise/product">Product</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to="/WorldWise/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
