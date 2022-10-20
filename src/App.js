import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary />
      </header>
      <footer className="text-center mt-5">
        Code by Doris Cheng
      </footer>
    </div>
  );
}
