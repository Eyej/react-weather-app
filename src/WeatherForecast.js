import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function showWeatherForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay data={forecastData[0]} />
      </div>
    );
  } else {
    const apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
    let unit = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;

    axios.get(endpoint).then(showWeatherForecast);
    return <p>Loading...</p>;
  }
}
