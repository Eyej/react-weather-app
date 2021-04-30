import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Norwich" />
        <footer>
          <a href="https://github.com/Eyej/react-weather-app">
            Open-source code{" "}
          </a>{" "}
          by Ijeoma Onyenokporo
        </footer>
      </div>
    </div>
  );
}

export default App;
