import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Weather.css";
import CurrentDate from "./CurrentDate";

export default function Weather() {
  // changed 'ready' from a state variable to an object property
  let [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      countrySC: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      // src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Show me the weather in..."
                autoFocus="on"
                className="form-control"
              />
            </div>

            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>

        <h1>
          {weatherData.name}, {weatherData.countrySC}
        </h1>
        <ul>
          <li>
            <CurrentDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />{" "}
              <div className="float-left">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}Km/ph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
    let unit = "metric";
    let city = "Mapperley";
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(endpoint).then(displayWeather);

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

// export default function App() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState(false);
//   const [weather, setWeather] = useState({});

//   function getCity(event) {
//     event.preventDefault();
//     setCity(event.target.value);
//   }

//
//   let form = (
//     <div className="Weather">
//       <form onSubmit={getWeather}>
//         <input type="search" placeholder="Type any city" onChange={getCity} />
//         <input type="submit" value="Search" />
//       </form>
//     </div>
//   );
//
