import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState({});

  function showWeatherForecast(response) {
    console.log(response.data);
    // setForecastData({
    //   temperature: Math.round(response.data.current.temp),
    // });
  }

  const apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
  let unit = "metric";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;

  axios.get(endpoint).then(showWeatherForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="daily weather-forecast"
          />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-maxTemperature">
              {forecastData.temperature}°
            </span>
            <span className="WeatherForecast-minTemperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
