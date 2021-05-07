// first import needed components, use if/else to load API acc to search query
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showWeatherForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function loadWeather() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const unit = "metric";
    const apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
    let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;

    axios.get(endpoint).then(showWeatherForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div key={index} className="col">
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    loadWeather();

    return <p>Loading...</p>;
  }
}
