import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      <Synonyms synonyms={props.meanings.synonyms} />

      <hr />
      {props.meanings.definitions.map((definitions, index) => (
        <div key={index}>
          <p>
            <strong>Definition: </strong>
            {definitions.definition}
          </p>
          <p className="Meanings-example">{definitions.example}</p>

          <br />
        </div>
      ))}
    </div>
  );
}
