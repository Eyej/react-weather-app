import React from "react";

export default function WeatherForecastDay(props) {
  //   console.log(props.data);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function pix() {
    let img = props.data.weather[0].icon;
    return `http://openweathermap.org/img/wn/${img}.png`;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img src={pix()} alt={props.data.weather[0].description} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-maxTemperature">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-minTemperature">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
