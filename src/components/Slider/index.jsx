import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

function Slider({ slides }) {
  const [currentSlideIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const incSlideIndex = () => {
    setCurrentIndex(
      (currentSlideIndex) => (currentSlideIndex + 1) % slides.length
    );
  };

  const decSlideIndex = () => {
    setCurrentIndex(
      (currentSlideIndex) =>
        (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        incSlideIndex();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [currentSlideIndex, isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <article className={styles.sliderContainer}>
      <button className={styles.prevBnt} onClick={decSlideIndex}>
        {"<"}
      </button>
      <div>
        <img
          className={styles.imageSlidePhoto}
          src={slides[currentSlideIndex].src}
          alt={slides[currentSlideIndex].title}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            {slides[currentSlideIndex].description}
          </p>
        </div>
      </div>
      <button className={styles.nextBtn} onClick={incSlideIndex}>
        {">"}
      </button>
      <button className={styles.isPlayingBtn} onClick={togglePlay}>
        {isPlaying ? "Stop" : "Play"}
      </button>
    </article>
  );
}

export default Slider;
