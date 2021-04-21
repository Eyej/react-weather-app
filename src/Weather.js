import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp_max
      )}°C`
    );
  }

  function handleClick() {
    let apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={30000}
      />
      <button onClick={handleClick}>Check Weather</button>
    </div>
  );
}
