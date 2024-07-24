import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Slider.module.css";

function Slider({ slides }) {
  const [currentSlideIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const incSlideIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const decSlideIndex = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        incSlideIndex();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentSlideIndex]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const transitions = useSpring({
    transform: `translateX(-${currentSlideIndex * 100}%)`,
    config: { tension: 300, friction: 30 },
  });

  return (
    <article className={styles.sliderContainer}>
      <button className={styles.prevBnt} onClick={decSlideIndex}>
        {"<"}
      </button>
      <div className={styles.slidesWrapper}>
        {slides.map((slide, index) => (
          <animated.div
            key={index}
            className={styles.slide}
            style={transitions}
          >
            <img
              className={styles.imageSlidePhoto}
              src={slide.src}
              alt={slide.title}
            />
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </animated.div>
        ))}
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
