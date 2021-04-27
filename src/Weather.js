import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type any city"
              className="form-control"
            />
          </div>

          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success" />
          </div>
        </div>
      </form>

      <h1>London</h1>
      <ul>
        <li>Wednesday 09:00am</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="/" alt="Weather-logo" />
          <span>12°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 49%</li>
            <li>Wind: 35Km/ph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// export default function App() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState(false);
//   const [weather, setWeather] = useState({});

//   function getCity(event) {
//     event.preventDefault();
//     setCity(event.target.value);
//   }

//   function displayWeather(response) {
//     setData(true);
//     setWeather({
//       name: response.data.name,
//       temperature: Math.round(response.data.main.temp_max),
//       description: response.data.weather[0].description,
//       humidity: response.data.main.humidity,
//       wind: response.data.wind.speed,
//       countrySC: response.data.sys.country,
//       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
//     });
//     console.log(response.data);
//   }
//   // Axios call onsubmit
//   function getWeather(event) {
//     event.preventDefault();
//     let apiKey = "386b70f96b3e09e40aefe57eb2e44f5e";
//     let unit = "metric";
//     let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

//     axios.get(endpoint).then(displayWeather);
//   }
//   let form = (
//     <div className="Weather">
//       <form onSubmit={getWeather}>
//         <input type="search" placeholder="Type any city" onChange={getCity} />
//         <input type="submit" value="Search" />
//       </form>
//     </div>
//   );
//   // console.log(data);
//   if (data) {
//     return (
//       <div className="Weather">
//         {/* <ul>
//           {cities.map(function (el, index) {
//             return <li key={index}>{el}</li>;
//           })}
//         </ul>{" "} */}
//         {form}
//         <h3>
//           {weather.name}, {weather.countrySC}
//         </h3>
//         <p>{weather.description}</p>
//         <p>
//           <img src={weather.icon} alt="Weather icon" />
//           <span>{weather.temperature}°C</span>
//         </p>
//         <ul>
//           <li>Humidity: {weather.humidity}%</li>
//           <li>Wind: {weather.wind}Km/ph</li>
//         </ul>
//       </div>
//     );
//   } else {
//     return (
//       <div className="Weather">
//         {form}
//         <Loader
//           type="ThreeDots"
//           color="#00BFFF"
//           height={80}
//           width={80}
//           timeout={30000}
//         />
//       </div>
//     );
//   }
// }
