import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-5">Dictionary</header>
        <Dictionary />
        <footer className="App-footer">
          Coded by Barbara Palleros,{" "}
          <a
            href="https://github.com/kibi-00/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
