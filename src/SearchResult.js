import React from "react";
import CurrentDate from "./CurrentDate";

export default function SearchResult(props) {
  return (
    <div>
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
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}Km/ph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
