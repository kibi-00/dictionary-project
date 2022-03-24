import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="App-footer">
          Coded by Barbara Palleros, open source on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
