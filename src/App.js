import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>
        Hello 👋🏾 will you check out my app? Enter any city to see its current
        weather.{" "}
      </h2>
      <Weather />
      <footer>
        <a href="https://github.com/Eyej/react-weather-app">
          Open-source code{" "}
        </a>{" "}
        by Ijeoma Onyenokporo
      </footer>
    </div>
  );
}

export default App;
