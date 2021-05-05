import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  return (
    <div className="WeatherForecastDay">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="daily weather-forecast"
          />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-maxTemperature">temp°</span>
            <span className="WeatherForecast-minTemperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
