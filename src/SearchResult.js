import React from "react";
import CurrentDate from "./CurrentDate";
import FahrenheitTemperature from "./FahrenheitTemperature";
import "./SearchResult.css";

export default function SearchResult(props) {
  function getFahrenheitTemperature() {
    let temperature = Math.round((props.celsiusTemp * 9) / 5 + 32);
    return temperature;
  }

  return (
    <div className="SearchResult">
      <h1>
        {props.data.name}, {props.data.countrySC}
      </h1>
      <ul>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature">{props.data.temperature}</span>
              <span className="unit">
                °
                <a href="/" className="temp-link">
                  C
                </a>{" "}
                |{" "}
              </span>
              <span className="unit">
                °
                <a
                  href="/"
                  className="temp-link"
                  onClick={getFahrenheitTemperature}
                >
                  F
                  {/* <FahrenheitTemperature celsiusTemp={props.data.temperature} /> */}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {props.data.feel}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}Km/ph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
