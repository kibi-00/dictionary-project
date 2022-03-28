import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h5>{props.meanings.partOfSpeech}</h5>
        <Synonyms synonyms={props.meanings.synonyms} />

        <hr />
        {props.meanings.definitions.map((definitions, index) => (
          <div key={index}>
            <p>
              <span className="definition">Definition: </span>
              {definitions.definition}
            </p>
            <p className="Meanings-example">{definitions.example}</p>

            <br />
          </div>
        ))}
      </section>
    </div>
  );
}
