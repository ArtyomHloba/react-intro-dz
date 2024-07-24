import imageLogo from "./car-with-logo-car.jpg";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.headerPage}>
        <img className={styles.logoImage} src={imageLogo} alt="car-logo" />
        <h1 className={styles.headTitle}>Cars Shop</h1>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signUpBtn}>Sign Up</button>
      </header>
    </>
  );
}

export default Header;
