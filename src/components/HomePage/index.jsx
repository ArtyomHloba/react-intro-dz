import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.MainContainer}>
      <h1 className={styles.mainTitle}>Lorem, ipsum.</h1>
      <p className={styles.mainContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        delectus adipisci! Atque sed debitis repellat est velit quis? Quibusdam,
        minima!
      </p>
    </div>
  );
}

export default HomePage;
