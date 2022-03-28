import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.info) {
    return (
      <div className="Results">
        <section>
          <h2 className="text-capitalize mt-3">{props.info.word}</h2>
          <Phonetics phonetics={props.info.phonetics} />
        </section>
        {props.info.meanings.map((meanings, index) => (
          <div key={index}>
            <Meanings meanings={meanings} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
