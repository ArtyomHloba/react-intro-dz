import { NavLink } from "react-router-dom";
import styles from "./HeaderPage.module.css";

function HeaderPage() {
  const linkStyle = ({ isActive }) => {
    return isActive ? styles.navigationIsActive : styles.navigation;
  };
  return (
    <nav className={styles.navContainer}>
      <p>
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
      </p>
      <p>
        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>
      </p>
      <p>
        <NavLink to="/sign-up-form" className={linkStyle}>
          Sign Up
        </NavLink>
      </p>
      <p>
        <NavLink to="/weather" className={linkStyle}>
          Weather
        </NavLink>
      </p>
    </nav>
  );
}

export default HeaderPage;
