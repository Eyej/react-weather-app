import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Weather.css";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(false);
  const [weather, setWeather] = useState({});

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setData(true);
    setWeather({
      temperature: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }
  // Axios call onsubmit
  function getWeather(event) {
    event.preventDefault();
    let apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
    let unit = "metric";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

    axios.get(endpoint).then(displayWeather);
  }
  let cities = ["Vancouver", "Paris", "Moscow", "Lagos"];
  let form = (
    <div className="Weather">
      <h1>Weather App</h1>
      <form onSubmit={getWeather}>
        <input type="search" placeholder="Type any city" onChange={getCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  // console.log(data);
  if (data) {
    return (
      <div className="Weather">
        <ul>
          {cities.map(function (el, index) {
            return <li key={index}>{el}</li>;
          })}
        </ul>{" "}
        {form}
        <ul>
          <li>City: {city}</li>
          <li> Temperature: {weather.temperature}°C</li>
          <li>Description; {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}Km/ph</li>
          <li>
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        {form}
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
