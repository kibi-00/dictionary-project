import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      <hr />
      {props.meanings.definitions.map((definitions, index) => (
        <div key={index}>
          <p>{definitions.definition}</p>
          <p className="Meanings-example">{definitions.example}</p>

          <br />
        </div>
      ))}
    </div>
  );
}
