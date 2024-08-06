import React, { Component } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import styles from "./WeatherLoader.module.css";

const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current=temperature_2m,wind_speed_10m&forecast_days=1`;

export class WeatherLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      temperatureUnit: "C",
      windSpeedUnit: "ms",
    };
  }

  fetchWeather = () => {
    const { temperatureUnit, windSpeedUnit } = this.state;
    fetch(
      `${WEATHER_API}&temperature_unit=${
        temperatureUnit === "F" ? "fahrenheit" : "celsius"
      }&wind_speed_unit=${windSpeedUnit === "kmh" ? "kmh" : "ms"}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ weather: data }))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.temperatureUnit !== this.state.temperatureUnit ||
      prevState.windSpeedUnit !== this.state.windSpeedUnit
    ) {
      this.fetchWeather();
    }
  }

  setTemperatureUnit = (unit) => {
    this.setState({ temperatureUnit: unit });
  };

  setWindSpeedUnit = (unit) => {
    this.setState({ windSpeedUnit: unit });
  };

  render() {
    const { weather } = this.state;

    return (
      <div className={styles.container}>
        <div>
          <button onClick={() => this.setTemperatureUnit("C")}>C</button>
          <button onClick={() => this.setTemperatureUnit("F")}>F</button>
          <button onClick={() => this.setWindSpeedUnit("ms")}>m/s</button>
          <button onClick={() => this.setWindSpeedUnit("kmh")}>km/h</button>
        </div>
        <p>
          <FaTemperatureHigh />
          {weather?.current?.temperature_2m}{" "}
          {weather?.current_units?.temperature_2m}
        </p>
        <p>
          <LuWind />
          {weather?.current?.wind_speed_10m}{" "}
          {weather?.current_units?.wind_speed_10m}
        </p>
      </div>
    );
  }
}

export default WeatherLoader;
