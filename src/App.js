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
          by Ijeoma Onyenokporo, happily hosted on{" "}
          <a href="https://upbeat-mahavira-232e97.netlify.app/">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
