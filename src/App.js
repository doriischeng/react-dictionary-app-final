import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary defaultKeyword="hello" />
        </header>
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://www.itsmedoris.com">
            Doris Cheng
          </a>{" "}
          and is{" "}
          <a href="https://github.com/doriischeng">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://chic-froyo-2b35bc.netlify.app">
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
