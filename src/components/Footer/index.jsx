import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerPage}>
      <a href="#" className={styles.instagramLink}>
        <FaInstagram /> Instagram
      </a>
      <a href="#" className={styles.facebookLink}>
        <FaFacebook /> Facebook
      </a>
    </footer>
  );
}

export default Footer;
