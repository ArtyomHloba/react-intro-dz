import { useEffect, useState } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import styles from "./Weather.module.css";

const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current=temperature_2m,wind_speed_10m&forecast_days=1`;

function Weather() {
  const [weather, setWeather] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [windSpeedUnit, setWindSpeedUnit] = useState("ms");

  useEffect(() => {
    fetch(
      `${WEATHER_API}&temperature_unit=${
        temperatureUnit === "F" ? "fahrenheit" : "celsius"
      }&wind_speed_unit=${windSpeedUnit === "kmh" ? "kmh" : "ms"}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [temperatureUnit, windSpeedUnit]);

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => setTemperatureUnit("C")}>
          C
        </button>
        <button className={styles.btn} onClick={() => setTemperatureUnit("F")}>
          F
        </button>
        <button className={styles.btn} onClick={() => setWindSpeedUnit("ms")}>
          m/s
        </button>
        <button className={styles.btn} onClick={() => setWindSpeedUnit("kmh")}>
          km/h
        </button>
      </div>
      <h2>Current Weather</h2>
      <p>
        <FaTemperatureHigh className={styles.temperatureIcon} />
        {weather?.current?.temperature_2m}{" "}
        {weather?.current_units?.temperature_2m}
      </p>
      <p>
        <LuWind className={styles.windIcon} />
        {weather?.current?.wind_speed_10m}{" "}
        {weather?.current_units?.wind_speed_10m}
      </p>
    </div>
  );
}

export default Weather;
