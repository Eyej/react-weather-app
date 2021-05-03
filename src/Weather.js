import React, { useState } from "react";
import SearchResult from "./SearchResult";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Weather.css";

export default function Weather(props) {
  // changed 'ready' from a state variable to an object property
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      countrySC: response.data.sys.country,
      feel: Math.round(response.data.main.feels_like),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
    let unit = "metric";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(endpoint).then(displayWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={getWeather}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Show me the weather in..."
                autoFocus="on"
                className="form-control"
                onChange={getCity}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-success wt-100"
              />
            </div>
          </div>
        </form>
        <SearchResult data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <p>Loading...</p>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={30000}
        />
      </div>
    );
  }
}
