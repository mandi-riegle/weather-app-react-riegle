import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://amandariegle.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amanda Riegle
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mandi-riegle/weather-app-react-riegle"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-app-react-amandariegle.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}