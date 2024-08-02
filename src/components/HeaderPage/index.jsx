import { NavLink } from "react-router-dom";
import styles from "./HeaderPage.module.css";
import classNames from "classnames";

function HeaderPage() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? { boxShadow: "0 0 5px blue", borderRadius: "10px", padding: "3px" }
      : {};

  return (
    <nav className={styles.navContainer}>
      <p>
        <NavLink to="/" style={linkStyle} className={styles.navigation}>
          Home
        </NavLink>
      </p>
      <p>
        <NavLink to="/about" style={linkStyle} className={styles.navigation}>
          About
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/sign-up-form"
          style={linkStyle}
          className={styles.navigation}
        >
          Sign Up
        </NavLink>
      </p>
      <p>
        <NavLink to="/weather" style={linkStyle} className={styles.navigation}>
          Weather
        </NavLink>
      </p>
    </nav>
  );
}

export default HeaderPage;
