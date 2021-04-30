import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function getFahrenheitTemperature(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function getCelsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">°C |</span>
        <span className="unit">
          <a href="/" onClick={getFahrenheitTemperature}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{fahrenheit}</span>
        <span className="unit">
          <a href="/" onClick={getCelsiusTemperature}>
            °C
          </a>{" "}
          |{" "}
        </span>
        <span className="unit">°F</span>
      </div>
    );
  }
}
