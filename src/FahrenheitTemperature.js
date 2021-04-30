import react from "react";

export default function FahrenheitTemperature(props) {
  let temperature = Math.round((props.celsiusTemp * 9) / 5 + 32);
  return temperature;
}
